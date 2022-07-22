<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="p-8 mx-auto bg-LightRock rounded-lg text-center">
    
    <h3>Create your Event for calendar</h3>
    <InputModel
      class="mt-8"
      :data="name"
      v-model="name.value"
      :errors="errors"
    />
    <InputModel class="mt-8" :data="bio" v-model="bio.value" :errors="errors" />
    <AddMonoValueInArray
      class="mt-8"
      :data="color"
      v-model="color.value"
      :errors="errors"
    />
    <DateModel
      class="mt-8"
      :data="start"
      v-model="start.value"
      :errors="errors"
    />
    <DateModel
      class="mt-8"
      :data="end"
      v-model="end.value"
      :errors="errors"
    />
    <ToolsButtonSubmit
      class="mt-8"
      @action="submit"
      txtButton="Create"
      :color="name.value === '' ? 'desactivated' : ''"
    />
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import InputModel from "@core/components/inputs/InputModel.vue";
import UserCalendarServices from "@axios/services/userCalendarServices";
import DateModel from "@core/components/inputs/DateModel.vue";
import AddMonoValueInArray from "@core/components/inputs/AddMonoValueInArray.vue";

export default {
  props: ["isOpenModal", "data"],
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    InputModel,
    ToolsButtonSubmit,
    DateModel,
    AddMonoValueInArray,
  },
  data() {
    return {
      name: {
        label: "Calendar event name",
        name: "name",
        type: "text",
        value: "",
      },
      bio: {
        label: "Dexcription",
        name: "name",
        type: "text",
        value: "",
      },
      start: {
        label: "Start event",
        name: "name",
        type: "datetime-local",
        value: "",
      },
      end: {
        label: "End event",
        name: "name",
        type: "datetime-local",
        value: "",
      },
      color: {
        label: "Color",
        name: "color",
        type: "Mono",
        value: "",
        options: [
          { value: "red", slot: "R" },
          { value: "green", slot: "G" },
          { value: "yellow", slot: "Y" },
          { value: "blue", slot: "B" },
          { value: "orange", slot: "O" },
        ],
      },
      errors: "",
    };
  },
  methods: {
    submit() {
      //recup dans les props l'id de la category
      //le nom de la room et le créateur
      let createEvent = {
        name: this.name.value,
        bio: this.bio.value,
        start: this.data.startStr,
        end: this.data.endStr,
      };
      let result = UserCalendarServices.createEvent(createEvent);
      console.log(result);
    },
  },
};
</script>
