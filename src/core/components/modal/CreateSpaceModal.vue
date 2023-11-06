<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="props.isOpenModal">
    <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" @close="close">
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
            class="relative inline-block align-bottom bg-Anthracite rounded-2xl text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-modal"
          >
            <div>
              <div class="mt-3 sm:mt-5">
                <div class="flex items-center justify-center">
                  <button
                    class="text-right p-3 -translate-y-5 bg-DarkRock hover:bg-LightRock rounded-full w-auto absolute top-7 right-7"
                    @click="close()"
                  >
                    <Cross />
                  </button>
                  <h3 class="text-center w-1/2 pt-6">
                    How do you want to name this Space?
                  </h3>
                </div>
                <InputModel
                  class="mt-8 px-5 uppercase"
                  :data="space"
                  v-model="space.value"
                  :errors="errors"
                  @update:modelValue="handleUpdate"
                ></InputModel>
                <button
                  :disabled="isButtonDisabled"
                  class="disabled:cursor-not-allowed disabled:bg-Gravel px-7 py-3 mt-8 mb-7 rounded-full bg-white transition"
                >
                  <p class="text-xl text-Anthracite font-bold">Create</p>
                </button>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import InputModel from "@core/components/inputs/InputModel.vue";
import Cross from "@core/assets/icons/Cross.vue";
import SpaceServices from "../../../plugins/axios/axiosPlugin";
import { ref, watch } from "vue";
const emit = defineEmits("isOpenModal");
const props = defineProps({
  isOpenModal: String,
});
const space = {
  label: "Space name",
  name: "name",
  type: "text",
  value: "",
};

const isButtonDisabled = ref(true);

// Observer les changements de space.value
watch(space.value, (newValue) => {
  isButtonDisabled.value = newValue.length < 3;
});

// Méthode pour gérer la mise à jour de space.value
const handleUpdate = (value) => {
  space.value = value;
};
function close() {
  emit("isOpenModal", false);
}

const submit = async () => {
  let errors = {};
  let submitData = {
    name: this.space.value,
    type: "space",
  };
  //faire le submit
  let result = await SpaceServices.createSpace();
  if (result.data.success) {
    console.log(result.data.data);
    this.$router.push({
      name: "ProjectId",
      params: { id: result.data.data._id },
    });
  } else {
    errors = result.data.data.errors;
  }
};
</script>
<script>
export default {
  methods: {
    close() {
      this.$emit("isOpenModal", false);
      this.target = "";
    },
    changeTarget(value) {
      this.target = value;
      console.log(value);
    },
  },
};
</script>
