<template>
  <div class="px-24 pt-8 pb-12 h-full">
    <div class="flex flex-col w-full h-full">
      <div class="flex justify-between">
        <div>
          <h1 :style="`color:#${dataTickets[index].ticket.color}`">{{ dataTickets[index].ticket.category }}</h1>
          <h3>
            {{ dataTickets[index].ticket.category }}, Row
            {{ dataTickets[index].row }}, Seat {{ dataTickets[index].column }}
          </h3>
        </div>
        <div>
          <h2 class="text-right font-bold">{{ dataEvent.name }}</h2>
          <h3 class="flex items-center font-medium">
            <img class="w-8 h-8 rounded-full mr-3" :src="this.dataSpace.picture" alt=""/>Organised by @{{ this.dataSpace.nameSpace }}
          </h3>
        </div>
      </div>
      <div class="flex flex-1 justify-around h-max items-center -mx-24">
        <div class="absolute z-10 left-0 top-0 bottom-0 flex w-1/3">
          <div
            class="absolute left-0 top-0 bottom-0 right-0 backdrop-blur-sm"
          ></div>
          <Button60Slot
            @click="indexDec()"
            class="flex m-auto"
            v-if="dataTickets.length > 1"
            ><ArrowLeftIcon class="h-10 w-10 m-auto"></ArrowLeftIcon
          ></Button60Slot>
        </div>
        <div class="relative flex-1 overflow-auto">
          <div
            class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-snap-container scrollbar"
            :style="{ 'scroll-behavior': 'smooth' }"
          >
            <div
              class="w-full snap-always snap-center shrink-0 first:pl-8 last:pr-8 h-1"
            ></div>
            <div
              v-for="(item, index) in dataTickets"
              :key="index"
              class="snap-always snap-center shrink-0 first:pl-8 last:pr-8"
            >
              <View3D
                :data="index"
                :color="dataTickets[index].ticket.color"
                :w="paramWidth()"
                :h="paramWidth()"
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
          <Button60Slot
            @click="indexInc()"
            class="flex m-auto"
            v-if="dataTickets.length > 1"
            ><ArrowRightIcon class="h-10 w-10 m-auto"></ArrowRightIcon
          ></Button60Slot>
        </div>
      </div>
      <div>
        <div
          v-if="!dataTickets[index].owner_id"
          class="flex flex-col mb-16 justify-around items-center"
        >
          <div class="flex items-center mt-6 bg-DarkRock rounded-2xl px-4 py-3">
            <button
              @click="open = true"
              class="text-black flex flex-row justify-center items-center rounded-full h-16 px-10 ml-0 w-80 bg-white"
            >
              <SvgTarget
                :target="'QRCode'"
                :width="24"
                :height="24"
                class="mr-2"
              />
              <h4 class="text-black font-black">See QR Code</h4>
            </button>
            <div>
              <Button60Slot
              @click="router.push({ name: 'Personal', params: { view: 'conceptor' } })"
              :dataClass="'bg-LightRock hover:bg-Platinium'"
                class="flex ml-6 bg-LightRock hover:bg-Platinium rounded-full"
                ><SvgTarget :target="'conceptor'" class="m-auto" />
              </Button60Slot>
            </div>
            <div>
              <Button60Slot
                :dataClass="'bg-LightRock hover:bg-Platinium'"
                class="flex ml-6 rounded-full"
                ><GiftTo class="m-auto"
              /></Button60Slot>
            </div>

            <div class="flex flex-row bg-Rock ml-6 rounded-full">
              <Button60Slot
                :dataClass="'bg-LightRock hover:bg-Platinium'"
                class="flex rounded-full"
                ><SvgTarget class="m-auto" :target="'Preview'" />
              </Button60Slot>
              <Button60Slot :dataClass="'bg-Rock hover:bg-LightRock'" class="flex hover:bg-Platinium rounded-full"
                ><svg
                  class="m-auto"
                  width="30"
                  height="30"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0605 12.8757C16.0605 13.7992 15.7375 14.6849 15.1626 15.3379C14.5878 15.991 13.8081 16.3578 12.9951 16.3578C12.1821 16.3578 11.4024 15.991 10.8275 15.3379C10.2526 14.6849 9.92969 13.7992 9.92969 12.8757C9.92969 11.9522 10.2526 11.0665 10.8275 10.4135C11.4024 9.76042 12.1821 9.39355 12.9951 9.39355C13.8081 9.39355 14.5878 9.76042 15.1626 10.4135C15.7375 11.0665 16.0605 11.9522 16.0605 12.8757V12.8757Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.25 12.875C4.55177 8.16598 8.42541 4.75 13 4.75C17.5756 4.75 21.4482 8.16598 22.75 12.875C21.4482 17.584 17.5756 21 13 21C8.42541 21 4.55177 17.584 3.25 12.875Z"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0 22.6274L22.6274 2.47955e-05L25.4558 2.82845L2.82843 25.4559L0 22.6274Z"
                    fill="#212121"
                  />
                  <path
                    d="M2.8877 22.5659L22.5637 2.8899"
                    stroke="#808080"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Button60Slot>
            </div>
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
          dataTickets[index].ticket.category +
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
import router from "../../../plugins/router";
import { useRouter } from "vue-router";
import SvgTarget from "../SvgTarget.vue";
import GiftTo from "../../assets/icons/Wallet/GiftTo.vue";
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
    router,
    SvgTarget,
    GiftTo,
  },
  props: ["dataTickets", "dataEvent", "ticketsResumeBuy","dataSpace"],
  data() {
    const router = useRouter();
    return {
      index: 0,
      router,
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
