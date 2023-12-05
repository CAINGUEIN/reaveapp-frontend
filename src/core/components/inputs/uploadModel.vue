<template>
  <div
    class="flex flex-col items-center text-Gravel hover:text-White w-full h-[299px]"
  >
    <label
      class="font-400 mb-1 rounded-full border-dashed w-64 h-64 border-2 flex text-Gravel hover:text-White"
      :for="data.name"
      v-if="!croppedImg.url"
    >
      <div class="flex flex-col w-full">
        <div
          class="my-auto w-[136px] mx-auto p-3 cursor-pointer rounded-xl label hover:bg-LightRock text-Gravel hover:text-White"
        >
          <Picture class="mx-auto" :width="24" :height="24"></Picture>
          <p class="text-sm mt-2 w-fit font-medium">
            {{ props.data.label }}
          </p>
          <label :for="data.name">
            <input
              :id="data.name"
              :name="data.name"
              :type="data.type"
              class="sr-only"
              @input="emitImg"
              accept="image/png"
            />
          </label>
        </div>
      </div>
    </label>
    <label
      v-if="croppedImg.url"
      class="font-400 mb-1 rounded-full w-64 h-64 flex text-Gravel hover:text-White"
      :for="data.name"
    >
      <div class="flex flex-col w-full">
        <div
          class="my-auto min-w-full min-h-full cursor-pointer rounded-xl text-White"
        >
          <label :for="data.name">
            <input
              :id="data.name"
              :name="data.name"
              :type="data.type"
              class="sr-only"
              @input="emitImg"
              accept="image/png"
            />
          </label>
          <img
            :src="croppedImg.url"
            alt="spacePicture"
            class="w-full h-full rounded-full"
          />
        </div>
      </div>
    </label>
    <h4 class="text-Gravel w-64 pt-3 font-medium text-xs">
      By creating a Space, you agree to Reave's
      <span class="text-Blue font-bold">Community Guidelines.</span>
    </h4>
  </div>
  <button
    @click="goToSpace"
    v-if="!croppedImg.url"
    class="hover:bg-LightRock px-5 py-1.5 mt-8 mb-7 rounded-full bg-DarkRock transition"
  >
    <p class="text-md text-White font-bold">Skip</p>
  </button>
  <button
    @click="upload"
    v-if="croppedImg.url"
    class="px-5 py-1.5 mt-8 mb-7 rounded-full bg-White transition"
  >
    <p class="text-md text-Anthracite font-bold">Save</p>
  </button>
</template>
<script setup>
import Picture from "@assets/icons/Picture.vue";
import UploadServices from "@axios/services/uploadServices.js";
import { ref, watch } from "vue";
import useStoreSpace from "@stores/storeSpace";

const emit = defineEmits(["goToSpace", "cropImage", "reset"]);
let progress = ref(0);
const storeSpace = useStoreSpace();
let image = ref({});
let previewImage = ref("");
const props = defineProps({
  data: Object,
  miniature: {
    default: {},
  },
  croppedImg: Object,
  idSpace: String,
  modelValue: { Object, String },
  error: Object,
});

const emitImg = (e) => {
  image.value = e.target.files[0];
  previewImage.value = URL.createObjectURL(image.value);
  emit("cropImage", previewImage.value);
};

const goToSpace = () => {
  emit("goToSpace");
};
const upload = async () => {
  let message;
  let formData = new FormData();
  formData.append("selectedPic", props.croppedImg.selectedPic);
  formData.append("spaceId", props.idSpace);
  await UploadServices.picSpace(formData)
    .then(async (response) => {
      message = response.data.message;
      console.log(message);
      try {
        const img = await UploadServices.getImageFromBackend(
          response.data.data.picture
        );
        storeSpace.dataSpace[props.idSpace].picture = img;
        goToSpace();
      } catch (err) {
        console.warn(err);
      }
    })
    .catch((err) => {
      console.warn(err);
      progress.value = 0;
      image.value = undefined;
    });
};

watch(() => {
  if (props.idSpace !== props.croppedImg.idSpace) {
    emit("reset");
  }
});
</script>

<style>
.label {
  color: rgb(128 128 128);
}

.label:hover {
  color: rgb(255 255 255);
}
</style>
