<template>
  <div class="w-[732px] mx-auto flex flex-col items-center">
    <h1 class="border-b-2 pb-6 px-6 mt-64 mb-10 text-2xl text-Silver border-Silver">Tags
        <div class="absolute top-0 left-0 right-0 flex">
          <SvgTarget target="SOON" class="mx-auto" :height="30" :width="30"></SvgTarget>
        </div>
    </h1>
  </div>
</template>

<script>
import SvgTarget from '../../SvgTarget.vue';

export default { components: { SvgTarget } };
</script>

<style lang="scss" scoped></style>
