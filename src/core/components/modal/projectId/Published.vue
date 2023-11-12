<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="pt-12 pb-8">
      <div v-if="ifPublished() && etape === 1" class="flex flex-col">
        <h4 class="text-center">Contract</h4>
        <button
          class="rounded-full h-16 px-10 mx-auto mt-6 bg-White"
          @click.prevent="etape = 2"
        >
          <h4 class="text-Black">VALIDATE</h4>
        </button>
      </div>
      <div v-if="ifPublished() && etape === 2" class="flex flex-col space-y-4">
        <h4 class="text-center">Recap</h4>
        <h5 class="text-center font-normal">
          Here’s how your Event will show-up
        </h5>
        <h5 class="text-center font-normal">on the marketplace.</h5>
        <div class="w-96 h-96 bg-slate-500 mx-auto rounded-2xl"></div>
        <h4 class="w-96 mx-auto">{{ data.name }}</h4>
        <h4 class="w-96 mx-auto font-normal">
          {{ $dayjs(data.date).format("DD/MM/YYYY") }}
        </h4>
        <h4 class="w-96 mx-auto font-normal">
          {{ data.city + " " + data.country }}
        </h4>
        <h4 class="w-96 mx-auto font-normal">{{ ticketsRemaining() }} remaining tickets</h4>
        <button
          class="rounded-full h-16 px-10 mx-auto mt-6 bg-White"
          @click.prevent="update()"
        >
          <h4 class="text-Black">PUBLISHED</h4>
        </button>
      </div>
      <div v-if="!ifPublished()" class="flex flex-col">
        <!-- <h4 class="text-center">Missing information</h4>
        <h4 class="text-center">For published</h4> -->
        <h4 class="text-center">Venue Published !</h4>
      </div>
    </div>
  </div>
</template>

<script>
//services
import EventServices from "@axios/services/eventServices";
import XButton36 from "@components/buttons/XButton36.vue";
export default {
  components: { XButton36 },
  props: ["data"],
  data() {
    return {
      etape: 1,
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async update() {
      let body = {
        event_id: this.data._id,
        isPublished: true,
      };
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
    ifPublished() {
      if (
        this.data.date &&
        this.data.openDate &&
        this.data.tickets.length > 0 &&
        this.data.venueName &&
        this.data.adress &&
        this.data.city &&
        this.data.cp &&
        this.data.country
      ) {
        return true;
      } else {
        return false;
      }
    },
    ticketsRemaining() {
        let totalTickets = 0
        for (let index = 0; index < this.data.tickets.length; index++) {
            totalTickets = totalTickets + this.data.tickets[index].quantities;
        }
        return totalTickets
    }
  },
};
</script>

<style lang="scss" scoped></style>
