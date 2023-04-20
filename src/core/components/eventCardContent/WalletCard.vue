<template>
  <div v-if="infoEvent !== ''" class="group relative" @click="open = true">
    <div
      class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
      <img
        src="/placeTicket.png"
        alt="une foto"
        class="object-cover object-center"
      />
      <div
        class="absolute left-0 right-0 top-0 bottom-0 hoverCard flex flex-col justify-between p-4"
        :class="
          comparedContent
            ? 'transition duration-300 ease-in-out '
            : 'opacity-0 transition duration-300 ease-in-out'
        "
      >
        <div class="flex items-center">
          <div class="h-9 w-9 rounded-full bg-Gravel mr-3"></div>
          <p class=" text-xl font-bold text-white">
            {{ infoEvent.owner.user_id.profileName }}
          </p>
        </div>
        <div>
          <p class="text-xl font-bold text-white">
            {{ matchData("cathegory") }}
          </p>
          <h4 class="text-xl font-bold text-white">{{ infoEvent.name }}</h4>
        </div>
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
      <TicketObjView
        :infoEvent="infoEvent"
        :infoTicket="infoTicket"
        @action="close()"
      ></TicketObjView>
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
      console.log(result);
      if (result.data.success) {
        this.infoEvent = result.data.data.event;
        this.infoTicket = result.data.data.ticket;
      }
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
  },
  mounted() {
    this.feadInfo();
    console.log(this.data);
  },
};
</script>

<style>
.hoverCard {
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0.06) 72.52%);
}
</style>
