<template>
  <div>
    <UploadModel class="mt-4" :data="imgUpload" v-model="imgUpload.value" @change="submit" />
    <div>
      <CropperAvatar v-if="img !== ''" :src="img" />
    </div>
  </div>
</template>

<script>
//component
import UploadModel from "@core/components/inputs/uploadModel.vue";
import CropperAvatar from "@core/components/cropper/CropperAvatar.vue";


export default {
  components: { UploadModel, CropperAvatar },
  data() {
    return {
      imgUpload: {
        label: "Avatar",
        name: "avatar",
        type: "file",
        value: "",
      },
      img: "",
    };
  },
  methods: {
    submit() {
      this.cache = document.getElementById("avatar").files[0];
      this.img = URL.createObjectURL(this.cache);
    },
    log(value) {
      console.log(value);
    },
  },
};
</script>
