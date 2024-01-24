<template>
  <div class="my-14 w-[90%] max-w-[1260] mx-auto">
    <div class="flex justify-between">
      <div v-if="props.data.description" class="w-1/3 my-auto">
        <p class="mt-8 font-medium text-xl text-ellipsis w-fit">
          {{ String(props.data.description) }}
        </p>
      </div>
      <div class="w-1/2 rounded-2xl flex">
        <img
          :src="props.data.descriptionPic"
          alt=""
          class="mx-auto my-auto rounded-2xl"
        />
      </div>
    </div>
    <div class="flex flex-col justify-around mt-18">
      <h2 class="text-5xl font-medium">Tickets</h2>
      <div class="w-full mt-8 grid grid-cols-3 gap-6">
        <div v-for="ticket in data.tickets" :key="ticket">
          <div
            class="max-w-[428px] max-h-[428px] w-auto h-auto min-w-[300px] min-h-[300px] rounded-2xl"
            :style="`background-color:#${ticket.color}`"
          >
            <div
              class="absolute inset-0 max-w-full min-h bg-gradient-to-b from-transparent to-gray-900 rounded-2xl opacity-50"
            ></div>
            <img
              src="/img/Eventpage/SilverFront.png"
              alt=""
              class="rounded-3xl absolute top-12 left-14 w-48 h-48 mx-auto"
            />
          </div>
          <div class="flex flex-col">
            <button
              class="text-black mx-auto rounded-full py-2 mt-6 w-fit px-8 bg-white flex"
              @click="goTo()"
            >
              <div class="flex items-center m-auto">
                <SvgTarget
                  :target="'Tickets'"
                  color1="#000"
                  :width="20"
                  :height="20"
                  class="mr-2"
                ></SvgTarget>
                <h4 class="text-black text-base font-black">
                  Buy {{ ticket.type + " " + ticket.price }}€
                </h4>
              </div>
            </button>
            <p class="font-bold mt-6 text-h4 text-White">{{ ticket.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

