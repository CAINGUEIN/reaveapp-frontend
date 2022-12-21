<template>
  <div class="space-y-4">
    <h2>Logistics</h2>
    <Format :yourPerm="yourPerm" :data="data" class="w-1/2"></Format>
    <Tickets :yourPerm="yourPerm" :data="data" class="w-1/2"></Tickets>
    <div class="w-1/2">
      <p class="flex text-H4 text-White font-black leading-none mt-4">
        TICKET CATEGORIES
      </p>
      <div class="flex flex-col space-y-4 mt-4">
        <div
          v-for="item in data.tickets"
          class="h-20 w-full flex bg-DarkRock px-4 rounded-2xl justify-between"
        >
          <div class="flex space-x-4 items-center">
            <div
              class="h-15 w-15 rounded-xl"
              :style="'background: #' + item.color"
            ></div>
            <p>{{ item.cathegory }}</p>
          </div>
          <div class="flex flex-col items-center my-auto">
            <p>Price</p>
            <div class="flex items-center">
              <h4>
                {{ item.price }}
              </h4>
              <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
            </div>
          </div>
          <div class="flex flex-col items-center my-auto">
            <p>Quantity</p>
            <div class="flex items-center">
              <h4>
                {{ item.quantities }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex mt-4"
        v-if="
          (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
        "
      >
        <button
          class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White m-auto"
          @click.prevent="open = true"
        >
          <PlusIcon class="mx-2 h-5 w-5" />
        </button>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <AddTicket :data="data" @action="close"></AddTicket>
    </ModalClear>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/outline";
import Format from "./Format.vue";
import Tickets from "./Tickets.vue";
import ModalClear from "@components/modal/ModalClear.vue";
import AddTicket from "@components/modal/projectId/logistics/AddTicket.vue";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";

export default {
  props: ["data", "yourPerm"],
  components: { Format, Tickets, PlusIcon, ModalClear, AddTicket, GoldRC },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        this.$emit("update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
