<template>
  <div class="my-14">
    <div class="w-2/3 mx-auto flex justify-between">
      <div class="w-1/3">
        <h2>Descritpion</h2>
        <p>{{ data.description }}</p>
      </div>
      <div class="w-1/2 rounded-2xl bg-slate-400"></div>
    </div>
    <div class="w-2/3 mx-auto flex flex-col justify-between pt-12">
      <h2>Format</h2>
      <div class="flex flex-wrap w-full justify-between -m-4 pt-4">
        <img class="m-4" src="../../../../../public/Phase.png" alt="" />
        <img class="m-4" src="../../../../../public/Phase.png" alt="" />
        <img class="m-4" src="../../../../../public/Phase.png" alt="" />
        <img class="m-4" src="../../../../../public/Phase.png" alt="" />
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
