<template>
  <div class="px-24 pt-24 pb-12 h-screen">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"> </XButton60>

    <div class="flex flex-col w-full h-full">
      <div class="flex justify-between">
        <div>
          <h1>{{ matchData("cathegory") }} Ticket</h1>
          <h3>
            {{ matchData("cathegory") }}, Row {{ infoTicket.row }}, Seat
            {{ infoTicket.column }}
          </h3>
        </div>
        <div>
          <h2 class="text-right">{{ infoEvent.name }}</h2>
          <h3>Organised by @{{ infoEvent.owner.user_id.userTag }}</h3>
        </div>
      </div>
      <div class="flex flex-1 justify-around h-max items-center my-4">
        <View3D
          :data="infoTicket._id"
          :color="matchData('color')"
          :w="paramWidth()"
          :h="paramWidth() * 1.15"
          class="scroll-snap-item shrink-0 object-cover"
        ></View3D>
      </div>
      <div class="flex w-full flex-col justify-around items-center">
        <div class="flex w-full justify-between items-center mt-6">
          <div class="space-x-8">
            <button @click="view = 'owner', open = true"><h4>Ownership History</h4></button>
            <button @click="view = 'item', open = true">
              <h4>Item Characteristics</h4>
            </button>
          </div>
          <div class="flex">
            <button
              @click="view = 'qr', open = true"
              class="text-black rounded-full h-16 w-16 bg-white"
            >
              <h4 class="text-black">QR</h4>
            </button>
            <Button60Slot class="flex ml-6"
              ><Wallet class="m-auto"></Wallet
            ></Button60Slot>
            <Button60Slot class="flex ml-6"
              ><Wallet class="m-auto"></Wallet
            ></Button60Slot>
            <Button60Slot class="flex ml-6"
              ><Wallet class="m-auto"></Wallet
            ></Button60Slot>
          </div>
        </div>
      </div>
    </div>
    <ModalClearVarient :open="open" @action="close()">
      <QRView
      class="sm:my-8 sm:m-6 mx-4 mt-5 mb-4"
        v-if="view === 'qr'"
        @action="close()"
        :event="infoEvent.name"
        :place="
          matchData('cathegory') +
          ', Row ' +
          infoTicket.row +
          ', Seat ' +
          infoTicket.column
        "
        :other="'pour le moment pas fait'"
      ></QRView>
      <img
        class=""
        v-if="view === 'owner'"
        src="../../../../../public/walletModal/owner.png"
        alt=""
      />
      <img
        v-if="view === 'item'"
        src="../../../../../public/walletModal/item.png"
        alt=""
      />
    </ModalClearVarient>
  </div>
</template>

<script>
import XButton60 from "@components/buttons/XButton60.vue";
import ModalClearVarient from "@components/modal/ModalClearVarient.vue";
import Button60Slot from "@components/buttons/Button60Slot.vue";
import Checkmark from "@assets/icons/Wallet/Checkmark.vue";
import Wallet from "@assets/icons/Wallet.vue";
import View3D from "@components/modal/wallet/View3D.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";
import QRView from "@components/modal/wallet/QRView.vue";
export default {
  components: {
    Button60Slot,
    XButton60,
    ArrowLeftIcon,
    ArrowRightIcon,
    View3D,
    Checkmark,
    Wallet,
    ModalClearVarient,
    QRView,
  },
  props: ["infoEvent", "infoTicket"],
  data() {
    return {
      open: false,
      View: "qr",
    };
  },
  methods: {
    goBack() {
      this.$emit("action");
    },
    close() {
      this.open = false;
    },
    matchData(value) {
      let target = this.infoTicket.event_id;

      let ticketsData = this.infoEvent.tickets;
      for (let index = 0; index < ticketsData.length; index++) {
        if (ticketsData[index]._id === target) {
          return ticketsData[index][value];
        }
      }
      console.log(target);

      return "rien";
    },
    paramWidth() {
      return window.innerWidth / 4;
    },
  },
};
</script>
