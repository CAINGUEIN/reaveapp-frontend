<template>
  <div>
    <h4>Location</h4>
    <div class="w-full h-0.5 bg-White"></div>
    <div class="w-full pr-16 relative">
      <Button40Slot
        :selected="edit"
        class="absolute right-0 top-1"
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
      <div v-if="edit" class="rounded-xl">
        <InputModel
          class="mt-4"
          :data="venueName"
          v-model="venueName.value"
          :errors="errors"
        ></InputModel>
        <InputModel
          class="mt-4"
          :data="adress"
          v-model="adress.value"
          :errors="errors"
        ></InputModel>
        <InputModel
          class="mt-4"
          :data="city"
          v-model="city.value"
          :errors="errors"
        ></InputModel>
        <InputModel
          class="mt-4"
          :data="cp"
          v-model="cp.value"
          :errors="errors"
        ></InputModel>
        <InputModel
          class="mt-4"
          :data="country"
          v-model="country.value"
          :errors="errors"
        ></InputModel>
        <button
          :class="ifUpdating() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
          class="text-black rounded-full h-16 px-10 mx-auto mt-6"
          @click.prevent="update()"
        >
          <h4 class="text-black">Continue</h4>
        </button>
      </div>
      <div class="w-full" v-else>
        <p class="flex text-H4 text-White font-black leading-none mt-4">
          {{ venueName.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
          {{ venueName.value === "" ? "Empty" : venueName.value }}
        </p>
        <p class="flex text-H4 text-White font-black leading-none mt-4">
          {{ adress.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
          {{ adress.value === "" ? "Empty" : adress.value }}
        </p>
        <div class="flex">
          <div class="w-1/3">
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ city.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
              {{ city.value === "" ? "Empty" : city.value }}
            </p>
          </div>
          <div class="w-1/3">
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ cp.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
              {{ cp.value === "" ? "Empty" : cp.value }}
            </p>
          </div>
          <div class="w-1/3">
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ country.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
              {{ country.value === "" ? "Empty" : country.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import NumberModel from "@components/inputs/NumberModel.vue";
import { PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "@components/buttons/Button40Slot.vue";
export default {
  components: { InputModel, NumberModel, PencilIcon, Button40Slot },
  props: ["data"],
  data() {
    return {
      venueName: {
        label: "Venue NAME",
        name: "venueName",
        type: "text",
        value: "",
      },
      adress: {
        label: "Adress",
        name: "adress",
        type: "text",
        value: "",
      },
      city: {
        label: "City",
        name: "city",
        type: "text",
        value: "",
      },
      cp: {
        label: "CP",
        name: "cp",
        type: "text",
        value: "",
      },
      country: {
        label: "Country",
        name: "country",
        type: "text",
        value: "",
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.venueName.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.venueName.value !== this.data.venueName) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        venueName: this.venueName.value,
        adress: this.adress.value,
        city: this.city.value,
        cp: this.cp.value,
        country: this.country.value,
      };
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.venueName.value = this.data.venueName;
      }
    },
  },
  mounted() {
    this.data.venueName ? (this.venueName.value = this.data.venueName) : "";
    this.data.adress ? (this.adress.value = this.data.adress) : "";
    this.data.city ? (this.city.value = this.data.city) : "";
    this.data.cp ? (this.cp.value = this.data.cp) : "";
    this.data.country ? (this.country.value = this.data.country) : "";
    this.setEdit();
  },
};
</script>
