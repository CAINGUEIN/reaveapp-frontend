<template>
  <img :src="srcImg" draggable="false" @error="replaceUrl" :alt="type + size" />
</template>

<script>
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
export default {
  emits: ["loaded"],
  props: ["type", "size", "targetSpace", "id"],
  data() {
    const store = useStoreAuth();
    const spaceStore = useStoreSpace();
    return {
      store,
      srcImg: "",
      defaultImgs: [
        "blue",
        "darkBlue",
        "darkGrey",
        "darkRed",
        "green",
        "grey",
        "lightGreen",
        "lightPurple",
        "orange",
        "purple",
        "red",
        "yellow",
      ],
      //srcMediaBase: "https://media.reave.dev/",
      target: "",
    };
  },
  methods: {
    async setSrcImg() {
      if (this.srcImg === "") {
        let randomColor = Math.floor(Math.random() * 8);
        this.srcImg =
          "/src/core/assets/img/profilePicture/" +
          this.defaultImgs[randomColor] +
          ".png";
      }
    },
    replaceUrl(e) {
      if (this.srcImg === "") {
      let randomColor = Math.floor(Math.random() * 8);
      e.target.src =
        "/src/core/assets/img/profilePicture/" +
        this.defaultImgs[randomColor] +
        ".png";
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
