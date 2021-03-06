<template>
  <EditorCard icon="list_alt" header="context translation">
    <template #header>
      <ConfirmButton v-if="translation" @confirm="translation = undefined" />
      <btn v-else icon="add" @click="create" />
    </template>
    <template v-if="translation">
      <div
        v-for="({ entity, tags }, i) in context"
        :key="entity"
        class="col"
        :class="'colored-dot-' + i"
      >
        <h2 class="text-caption">{{ entity }}</h2>
        <div class="row wrap">
          <input
            v-for="tag in tags"
            :key="tag"
            v-model="translation[entity][tag]"
            :size="getSize(entity, tag)"
            :placeholder="tag"
            type="text"
          />
        </div>
      </div>
    </template>
  </EditorCard>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ComputedRef } from "vue";
import { ContextSource, ContextTranslation } from "../types";

export default defineComponent({
  name: "TranslationEditor",
  props: {
    modelValue: {
      type: Object as PropType<undefined | ContextTranslation>,
      default: undefined,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const translation = computed({
      get: () => props.modelValue,
      set: (t) => emit("update:modelValue", t),
    });
    const context = inject(
      "contextSource",
      {} as ComputedRef<undefined | ContextSource[]>
    );
    function create() {
      if (!context?.value) return;
      translation.value = context.value.reduce((t, { entity }) => {
        t[entity] = {};
        return t;
      }, {} as ContextTranslation);
    }
    function getSize(entity: string, tag: string) {
      if (!translation.value) return;
      const size = translation.value[entity][tag]?.length ?? 0;
      return size > 0 ? size : tag.length;
    }

    return { translation, context, create, getSize };
  },
});
</script>

<style lang="scss" scoped>
input {
  width: unset;
}
</style>
