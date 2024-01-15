<template>
  <div>
    <div class="flex flex-col pt-3">
      <h4 class="text-center w-full leading-tight">Sure of deleting this <br> Ticket Category?</h4>
      <div class="flex flex-row mt-8">
        <p @click="closeModal" class="underline cursor-pointer font-medium mx-auto my-auto">Cancel</p>
      <button
        class="bg-Ruby hover:bg-red-700 transition-all flex item-center rounded-full p-1.5 px-5 mx-auto"
        @click.prevent="submit()"
      >
        <p class="text-White font-black">Delete Event</p>
      </button>
      </div>

    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import EventServices from "@axios/services/eventServices";

export default {
  components: { InputModel },
  props: { spaceAssociated: { type: String } },
  data() {
    return {
      name: {
        label: "EVENT NAME",
        name: "name",
        type: "text",
        value: "",
      },
      type: {
        label: "Event type",
        name: "orga",
        type: "text",
        value: "",
      },
      category: "",
      etape: 1,
      errors: {},
    };
  },
  methods: {
    async submit() {
      // TODO: delete ticket category
      this.$emit("action");
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>
