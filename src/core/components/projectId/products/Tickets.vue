<template>
  <div>
    <div name="layout" class="flex justify-between items-center pb-8">
      <p class="flex items-center">
        <button
          v-if="view === 'Calendar' || view === 'Plan'"
          class="bg-DarkRock text-white h-8 w-8 rounded-full items-center hover:bg-LightRock flex mr-2"
          @click.prevent="view = 'list'"
        >
          <SvgTarget
            target="Chevron"
            :width="24"
            :height="24"
            class="m-auto rotate-90"
          ></SvgTarget>
        </button>
        <SvgTarget
          target="Products"
          :height="20"
          :width="20"
          class="mr-2"
        ></SvgTarget>
        <span class="font-black text-xl text-LightGrey">PRODUCTS ></span>

        <span class="font-black text-xl text-white flex items-center"
          ><SvgTarget
            target="Tickets"
            :height="20"
            :width="20"
            class="mx-2"
          ></SvgTarget
          >TICKETS
        </span>
        <span
          v-if="view === 'Calendar' || view === 'Plan'"
          class="font-black text-xl text-white flex items-center mx-2"
        >
          ><SvgTarget
            :target="view"
            :width="20"
            :height="20"
            class="mx-2"
          ></SvgTarget
        ></span>
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div class="max-w-7xl w-[95%] mx-auto">
      <div name="emptySection" v-if="data.tickets.length === 0">
        <div class="w-[500px] mx-auto bg-DarkRock rounded-xl p-8 mt-[100px]">
          <p class="flex items-center">
            <SvgTarget
              target="Tickets"
              :height="20"
              :width="20"
              class="mr-2"
            ></SvgTarget>
            <span class="font-black text-xl text-white">Tickets</span>
          </p>
          <p class="mt-6 text-base font-medium">
            Create tier levels, nest automatic data into tickets, manage the
            sales calendar, permission access, other associated features and of
            course price.
          </p>
          <p class="mt-6 text-base font-medium">
            No ticket category has been added here yet.
          </p>
          <button
            class="text-black flex flex-row rounded-full items-center h-10 px-10 mx-auto bg-white mt-9"
            @click.prevent="openModal('Add')"
          >
            <CreateTicket />
            <p class="text-black pl-2.5 text-base font-black">
              Create your first ticket
            </p>
          </button>
        </div>
      </div>
      <component
        v-else
        :is="view"
        :data="data"
        :yourPerm="yourPerm"
        @open="openModal"
        @action="update()"
        @change="view = $event"
      ></component>
    </div>
    <ModalClear :open="open" @action="close()">
      <AddTicket
        v-if="modalView === 'Add'"
        :data="data"
        @action="close"
      ></AddTicket>
      <DeleteTicket
        v-if="modalView === 'Remove'"
        :data="data"
        @action="close"
      ></DeleteTicket>
    </ModalClear>
  </div>
</template>

<script>
//components
import SvgTarget from "@components/SvgTarget.vue";
import XButton36 from "@components/buttons/XButton36.vue";

import Plan from "./tickets/Plan.vue";
import Calendar from "./tickets/Calendar.vue";
import List from "./tickets/List.vue";

import ModalClear from "@components/modal/ModalClear.vue";
import AddTicket from "@components/modal/projectId/logistics/AddTicket.vue";
import CreateTicket from "../../../assets/icons/CreateTicket.vue";
import DeleteTicket from "../../modal/projectId/logistics/DeleteTicket.vue";

export default {
  components: {
    XButton36,
    SvgTarget,
    Plan,
    Calendar,
    List,
    ModalClear,
    AddTicket,
    DeleteTicket,
    CreateTicket,
},
  props: ["data", "yourPerm"],
  data() {
    return {
      open: false,
      view: "List",
      modalView: "",
    };
  },
  methods: {
    openModal(modal) {
      this.open = true;
      this.modalView = modal;
    },
    goBack() {
      this.$router.back();
    },
    close(value) {
      this.open = false;
      if (value === "update") {
        this.$emit("action");
      }
    },
    update() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
