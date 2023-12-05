<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="(etape = etape - 1), (select = '')"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <XButton36
      @click.prevent="closeModal()"
      class="absolute right-0 rounded-full z-10"
    ></XButton36>

    <div class="pt-6 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">How do you want to</h4>
      <h4 class="text-center">name this event?</h4>
      <InputModel
        class="mt-8"
        :data="name"
        v-model="name.value"
        :errors="errors"
      ></InputModel>
      <button
        class="bg-white flex item-center rounded-full p-2 px-6 mx-auto mt-8"
        @click.prevent="submit()"
      >
        <p class="text-Anthracite font-black">Create</p>
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
