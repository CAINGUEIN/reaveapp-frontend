<template>
  <div class="h-screen"
  style="
      z-index: 100000;
      margin-left: 30px;
      margin-right: 30px;
      padding-top: 0px;
    ">
    <div class="ml-3 pt-5">
      <Headers :visitor="true" />
    </div>
    <router-view class="max-h-fit" />
  </div>
</template>
<script setup>
import Headers from "@components/events/Headers.vue";
</script>
