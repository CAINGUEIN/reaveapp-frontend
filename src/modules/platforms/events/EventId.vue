<template>
  <div v-if="infoEvent" class="overflow-y-auto h-screen scrollbarV">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
    <div class="mx-24 mt-28 flex">
      <div class="w-3/5 rounded-2xl flex">
        <img src="/img/BigIMG.png" alt="" class="my-auto w-full" />
      </div>
      <div class="pl-18 flex flex-col justify-between w-2/5">
        <div class="flex flex-col justify-between mt-18">
          <h1 class="text-[56px] font-bold">{{ infoEvent.name }}</h1>
          <div class="flex items-center space-x-4">
            <ImgFormated
                :key="infoEvent.owner._id"
                :size="'s'"
                :targetSpace="infoEvent.owner._id"
                :type="'avatar'"
                class="h-10 w-10 rounded-full bg-slate-300 my-3"
              />
            <p class="text-base font-medium">
              Organised by @{{ infoEvent.owner.user_id.userTag }}
            </p>
          </div>
          <div class="flex mt-4 w-full">
            <button
              class="text-black rounded-full h-16 px-10 ml-0 w-80 bg-white flex"
              @click="goTo(infoEvent._id)"
            >
              <div class="flex items-center m-auto">
                <SvgTarget
                  :target="'Tickets'"
                  color1="#000"
                  :width="32"
                  :height="32"
                  class="mr-2"
                ></SvgTarget>
                <h4 class="text-black text-xl font-black">Buy Tickets</h4>
              </div>
            </button>
            <Button60Slot class="ml-4 my-auto relative">
              <Auctions :width="32" :height="32" class="m-auto"></Auctions>
              <div class="absolute bottom-0 left-0 right-0 flex">
                <SvgTarget
                  :height="40"
                  :width="40"
                  class="mx-auto"
                  target="SOON"
                ></SvgTarget>
              </div>
            </Button60Slot>
          </div>
          <div class="grid-cols-2 grid w-full gap-4 mt-18">
            <div class="col-span-1">
              <p>Date</p>
              <h3>{{ $dayjs(infoEvent.date).format("MM.DD.YYYY") }}</h3>
              <h3>at {{ $dayjs(infoEvent.date).format("hh:mm A") }}</h3>
            </div>
            <div class="col-span-1">
              <p>Address location</p>
              <h3>
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
            </div>
            <div class="col-span-1">
              <p>Booking time left</p>
              <h3>{{ $dayjs(infoEvent.date).fromNow() }}</h3>
            </div>
            <div class="col-span-1">
              <p>Remaining available seats</p>
              <h3>{{ ticketsRemaining() }}</h3>
            </div>
          </div>
        </div>

        <div class="flex">
          <Button60Slot class="my-2 mr-2"
            ><LinkIcon class="h-8 m-auto"></LinkIcon
          ></Button60Slot>
          <Button60Slot class="m-2">
            <SvgTarget class="m-auto" target="Share"></SvgTarget>
          </Button60Slot>
          <Button60Slot class="m-2">
            <SvgTarget
              class="m-auto"
              target="Heart"
              :width="32"
              :height="32"
            ></SvgTarget>
          </Button60Slot>
          <Button60Slot class="m-2">
            <SvgTarget class="m-auto" target="Save"></SvgTarget>
          </Button60Slot>
        </div>
      </div>
    </div>
    <div class="mx-24 mt-10">
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
              class="text-2xl font-medium"
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
              class="text-2xl font-medium"
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
              class="text-2xl font-medium"
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
              class="text-2xl font-medium"
              :class="select === 'Products' ? 'text-White' : 'hover:text-White'"
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
              class="text-2xl font-medium"
              :class="select === 'People' ? 'text-White' : 'hover:text-White'"
            >
              People
            </p>
          </button>
        </div>
      </div>
    </div>
    <div>
      <EventIdAbout v-if="select === 'About'" :data="infoEvent"></EventIdAbout>
      <EventIdFormat
        v-if="select === 'Format'"
        :data="infoEvent"
      ></EventIdFormat>
      <EventIdVenue v-if="select === 'Venue'" :data="infoEvent"></EventIdVenue>
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
</template>

<script>
//components
import Button60Slot from "@components//buttons/Button60Slot.vue";
import XButton60 from "@components/buttons/XButton60.vue";
import EventIdAbout from "@modules/platforms/events/views/EventIdAbout.vue";
import EventIdFormat from "@modules/platforms/events/views/EventIdFormat.vue";
import EventIdVenue from "@modules/platforms/events/views/EventIdVenue.vue";
import EventIdProducts from "@modules/platforms/events/views/EventIdProducts.vue";
import EventIdPeople from "@modules/platforms/events/views/EventIdPeople.vue";
//services
import eventServices from "@axios/services/eventServices";
import SvgTarget from "@components/SvgTarget.vue";

import {
  BookmarkIcon,
  HeartIcon,
  LinkIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";
import Auctions from "@assets/icons/Auctions.vue";
import ImgFormated from "../../../../core/components/img/ImgFormated.vue";
export default {
  components: {
    XButton60,
    Button60Slot,
    LinkIcon,
    PaperAirplaneIcon,
    HeartIcon,
    BookmarkIcon,
    EventIdAbout,
    EventIdFormat,
    EventIdVenue,
    EventIdPeople,
    EventIdProducts,
    Auctions,
    SvgTarget,
    ImgFormated
},
  data() {
    return {
      id: "",
      infoEvent: "",
      select: "About",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goTo(target) {
      this.$router.push({ name: "EventBuyTicket", params: { id: target } });
    },
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.id = this.$route.params.id;
        this.feadData();
      } else {
        this.goBack();
      }
    },
    ticketsRemaining() {
      let totalTickets = 0;
      for (let index = 0; index < this.infoEvent.tickets.length; index++) {
        totalTickets = totalTickets + this.infoEvent.tickets[index].quantities;
      }
      return totalTickets;
    },
    async feadData() {
      let body = { _id: this.id };
      let result = await eventServices.dataEvent(body);
      if (result.data.success) {
        this.infoEvent = result.data.data;
      }
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
