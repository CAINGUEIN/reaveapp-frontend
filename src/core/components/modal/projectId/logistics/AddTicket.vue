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
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">What’s the name of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <InputModel
        class="mt-6"
        :data="cathegory"
        v-model="cathegory.value"
        :errors="errors[cathegory.name]"
      >
      </InputModel>
      <button
        :class="
          cathegory.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="cathegory.value !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 2">
      <h4 class="text-center">What’s the price of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <InputModel
        class="mt-6"
        :data="price"
        v-model="price.value"
        :errors="errors[price.name]"
      >
      </InputModel>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="price.value !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 3">
      <h4 class="text-center">What’s the colour of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <label
        class="flex text-H4 text-White font-black leading-none mt-6"
        for=""
      >
        COLOUR
      </label>
      <div class="flex justify-between items-center">
        <div>
          <div class="flex space-x-2 mt-1">
            <div
              v-for="item in colorArray"
              class="h-6 w-6 rounded"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            ></div>
          </div>
          <div class="flex space-x-2 mt-1">
            <div
              v-for="item in colorArrayBis"
              class="h-6 w-6 rounded"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            ></div>
          </div>
        </div>
        <Button40Slot class="mr-8" @click="refreshColor()">
          <RefreshIcon class="h-5 m-auto"></RefreshIcon>
        </Button40Slot>
      </div>

      <button
        :class="color !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="color !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 4">
      <h4 class="text-center">How many tickets do you</h4>
      <h4 class="text-center">want sell from this category?</h4>
      <label
        class="flex text-H4 text-White font-black leading-none mt-6"
        for=""
      >
        TYPE
      </label>
      <p class="mt-1">Standing or Sitting?</p>
      <Switch
        v-model="enabled"
        class="bg-DarkRock relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        <span class="sr-only">Use setting</span>
        <span
          :class="[
            enabled ? 'translate-x-8' : 'translate-x-0',
            'pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          ]"
        >
          <span
            :class="[
              enabled
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg class="h-3 w-3 text-Black" fill="none" viewBox="0 0 12 12">
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span
            :class="[
              enabled
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg
              class="h-3 w-3 text-Black"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
              />
            </svg>
          </span>
        </span>
      </Switch>
      <p>{{ enabled }}</p>
      <div v-if="!enabled" class="flex justify-between items-center">
        <div class="flex w-1/2 space-x-2">
          <InputModel
            class="mt-6"
            :data="column"
            v-model="column.value"
            :errors="errors[column.name]"
          >
          </InputModel>
          <InputModel
            class="mt-6"
            :data="row"
            v-model="row.value"
            :errors="errors[row.name]"
          >
          </InputModel>
        </div>
        <div class="mt-12 mr-4">
          <p class="">Number of Seats</p>
          <p class="text-White font-bold">{{ column.value * row.value }}</p>
        </div>
      </div>
      <div v-else>
        <InputModel
          class="mt-6"
          :data="quantities"
          v-model="quantities.value"
          :errors="errors[quantities.name]"
        >
        </InputModel>
      </div>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="submit()"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
  </div>
</template>

<script>
//components
import InputModel from "@components/inputs/InputModel.vue";
import XButton36 from "@components/buttons/XButton36.vue";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import { RefreshIcon } from "@heroicons/vue/outline";
import { Switch } from "@headlessui/vue";
export default {
  components: {
    XButton36,
    InputModel,
    Button40Slot,
    RefreshIcon,
    Switch,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      etape: 1,
      cathegory: {
        label: "Cathegory name",
        placeholder: "Name",
        name: "cathegory",
        type: "text",
        value: "",
      },
      price: {
        label: "PRICE",
        placeholder: "0,00",
        name: "price",
        type: "number",
        value: "",
        class: "text-center",
      },
      colorArray: [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ],
      colorArrayBis: [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ],
      color: "",
      type: "",
      column: {
        label: "COLUMNS",
        placeholder: "12",
        name: "column",
        type: "number",
        value: "",
      },
      row: {
        label: "ROWS",
        placeholder: "12",
        name: "row",
        type: "number",
        value: "",
      },
      quantities: {
        label: "QUANTITIES",
        placeholder: "12",
        name: "quantities",
        type: "number",
        value: "",
      },
      errors: {},
      enabled: false,
    };
  },
  methods: {
    generateColor() {
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      return randomColor;
    },
    refreshColor() {
      this.colorArray = [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ];
      this.colorArrayBis = [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ];
    },
    async submit() {
      console.log(
        this.data._id
      );
      
      let body = {
        project_id: this.data._id,
        quantities: this.quantities.value,
        cathegory: this.cathegory.value,
        price: this.price.value,
        color: this.color,
        type: this.type,
        column: this.column.value,
        row: this.row.value,
      }
      if (body.quantities === "") {
        body.quantities = body.row * body.column
      }
      if (this.enabled === false) {
        body.type = "Sitting"
      } else {
        body.type = "Standing"
      }
      let result = await EventServices.createTicketForEvent(body)
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
