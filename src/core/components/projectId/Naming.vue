<template>
  <div>
    <div class="w-full pr-16 relative">
      <Button40Slot
        :selected="edit"
        class="absolute right-0 top-1"
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
      <div v-if="edit" class="bg-DarkRock rounded-xl p-6">
        <InputModel
          class="mt-4"
          :data="name"
          v-model="name.value"
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
          {{ name.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import { PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "../buttons/Button40Slot.vue";
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
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.name.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.name.value !== this.data.name) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        name: this.name.value,
      };
      let result = await EventServices.updateEvent(body)
      if (result.data.success) {
        this.edit = false
      } else {
        this.errors.push(result.data.errors) 
        this.name.value = this.data.name
      }
    },
  },
  mounted() {
    this.name.value = this.data.name;
    this.setEdit();
  },
};
</script>
