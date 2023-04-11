<template>
  <div
    v-if="infoEvent && page === 'buy'"
    class="overflow-y-auto h-screen scrollbarV pb-8"
  >
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"></XButton60>
    <div class="mx-24 mt-28 flex">
      <div class="w-2/3 flex flex-col">
        <SeatMap
          :tickets="infoEvent.tickets"
          :listTicket="listTicket"
          @push="pushTicket"
          @remove="removeTicket"
          class="aspect-2 bg-DarkRock rounded-2xl flex flex-col overflow-auto scrollbarV space-y-2 p-2 h-full"
        >
        </SeatMap>
        <div
          class="p-[14px] mt-8 bg-DarkRock rounded-2xl flex justify-between items-center"
        >
          <div name="tickets" class="flex ml-4">
            <div
              v-for="item in infoEvent.tickets"
              class="flex items-center mr-16"
            >
              <div
                :style="'background: #' + item.color"
                class="h-6 w-6 rounded-full"
              ></div>
              <div class="ml-4">
                <p class="leading-6">{{ item.cathegory }}</p>
                <div class="flex items-center">
                  <h3 class="leading-7">{{ item.price }}</h3>
                  <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
                </div>
              </div>
            </div>
          </div>
          <div name="info" class="flex space-x-4 mr-4">
            <div class="mr-16">
              <p class="leading-6">Available Tickets</p>
              <h3 class="leading-7">{{ ticketsRemaining() }}</h3>
            </div>
            <div class="">
              <p class="leading-6">Booking time left</p>
              <h3 class="text-Orange leading-7">
                {{ $dayjs(infoEvent.date).fromNow() }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-18 flex flex-col justify-between w-1/3">
        <div class="flex flex-col">
          <h1 class="mb-2 font-bold">{{ infoEvent.name }}</h1>
          <div class="flex flex-col">
            <div class="flex items-center space-x-4 mt-6">
              <div class="h-10 w-10 rounded-full bg-slate-300"></div>
              <p class="text-white font-medium">
                Organised by @{{ infoEvent.owner.user_id.userTag }}
              </p>
            </div>
            <h4 class="mt-4 text-base">
              {{ $dayjs(infoEvent.date).format("dddd MM.DD.YYYY hh:mm A") }}
            </h4>
            <h4 class="mt-1 text-base">
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
        <div
          name="backet"
          class="h-[460px] overflow-auto scrollbarV px-2 py-4 space-y-2 border-y-2 border-Gravel my-5"
        >
          <div v-if="listTicket.length === 0" class="w-full h-full flex">
            <div class="m-auto text-center">
              <p class="text-base font-medium">Select Seats on Venue Plan.</p>
              <p class="text-base font-medium">Tickets will appear here.</p>
            </div>
          </div>
          <div
            v-else
            v-for="(item, index) in listTicket"
            class="flex justify-between bg-DarkRock p-2 rounded-2xl"
          >
            <div name="info" class="flex items-center">
              <div name="img" class="w-16 h-16 bg-slate-700 rounded-2xl">
                <div
                  class="absolute flex right-0 bottom-0 h-6 w-6 bg-white rounded-full"
                >
                  <SvgTarget
                    target="Bootcamps"
                    color1="#000"
                    :width="16"
                    :height="16"
                    class="m-auto"
                  ></SvgTarget>
                </div>
              </div>
              <div class="ml-3">
                <h3
                  class="leading-7 font-medium"
                  :style="'color: #' + item.ticket.color"
                >
                  {{ item.ticket.cathegory }}
                </h3>
                <p class="leading-6">ZoneName</p>
                <p class="leading-6">
                  Row {{ item.row }}, Seat {{ item.column }}
                </p>
              </div>
            </div>
            <div name="other" class="flex flex-col items-end">
              <div class="flex items-center">
                <h3 class="">{{ item.ticket.price }}</h3>
                <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
              </div>
              <div v-if="item.owner_id" class="flex items-center space-x-2">
                <div class="flex flex-col">
                  <h5>@{{ item.owner_id.userTag }}</h5>
                  <p>{{ item.owner_id.profileName }}</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-Gravel"></div>
              </div>
              <button v-else @click.prevent="selectUser(index)">
                Select Ticket owner
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <h3 class="font-medium">Total</h3>
          <div class="flex flex-col items-end">
            <div class="flex items-center">
              <p class="text-[32px] text-white font-black">
                {{ totalTicketsCoin() }}
              </p>
              <GoldRC class="ml-0.5" :width="14" :height="14"></GoldRC>
            </div>
            <p>
              {{ listTicket.length }} ticket{{
                listTicket.length > 1 ? "s" : ""
              }}
            </p>
          </div>
        </div>
        <button
          class="rounded-full h-16 w-80 mt-6 mx-auto"
          :class="
            listTicket.length === 0
              ? 'text-black bg-LightGrey'
              : 'text-black bg-white'
          "
          @click.prevent="
            totalTicketsCoin() > this.store.dataAccount.coin
              ? ((view = 'addCoin'), (open = true))
              : listTicket.length > 0
              ? buyAction()
              : ''
          "
        >
          <div class="mx-auto flex justify-center">
            <SvgTarget
              :target="
                totalTicketsCoin() > this.store.dataAccount.coin
                  ? 'Credit'
                  : 'Tickets'
              "
              color1="#000"
              :width="32"
              :height="32"
              class="my-auto mr-2"
            ></SvgTarget>
            <h4 class="text-black font-black my-auto">
              {{
                totalTicketsCoin() > this.store.dataAccount.coin
                  ? "Add Coins"
                  : listTicket.length === 1
                  ? "Buy Ticket"
                  : "Buy Tickets"
              }}
            </h4>
          </div>
        </button>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <Crediting
        v-if="view === 'addCoin'"
        :data="parseInt(this.store.dataAccount.coin - totalTicketsCoin())"
        @action="close"
      ></Crediting>
      <SelectOwner v-else @action="close"></SelectOwner>
    </ModalClear>
  </div>
  <div v-if="infoEvent && page === 'resume'" class="overflow-y-auto h-screen">
    <ResumeTicketsBuy
      @action="closeResume()"
      :dataTickets="listTicket"
      :dataEvent="infoEvent"
      :ticketsResumeBuy="ticketsResumeBuy"
    ></ResumeTicketsBuy>
  </div>
</template>

<script>
//components
import XButton60 from "@components/buttons/XButton60.vue";
import ModalClear from "@components/modal/ModalClear.vue";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";
import SeatMap from "@components/eventBuyTicket/SeatMap.vue";
import ResumeTicketsBuy from "@components/eventBuyTicket/ResumeTicketsBuy.vue";
import SelectOwner from "@components/modal/eventId/SelectOwner.vue";
//services
import eventServices from "@axios/services/eventServices";
import ticketServices from "@axios/services/ticketServices";
//tool
import useStoreAuth from "@stores/auth";
import Crediting from "@components/modal/wallet/Crediting.vue";
import SvgTarget from "@components/SvgTarget.vue";
export default {
  components: {
    XButton60,
    GoldRC,
    ModalClear,
    SeatMap,
    ResumeTicketsBuy,
    SelectOwner,
    Crediting,
    SvgTarget,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      open: false,
      id: "",
      infoEvent: "",
      listTicket: [],
      indexTicket: "",
      view: "",
      page: "buy",
      ticketsResumeBuy: "",
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
      let ticketsSold = 0;
      for (let index = 0; index < this.infoEvent.tickets.length; index++) {
        totalTickets = totalTickets + this.infoEvent.tickets[index].quantities;
        ticketsSold =
          ticketsSold + this.infoEvent.tickets[index].soldTickets.length;
      }
      return totalTickets - ticketsSold;
    },
    async feadData() {
      let body = { _id: this.id };
      let result = await eventServices.dataEvent(body);
      if (result.data.success) {
        this.infoEvent = result.data.data;
      }
    },
    pushTicket(data) {
      console.log(data);
      this.listTicket.push(data);
    },
    removeTicket(index) {
      console.log(this.listTicket);
      this.listTicket.splice(index, 1);
    },
    totalTicketsCoin() {
      let result = 0;
      for (let index = 0; index < this.listTicket.length; index++) {
        result = result + this.listTicket[index].ticket.price;
      }
      return result;
    },
    async buyAction() {
      console.log(this.listTicket);
      let body = {
        arrayTickets: this.listTicket,
        event_id: this.id,
        eventName: this.infoEvent.name,
      };
      let result = await ticketServices.buy(body);
      console.log(result);
      if (result.data.success) {
        this.store.dataAccount = result.data.data;
        this.feadData();
        this.page = "resume";
        this.ticketsResumeBuy = body;
      }
    },
    close(userSelect) {
      this.open = false;
      if (userSelect) {
        this.listTicket[this.indexTicket]["owner_id"] = userSelect;
        console.log(this.listTicket);
      }
      this.view = "";
    },
    closeResume() {
      this.listTicket = [];
      this.page = "buy";
    },
    selectUser(index) {
      this.indexTicket = index;
      this.open = true;
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
