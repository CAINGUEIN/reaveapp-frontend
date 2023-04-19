<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="h-10 w-10 rounded-full bg-slate-400 mr-3"></div>
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
      <div class="w-[100px]" v-else>
        <p class="font-black text-xl text-white truncate">
          {{ name.value }}
        </p>
      </div>
      <Button40Slot
        v-if="(yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished"
        :selected="edit"
        class=""
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import { PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "../../buttons/Button40Slot.vue";
export default {
  components: { InputModel, PencilIcon, Button40Slot },
  props: ["data", "yourPerm"],
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
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.name.value = this.data.name;
      }
    },
  },
  mounted() {
    this.name.value = this.data.name;
    this.setEdit();
  },
};
</script>
