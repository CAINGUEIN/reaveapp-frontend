<template>
  <div v-if="!loading" class="overflow-y-auto max-w-screen h-screen scrollbarV">
    <div class="flex w-full px-[30px] mt-8 flex-row justify-between">
      <span class="text-white flex items-center font-black uppercase text-xl">
        <SvgTarget
          target="Events"
          :height="20"
          :width="20"
          class="mr-2"
        ></SvgTarget>
        <SvgTarget
          target="Arrow"
          :height="12"
          :width="24"
          class="mx-2"  
        ></SvgTarget>
        <img
          :src="infoSpace.picture"
          class="w-6 h-6 ml-2 mr-4 rounded-full"
          alt=""
        />
        {{ infoSpace.nameSpace }}
      </span>
      <XButton40 @click="goBack" class="relative"></XButton40>
    </div>
    <div class="px-48">
      <!-- An attempt to a responsive page -->
      <div class="flex flex-row justify-center mt-8">

        <img
          :src="infoEvent.posterPic"
          class="rounded-2xl min-w-[400px] max-w-full max-h-[642px] h-fit"
        />
        <div class="flex flex-col ml-16">
          <div class="flex flex-[0.99] mt-[1.6vw] flex-col w-[24vw]">
            <div class="text-[2.5vw] 2xl:text-5xl text-white font-bold">
              {{ infoEvent.name }}
            </div>
            <div class="flex">
              <div class="flex flex-col w-full">
                <div class="flex gap-[0.625vw] items-center">
                  <ImgFormated
                    :key="infoEvent.owner._id"
                    :size="'s'"
                    :src="infoSpace.picture"
                    :targetSpace="infoEvent.owner._id"
                    :type="'avatar'"
                    class="h-[1.6vw] w-[1.6vw] rounded-full bg-slate-300 my-[0.4vw]"
                  />
                  <div class="text-[0.83vw] text-white font-medium">
                    Organised by @{{ infoSpace.nameSpace }}
                  </div>
                </div>
                <button
                  class="text-black rounded-full h-[2.1vw] mt-[0.83vw] w-[10vw] bg-white flex"
                  @click="goTo()"
                >
                  <div class="flex items-center m-auto">
                    <SvgTarget
                      :target="'Tickets'"
                      color1="#000"
                      :width="24"
                      :height="24"
                      class="mr-[0.41vw]"
                    ></SvgTarget>
                    <h4 class="text-black text-[0.83vw] font-black">
                      Buy Tickets
                    </h4>
                  </div>
                </button>

                <div class="grid grid-cols-2 mt-10 gap-y-12 gap-x-16">
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Calendar'"
                        class="my-auto"
                        :width="20"
                        :height="20"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Dates
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ $dayjs(infoEvent.date).format("MM.DD.YYYY") }}
                    </h3>
                    <h3 class="text-[1.04vw] font-black">
                      at {{ $dayjs(infoEvent.date).format("hh:mm A") }}
                    </h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Maps'"
                        class="my-auto"
                        :width="20"
                        :height="20"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Location
                      </p>
                    </div>
                    <h3
                      class="text-[1.04vw] font-black"
                      v-if="infoEvent.venueName"
                    >
                      {{
                        infoEvent.venueName +
                        ", " +
                        infoEvent.adress +
                        ", " +
                        infoEvent.city +
                        ", " +
                        infoEvent.country
                      }}
                    </h3>
                    <h3 class="text-[1.04vw] font-black">Lieu inconnu</h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Calendar'"
                        class="my-auto"
                        :width="20"
                        :height="20"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Booking Time Left
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ $dayjs(infoEvent.date).fromNow() }}
                    </h3>
                  </div>
                  <div class="col-span-1">
                    <div class="flex flex-row">
                      <SvgTarget
                        :target="'Bootcamps'"
                        class="my-auto"
                        :width="20"
                        :height="20"
                      />
                      <p class="text-[0.83vw] font-medium my-auto pl-2">
                        Remaining Seats
                      </p>
                    </div>
                    <h3 class="text-[1.04vw] font-black">
                      {{ this.infoEvent.ticketsRemaining }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex[0.01]">
            <div v-for="item in nav" :key="item" class="flex">
              <Button40Slot class="my-[0.41vw] mr-[0.41vw]">
                <SvgTarget
                  class="m-auto flex-row"
                  :target="item.icon"
                  :width="20"
                  :height="20"
                ></SvgTarget>
              </Button40Slot>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row"></div>
      <div class="mt-18">
        <div class="w-full border-b-2 border-Gravel flex justify-around">
          <div class="-mb-0.5">
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'About'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'About'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'About' ? 'text-White' : 'hover:text-White'"
              >
                About
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Format'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Format'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'Format' ? 'text-White' : 'hover:text-White'"
              >
                Format
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Venue'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Venue'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'Venue' ? 'text-White' : 'hover:text-White'"
              >
                Venue
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'Products'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'Products'"
            >
              <p
                class="text-xl font-medium"
                :class="
                  select === 'Products' ? 'text-White' : 'hover:text-White'
                "
              >
                Products
              </p>
            </button>
            <button
              class="border-b-2 pb-2 px-10"
              :class="
                select === 'People'
                  ? 'border-White'
                  : 'hover:border-White border-Gravel'
              "
              @click.prevent="select = 'People'"
            >
              <p
                class="text-xl font-medium"
                :class="select === 'People' ? 'text-White' : 'hover:text-White'"
              >
                People
              </p>
            </button>
          </div>
        </div>
      </div>

      <div>
        <EventIdAbout
          v-if="select === 'About'"
          :data="infoEvent"
        ></EventIdAbout>
        <EventIdFormat
          v-if="select === 'Format'"
          :data="infoEvent"
        ></EventIdFormat>
        <EventIdVenue
          v-if="select === 'Venue'"
          :data="infoEvent"
        ></EventIdVenue>
        <EventIdProducts
          v-if="select === 'Products'"
          :data="infoEvent"
        ></EventIdProducts>

        <EventIdPeople
          v-if="select === 'People'"
          :data="infoEvent"
        ></EventIdPeople>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button40Slot from "@components//buttons/Button40Slot.vue";
import XButton40 from "@components/buttons/XButton40.vue";
import EventIdAbout from "@modules/platforms/events/EventIdAbout.vue";
import EventIdFormat from "@modules/platforms/events/EventIdFormat.vue";
import EventIdVenue from "@modules/platforms/events/EventIdVenue.vue";
import EventIdProducts from "@modules/platforms/events/EventIdProducts.vue";
import EventIdPeople from "@modules/platforms/events/EventIdPeople.vue";
import UploadServices from "@axios/services/uploadServices";
import Carousel from "@modules/platforms/events/landing/elements/Carousel.vue";
import { FwbCarousel } from "flowbite-vue";
//services
import EventServices from "@axios/services/eventServices";
import SvgTarget from "@components/SvgTarget.vue";
import useStoreSpace from "@stores/storeSpace";

import ImgFormated from "@components/img/ImgFormated.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const storeSpace = useStoreSpace();
let nav = ref([
  { name: "Link", icon: "Link", target: "Link" },
  { name: "Share", icon: "Share", target: "Share" },
  { name: "Heart", icon: "Heart", target: "Heart" },
  { name: "Save", icon: "Save", target: "Save" },
]);
const loading = ref(true);

let id = ref("");
let infoEvent = ref("");
let infoSpace = ref("");
let select = ref("About");
const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.back();
};

const goTo = () => {
  //route.push({ name: "EventBuyTicket" });
};

const getUrl = () => {
  if (Object.keys(route.params).length > 0) {
    id.value = route.params.id;
    feedData();
  } else {
    goBack();
  }
};

const ticketsRemaining = () => {
  let totalTickets = 0;
  for (let index = 0; index < infoEvent.value.tickets.length; index++) {
    totalTickets = totalTickets + infoEvent.value.tickets[index].quantities;
  }
  return totalTickets;
};

const feedData = async () => {
  let body = { _id: id.value };
  let event = await EventServices.dataEvent(body);
  if (event.data.success) {
    infoEvent.value = event.data.data;
    infoEvent.value.ticketsRemaining = ticketsRemaining();
    console.log("VOICI LES INFOS EVENTS : ", infoEvent.value);
    if (infoEvent.value.posterPic) {
      infoEvent.value.posterPic = await UploadServices.getImageFromBackend(
        infoEvent.value.posterPic
      );
    }
    await storeSpace.findSingleSpace(infoEvent.value.spaceAssociated);
    infoSpace.value = storeSpace.dataSpace[infoEvent.value.spaceAssociated];
    console.log("VOICI LES INFOS SPACES : ", infoSpace.value);

    if (infoSpace.value.picture) {
      infoSpace.value.picture = await UploadServices.getImageFromBackend(
        infoSpace.value.picture
      );
    }
    if (infoEvent.value.descriptionPic) {
      infoEvent.value.descriptionPic = await UploadServices.getImageFromBackend(
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
      infoEvent.secondaryPics.map((picture, i) => ({
        src: picture,
        alt: "Image " + i,
      }));
    }
  }
};

onMounted(() => {
  getUrl();
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
