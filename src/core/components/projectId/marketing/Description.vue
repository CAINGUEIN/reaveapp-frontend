<template>
  <div>
    <h4>Description</h4>
    <div class="w-full h-0.5 bg-White"></div>
    <div class="w-full pr-16 relative">
      <Button40Slot
        v-if="yourPerm === 'Owner' || yourPerm === 'Admin'"
        :selected="edit"
        class="absolute right-0 top-1"
        @click="edit === true ? (edit = false) : (edit = true)"
        ><PencilIcon class="h-5 m-auto"></PencilIcon
      ></Button40Slot>
      <div
        v-if="edit && (yourPerm === 'Owner' || yourPerm === 'Admin')"
        class="rounded-xl"
      >
        <p class="flex text-H4 text-White font-black leading-none mt-4">
          {{ description.label }}
        </p>
        <textarea
          :name="description.name"
          v-model="description.value"
          :placeholder="description.label"
          id=""
          class="w-full bg-transparent border-2 border-White rounded-2xl mt-4"
        ></textarea>
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
          {{ description.label }}
        </p>
        <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
          {{ description.value === "" ? "Empty" : description.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { PencilIcon } from "@heroicons/vue/outline";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import EventServices from "@axios/services/eventServices";
export default {
  components: { PencilIcon, Button40Slot },
  props: ["data", "yourPerm"],
  data() {
    return {
      description: {
        label: "Event Description",
        name: "description",
        type: "textarea",
        value: "",
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.description.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.description.value !== this.data.description) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        description: this.description.value,
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
    this.data.description
      ? (this.description.value = this.data.description)
      : "";
    this.setEdit();
  },
};
</script>

<style lang="scss" scoped></style>
