<template>
  <div v-if="file && corpus" class="section col-2 small grid">
    <div class="col-2">
      <div class="col wrap card">
        <div class="row-1">
          <p class="icon">topic</p>
          <h2 class="col-1 flex">
            <select v-model="section">
              <option v-for="s in corpus" :key="s.name" :value="s">
                {{ s.name }}
              </option>
            </select>
          </h2>
        </div>
        <div v-if="section" class="row-1">
          <p class="icon">short_text</p>
          <select v-model="phrase">
            <option v-for="p in section.phrases" :key="p.id" :value="p">
              {{ p.name }}
            </option>
          </select>
        </div>
        <p class="text-faded text-caption">
          The source corpus is loading from what is saved on Phrasebook Corpus
          editor page.
        </p>
        <VContext />
        <div v-if="phrase" :key="phrase.id" class="row wrap flex">
          <VBlock v-for="(b, i) in phrase.blocks" :key="i" :block="b" />
        </div>
      </div>
      <template v-if="translation">
        <BlocksOrderEditor
          :key="phrase.id"
          v-model="block"
          v-model:phrase="translation"
        />
        <NotesEditor v-model="translation.notes">
          You can add notes, for example, to explain certain grammatical rules.
        </NotesEditor>
        <ContextTranslationEditor v-model="translation.context">
          Translate the context keys (entites & tags) to provide full phrase
          localization.
        </ContextTranslationEditor>
      </template>
    </div>
    <BlockEditor v-if="block" v-model="block" />
  </div>
</template>

<script lang="ts">
import NotesEditor from "@/components/Notes/Editor.vue";
import VContext from "./Context/index.vue";
import VBlock from "./Block/index.vue";
import BlocksOrderEditor from "./Block/OrderEditor.vue";
import BlockEditor from "./Block/Editor.vue";
import ContextTranslationEditor from "./Context/TranslationEditor.vue";

import { defineComponent, ref, watch, provide, toRaw } from "vue";
import { loadJSON } from "@/store";
import { setupEditor } from "@/editor";
import {
  Block,
  Context,
  CorpusPhrase,
  CorpusSection,
  Phrase,
  Phrasebook,
} from "./types";
import { createContext } from "./utils";

export default defineComponent({
  components: {
    VContext,
    VBlock,
    NotesEditor,
    BlocksOrderEditor,
    BlockEditor,
    ContextTranslationEditor,
  },
  setup() {
    const corpus = ref([] as CorpusSection[]);
    try {
      corpus.value = JSON.parse(localStorage["editor.phrasebookCorpus"]);
    } catch {
      loadJSON("phrasebook").then((j) => (corpus.value = j));
    }
    const section = ref({} as CorpusSection);
    const phrase = ref({} as CorpusPhrase);
    const translation = ref({} as Phrase);
    const context = ref({} as Context);
    const contextSource = ref({} as Context);
    const block = ref({} as Block);
    const file = setupEditor<Phrasebook>({
      defaultFile: {},
      filename: "phrasebook",
      storage: "editor.phrasebook",
    });

    provide("context", context);
    provide("contextSource", contextSource);

    watch(corpus, (corpus) => (section.value = corpus[corpus.length - 1]), {
      immediate: true,
    });
    watch(
      section,
      (section) => {
        if (section?.phrases)
          phrase.value = section.phrases[section.phrases.length - 1];
      },
      { immediate: true }
    );
    watch(
      [phrase, file],
      ([phrase]) => {
        if (!phrase) return;
        if (!file.value[phrase.id]) file.value[phrase.id] = { blocks: [] };
        translation.value = file.value[phrase.id];
        createContext(context, phrase.context);
        createContext(contextSource, phrase.context, true);
      },
      { immediate: true }
    );
    watch(
      translation,
      (translation) => {
        if (translation?.blocks)
          block.value = translation.blocks[translation.blocks.length - 1];
      },
      { immediate: true }
    );
    function addBlock() {
      block.value = block.value = {
        states: [{ display: [{ text: "new state" }], transition: "next" }],
      };
      translation.value.blocks.push(block.value);
    }
    function removeBlock() {
      const blocks = toRaw(translation.value.blocks);
      const index = blocks.indexOf(toRaw(block.value));
      blocks.splice(index, 1);
      block.value = blocks[blocks.length - 1];
    }

    return {
      file,
      corpus,
      section,
      phrase,
      translation,
      block,
      addBlock,
      removeBlock,
    };
  },
});
</script>

<style lang="scss" scoped>
#header {
  margin-top: -1 * map-get($margins, "double");
  padding-top: 2 * map-get($margins, "normal");
}
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
  gap: map-get($margins, "double");
}
@media only screen and (max-width: $mobile-width) {
  .grid {
    grid-template-columns: 100%;
  }
}
</style>

<style lang="scss">
.block-editor {
  gap: 4px 8px;
}
</style>