<template>
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
          <h3 class="text-center w-1/2 pt-6" v-if="pictureInput === false">
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
</template>

<script setup>

import InputModel from "@core/components/inputs/InputModel.vue";
import uploadModel from "@core/components/inputs/uploadModel.vue";
import CropperSpace from "../../cropper/CropperSpace.vue";
import SpaceServices from "@axios/services/spaceServices.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import CloseButton from "../../buttons/CloseButton.vue";
const emit = defineEmits(["isOpenModal", "enableButton", "submitSuccess"]);

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
  info: "By creating a Space, ",
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
};

const useCroppedImage = (img) => {
  croppedImage.value = img;
  open.value = false;
};
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
};

const goToSpace = () => {
  previewImage.value = "";
  router.push({
    name: "SpacePrivate",
    params: { id: idSpace.value },
  });
  close();
};
</script>
