<template>
  <div v-if="infoEvent" class="overflow-y-auto h-screen">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
    <div class="mx-24 mt-28 flex">
      <div class="w-2/3 flex flex-col">
        <div class="aspect-2 bg-DarkRock rounded-2xl flex flex-col overflow-auto scrollbarV space-y-2 p-2">
          <div v-for="typeTicket in infoEvent.tickets" class="flex-1 mx-auto">
            <div v-if="typeTicket.type === 'Sitting'" class="flex">
              <div v-for="(ligne, indexRow) in typeTicket.row" class="space-y-2">
                <div v-for="(seat, indexColumn) in typeTicket.column"
                :style="'background: #' + typeTicket.color"
                class="space-x-1 rounded-2xl w-12 h-7 flex">
                <p class="m-auto text-black">{{ indexRow + "-" + indexColumn }}</p></div>
              </div>

            </div>
          </div>
        </div>
        <div
          class="h-20 mt-8 bg-DarkRock rounded-2xl flex justify-between items-center"
        >
          <div name="tickets" class="flex space-x-8 ml-4">
            <div
              v-for="item in infoEvent.tickets"
              class="flex items-center space-x-4"
            >
              <div
                :style="'background: #' + item.color"
                class="h-6 w-6 rounded-full"
              ></div>
              <div>
                <p>{{ item.cathegory }}</p>
                <div class="flex items-center">
                  <h3>{{ item.price }}</h3>
                  <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
                </div>
              </div>
            </div>
          </div>
          <div name="info" class="flex space-x-4 mr-4">
            <div class="">
              <p>available Tickets</p>
              <h3>{{ ticketsRemaining() }}</h3>
            </div>
            <div class="">
              <p>Booking time left</p>
              <h3 class="text-Orange">{{ $dayjs(infoEvent.date).fromNow() }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-18 flex flex-col justify-between w-1/3">
        <div class="space-y-4 flex flex-col">
          <h1>{{ infoEvent.name }}</h1>
          <div class="flex flex-col">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-slate-300"></div>
              <p>Organised by @{{ infoEvent.owner.user_id.userTag }}</p>
            </div>
            <h4>
              {{ $dayjs(infoEvent.date).format("dddd MM.DD.YYYY hh:mm A") }}
            </h4>
            <h4>
              {{
                infoEvent.venueName +
                ", " +
                infoEvent.adress +
                ", " +
                infoEvent.city +
                ", " +
                infoEvent.country
              }}
            </h4>
          </div>
        </div>
        <div name="backet"></div>
        <button
          class="text-black rounded-full h-16 px-10 ml-0 w-80 mt-6 bg-white"
        >
          <h4 class="text-black">Buy</h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//components
import Button60Slot from "@components//buttons/Button60Slot.vue";
import XButton60 from "@components/buttons/XButton60.vue";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";
//services
import eventServices from "@axios/services/eventServices";
export default {
  components: {
    XButton60,
    Button60Slot,
    GoldRC,
  },
  data() {
    return {
      id: "",
      infoEvent: "",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
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
