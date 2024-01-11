<template>
  <div class="w-fit grid grid-cols-4 gap-4">
    <div
      v-for="tab in 4"
      :key="tab"
      class="w-[70px] h-4 bg-Rock rounded-xl animate-pulse"
    ></div>
  </div>
</template>
