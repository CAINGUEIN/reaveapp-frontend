<template>
  <div class="px-24 pt-24 pb-12 h-full">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"> </XButton60>

    <div class="flex flex-col w-full h-full">
      <div class="flex justify-between">
        <div>
          <h1>{{ dataTickets[index].ticket.cathegory }} Ticket</h1>
          <h3>
            {{ dataTickets[index].ticket.cathegory }}, Row
            {{ dataTickets[index].row }}, Seat {{ dataTickets[index].column }}
          </h3>
        </div>
        <div>
          <h2 class="text-right">{{ dataEvent.name }}</h2>
          <h3 class="flex items-center">
            <ImgFormated
              :key="dataEvent.owner._id"
              :size="'l'"
              :targetSpace="dataEvent.owner._id"
              :type="'avatar'"
              class="h-8 w-8 rounded-full bg-slate-300 mr-4"
            />Organised by @{{ dataEvent.owner.user_id.userTag }}
          </h3>
        </div>
      </div>
      <div class="flex flex-1 justify-around h-max items-center -mx-24">
        <div class="absolute z-10 left-0 top-0 bottom-0 flex w-1/3">
          <div
            class="absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm"
          ></div>
          <Button60Slot @click="indexDec()" class="flex m-auto"
            ><ArrowLeftIcon class="h-10 w-10 m-auto"></ArrowLeftIcon
          ></Button60Slot>
        </div>
        <div class="relative flex-1 overflow-auto">
          <div
            class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scroll-snap-container scrollbar"
            :style="{ 'scroll-behavior': 'smooth' }"
          >
            <div
              class="w-full snap-always snap-center shrink-0 first:pl-8 last:pr-8 h-1"
            ></div>
            <div
              v-for="(item, index) in dataTickets"
              class="snap-always snap-center shrink-0 first:pl-8 last:pr-8"
            >
              <View3D
                :data="index"
                :color="dataTickets[index].ticket.color"
                :w="paramWidth()"
                :h="paramWidth() * 1.15"
                class="scroll-snap-item shrink-0 object-cover"
              ></View3D>
            </div>
            <div
              class="w-full snap-always snap-center shrink-0 first:pl-8 last:pr-8 h-1"
            ></div>
          </div>
        </div>
        <div class="absolute z-10 right-0 top-0 bottom-0 flex w-1/3">
          <div
            class="absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm"
          ></div>
          <Button60Slot @click="indexInc()" class="flex m-auto"
            ><ArrowRightIcon class="h-10 w-10 m-auto"></ArrowRightIcon
          ></Button60Slot>
        </div>
      </div>
      <div>
        <div
          v-if="!dataTickets[index].owner_id"
          class="flex flex-col justify-around items-center"
        >
          <div class="flex items-center">
            <Checkmark class="mx-auto"></Checkmark>
            <h2 class="ml-4">Tickets Acquired</h2>
          </div>
          <div class="flex items-center mt-6">
            <button
              @click="open = true"
              class="text-black rounded-full h-16 px-10 ml-0 w-80 bg-white"
            >
              <h4 class="text-black">See QR Code</h4>
            </button>
            <Button60Slot class="flex ml-6"
              ><Wallet class="m-auto"></Wallet
            ></Button60Slot>
          </div>
        </div>
        <div class="mb-24" v-else>
          <h2 class="text-center flex items-center justify-center">
            Gifted to
            <ImgFormated
              :key="dataTickets[index].owner_id._id"
              :size="'l'"
              :targetSpace="dataTickets[index].owner_id._id"
              :type="'avatar'"
              class="h-8 w-8 rounded-full bg-slate-300 mx-4"
            />
            @{{ dataTickets[index].owner_id.userTag }}
          </h2>
        </div>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <QRView
        @action="close()"
        :event="dataEvent.name"
        :place="
          dataTickets[index].ticket.cathegory +
          ', Row ' +
          dataTickets[index].row +
          ', Seat ' +
          dataTickets[index].column
        "
        :other="'pour le moment pas fait'"
      ></QRView>
    </ModalClear>
  </div>
</template>

<script>
import XButton60 from "@components/buttons/XButton60.vue";
import ModalClear from "@components/modal/ModalClear.vue";
import Button60Slot from "@components/buttons/Button60Slot.vue";
import Checkmark from "@assets/icons/Wallet/Checkmark.vue";
import Wallet from "@assets/icons/Wallet.vue";
import View3D from "@components/modal/wallet/View3D.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";
import QRView from "@components/modal/wallet/QRView.vue";
import ImgFormated from "../img/ImgFormated.vue";
export default {
  components: {
    Button60Slot,
    XButton60,
    ArrowLeftIcon,
    ArrowRightIcon,
    View3D,
    Checkmark,
    Wallet,
    ModalClear,
    QRView,
    ImgFormated,
  },
  props: ["dataTickets", "dataEvent", "ticketsResumeBuy"],
  data() {
    return {
      index: 0,
      open: false,
    };
  },
  methods: {
    goBack() {
      this.$emit("action");
    },
    indexDec() {
      if (this.index > 0) {
        this.index--;
        this.scrollLeft();
      }
    },
    indexInc() {
      if (this.index < this.dataTickets.length - 1) {
        this.index++;
        this.scrollRight();
      }
    },
    scrollLeft() {
      const container = document.querySelector(".scroll-snap-container");
      container.scrollLeft -= window.innerWidth / 4;
    },
    scrollRight() {
      const container = document.querySelector(".scroll-snap-container");
      container.scrollLeft += window.innerWidth / 4;
    },
    scrollStart() {
      const container = document.querySelector(".scroll-snap-container");
      container.scrollLeft += window.innerWidth / 2;
    },
    close() {
      this.open = false;
    },
    paramWidth() {
      return window.innerWidth / 4;
    },
  },
  mounted() {
    this.scrollStart();
  },
};
</script>
