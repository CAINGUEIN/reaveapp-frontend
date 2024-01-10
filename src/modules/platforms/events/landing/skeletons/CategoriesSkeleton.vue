<template>
  <div class="w-fit mt-6 grid gap-[62px] grid-cols-8 col-span-3">
    <div
      v-for="index in 8"
      :key="index"
      class="p-1 flex flex-col mx-auto text-Gravel space-y-3 animate-pulse rounded-xl"
    >
      <div class="mx-auto w-6 h-6 bg-LightRock rounded-full"></div>
      <div class="w-[106px] h-4 bg-LightRock rounded-3xl"></div>
    </div>
  </div>
</template>
