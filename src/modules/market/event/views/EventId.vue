<template>
  <div v-if="infoEvent" class="overflow-y-auto h-screen">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
    <div class="mx-24 mt-28 flex">
      <div class="w-2/3 aspect-2 bg-slate-500 rounded-2xl"></div>
      <div class="pl-18 pt-20 flex flex-col justify-between w-1/3">
        <div class="space-y-4 flex flex-col">
          <h1>{{ infoEvent.name }}</h1>
          <div class="flex items-center space-x-4">
            <div class="h-15 w-15 rounded-full bg-slate-300"></div>
            <p>Organised by @{{ infoEvent.owner.user_id.userTag }}</p>
          </div>
          <button
            class="text-black rounded-full h-16 px-10 ml-0 w-80 mt-6 bg-white"
            @click="goTo(infoEvent._id)"
          >
            <h4 class="text-black">Buy Tickets</h4>
          </button>
          <div class="grid-cols-2 grid w-full gap-8">
            <div class="col-span-1">
              <p>date</p>
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
          <Button60Slot class="m-2"
            ><LinkIcon class="h-8 m-auto"></LinkIcon
          ></Button60Slot>
          <Button60Slot class="m-2"
            ><PaperAirplaneIcon class="h-8 m-auto rotate-45"></PaperAirplaneIcon
          ></Button60Slot>
          <Button60Slot class="m-2"
            ><HeartIcon class="h-8 m-auto"></HeartIcon
          ></Button60Slot>
          <Button60Slot class="m-2"
            ><BookmarkIcon class="h-8 m-auto"></BookmarkIcon
          ></Button60Slot>
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
            <p :class="select === 'About' ? 'text-White' : 'hover:text-White'">
              About
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
            <p :class="select === 'Venue' ? 'text-White' : 'hover:text-White'">
              Venue
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
            <p :class="select === 'People' ? 'text-White' : 'hover:text-White'">
              People
            </p>
          </button>
        </div>
      </div>
    </div>
    <div>
      <EventIdAbout v-if="select === 'About'" :data="infoEvent"></EventIdAbout>
      <EventIdVenue v-if="select === 'Venue'" :data="infoEvent"></EventIdVenue>
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
import EventIdAbout from "@modules/marketPlace/event/views/EventIdAbout.vue";
import EventIdVenue from "@modules/marketPlace/event/views/EventIdVenue.vue";
import EventIdPeople from "@modules/marketPlace/event/views/EventIdPeople.vue";
//services
import eventServices from "@axios/services/eventServices";
import {
  BookmarkIcon,
  HeartIcon,
  LinkIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";
export default {
  components: {
    XButton60,
    Button60Slot,
    LinkIcon,
    PaperAirplaneIcon,
    HeartIcon,
    BookmarkIcon,
    EventIdAbout,
    EventIdVenue,
    EventIdPeople,
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
