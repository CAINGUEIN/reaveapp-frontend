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
            <CloseButton
              @closeModal="close"
              :width="12"
              :height="12"
              class="absolute z-30 right-6 top-6"
            />
            <div>
              <div class="mt-3 sm:mt-5">
                <div class="flex items-center justify-center">
                  <h3
                    class="text-center w-1/2 pt-6"
                    v-if="pictureInput === false"
                  >
                    {{ space.title }}
                  </h3>
                  <h3 class="text-center pt-6" v-if="pictureInput === true">
                    {{ imageSpace.title }}
                  </h3>
                </div>
                <InputModel
                  class="mt-8 px-5 uppercase"
                  :data="space"
                  v-model="space.value"
                  :errors="errors"
                  @update:modelValue="handleUpdate"
                  v-if="pictureInput === false"
                ></InputModel>

                <div class="mt-8 px-5" v-if="pictureInput === true">
                  <uploadModel
                    v-if="open === false"
                    :data="imageSpace"
                    v-model="imageSpace.value"
                    :croppedImg="croppedImage"
                    :errors="errors"
                    :idSpace="idSpace"
                    @goToSpace="goToSpace"
                    @cropImage="cropImage"
                    @reset="resetImg"
                  />
                  <CropperSpace
                    v-if="open"
                    :src="previewImage"
                    :idSpace="idSpace"
                    @closeAction="close"
                    @callFromCrop="useCroppedImage"
                    @reset="resetImg"
                  />
                </div>
                <p v-if="errors.value">{{ errors }}</p>
                <button
                  v-if="pictureInput === false"
                  @click="submit"
                  :disabled="!isEnabled"
                  class="disabled:cursor-not-allowed disabled:bg-Gravel px-5 py-1.5 mt-8 mb-7 rounded-full bg-white transition"
                >
                  <p class="text-Anthracite font-black">Create Space</p>
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
import uploadModel from "@core/components/inputs/uploadModel.vue";
import CropperSpace from "../cropper/CropperSpace.vue";
import SpaceServices from "@axios/services/spaceServices.js";
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import CloseButton from "../buttons/CloseButton.vue";
const emit = defineEmits(["isOpenModal", "enableButton", "submitSuccess"]);
const props = defineProps({
  isOpenModal: Boolean,
});
const open = ref(false);
const space = {
  label: "Space name",
  name: "name",
  title: "How do you want to name this Space?",
  type: "text",
  value: "",
};

const imageSpace = {
  label: "Upload Space Picture",
  title: "Setup your Space Picture.",
  name: "image",
  type: "file",
  value: "",
};
let pictureInput = ref(false);
const croppedImage = ref("");
const errors = ref({});
const router = useRouter();
const isEnabled = ref(false);
const idSpace = ref("");
let previewImage = ref("");
const handleUpdate = (value) => {
  if (value.length >= 3) {
    isEnabled.value = true;
  } else {
    isEnabled.value = false;
  }
};

const cropImage = (img) => {
  console.log(img);
  previewImage.value = img;
  open.value = true;
}

const useCroppedImage = (img) => {
  croppedImage.value = img;
  open.value = false;
  console.log("NOUVELLE IMAGE CROPPED: " + croppedImage.value);
}
function close() {
  emit("isOpenModal", false);
  space.value = "";
  pictureInput.value = false;
}

const submit = async () => {
  let submitData = {
    profile: space.value,
    type: "space",
  };
  // faire le submit
  let result = await SpaceServices.createSpace(submitData);
  if (result.data.success) {
    console.log(result.data.data);
    idSpace.value = result.data.data.newSpace._id;
    emit("submitSuccess");
    pictureInput.value = true;
  } else {
    errors.value = result.data.message;
    console.log(errors.value);
  }
};

const resetImg = () => {
  croppedImage.value = {};
  previewImage.value = "";
  open.value = false;

}


const goToSpace = () => {
  previewImage.value = "";
  router.push({
    name: "SpacePrivate",
    params: { id: idSpace.value },
  });
  close();
};

</script>
