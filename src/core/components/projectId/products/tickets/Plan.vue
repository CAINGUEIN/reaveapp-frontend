<template>
  <div>
    <div class="flex justify-center gap-8">
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-Yellow font-medium">Gold</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-slate-400 font-medium">Silver</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-orange-700 font-medium">Bronze</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Seat"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
    </div>
    <img src="/plan.png" class="max-w-[1000px] mt-20" />
  </div>
</template>

<script>
import SvgTarget from "../../../SvgTarget.vue";

export default { components: { SvgTarget } };
</script>

<style lang="scss" scoped></style>
