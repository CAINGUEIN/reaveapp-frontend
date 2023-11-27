<template>
  <img :src="srcImg" @error="replaceUrl" :alt="type + size" />
</template>

<script>
import useStoreAuth from "@stores/auth";

export default {
  emits: ["loaded"],
  props: ["srcImg", "type", "size", "targetSpace", "id"],
  data() {
    const store = useStoreAuth();
    // const spaceStore = useStoreSpace();
    return {
      store,
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
        let srcType = "";
        if (this.type === "banner") {
          srcType = "userbanner/";
          this.target = this.store.dataAccount._id;
        } else if (this.type === "avatar") {
          srcType = "useravatar/";
          if (this.targetSpace !== undefined) {
            this.target = this.targetSpace;
          } else {
            this.target = this.store.dataAccount._id;
          }
        } else if (this.type === "space") {
          srcType = "profilespace/";
          this.target = this.targetSpace;
        } else if (this.type === "event") {
          srcType = "eventpp/";
          this.target = this.targetSpace;
        } else if (this.type === "item") {
          srcType = "equipmentpp/";
          this.target = this.targetSpace;
        }
        // if (this.srcImg == "") {
        //   this.srcImg =
        //     this.srcMediaBase +
        //     srcType +
        //     this.size +
        //     this.target +
        //     this.type +
        //     ".png?rand=" +
        //     Math.random();
        //   console.log(this.srcImg);
        // }
      }
    },
    replaceUrl(e) {
      let randomColor = Math.floor(Math.random() * 8);
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
      if (this.type === "event") {
        e.target.src = "/img/EventsDefault.png";
      } else if (this.type === "item") {
        e.target.src = "/chaire.jpeg";
      } else if (this.type === "venue") {
        e.target.src = "/img/VenuesDefault.png";
      } else {
        // e.target.src = "/img/EventsDefault.png";
        e.target.src =
          "/src/core/assets/img/profilePicture/" +
          this.defaultImgs[randomColor] + ".png";
      }
    },
  },
  watch: {
    $route() {
      // this.setSrcImg();
    },
  },
  mounted() {
    //this.setSrcImg();
  },
};
</script>
