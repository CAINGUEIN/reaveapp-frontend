<!-- This is used to create a venue profile -->
<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="(etape = etape - 1), (select = '')"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>

    <div class="pt-6 flex flex-col p-6" v-if="etape === 1">
      <h4 class="text-center">How do you want to</h4>
      <h4 class="text-center">name this venue?</h4>
      <InputModel
        class="mt-8"
        :data="name"
        v-model="name.value"
        :errors="errors"
      ></InputModel>
      <button
        class="bg-white flex item-center rounded-full p-1.5 px-5 mx-auto mt-8"
        @click.prevent="submit()"
      >
        <p class="text-Anthracite font-black">Create Venue</p>
      </button>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import VenueServices from "@axios/services/venueServices";
import XButton36 from "@components/buttons/XButton36.vue";

export default {
  components: { InputModel, XButton36 },
  props: { spaceAssociated: { type: String } },
  data() {
    return {
      placeholder: String,
      name: {
        label: "VENUE NAME",
        name: "name",
        type: "text",
        value: "",
        placeholder: " ",
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
      this.errors = {};
      let submitData = {
        name: this.name.value,
        type: "Venue",
        spaceAssociated: this.spaceAssociated,
      };
      console.log("voici le ", submitData);
      //faire le submit
      let result = await VenueServices.createVenue(submitData);
      if (result.data.success) {
        console.log(result.data.data);
        this.$router.push({
          name: "VenueId",
          params: { id: result.data.data._id },
        });
      } else {
        this.errors = result.data.data.errors;
      }
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
