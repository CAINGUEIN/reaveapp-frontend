<template>
  <div>
    <div class="flex flex-col">
      <section class="">
        <div class="img-cropper">
          <vue-cropper
            class="h-[450px] w-[450px] mx-auto"
            ref="cropper"
            :aspect-ratio="100 / 100"
            :src="src"
            preview=".preview"
          />
        </div>
      </section>
      <section class="preview-area">
        <div class="flex justify-center">
          <button
            class="w-40 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="reset"
          >Reset</button>
          <button
            class="w-10 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="rotate(90)"
          >R+</button>
          <button
            class="w-10 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="rotate(-90)"
          >R-</button>
          <button
            class="w-40 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="cropImage"
          >Save</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
//tool
import useStoreAuth from "@stores/auth";
//services
import UserUpdateServices from "@axios/services/userUpdateServices.js";
import ToolsButtonSubmit from "../buttons/ToolsButtonSubmit.vue";
export default {
  components: {
    VueCropper,
    ToolsButtonSubmit,
  },
  props: {
    src: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      cropImg: "",
    };
  },
  methods: {
    dataURLtoFile(dataurl) {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let type = mime.split("/");
      console.log(mime);
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File(
        [u8arr],
        this.data._id + "item." + type[1],
        {
          type: mime,
        }
      );
    },
    async cropImage() {
      this.store.loading = true;
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      let submitImg = this.dataURLtoFile(this.cropImg);
      let formData = new FormData();
      formData.append("img", submitImg);
      console.log(submitImg);
      let result = await UserUpdateServices.imgItem(formData);
      if (result.data.success) {
        this.$emit("closeAction");
        this.store.loading = false;
        this.store.avatarKey = this.store.avatarKey + 1
      } else {
        //message d'erreur
        this.$emit("closeAction");
        this.store.loading = false;
      }
    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute("data-scale", scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute("data-scale", scale);
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
  },
};
</script>
