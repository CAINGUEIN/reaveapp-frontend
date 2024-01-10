<template>
  <div
    class="h-screen"
    style="
      z-index: 100000;
      margin-left: 30px;
      margin-right: 30px;
      padding-top: 0px;
    "
  >
    <div class="ml-3 pt-5">
      <Headers v-if="loaded" :visitor="true" />
      <HeadersSkeleton v-else :visitor="true" />
    </div>
    <router-view class="max-h-fit" @loaded="loaded = true" />
  </div>
</template>
<script setup>
import Headers from "../../platforms/events/landing/Headers.vue";
import HeadersSkeleton from "../../platforms/events/landing/skeletons/HeadersSkeleton.vue";
import { ref } from "vue";

const loaded = ref(false);
</script>
