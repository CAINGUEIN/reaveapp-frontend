<template>
  <div class="mt-4">
    <p class="text-5xl font-bold text-White">{{txttitle}}</p>
    <div class="not-prose mt-8 relative rounded-xl overflow-hidden">
      <div
        class="absolute inset-0"
        style="background-position: 10px 10px"
      ></div>
      <div class="relative rounded-xl overflow-auto scrollbar2">
        <div class="flex max-w-md mx-0 mb-2 min-w-0 rounded-lg">
          <CardsNft v-for="card in data" :card="card"/>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
    </div>
  </div>
</template>

<script>
import CardsNft from "@core/components/scrollX/CardsNft.vue";
export default { components: { CardsNft }, props: ["data", "txttitle"] };
</script>

<style lang="scss" scoped></style>
