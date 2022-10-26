<template>
  <img :src="srcImg" @error="replaceUrl" :alt="type + size" />
</template>

<script>
import useStoreAuth from "@stores/auth";

export default {
  props: ["type", "size", "targetSpace"],
  data() {
    const store = useStoreAuth();
    return {
      store,
      srcImg: "",
      srcMediaBase: "https://media.reave.dev/",
      target: "",
    };
  },
  methods: {
    async setSrcImg() {
      let srcType = "";
      if (this.type === "banner") {
        srcType = "userbanner/";
        this.target = this.store.dataAccount._id;
      } else if (this.type === "avatar") {
        srcType = "useravatar/";
        this.target = this.store.dataAccount._id;
      } else if (this.type === "friend") {
        srcType = "profilespace/";
        this.target = this.targetSpace;
      }
      this.srcImg =
        this.srcMediaBase +
        srcType +
        this.size +
        this.target +
        this.type +
        ".png?rand=" +
        Math.random();
      console.log(this.srcImg);
    },
    replaceUrl(e) {
      console.log("dans le replace");
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      let formatSize = "";
      if (this.size === "l") {
        formatSize = "60/";
      } else if (this.size === "m") {
        formatSize = "50/";
      } else if (this.size === "xs") {
        formatSize = "36/";
      } else if (this.size === "s") {
        formatSize = "40/";
      } else if (this.size === "xl") {
        formatSize = "120/";
      } else if (this.size === "status") {
        formatSize = "661x150/";
      }
      e.target.src = "https://via.placeholder.com/" + formatSize + randomColor;
    },
  },
  mounted() {
    this.setSrcImg();
  },
};
</script>
