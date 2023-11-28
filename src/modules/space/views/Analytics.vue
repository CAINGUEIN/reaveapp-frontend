<template>
    <div class="flex flex-1 w-full h-full">
      <div class="my-auto mx-auto">
        <BoxWIP
          class="w-[430px] h-fit"
          icon="Analytics"
          title="Analytics"
          :year="2024"
          version="Alpha"
          :desc="desc"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import BoxWIP from "../../space/views/BoxWIP.vue";
  const desc = `Track your space's revenue from Events & Items and other products & services.`;
  </script>
  
  <style lang="scss" scoped></style>
  