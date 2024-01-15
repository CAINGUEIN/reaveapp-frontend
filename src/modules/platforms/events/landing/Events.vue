<template>
  <div class="w-10/12 max-w-[1332px] mt-6 h-full mx-auto">
    <div v-if="isloading"><SkeletonEvents /></div>
    <div v-else>
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
        <Categories class="w-fit mx-auto" />
        <div class="flex flex-row w-full h-full">
          <div
            v-if="Object.keys(dataEvents).length > 0"
            class="mt-6 max-w-full mx-auto ml-0 grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4 max-xl:grid-cols-3"
          >
            <Event
              class="min-w-[260px] w-fit max-w-[318px] h-fit mb-12 cursor-pointer"
              v-for="(event, index) in dataEvents"
              :key="index"
              :dataEvent="event"
              :dataSpace="event.spaceAssociated"
            />
          </div>
          <div v-else class="mx-auto mt-48 flex flex-col">
            <h3 class="">No Events on Reave at the moment.</h3>
            <div
              class="py-2 px-5 mt-4 bg-White mx-auto cursor-pointer rounded-full w-fit"
            >
              <h3 class="text-Anthracite text-base">Become an Organiser</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkeletonEvents from "./skeletons/SkeletonEvents.vue";
import Ticket from "@assets/icons/Ticket.vue";
import Categories from "./elements/Categories.vue";
import Event from "./elements/Event.vue";
import EventServices from "@axios/services/eventServices.js";
import UploadServices from "@axios/services/uploadServices";
import Icon from "./elements/Icon.vue";
import useStoreSpace from "@stores/storeSpace";
import Headers from "./Headers.vue";
import { useCookies } from "vue3-cookies";
import { onMounted, ref } from "vue";

const { cookies } = useCookies();
const storeSpace = useStoreSpace();

const token = cookies.get("userSession");

const dataEvents = ref({});
const dataSpaces = ref({});
const emits = defineEmits(["loaded"]);
let isloading = ref(true);
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

// const events = [
//   {
//     space: "KarmineCorp",
//     spaceIcon: "/src/core/assets/img/KarmineLogo.png",
//     image: "/src/core/assets/img/kcx3big.png",
//     title: "KCX3",
//     date: "16 September 2023",
//     location: "La Defense Arena, Paris, France",
//     type: "Spectacles",
//     games: ["Smash", "RocketLeague", "VALOIcon", "LOLIcon"],
//   },
//   {
//     space: "RiotGames",
//     spaceIcon: "/src/core/assets/img/Riot.png",
//     image: "/src/core/assets/img/gameChangers.png",
//     title: "Game Changers, EMEA",
//     date: "Monday 27 July 2023",
//     location: "O2 Stadium, London, UK",
//     type: "Spectacles",
//     games: ["VALOIcon"],
//   },
//   {
//     space: "EsportsAwards",
//     spaceIcon: "/src/core/assets/img/esportawardsIcon.png",
//     image: "/src/core/assets/img/EsportsAwards.png",
//     title: "Esports Awards 2023",
//     date: "Saturday 30 November 2023",
//     location: "Resorts World, Las Vegas, USA",
//     type: "Ceremonies",
//     games: [],
//   },
//   {
//     space: "Blast",
//     spaceIcon: "/src/core/assets/img/blast.png",
//     image: "/src/core/assets/img/CSGOMajor.png",
//     title: "CS:GO Major Paris",
//     date: "Monday 23 May 2023",
//     location: "Accor Arena, Paris, France",
//     type: "Spectacles",
//     games: ["CSGO"],
//   },
//   {
//     space: "Blizzard",
//     spaceIcon: "/src/core/assets/img/blizzard.png",
//     image: "/src/core/assets/img/GrandFinalOverwatch.png",
//     title: "Grand Final, Overwatch League",
//     date: "16 August 2023",
//     location: "Wells Fargo Center, Philadelphia, USA",
//     type: "Spectacles",
//     games: ["Overwatch"],
//   },
//   {
//     space: "Speedons",
//     spaceIcon: "/src/core/assets/img/speedonsIcon.png",
//     image: "/src/core/assets/img/speedons.png",
//     title: "Speedons 2022",
//     date: "2022, 15th to 17th June ",
//     location: "Accor Arena, Paris, France",
//     type: "Spectacles",
//     games: [],
//   },
//   {
//     space: "SpawnGamesFestival",
//     spaceIcon: "/src/core/assets/img/spawngamesfastival.png",
//     image: "/src/core/assets/img/tableronde.png",
//     title: "Table Ronde, l'Esport de demain",
//     date: "28 - 30 April 2023",
//     location: "Angoulême, France",
//     type: "Conferences",
//     games: [],
//   },
//   {
//     space: "Webedia",
//     spaceIcon: "/src/core/assets/img/webedia.png",
//     image: "/src/core/assets/img/LFLDays.png",
//     title: "LFL Days",
//     date: "Wednesday 5 July 2023",
//     location: "Palais Nikaïa, Nice, France",
//     type: "Spectacles",
//     games: ["LOLIcon"],
//   },
// ];

const getEvents = async () => {
  let result;
  let space;
  await storeSpace.feedDataSpace();
  dataSpaces.value = storeSpace.dataSpace;
  result = await EventServices.listEvent();
  if (result.data.data.length > 0) {
    for (let i = 0; i < result.data.data.length; i++) {
      dataEvents.value[result.data.data[i]._id] = result.data.data[i];
      space =
        dataSpaces.value[
          dataEvents.value[result.data.data[i]._id].spaceAssociated
        ];
      dataEvents.value[result.data.data[i]._id].spaceAssociated = space;
      dataEvents.value[result.data.data[i]._id].posterPic =
        await UploadServices.getImageFromBackend(
          dataEvents.value[result.data.data[i]._id].posterPic
        );
    }
  }
};

onMounted(async () => {
  getEvents();
  setTimeout(() => {
    isloading.value = false;
    emits("loaded");
  }, 500);
});
</script>
