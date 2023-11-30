<template>
  <div v-if="infoEvent" class="overflow-y-auto h-screen scrollbarV">

    <XButton40 @click="goBack" class="absolute right-6 top-6 z-10"></XButton40>
    <div class="ml-5 mt-20 flex">
      <div class="w-[1016px] rounded-2xl flex">
        <img src="/img/BigIMG.png" alt="" class="my-auto w-full" />
      </div>
      <div class="ml-10 flex flex-col justify-between w-2/5">
        <div class="flex flex-col justify-between mt-6">
          <h1 class="text-[48px] font-bold">{{ infoEvent.name }}</h1>
          <div class="flex items-center space-x-4">
            <ImgFormated :key="infoEvent.owner._id" :size="'s'" :targetSpace="infoEvent.owner._id" :type="'avatar'"
              class="h-8 w-8 rounded-full bg-slate-300 my-3" />
            <p class="text-white font-medium">
              Organised by @{{ infoEvent.owner.user_id.userTag }}
            </p>
          </div>
          <div class="flex mt-4 w-full">
            <button class="text-black rounded-full h-[40px]  ml-0 w-[191px] bg-white flex" @click="goTo()">

              <div class="flex items-center m-auto">
                <SvgTarget :target="'Tickets'" color1="#000" :width="24" :height="24" class="mr-2"></SvgTarget>
                <h4 class="text-black text-base font-black">Buy Tickets</h4>
              </div>
            </button>
            <!-- <Button60Slot class="ml-4 my-auto relative">
              <Auctions :width="32" :height="32" class="m-auto"></Auctions>
              <div class="absolute bottom-0 left-0 right-0 flex">
                <SvgTarget
                  :height="40"
                  :width="40"
                  class="mx-auto"
                  target="SOON"
                ></SvgTarget>
              </div>
            </Button60Slot> -->
          </div>
          <div class="grid-cols-2 grid w-full gap-4 mt-10">
            <div class="col-span-1">
              <p>Date</p>
              <h3 class="text-xl font-black">{{ $dayjs(infoEvent.date).format("MM.DD.YYYY") }}</h3>
              <h3 class="text-xl font-black">at {{ $dayjs(infoEvent.date).format("hh:mm A") }}</h3>
            </div>
            <div class="col-span-1">
              <p>Location</p>
              <h3 class="text-xl font-black">
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
              <p>Booking Time Left</p>
              <h3 class="text-xl font-black">{{ $dayjs(infoEvent.date).fromNow() }}</h3>
            </div>
            <div class="col-span-1">
              <p>Remaining Seats</p>

            </div>
          </div>
        </div>
        <!------------------------------------>
        <div  class="flex">
          <Button40Slot class="my-2 mr-2">
            <SvgTarget class="m-auto" target="Link" :width="24" :height="24"></SvgTarget>
          </Button40Slot>
          <Button40Slot class="m-2">
            <SvgTarget class="m-auto" target="Share" :width="24" :height="24"></SvgTarget>
          </Button40Slot>
          <Button40Slot class="m-2">
            <SvgTarget class="m-auto" target="Heart" :width="24" :height="24"></SvgTarget>
          </Button40Slot>
          <Button40Slot class="m-2">
            <SvgTarget class="m-auto" target="Save" :width="24" :height="24"></SvgTarget>
          </Button40Slot>
        </div>
      </div>
    </div>
    <div class="mx-24 mt-10">
      <div class="w-full border-b-2 border-Gravel flex justify-around">
        <div class="-mb-0.5">
          <button class="border-b-2 pb-2 px-10" :class="select === 'About'
              ? 'border-White'
              : 'hover:border-White border-Gravel'
            " @click.prevent="select = 'About'">
            <p class="text-xl font-medium" :class="select === 'About' ? 'text-White' : 'hover:text-White'">
              About
            </p>
          </button>
          <button class="border-b-2 pb-2 px-10" :class="select === 'Format'
              ? 'border-White'
              : 'hover:border-White border-Gravel'
            " @click.prevent="select = 'Format'">
            <p class="text-xl font-medium" :class="select === 'Format' ? 'text-White' : 'hover:text-White'">
              Format
            </p>
          </button>
          <button class="border-b-2 pb-2 px-10" :class="select === 'Venue'
              ? 'border-White'
              : 'hover:border-White border-Gravel'
            " @click.prevent="select = 'Venue'">
            <p class="text-xl font-medium" :class="select === 'Venue' ? 'text-White' : 'hover:text-White'">
              Venue
            </p>
          </button>
          <button class="border-b-2 pb-2 px-10" :class="select === 'Products'
              ? 'border-White'
              : 'hover:border-White border-Gravel'
            " @click.prevent="select = 'Products'">
            <p class="text-xl font-medium" :class="select === 'Products' ? 'text-White' : 'hover:text-White'">
              Products
            </p>
          </button>
          <button class="border-b-2 pb-2 px-10" :class="select === 'People'
              ? 'border-White'
              : 'hover:border-White border-Gravel'
            " @click.prevent="select = 'People'">
            <p class="text-xl font-medium" :class="select === 'People' ? 'text-White' : 'hover:text-White'">
              People
            </p>
          </button>
        </div>
      </div>
    </div>
    <div>
      <EventIdAbout v-if="select === 'About'" :data="infoEvent"></EventIdAbout>
      <EventIdFormat v-if="select === 'Format'" :data="infoEvent"></EventIdFormat>
      <EventIdVenue v-if="select === 'Venue'" :data="infoEvent"></EventIdVenue>
      <EventIdProducts v-if="select === 'Products'" :data="infoEvent"></EventIdProducts>

      <EventIdPeople v-if="select === 'People'" :data="infoEvent"></EventIdPeople>
    </div>
  </div>
</template>

<script>
//components
import Button60Slot from "@components//buttons/Button60Slot.vue";
import Button40Slot from "@components//buttons/Button40Slot.vue";
import XButton60 from "@components/buttons/XButton60.vue";
import XButton40 from "@components/buttons/XButton40.vue";
import EventIdAbout from "@modules/platforms/events/EventIdAbout.vue";
import EventIdFormat from "@modules/platforms/events/EventIdFormat.vue";
import EventIdVenue from "@modules/platforms/events/EventIdVenue.vue";
import EventIdProducts from "@modules/platforms/events/EventIdProducts.vue";
import EventIdPeople from "@modules/platforms/events/EventIdPeople.vue";
//services
import EventServices from "@axios/services/eventServices";
import SvgTarget from "@components/SvgTarget.vue";

import {
  BookmarkIcon,
  HeartIcon,
  LinkIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";
import Auctions from "@assets/icons/Auctions.vue";
import ImgFormated from "@components/img/ImgFormated.vue";
export default {
  components: {
    XButton40,
    Button60Slot,
    Button40Slot,
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
      id: "655e3a1bc7a488be76608eff",
      infoEvent: "",
      select: "About",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goTo(target) {
      this.$router.push({ name: "EventBuyTicket" });
    },
    getUrl() {
      // if (Object.keys(this.$route.params).length > 0) {
      // this.id = this.$route.params.id;
      this.feadData();
      //} else {
      //   this.goBack();
      //}
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
      let result = await EventServices.dataEvent(body);
      console.log("VOICI LES INFOS EVENTS : ", result);
      if (result.data.success) {
        this.infoEvent = result.data.data;
        console.log("VOICI LES INFOS EVENTS : ", this.infoEvent);
      }
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped>div {
  border: 2px solid red;
}</style>
