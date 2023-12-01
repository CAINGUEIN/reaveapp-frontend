<template>
  <img :src="srcImg" draggable="false" @error="replaceUrl" :alt="type + size" />
</template>

<script>
import useStoreAuth from "@stores/auth";
import { defaultImgs } from "@assets/img/profilePicture/pictureImport";
export default {
  emits: ["loaded"],
  props: ["type", "size", "targetSpace", "id"],
  data() {
    const store = useStoreAuth();
    return {
      store,
      images: defaultImgs,
      srcImg: "",
      //srcMediaBase: "https://media.reave.dev/",
      target: "",
    };
  },
  methods: {
    async setSrcImg() {
      if (this.srcImg === "") {
        if (this.type == "avatar" && localStorage.getItem("color")) {
          this.srcImg =
            "/src/core/assets/img/profilePicture/" +
            localStorage.getItem("color") +
            ".png";
        } else {
          let randomColor = Math.floor(Math.random() * 10);
          this.srcImg =
            "/src/core/assets/img/profilePicture/" +
            this.images[randomColor] +
            ".png";
          if (this.type == "avatar") {
            localStorage.setItem("color", this.images[randomColor]);
          }
        }
      }
    },
    replaceUrl(e) {
      if (this.srcImg === "") {
        if (localStorage.getItem("color")) {
          e.target.src =
            "/src/core/assets/img/profilePicture/" +
            this.images[localStorage.getItem("color")] +
            ".png";
        } else {
          let randomColor = Math.floor(Math.random() * 10);
          e.target.src =
            "/src/core/assets/img/profilePicture/" +
            this.images[randomColor] +
            ".png";
          localStorage.setItem("color", this.images[randomColor]);
        }
      }
    },
  },
  watch: {
    $route() {
      this.setSrcImg();
    },
  },
  mounted() {
    this.setSrcImg();
  },
};
</script>
