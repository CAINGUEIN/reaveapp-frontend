<template>
  <div
    class="bg-Anthracite"
    :class="[
      route.name !== 'EventPage' ? 'h-screen overflow-hidden' : 'h-full',
    ]"
  >
    <div class="flex w-full px-[30px] pt-8 flex-row justify-between">
      <span class="text-white flex items-center font-black uppercase text-xl">
        <button
          v-if="route.name !== 'EventPage'"
          class="bg-DarkRock h-10 w-10 hover:bg-LightRock rounded-full px-4 mr-4 z-10"
          @click.prevent="goBack()"
        >
          <SvgTarget :target="'Arrow'" class="rotate-180" />
        </button>
        <SvgTarget
          target="Events"
          :height="24"
          :width="24"
          class="mr-2"
        ></SvgTarget>

        <div v-if="!boughtTicket" class="flex flex-row items-center">
          <SvgTarget
            target="Arrow"
            :height="15"
            :width="20"
            class="mx-2"
          ></SvgTarget>
          <img
            v-if="infoSpace.picture"
            :src="infoSpace.picture"
            class="w-6 h-6 ml-2 mr-4 rounded-full"
            alt=""
          />
          <ImgFormated
            v-else
            :type="'event'"
            class="w-6 h-6 ml-2 mr-4 rounded-full"
          />
          <span
            v-bind:class="{
              'text-LightGrey': route.name !== 'EventPage',
            }"
            class="font-black uppercase text-H3"
            >{{ infoSpace.nameSpace }}</span
          >
        </div>

        <div
          v-if="route.name === 'EventBuyTicket'"
          class="flex flex-row items-center"
        >
          <SvgTarget
            target="Arrow"
            :height="15"
            :width="20"
            class="mx-2"
          ></SvgTarget>
          <SvgTarget :target="'Tickets'" :height="24" :width="24" />
          <span
            v-bind:class="['font-black text-H3' ? !boughtTicket : 'uppercase']"
            class="ml-2 font-bold text-White"
          >
            Buy Tickets
          </span>
        </div>
      </span>
      <div class="flex flex-row">
        <div
          class="flex flex-row mr-8"
          v-if="route.name === 'EventBuyTicket' && !boughtTicket"
        >
          <ImgFormated
            :type="'avatar'"
            class="w-10 h-10 mr-2 rounded-full border-2 border-Frog"
          />
          <SvgTarget
            target="AddFriends"
            :height="24"
            :width="24"
            class="mx-2 p-2 bg-White cursor-pointer m-auto rounded-full text-Anthracite"
          />
        </div>
        <XButton40 @click="close()" class="relative"></XButton40>
      </div>
    </div>

    <router-view
      @update="updateData"
      v-if="infoEvent && infoSpace"
      class="h-full"
      :dataSpace="infoSpace"
      :dataEvent="infoEvent"
    ></router-view>
  </div>
</template>

<script setup>
import SvgTarget from "@components/SvgTarget.vue";
import XButton40 from "@components/buttons/XButton40.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStoreSpace from "@stores/storeSpace";
import UploadServices from "@axios/services/uploadServices";
import EventServices from "@axios/services/eventServices";
import ImgFormated from "../../../core/components/img/ImgFormated.vue";
const storeSpace = useStoreSpace();
const router = useRouter();
const route = useRoute();
const ticket = ref("");
const close = () => {
  router.push({
    name: "Events",
  });
};
const goBack = () => {
  boughtTicket.value = false;
  router.back();
};
const windowWidth = ref("");
const boughtTicket = ref(false);
const windowHeight = ref("");
const infoEvent = ref("");
const infoSpace = ref("");
const ticketsRemaining = () => {
  let totalTickets = 0;
  for (let index = 0; index < infoEvent.value.tickets.length; index++) {
    totalTickets = totalTickets + infoEvent.value.tickets[index].quantities;
  }
  return totalTickets;
};

const getUrl = () => {
  if (Object.keys(route.params).length > 0) {
    feedData();
  } else {
    goBack();
  }
};

const updateData = () => {
  feedData();
  boughtTicket.value = true;
  console.log(ticket.value);
};

const feedData = async () => {
  let body = { _id: route.params.id };
  let event = await EventServices.dataEvent(body);
  if (event.data.success) {
    infoEvent.value = event.data.data;
    infoEvent.value.ticketsRemaining = ticketsRemaining();
    if (infoEvent.value.posterPic) {
      infoEvent.value.posterPic = await UploadServices.getImageFromBackend(
        infoEvent.value.posterPic
      );
    }
    await storeSpace.findSingleSpace(infoEvent.value.spaceAssociated);
    infoSpace.value = storeSpace.dataSpace[infoEvent.value.spaceAssociated];
    if (infoSpace.value.picture) {
      infoSpace.value.picture = await UploadServices.getImageFromBackend(
        infoSpace.value.picture
      );
      if (infoEvent.value.descriptionPic) {
        infoEvent.value.descriptionPic =
          await UploadServices.getImageFromBackend(
            infoEvent.value.descriptionPic
          );
      }
      if (infoEvent.value.secondaryPics.length > 0) {
        for (let i = 0; i < infoEvent.value.secondaryPics.length; i++) {
          infoEvent.value.secondaryPics[i] =
            await UploadServices.getImageFromBackend(
              infoEvent.value.secondaryPics[i]
            );
        }
        infoEvent.value.secondaryPics.map((picture, i) => ({
          src: picture,
          alt: "Image " + i,
        }));
      }
    }
  }
};
onMounted(async () => {
  getUrl();
  console.log(infoEvent.value);
  console.log(infoSpace.value);
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  });
});
</script>
