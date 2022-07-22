<template>
  <div class="mt-[88px]">
    <div class="not-prose relative rounded-xl overflow-hidden">
      <div
        class="absolute inset-0"
        style="background-position: 10px 10px"
      ></div>
      <div class="relative rounded-xl overflow-auto scrollbar">
        <div class="flex max-w-md mx-0 min-w-0 rounded-lg">
          <VignetteFilter
            v-for="vignette in data"
            :name="vignette.name"
            :src="vignette.src"
          />
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
    </div>
  </div>
</template>

<script>
import VignetteFilter from "@core/components/scrollX/VignetteFilter.vue";

export default {
  props: ["data"],
  components: { VignetteFilter },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped></style>
