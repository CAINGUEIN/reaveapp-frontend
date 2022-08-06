<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    aria-hidden="true"
    class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
    :src="data"
  ></svg>
</template>

<script>

export default {
    props: ["data"] }
</script>

<style lang="scss" scoped></style>
