<template>
  <div v-if="phrase?.blocks?.length" class="col flag" :class="{ card: !flat }">
    <Flag :lect="lect" class="blur" />
    <div class="row small wrap" style="width: 100%">
      <h2 v-if="lect" class="flex">{{ lect }}</h2>
      <Context
        :translation="contextTranslation"
        :blocks="vblocks"
        :reverse="!!lect"
      />
      <div v-if="lect" class="row">
        <toggle v-model="playing" icon="play_arrow" />
        <btn icon="assignment" @click="copy" />
        <toggle v-model="glossed" icon="segment" />
      </div>
    </div>
    <div class="row wrap flex">
      <div
        v-for="(b, i) in phrase.blocks"
        v-show="vblocks[i]?.show"
        :key="i"
        class="blocks row seeker"
      >
        <Seeker :check="playing" :seek="player.queue[i]?.seek" />
        <Block :block="b" :glossed="glossed" @update="vblocks[i] = $event" />
      </div>
    </div>
    <Notes class="text-caption" :notes="phrase.notes" />
  </div>
</template>

<script lang="ts">
import Context from "./Context/index.vue";
import Block from "./Block/index.vue";

import { computed, defineComponent, PropType, reactive, ref } from "vue";

import { Phrase, BlockSnapshot } from "./types";
import player from "@/audio-player";

export default defineComponent({
  components: { Context, Block },
  props: {
    lect: { type: String, default: "" },
    path: { type: String, default: "" },
    phrase: { type: Object as PropType<Phrase>, default: undefined },
    flat: Boolean,
  },
  setup(props) {
    const glossed = ref(false);
    const vblocks = reactive([] as BlockSnapshot[]);
    const contextTranslation = computed(() =>
      props.lect && !glossed.value ? props.phrase.context : null
    );

    const text = computed(() =>
      vblocks
        .filter(({ state }) => state)
        .map(({ text }) => (":,.?!".includes(text) ? "" : " ") + text)
        .join("")
        .trim()
    );
    function copy() {
      navigator.clipboard.writeText(text.value);
    }

    const playing = computed({
      get: () => player.key === props.lect,
      set: (p) => {
        if (p)
          player.play(
            props.lect,
            vblocks
              .map(({ text }) => text.toLowerCase())
              .map((p) => (p === null ? "" : props.path + (p ?? "")))
          );
        else player.stop();
      },
    });

    return { glossed, vblocks, copy, player, playing, contextTranslation };
  },
});
</script>

<style lang="scss" scoped>
.card {
  align-items: flex-start;
}
</style>
