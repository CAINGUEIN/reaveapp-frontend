<template>
  <div>
    <div class="flex flex-col">
      <section class="">
        <div class="img-cropper">
          <!-- Close cropper button -->
          <XButton36
            @click="$emit('closeAction')"
            class="absolute right-[-70px] top-[-65px] px-3 z-10"
          ></XButton36>

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
        <div class="flex">
          <button
            class="w-40 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="reset"
          >
            Reset
          </button>
          <button
            class="w-10 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="rotate(-90)"
          >
            -90°
          </button>
          <button
            class="w-10 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="rotate(90)"
          >
            +90°
          </button>
          <button
            class="w-40 h-10 mx-2 mt-5 bg-white text-Anthracite rounded-full"
            @click="cropImage"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import XButton36 from "@components/buttons/XButton36.vue";
import "cropperjs/dist/cropper.css";
//

export default {
  components: {
    XButton36,
    VueCropper,
  },
  props: {
    src: {
      type: String,
    },
    idSpace: {
      type: String,
    },
  },
  data() {
    return {
      cropImg: "",
    };
  },
  methods: {
    dataURLtoFile(dataurl) {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let type = mime.split("/");
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], this.idSpace + '.' +type[1], {
        type: mime,
      });
    },
    async cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      let submitImg = this.dataURLtoFile(this.cropImg);
      this.$emit("callFromCrop", {
        idSpace: this.idSpace,
        selectedPic: submitImg,
        url: this.cropImg,
      });
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
      this.$emit("reset");
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
  },
};
</script>
