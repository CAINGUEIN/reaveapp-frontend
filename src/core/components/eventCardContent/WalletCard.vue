<template>
  <div class="group relative">
    <div
      class="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
      <img
        src="https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg"
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
  </div>
</template>

<script>
import TicketServices from "@axios/services/ticketServices";

export default {
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      infoEvent: "",
      comparedContent: false,
      infoTicket: "",
    };
  },
  methods: {
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
        this.infoTicket = result.data.data;
      }
    },
  },
  mounted() {
    this.feadInfo();
  },
};
</script>
