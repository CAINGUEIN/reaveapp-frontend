<template>
  <div class="p-6 w-164">
    <div class="flex justify-between items-center">
      <h2>VISUAL EDITOR AVATAR</h2>
      <p @click="close">X</p>
    </div>
    <UploadModel
      v-if="img === ''"
      class="mt-4"
      :data="imgUpload"
      v-model="imgUpload.value"
      @change="submit"
    />
    <div>
      <CropperBanner v-if="img !== ''" :src="img" @closeAction="close" />
    </div>
  </div>
</template>

<script>
//component
import UploadModel from "@core/components/inputs/uploadModel.vue";
import CropperBanner from "../../cropper/CropperBanner.vue";

export default {
  components: { UploadModel, CropperBanner },
  data() {
    return {
      imgUpload: {
        label: "Banner",
        name: "banner",
        type: "file",
        value: "",
      },
      img: "",
    };
  },
  methods: {
    submit() {
      this.cache = document.getElementById("banner").files[0];
      this.img = URL.createObjectURL(this.cache);
    },
    close() {
      this.$emit("close");
    },
    log(value) {
      console.log(value);
    },
  },
};
</script>
