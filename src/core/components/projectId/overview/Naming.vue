<template>
  <div>
    <h4 class="ml-2">Naming</h4>
    <div class="w-full bg-White h-0.5"></div>
    <div class="w-full relative">
      <Button40Slot
        :selected="edit"
        class="absolute right-0 top-0"
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
      <div v-if="edit" class="w-2/3">
        <InputModel
          class="mt-4"
          :data="name"
          v-model="name.value"
          :errors="errors"
        ></InputModel>
        <InputModel
          class="mt-4"
          :data="orga"
          v-model="orga.value"
          :errors="errors"
        ></InputModel>
        <button
          :class="ifUpdating() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
          class="text-black rounded-full h-16 px-10 mx-auto mt-6"
          @click.prevent="ifUpdating()"
        >
          <h4 class="text-black">Continue</h4>
        </button>
      </div>
      <div v-else class="w-2/3">
        <p class="flex text-H4 text-White font-black leading-none mt-4">
          {{ name.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none my-7 ml-6">
          {{ name.value }}
        </p>
        <p class="flex text-H4 text-White font-black leading-none mt-8">
          {{ orga.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none my-7 ml-6">
          {{ orga.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import { PencilIcon } from "@heroicons/vue/outline";
import Button40Slot from "../../buttons/Button40Slot.vue";
export default {
  components: { InputModel, PencilIcon, Button40Slot },
  props: ["data"],
  data() {
    return {
      name: {
        label: "EVENT NAME",
        name: "name",
        type: "text",
        value: "",
      },
      orga: {
        label: "ORGANISER NAME",
        name: "name",
        type: "text",
        value: "",
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (this.name.value === "" || this.orga.value === "") {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (
        this.name.value !== this.data.name ||
        this.orga.value !== this.data.orga
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.name.value = this.data.name;
    this.orga.value = this.data.orga;
    this.setEdit();
  },
};
</script>
