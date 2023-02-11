<template>
  <div class="group relative" @click="open = true">
    <div
      class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md group-hover:opacity-75"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
      <img
        src="../../../../public/placeTicket.png"
        alt="une foto"
        class="object-cover object-center"
      />
      <div
        class="absolute bg-LightRock h-10 left-0 right-0 top-0"
        :class="
          comparedContent
            ? 'transition duration-300 ease-in-out'
            : 'opacity-0 transition duration-300 ease-in-out'
        "
      >
        <h4 class="text-center">Ticket for {{ infoEvent.name }}</h4>
      </div>
    </div>
    <!-- 
    <div class="flex justify-between">
        <h3 class="mt-4 text-sm text-gray-500">
      {{ infoEvent.name }}
    </h3>
    <h3 class="mt-4 text-sm text-gray-500"> Le</h3>
    
    <h3 class="mt-4 text-sm text-gray-500">
      {{ $dayjs(infoEvent.date).format("DD-MM-YY HH:mm") }}
    </h3>
    </div>
    <div class="flex justify-between">
        <h3 class="mt-4 text-sm text-gray-500">
      {{ infoEvent.game }}
    </h3>
    <h3 class="mt-4 text-sm text-gray-500">
      Acheter le
    </h3>
    <h3 class="mt-4 text-sm text-gray-500">
      {{ $dayjs(infoTicket.createdAt).format("DD-MM-YY HH:mm") }}
    </h3>
    </div>
    
    <p class="mt-1 text-lg font-medium"></p>-->
    <ModalClearXL :open="open" @action="close()">
      <TicketObjView :infoEvent="infoEvent" :infoTicket="infoTicket" @action="close()"></TicketObjView>
    </ModalClearXL>
  </div>
</template>

<script>
//component
import ModalClearXL from "@core/components/modal/ModalClearXL.vue";
import TicketObjView from "@components/modal/wallet/TicketObjView.vue";
import TicketServices from "@axios/services/ticketServices";

export default {
  components: {
    ModalClearXL,
    TicketObjView,
  },
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      open: false,
      infoEvent: "",
      comparedContent: false,
      infoTicket: "",
    };
  },
  methods: {
    close() {
      this.open = false;
    },
    mouseover: function () {
      this.comparedContent = true;
    },
    mouseleave: function () {
      this.comparedContent = false;
    },
    async feadInfo() {
      let body = { _id: this.data };
      let result = await TicketServices.info(body);
      if (result.data.success) {
        this.infoEvent = result.data.data.event;
        this.infoTicket = result.data.data.ticket;
      }
    },
  },
  mounted() {
    this.feadInfo();
    console.log(this.data);
  },
};
</script>
