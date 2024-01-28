<template>
  <div
    v-if="this.infoEvent && page === 'buy'"
    class="overflow-y-auto h-screen scrollbarV pb-8"
  >
    <div class="mx-24 mt-28 flex">
      <div class="w-2/3 flex flex-col">
        <SeatMap
          :tickets="infoEvent.tickets"
          :listTicket="listTicket"
          @push="pushTicket"
          @remove="removeTicket"
          class="aspect-2 bg-DarkRock rounded-2xl max-h-[736px] w-full flex flex-col overflow-auto scrollbarV space-y-2 p-2 h-full"
        >
        </SeatMap>
        <div
          class="p-[14px] mt-8 bg-DarkRock rounded-2xl flex justify-between items-center"
        >
          <div name="tickets" class="flex ml-4">
            <div
              v-for="item in infoEvent.tickets"
              :key="item"
              class="flex items-center mr-16"
            >
              <div
                :style="'background: #' + item.color"
                class="h-6 w-6 rounded-full"
              ></div>
              <div class="ml-4">
                <p class="leading-6">{{ item.category }}</p>
                <div class="flex items-center">
                  <h3 class="leading-7">{{ item.price }}€</h3>
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
              <img
                :src="infoSpace.picture"
                class="h-8 w-8 rounded-full bg-slate-300"
              />
              <p class="text-white font-medium">
                Organised by @{{ infoSpace.nameSpace }}
              </p>
            </div>
            <h4 class="mt-4 text-base font-black">
              {{ $dayjs(infoEvent.date).format("dddd, MM.DD.YYYY  hh:mm A") }}
            </h4>
            <h4 class="mt-1 text-base font-black">
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
            :key="index"
            class="flex justify-between bg-DarkRock p-3 pr-4 rounded-2xl"
          >
            <div name="info" class="flex items-center">
              <div name="img" class="w-16 h-16 rounded-2xl">
                <ImgFormated
                  :key="infoEvent._id"
                  :size="'m'"
                  :targetSpace="infoEvent._id"
                  :type="'event'"
                  class="absolute rounded-lg top-0 bottom-0"
                />
                <div
                  class="absolute flex right-0 bottom-0 h-6 w-6 bg-white rounded-full"
                >
                  <SvgTarget
                    target="Bootcamps"
                    :width="16"
                    :height="16"
                    class="m-auto text-Anthracite"
                  ></SvgTarget>
                </div>
              </div>
              <div class="ml-3">
                <h3
                  class="leading-7 font-medium text-xl"
                  :style="'color: #' + item.ticket.color"
                >
                  {{ item.ticket.category }}
                </h3>
                <p class="leading-6 text-base font-medium">
                  ZoneName, Row {{ item.row }}, Seat {{ item.column }}
                </p>
              </div>
            </div>
            <div name="other" class="flex flex-col items-end">
              <div class="flex items-center">
                <h3 class="">{{ item.ticket.price }}€</h3>
              </div>
              <div v-if="item.owner_id" class="flex items-center space-x-2">
                <ImgFormated
                  :key="item.owner_id._id"
                  :size="'s'"
                  :targetSpace="item.owner_id._id"
                  :type="'avatar'"
                  class="w-6 h-6 border-2 border-Frog rounded-full bg-Gravel"
                />
                <div class="flex flex-col">
                  <p class="text-base font-black text-White">
                    {{ item.owner_id.profileName }}
                  </p>
                </div>
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
                {{ totalTicketsCoin() }}€
              </p>
            </div>
            <p class="font-medium">
              {{ listTicket.length }} Seat{{ listTicket.length > 1 ? "s" : "" }}
            </p>
          </div>
        </div>
        <button
          class="rounded-full py-4 px-8 mt-6 mx-auto"
          :class="
            listTicket.length === 0
              ? 'text-black bg-LightGrey cursor-not-allowed'
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
      <!-- <SelectOwner v-else @action="close"></SelectOwner> -->
    </ModalClear>
  </div>
  <div v-if="infoEvent && page === 'resume'" class="h-full">
    <ResumeTicketsBuy
      @action="closeResume()"
      :dataTickets="listTicket"
      :dataEvent="infoEvent"
      :dataSpace="infoSpace"
      :ticketsResumeBuy="ticketsResumeBuy"
    ></ResumeTicketsBuy>
  </div>
</template>
<script setup>
//components
import ModalClear from "@components/modal/ModalClear.vue";
import SeatMap from "@components/eventBuyTicket/SeatMap.vue";
import ResumeTicketsBuy from "@components/eventBuyTicket/ResumeTicketsBuy.vue";
//services
import ticketServices from "@axios/services/ticketServices";
import useStoreAuth from "@stores/auth";
//tools
import Crediting from "@components/modal/wallet/Crediting.vue";
import SvgTarget from "@components/SvgTarget.vue";
import ImgFormated from "@components/img/ImgFormated.vue";
import { ref } from "vue";

const props = defineProps({
  dataEvent: {
    type: Object,
  },
  dataSpace: {
    type: Object,
  },
});

const emit = defineEmits(["update"]);
const open = ref(false);
const id = ref("");
const listTicket = ref([]);
const indexTicket = ref("");
const view = ref("");
const page = ref("buy");
const ticketsResumeBuy = ref("");

const store = useStoreAuth();
const infoEvent = ref(props.dataEvent);
const infoSpace = ref(props.dataSpace);

const ticketsRemaining = () => {
  let totalTickets = 0;
  let ticketsSold = 0;
  for (let index = 0; index < infoEvent.value.tickets.length; index++) {
    totalTickets = totalTickets + infoEvent.value.tickets[index].quantities;
    ticketsSold =
      ticketsSold + infoEvent.value.tickets[index].soldTickets.length;
  }
  return totalTickets - ticketsSold;
};

const pushTicket = (data) => {
  listTicket.value.push(data);
};

const removeTicket = (index) => {
  listTicket.value.splice(index, 1);
};

const totalTicketsCoin = () => {
  let result = 0;
  for (let index = 0; index < listTicket.value.length; index++) {
    result = result + listTicket.value[index].ticket.price;
  }
  return result;
};

const buyAction = async () => {
  let body = {
    arrayTickets: listTicket.value,
    event_id: id.value,
    eventName: infoEvent.value.name,
  };
  let result = await ticketServices.buy(body);
  if (result.data.success) {
    store.dataAccount = result.data.data;
    page.value = "resume";
    ticketsResumeBuy.value = body;
    emit("update", ticketsResumeBuy.value.arrayTickets[0].ticket.category);
  }
};

const close = (userSelect) => {
  open.value = false;
  if (userSelect) {
    listTicket.value[indexTicket.value]["owner_id"] = userSelect;
  }
  view.value = "";
};

const closeResume = () => {
  listTicket.value = [];
  page.value = "buy";
};

const selectUser = (index) => {
  indexTicket.value = index;
  open.value = true;
};
</script>
<style lang="scss" scoped></style>
