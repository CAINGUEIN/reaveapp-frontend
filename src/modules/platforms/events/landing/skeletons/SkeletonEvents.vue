<template>
  <div class="max-w-[1332px] bg-Anthracite mt-6 h-full mx-auto">
    <div class="w-full h-full">
      <HeadersSkeleton v-if="token" />
      <div class="w-full relative mt-6 rounded-2xl h-64 overflow-hidden">
        <div class="w-full h-full" alt=""></div>
        <div class="absolute inset-0 bg-LightRock animate-pulse"></div>
      </div>
      <div class="absolute flex flex-row pl-7 mt-6 top-7 space-x-2">
        <div class="w-6 h-6 rounded-full my-auto"></div>
      </div>
      <div
        class="absolute top-3/4 text-White ml-7 flex mt-2 flex-row right-5 bg-Anthracite rounded-full"
      ></div>
    </div>
    <CategoriesSkeleton class="w-full mx-auto" />
    <div
      class="mt-6 max-w-full mx-auto grid md:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-4 2xl:grid-cols-3"
    >
      <EventSkeleton
        class="min-w-[260px] w-fit max-w-[318px] h-fit mb-12"
        v-for="index in 10"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useCookies } from "vue3-cookies";
import CategoriesSkeleton from "./CategoriesSkeleton.vue";
import HeadersSkeleton from "./HeadersSkeleton.vue";
import EventSkeleton from "./EventSkeleton.vue";
const { cookies } = useCookies();
const token = cookies.get("userSession");
</script>
