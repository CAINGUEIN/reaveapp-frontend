<template>
  <div class="my-14 w-[90%] max-w-[1260] mx-auto">
    <div class="flex justify-between">
      <div v-if="data.description" class="w-1/3">
        <p class="mt-8">{{ data.description }}</p>
      </div>
      <div class="w-1/2 rounded-2xl flex">
        <img src="/img/DescIMG.png" alt="" class="mx-auto my-auto" />
      </div>
    </div>
    <div class="flex flex-col justify-between pt-12">
      <h2 class="text-5xl font-medium">Tickets</h2>
      <div class="mt-8 grid grid-cols-4 gap-8">
        <div>
          <img
            src="/img/Eventpage/SilverFront.png"
            alt=""
            class="backTickets"
          />
          <div class="absolute bottom-6 left-6">
            <p class="text-base font-bold text-white">Silver</p>
            <p class="flex text-[32px] font-black text-white mt-1">
              25
              <SvgTarget
                target="GoldRC"
                :width="16"
                :height="16"
                class="ml-1 mt-auto mb-1"
              ></SvgTarget>
            </p>
          </div>
        </div>
        <div>
          <img src="/img/Eventpage/GoldFront.png" alt="" class="backTickets" />
          <div class="absolute bottom-6 left-6">
            <p class="text-base font-bold text-white">Gold</p>
            <p class="flex text-[32px] font-black text-white mt-1">
              50
              <SvgTarget
                target="GoldRC"
                :width="16"
                :height="16"
                class="ml-1 mt-auto mb-1"
              ></SvgTarget>
            </p>
          </div>
        </div>
        <div>
          <img src="/img/Eventpage/BlackFront.png" alt="" class="backTickets" />
          <div class="absolute bottom-6 left-6">
            <p class="text-base font-bold text-white">Diamond</p>
            <p class="flex text-[32px] font-black text-white mt-1">
              80
              <SvgTarget
                target="GoldRC"
                :width="16"
                :height="16"
                class="ml-1 mt-auto mb-1"
              ></SvgTarget>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between pt-12">
      <h2 class="text-5xl font-medium">Prizes</h2>
      <div class="mt-8 grid grid-cols-4 gap-8">
        <div class="backTickets h-[300px] w-[300px] flex">
          <img
            src="/img/Eventpage/TROPHEE.png"
            alt=""
            class="mx-auto my-auto"
          />
          <div class="absolute bottom-6 left-6">
            <p class="text-base font-bold text-white">Trophee</p>
          </div>
        </div>
        <div class="">
          <div class="bg-DarkRock p-6 rounded-xl">
            <p class="text-xl font-bold text-white">Cashprize</p>
            <p class="flex text-[32px] font-black text-white mt-1">
              150,000
              <SvgTarget
                target="GoldRC"
                :width="16"
                :height="16"
                class="ml-1 mt-auto mb-1"
              ></SvgTarget>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";
export default {
  props: ["data"],
  components: {
    SvgTarget,
  },
};
</script>

<style scoped>
.backTickets {
  background: linear-gradient(
    0.07deg,
    #252525 0.06%,
    rgba(42, 42, 42, 0) 58.15%
  );
  border-radius: 12px;
}
</style>
