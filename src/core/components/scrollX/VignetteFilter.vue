<template>
  <div class="flex-none px-4 first:pl-0 last:pr-0">
    <img :src="src" alt="" class="rounded-md" />
    <h4 class="text-center">{{name}}</h4>
  </div>
</template>

<script>
export default {
    props: ["name", "src"],
};
</script>

<style lang="scss" scoped></style>
