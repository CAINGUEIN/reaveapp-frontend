<template>
  <div class="my-14">
    <div class="w-2/3 mx-auto flex justify-between">
      <div v-if="data.description" class="w-1/3">
        <h2 class="text-5xl font-medium">Description</h2>
        <p class=" mt-8">{{ data.description }}</p>
      </div>
      <div class="w-1/2 rounded-2xl flex">
        <img src="/img/DescIMG.png" alt="" class="mx-auto my-auto" />
      </div>
    </div>
    <div class="w-2/3 mx-auto flex flex-col justify-between pt-12">
      <h2 class="text-5xl font-medium">Format</h2>
      <div class="flex flex-wrap w-full justify-between mt-8 gap-4">
        <img src="/Phase.png" alt="" />
        <img src="/Phase.png" alt="" />
        <img src="/Phase.png" alt="" />
        <img src="/Phase.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
