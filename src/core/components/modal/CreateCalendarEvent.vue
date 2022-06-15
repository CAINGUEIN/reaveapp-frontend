<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="isOpenModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="close">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-Stone bg-opacity-60 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="relative inline-block align-bottom bg-appDark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-modal"
          >
            <div>
              <div class="mt-3 sm:mt-5">
                <div class="bg-Black p-8 rounded-lg h-full text-center">
                  <button
                    class="text-right hover:border-2 hover:border-Stone w-auto absolute top-0 right-2"
                    @click="close"
                  >
                    X
                  </button>
                  <h3>Create your Event for calendar</h3>
                  <InputModel
                    class="mt-8"
                    :data="name"
                    v-model="name.value"
                    :errors="errors"
                  />
                  <InputModel
                    class="mt-8"
                    :data="bio"
                    v-model="bio.value"
                    :errors="errors"
                  />
                  <AddMonoValueInArray
                  class="mt-8"
                    :data="color"
                    v-model="color.value"
                    :errors="errors"/>
                  <DateModel
                    class="mt-8"
                    :data="start"
                    v-model="data.startStr"
                    :errors="errors"
                  />
                  <DateModel
                    class="mt-8"
                    :data="end"
                    v-model="data.endStr"
                    :errors="errors"
                  />
                  <ToolsButtonSubmit
                    class="mt-8"
                    @action="submit"
                    txtButton="Create"
                    :color="name.value === '' ? 'desactivated' : ''"
                  />
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
import InputModel from "../inputs/InputModel.vue";
import UserCalendarServices from "../../../modules/personal/services/userCalendarServices";
import DateModel from "../inputs/DateModel.vue";
import AddMonoValueInArray from "../inputs/AddMonoValueInArray.vue";

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
    AddMonoValueInArray
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
        value: this.data.startStr,
      },
      end: {
        label: "End event",
        name: "name",
        type: "datetime-local",
        value: this.data.endStr,
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
    close() {
      this.$emit("isOpenModal", false);
      this.target = "";
    },
    submit() {
      //recup dans les props l'id de la category
      //le nom de la room et le créateur
      let createEvent = {
        name: this.name.value,
        bio: this.bio.value,
        color: this.color.value,
        start: this.data.startStr,
        end: this.data.endStr,
      };
      let result = UserCalendarServices.createEvent(createEvent);
      console.log(result);
    },
  },
};
</script>
