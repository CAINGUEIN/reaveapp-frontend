<template>
  <div>
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="pt-12 pb-8">
      <div v-if="update()" class="flex flex-col">
        <h4 class="text-center">Event Published !</h4>
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
        this.$emit("update");
        return true;
      }
    },
    ticketsRemaining() {
      let totalTickets = 0;
      for (let index = 0; index < this.data.tickets.length; index++) {
        totalTickets = totalTickets + this.data.tickets[index].quantities;
      }
      return totalTickets;
    },
  },
};
</script>

<style lang="scss" scoped></style>
