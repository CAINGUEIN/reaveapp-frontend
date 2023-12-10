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
          <h3 class="text-center pt-6">
            {{ imageSpace.title }}
          </h3>
        </div>
        <div class="mt-8 px-5">
          <uploadModel
            v-if="open === false"
            :data="imageSpace"
            v-model="imageSpace.value"
            :croppedImg="croppedImage"
            :errors="errors"
            :idSpace="props.idSpace"
            @goToSpace="close"
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
      </div>
    </div>
  </div>
</template>
<script setup>
import uploadModel from "@core/components/inputs/uploadModel.vue";
import CropperSpace from "../../cropper/CropperSpace.vue";
import useStoreSpace from "@stores/storeSpace";
import CloseButton from "../../buttons/CloseButton.vue";
import { ref } from "vue";
const emit = defineEmits(["isOpenModal", "enableButton", "submitSuccess"]);
const imageSpace = {
  label: "Upload Space Picture",
  title: "Modify your Space Picture.",
  name: "image",
  type: "file",
  info: "By having a space, ",
  value: "",
};
const store = useStoreSpace();
const props = defineProps({
  idSpace: String,
});

let pictureInput = ref(false);
const errors = ref({});
const open = ref(false);
let croppedImage = ref({
  url: store.dataSpace[props.idSpace].picture,
  idSpace: props.idSpace,
});
let previewImage = ref("");
const cropImage = (img) => {
  console.log(img);
  previewImage.value = img;
  open.value = true;
};

const useCroppedImage = (img) => {
  croppedImage.value = img;
  open.value = false;
  console.log("NOUVELLE IMAGE CROPPED: " + croppedImage.value);
};
function close() {
  emit("isOpenModal", false);
  pictureInput.value = false;
}

const resetImg = () => {
  croppedImage.value = {};
  previewImage.value = "";
  open.value = false;
};
</script>
