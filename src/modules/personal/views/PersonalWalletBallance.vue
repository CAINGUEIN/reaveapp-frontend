<template>
  <div class="h-full w-full">
    <div class="flex mt-5">
      <button
        class="bg-DarkRock rounded-full h-10 w-10 flex mr-4"
        @click.prevent="changeView()"
      >
        <SvgTarget
          target="Chevron"
          class="mx-auto my-auto rotate-90"
        ></SvgTarget>
      </button>
      <h1
        class="text-3xl font-bold tracking-tight text-white flex items-center"
      >
        <span><SvgTarget target="Balance" class="mr-4"></SvgTarget></span>
        Monitor
      </h1>
    </div>
    <div class="w-full h-full">
      <div class="flex w-88 text-center flex-col mx-auto mt-[10%]">
        <SvgTarget
          target="SOON"
          :width="72"
          :height="72"
          class="mx-auto my-auto"
        ></SvgTarget>
        <p class="mt-5">
          Monitor your Esport Wealth growth overtime ― from any asset type:
          coins, items and contracts.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";

export default {
  components: {
    SvgTarget,
  },
  methods: {
    changeView() {
      this.$emit("action", "wallet");
    },
  },
};
</script>

<style lang="scss" scoped></style>
