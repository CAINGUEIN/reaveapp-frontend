<template>
  <div>
    <div name="headerSchedule" class="flex items-center justify-between mt-10">
      <p class="text-xl text-LightGrey font-black">OPENING DATE</p>
      <div>
        <button
          v-if="edit"
          :class="ifUpdating() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
          class="text-black rounded-full h-10 px-10 mx-auto"
          @click.prevent="update()"
        >
          <h4 class="text-black">Save</h4>
        </button>
        <Button40Slot
          v-if="
            (yourPerm === 'Owner' || yourPerm === 'Admin') &&
            !data.isPublished &&
            !edit
          "
          :selected="edit"
          class=""
          @click="edit === true ? (edit = false) : (edit = true)"
          ><PencilIcon class="h-5 m-auto"></PencilIcon
        ></Button40Slot>
      </div>
    </div>
    <div name="separateSchedule" class="h-0.5 w-full bg-Gravel mt-4"></div>
    <div name="contentSchedule" class="mt-4">
      <div v-if="edit" class="w-[644px]">
        <p>Applies to all ticket categories.</p>
        <PersonalDateModel
          class="-mt-2"
          v-model="openingDate.value"
          :data="openingDate"
        ></PersonalDateModel>
      </div>
      <div v-else>
        <p class="flex text-H4 text-White font-book leading-none mt-8">
          {{
            openingDate.value === ""
              ? "Empty"
              : $dayjs(openingDate.value).format("dddd DD MMMM YYYY HH:mm")
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button40Slot from "@components/buttons/Button40Slot.vue";
import PersonalDateModel from "@components/inputs/PersonalDateModel.vue";

import { PencilIcon } from "@heroicons/vue/outline";

import EventServices from "@axios/services/eventServices";

export default {
  components: {
    Button40Slot,
    PencilIcon,
    PersonalDateModel,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      openingDate: {
        //ici les data a passer dans le personaldate
        name: "openingDate",
        value: "",
        //yearsBefore et yearAfter doit etre egal a zero au minimum
        yearsBefore: 0,
        yearAfter: 5,
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.openingDate.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        openDate: this.openingDate.value,
      };
      console.log(body);
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.$emit("update");
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.eventDate.value = this.data.eventDate;
      }
    },
    ifUpdating() {
      if (this.openingDate.value !== this.data.openDate) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.data.openDate ? (this.openingDate.value = this.data.openDate) : "";
    this.setEdit();
  },
};
</script>

<style lang="scss" scoped></style>
