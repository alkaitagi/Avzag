<template>
  <template v-if="dictionaries">
    <div class="section row">
      <toggle v-model="scholar" icon="school" />
      <toggle v-model="list" icon="format_list_bulleted" />
      <select v-if="list && !lect" v-model="queries['']">
        <option
          v-for="l in lists"
          :key="l.name"
          :value="l.query"
          v-text="l.name"
        />
      </select>
      <template v-else>
        <input
          v-model="query"
          type="text"
          :placeholder="lect ? `Enter ${lect} form...` : 'Enter meaning...'"
        />
        <btn icon="clear" @click="query = ''" />
      </template>
    </div>
    <div class="scroll-area col">
      <div class="row-1 lects">
        <btn
          v-if="lects.length > 1"
          class="lect card-0 seeker"
          :is-on="!lect"
          :icon="!lect ? 'search' : ''"
          :text="lists ? 'Lists' : 'Meanings'"
          @click="lect = ''"
        >
          <Seeker :seek="progress['']" />
        </btn>
        <p v-else class="lect">Meanings</p>

        <btn
          v-if="lects.length === 1"
          class="row lect flag card-0"
          icon="search"
          is-on
        >
          <Seeker :seek="progress['']" />
          <Flag :lect="lects[0]" class="blur" />
          <h2 class="flex" v-text="lects[0]" />
        </btn>
        <template v-else>
          <btn
            v-for="l in lects"
            :key="l"
            :icon="lect === l ? 'search' : ''"
            class="row lect flag card-0"
            :is-on="lect === l"
            @click="lect = l"
          >
            <Seeker :seek="progress[l]" />
            <Flag :lect="l" class="blur" />
            <h2 class="flex" v-text="l" />
          </btn>
        </template>
      </div>
      <MeaningRow
        v-for="(es, m) in results"
        :key="m"
        :lects="lects"
        :scholar="scholar"
        :meaning="m"
        :entries="es"
      />
    </div>
  </template>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  provide,
  onUnmounted,
} from "vue";
import { dictionaryMeta, dictionaries } from "./main";
import MeaningRow from "./MeaningRow.vue";
import { Entry } from "./types";
import Searcher from "./search";

export default defineComponent({
  components: { MeaningRow },
  setup() {
    const searcher = new Searcher(dictionaries);

    const queries = reactive({} as Record<string, string>);
    const query = computed({
      get: () => queries[lect.value] ?? "",
      set: (q) => (queries[lect.value] = q),
    });

    const lect = ref("");
    const lects = computed(() => Object.keys(dictionaries.value));

    const scholar = ref(false);
    const list = ref(false);
    const lists = computed(() => dictionaryMeta.value.lists);
    watch(list, () => (queries[""] = list.value ? lists.value[0].query : ""));

    const expandedEntries = reactive(new Map<Entry, number>());
    const setExpansion = (en: Entry, ex: boolean) => {
      expandedEntries.set(en, (expandedEntries.get(en) ?? 0) + (ex ? 1 : -1));
      if ((expandedEntries.get(en) ?? 0) <= 0) expandedEntries.delete(en);
    };
    provide("expandedEntries", expandedEntries);
    provide("setExpansion", setExpansion);
    onUnmounted(() => expandedEntries.clear());

    watch([query, lect], () => searcher.search(lect.value, query.value));

    return {
      scholar,
      queries,
      query,
      lect,
      lects,
      list,
      lists,
      results: searcher.results,
      executing: searcher.executing,
      progress: searcher.progress,
      dictionaries,
    };
  },
});
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: map-get($margins, "half");
  margin-top: -1 * map-get($margins, "normal");
}
.lect {
  width: 192px;
  min-width: 192px;
  &:first-child {
    width: 128px;
    min-width: 128px;
  }
}
.flag h2 {
  line-height: map-get($button-height, "small");
}
.scroll-area {
  padding-left: map-get($margins, "normal");
  padding-right: map-get($margins, "normal");
  padding-top: map-get($margins, "half");
  margin-left: -1 * map-get($margins, "normal");
  overflow: auto;
  height: calc(100vh - 84px);
  width: 100vw;
}
</style>

<style lang="scss">
html,
body {
  height: 100vh;
}
</style>
