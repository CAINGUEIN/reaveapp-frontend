<template>
  <div class="mt-14 w-[90%] max-w-[1260] mx-auto">
    <div class="flex flex-row justify-between">
      <div v-if="props.data.description" class="w-1/3 my-auto">
        <p class="mt-8 font-medium text-xl text-ellipsis w-fit">
          {{ String(props.data.description) }}
        </p>
      </div>
      <div class="w-fit rounded-2xl flex">
        <img
          :src="props.data.descriptionPic"
          alt=""
          class="mx-auto my-auto rounded-2xl"
        />
      </div>
    </div>
    <div class="flex flex-col justify-around mt-18">
      <h2 class="text-5xl font-medium">Tickets</h2>
      <div class="w-full mt-8 grid grid-cols-3 gap-6 mb-12">
        <div
          v-for="ticket in data.tickets"
          :key="ticket"
          class="w-full h-fit mx-auto"
        >
          <div
            class="w-auto h-auto min-w-[20vw] min-h-[20vw] flex flex-row rounded-2xl"
            :style="`background-color:#${ticket.color}`"
          >
            <div
              class="absolute inset-0 max-w-full min-h bg-gradient-to-b from-transparent to-gray-900 rounded-2xl opacity-50"
            ></div>
            <ImgFormated
              :src="'/img/Eventpage/SilverFront.png'"
              alt=""
              class="m-auto w-[12vw] h-[12vw]"
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
                  Buy {{ ticket.category + " " + ticket.price }}€
                </h4>
              </div>
            </button>
            <p class="font-bold mt-6 text-H4 text-White">
              {{ props.spaceName + " " + ticket.category }} Ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";
import ImgFormated from "../../../core/components/img/ImgFormated.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  spaceName: {
    type: String,
    required: true,
  },
});
</script>
