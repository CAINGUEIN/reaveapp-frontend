<template>
  <div class="w-10/12 max-w-[1332px] mt-6 h-full mx-auto">
    <div v-if="!isloading">
      <div class="w-full h-full">
        <Headers v-if="token" />
        <div class="w-full relative mt-6 rounded-2xl h-64 overflow-hidden">
          <img :src="topEvent.image" class="w-full h-full" alt="" />
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>
          <div
            class="absolute text-White space-x-2 pr-0 top-2 mt-4 mr-4 right-2 flex flex-row"
          >
            <Icon v-for="game in topEvent.games" :key="game" :icon="game" />
          </div>
          <div class="absolute flex flex-row pl-7 mt-6 top-7 space-x-2">
            <img
              class="w-6 h-6 rounded-full my-auto"
              :src="topEvent.spaceIcon"
            />
            <p class="font-medium text-White">{{ topEvent.space }}</p>
          </div>
          <h3 class="absolute text-3xl top-1/3 mt-1 pl-7">
            {{ topEvent.title }}
          </h3>
          <p class="absolute font-medium text-base top-1/2 text-White pl-7">
            {{ topEvent.date }}
          </p>
          <p
            class="absolute font-medium text-base top-1/2 mt-6 text-White pl-7"
          >
            {{ topEvent.location }}
          </p>
          <div
            class="absolute top-3/4 ml-7 flex flex-row py-2 px-6 bg-White rounded-full"
          >
            <Ticket
              class="my-auto"
              :color1="'#111111'"
              :width="24"
              :height="24"
            />
            <p class="text-Black pl-2 font-semibold">
              {{ topEvent.tickets }} Remaining Tickets
            </p>
          </div>
          <div
            class="absolute top-3/4 text-White ml-7 flex mt-2 flex-row right-5 bg-Anthracite rounded-full"
          >
            <Icon :icon="topEvent.type" />
          </div>
        </div>
        <Categories class="w-full mx-auto" />
        <div class="mt-6 flex flex-row flex-wrap space-x-5 space-y-12">
          <Event :dataEvent="event" />
        </div>
      </div>
    </div>
    <SkeletonEvents v-else />
  </div>
</template>

<script setup>
import SkeletonEvents from "./SkeletonEvents.vue";
import Ticket from "@assets/icons/Ticket.vue";
import Event from "./elements/Event.vue";
import Categories from "./elements/Categories.vue";
import Icon from "./elements/Icon.vue";
import Headers from "./Headers.vue";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies(); 
const token = cookies.get("userSession");

const isloading = false;
const topEvent = {
  space: "KarmineCorp",
  spaceIcon: "/src/core/assets/img/KarmineLogo.png",
  image: "/src/core/assets/img/image646.png",
  title: "KCX3: Karmine vs The World",
  date: "16 September 2023",
  location: "La Defense Arena, Paris, France",
  tickets: 137,
  type: "Spectacles",
  games: ["Smash", "RocketLeague", "VALOIcon", "LOLIcon"],
};

const event = {
  space: "KarmineCorp",
  spaceIcon: "/src/core/assets/img/KarmineLogo.png",
  image: "/src/core/assets/img/kcx3big.png",
  title: "KCX3",
  date: "16 September 2023",
  location: "La Defense Arena, Paris, France",
  type: "Spectacles",
  games: ["Smash", "RocketLeague", "VALOIcon", "LOLIcon"],
};
</script>
