<template>
  <div v-if="infoEvent" class="overflow-y-auto h-screen scrollbarV">
    <XButton40 @click="goBack" class="absolute right-6 top-6 z-10"></XButton40>

    <!-- An attempt to a responsive page -->
    <div class="flex ml-[8.3vw] mt-[3.33vw]">
      <div>
        <img src="/img/BigIMG.png" class="rounded-2xl w-[53vw]" />
      </div>
      <div class="flex flex-col ml-[2.5vw]">
        <div class="flex flex-[0.99] mt-[1.6vw] flex-col w-[24vw]">
          <div class="text-[2.5vw] text-white font-bold">
            {{ infoEvent.name }}
          </div>
          <div class="flex">
            <div class="flex flex-col w-full">
              <div class="flex gap-[0.625vw] items-center">
                <ImgFormated
                  :key="infoEvent.owner._id"
                  :size="'s'"
                  :targetSpace="infoEvent.owner._id"
                  :type="'avatar'"
                  class="h-[1.6vw] w-[1.6vw] rounded-full bg-slate-300 my-[0.4vw]"
                />
                <div class="text-[0.83vw] text-white font-medium">
                  Organised by @{{ infoEvent.owner.user_id.userTag }}
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
                    <p class="text-[0.83vw] font-medium my-auto pl-2">Dates</p>
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
          <div v-for="item in nav" class="flex">
            <Button40Slot class="my-[0.41vw] mr-[0.41vw]">
              <SvgTarget
                class="m-auto flex-row"
                :target="item.icon"
                :width="24"
                :height="24"
              ></SvgTarget>
            </Button40Slot>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row"></div>
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
import Button40Slot from "@components//buttons/Button40Slot.vue";
import XButton60 from "@components/buttons/XButton60.vue";
import XButton40 from "@components/buttons/XButton40.vue";
import EventIdAbout from "@modules/platforms/events/EventIdAbout.vue";
import EventIdFormat from "@modules/platforms/events/EventIdFormat.vue";
import EventIdVenue from "@modules/platforms/events/EventIdVenue.vue";
import EventIdProducts from "@modules/platforms/events/EventIdProducts.vue";
import EventIdPeople from "@modules/platforms/events/EventIdPeople.vue";
import Bootcamps from "@assets/icons/Bootcamps.vue";
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
    Bootcamps,
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
    ImgFormated,
  },
  data() {
    return {
      nav: [
        { name: "Link", icon: "Link", target: "Link" },
        { name: "Share", icon: "Share", target: "Share" },
        { name: "Heart", icon: "Heart", target: "Heart" },
        { name: "Save", icon: "Save", target: "Save" },
      ],
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
      //this.$router.push({ name: "EventBuyTicket" });
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
      let result = await EventServices.dataEvent(body);
      if (result.data.success) {
        this.infoEvent = result.data.data;
        this.infoEvent.ticketsRemaining = this.ticketsRemaining();
        console.log("VOICI LES INFOS EVENTS : ", this.infoEvent);
      }
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
