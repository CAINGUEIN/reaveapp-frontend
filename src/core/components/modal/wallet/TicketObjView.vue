<template>
  <div class="px-24 pt-24 pb-12 h-screen">
    <XButton60 @click="goBack" class="absolute right-6 top-6 z-10"> </XButton60>

    <div class="flex flex-col w-full h-full">
      <div class="flex justify-between">
        <div>
          <h1 class="uppercase" :style="'color: #' + matchData('color')">
            {{ matchData("cathegory") }}
          </h1>
          <h3 class="mt-3 font-medium text-2xl flex">
            <div class="h-9 w-9 rounded-full bg-white flex mr-4">
              <SvgTarget
                target="Bootcamps"
                :width="24"
                color1="#000"
                class="mx-auto my-auto"
              ></SvgTarget>
            </div>
            Row
            {{ infoTicket.row }}, Seat
            {{ infoTicket.column }}
          </h3>
        </div>
        <div>
          <h2 class="text-right text-[32px] font-bold">{{ infoEvent.name }}</h2>
          <div class="flex items-center">
            <div class="rounded-full bg-slate-400 h-9 w-9 mr-3"></div>
            <h3 class="text-xl font-medium">
              Organised by @{{ infoEvent.owner.user_id.userTag }}
            </h3>
          </div>
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
        <div class="flex w-full justify-between items-center my-6">
          <div class="space-x-8">
            <button @click="(view = 'owner'), (open = true)">
              <h4 class="text-LightGrey">Ownership History</h4>
            </button>
            <button @click="(view = 'item'), (open = true)">
              <h4 class="text-LightGrey ml-3">Item Characteristics</h4>
            </button>
          </div>
          <div class="flex">
            <button
              @click="(view = 'qr'), (open = true)"
              class="text-black flex rounded-full h-15 w-15 bg-white"
            >
              <SvgTarget
                color1="#000000"
                class="m-auto"
                :width="32"
                :height="32"
                target="QRCode"
              >
              </SvgTarget>
            </button>
            <Button60Slot class="flex ml-6 relative">
              <SvgTarget color1="#BEBEBE" class="m-auto" target="Conceptor">
              </SvgTarget>
              <div class="absolute bottom-2 left-0 right-0 flex">
                <SvgTarget class="mx-auto" target="SOON" 
                :height="32"></SvgTarget>
              </div>
            </Button60Slot>

            <Button60Slot class="flex ml-6"
              ><SvgTarget
                color1="#BEBEBE"
                class="m-auto"
                target="Gift"
              ></SvgTarget>
              <div class="absolute bottom-2 left-0 right-0 flex">
                <SvgTarget class="mx-auto" target="SOON" 
                :height="32"></SvgTarget>
              </div>
            </Button60Slot>
            <Button60Slot class="flex ml-6">
              <SvgTarget
                color1="#BEBEBE"
                class="m-auto"
                :width="32"
                :height="32"
                target="Cash"
              >
              </SvgTarget>
              <div class="absolute bottom-2 left-0 right-0 flex">
                <SvgTarget class="mx-auto" target="SOON" 
                :height="32"></SvgTarget>
              </div>
            </Button60Slot>
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
import SvgTarget from "../../SvgTarget.vue";
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
    SvgTarget,
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
