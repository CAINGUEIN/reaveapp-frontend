<template>
  <div class="flex flex-col">
    <h3>Create an Event</h3>
    <InputModel
      class="mt-4"
      :data="data.name"
      v-model="data.name.value"
      :errors="errors"
    ></InputModel>
    <InputModel
      class="mt-4"
      :data="data.orga"
      v-model="data.orga.value"
      :errors="errors"
    ></InputModel>
    <DateModel
      class="mt-4"
      :data="data.date"
      v-model="data.date.value"
      :errors="errors"
    ></DateModel>
    <InputModel
      class="mt-4"
      :data="data.game"
      v-model="data.game.value"
      :errors="errors"
    ></InputModel>
    <NumberModel
      class="mt-4"
      :data="data.ticket"
      v-model="data.ticket.value"
      :errors="errors"
    ></NumberModel>
    <NumberModel
      class="mt-4"
      :data="data.price"
      v-model="data.price.value"
      :errors="errors"
    ></NumberModel>
    <InputModel
      class="mt-4"
      :data="data.adress"
      v-model="data.adress.value"
      :errors="errors"
    ></InputModel>
    <InputModel
      class="mt-4"
      :data="data.cp"
      v-model="data.cp.value"
      :errors="errors"
    ></InputModel>
    <InputModel
      class="mt-4"
      :data="data.country"
      v-model="data.country.value"
      :errors="errors"
    ></InputModel>
    <InputModel
      class="mt-4"
      :data="data.type"
      v-model="data.type.value"
      :errors="errors"
    ></InputModel>
    <button
      class="bg-white h-15 rounded-full p-4 mx-auto mt-4"
      @click.prevent="submit()"
    >
      <p class="text-black font-bold">Create</p>
    </button>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import DateModel from "@components/inputs/DateModel.vue";
import NumberModel from "@components/inputs/NumberModel.vue";
import EventServices from "@axios/services/eventServices"
export default {
  components: { InputModel, DateModel, NumberModel },
  data() {
    return {
      data: {
        name: {
          label: "Event name",
          name: "name",
          type: "text",
          value: "",
        },
        orga: {
          label: "Organisation name",
          name: "orga",
          type: "text",
          value: "",
        },
        date: {
          label: "Date",
          name: "date",
          type: "datetime-local",
          value: "",
        },
        game: {
          label: "Game",
          name: "game",
          type: "text",
          value: "",
        },
        ticket: {
          label: "Number of tickets",
          name: "ticket",
          type: "number",
          value: "",
        },
        price: {
          label: "Price",
          name: "price",
          type: "number",
          value: "",
        },
        adress: {
          label: "Location Event",
          name: "adress",
          type: "text",
          value: "",
        },
        cp: {
          label: "Postal Code",
          name: "cp",
          type: "text",
          value: "",
        },
        country: {
          label: "Country",
          name: "orga",
          type: "text",
          value: "",
        },
        type: {
          label: "Event type",
          name: "orga",
          type: "text",
          value: "",
        },
      },
      errors: {},
    };
  },
  methods: {
    submit() {
      this.errors = {};
      let submitData = {};
      for (const property in this.data) {
        if (this.data[property].value !== "") {
          submitData[property] = this.data[property].value;
        } else {
          this.errors[property] = { message: "This Empty" };
        }
      }
      if (Object.keys(this.errors).length > 0) {
        console.log(this.errors);
        return;
      } else {
        //faire le submit
        let result = EventServices.createEvent(submitData);
        if (result.data.success) {
          this.closeModal();
        } else {
          this.errors = result.data.data.errors;
        }
      }
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped></style>
