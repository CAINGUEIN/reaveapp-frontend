<template>
  <div>
    <div class="flex flex-col">
      <section class="">
        <div class="img-cropper">
          <vue-cropper
            class="h-144 w-144 mx-auto"
            ref="cropper"
            :aspect-ratio="160 / 160"
            :src="src"
            preview=".preview"
          />
        </div>
      </section>
      <section class="preview-area">
        <!-- <p>Preview</p>
        <div class="preview w-[160px] h-[160px] overflow-hidden rounded-full" />
        <div class="preview w-[24px] h-[24px] overflow-hidden rounded-full" /> -->
        <div class="flex">
          <toolsButtonSubmit
            class="w-40 mx-2 mt-5"
            @action="reset"
            txtButton="Reset"
            :color="''"
          />
          <toolsButtonSubmit
            class="w-15 mx-2 mt-5"
            @action="rotate(90)"
            txtButton="R+"
            :color="''"
          />
          <toolsButtonSubmit
            class="w-15 mx-2 mt-5"
            @action="rotate(-90)"
            txtButton="R-"
            :color="''"
          />
          <toolsButtonSubmit
            class="w-15 mx-2 mt-5"
            @action="flipX"
            txtButton="X"
            :color="''"
          />
          <toolsButtonSubmit
            class="w-15 mx-2 mt-5"
            @action="flipY"
            txtButton="Y"
            :color="''"
          />
          <toolsButtonSubmit
            class="w-40 mx-2 mt-5"
            @action="cropImage"
            txtButton="Save"
            :color="''"
          />
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
    ToolsButtonSubmit
},
  props: {
    src: {
      type: String,
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
        this.store.dataAccount._id + "avatar." + type[1],
        {
          type: mime,
        }
      );
    },
    async cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      let submitImg = this.dataURLtoFile(this.cropImg);
      let formData = new FormData();
      formData.append("img", submitImg);
      console.log(submitImg);
      let result = await UserUpdateServices.imgAvatar(formData);
      if (result.success) {
        this.$emit("closeAction");
      } else {
        this.$emit("closeAction");
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
