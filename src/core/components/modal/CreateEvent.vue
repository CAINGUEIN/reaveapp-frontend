<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="(etape = etape - 1), (select = '')"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>

    <div class="flex flex-col pt-6" v-if="etape === 1">
      <h4 class="text-center">How do you want to</h4>
      <h4 class="text-center">name this event?</h4>
      <InputModel class="mt-8" :data="name" v-model="name.value"></InputModel>
      <p
        class="text-Red mt-2 font-semibold"
        v-if="Object.keys(errors).length > 0"
      >
        {{ errors }}
      </p>
      <button
        class="bg-white flex item-center rounded-full p-1.5 px-5 mx-auto mt-8"
        @click.prevent="submit()"
      >
        <p class="text-Anthracite font-black">Create Event</p>
      </button>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import EventServices from "@axios/services/eventServices";
import XButton36 from "@components/buttons/XButton36.vue";

export default {
  components: { InputModel, XButton36 },
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
      this.errors = {};
      let submitData = {
        name: this.name.value,
        type: "event",
        spaceAssociated: this.spaceAssociated,
      };
      //faire le submit
      let result = await EventServices.createEvent(submitData);
      if (result.data.success) {
        console.log(result.data.data);
        this.$router.push({
          name: "ProjectId",
          params: { id: result.data.data._id },
        });
      } else {
        this.errors = result.data.message;
      }
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
