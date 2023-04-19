<template>
  <div>
    <div name="layout" class="flex justify-between items-center">
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
        <SvgTarget
          target="Tickets"
          :height="20"
          :width="20"
          class="mx-2"
        ></SvgTarget>
        <span class="font-black text-xl text-white">TICKETS</span>
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
            <span class="font-black text-xl text-white">TICKETS</span>
          </p>
          <p class="mt-6 text-base">xxx</p>
          <p class="mt-6 text-base">No ticket category has been added here yet.</p>
          <button
            class="text-black rounded-full h-10 px-10 mx-auto bg-white mt-9"
            @click.prevent="open = true"
          >
            <p class="text-black text-base font-black">Add your first ticket</p>
          </button>
        </div>
      </div>
      <component
        v-else
        :is="view"
        :data="data"
        :yourPerm="yourPerm"
        @open="open = true"
        @action="update()"
        @change="view = $event"
      ></component>
    </div>
    <ModalClear :open="open" @action="close()">
      <AddTicket :data="data" @action="close"></AddTicket>
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

export default {
  components: {
    XButton36,
    SvgTarget,
    Plan,
    Calendar,
    List,
    ModalClear,
    AddTicket,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      open: false,
      view: "List",
    };
  },
  methods: {
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
