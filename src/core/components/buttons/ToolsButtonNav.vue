<template>
  <div
    class="flex items-center justify-center rounded-full cursor-pointer"
    :class="[classBTN, classCompar]"
    @click="goTo(target)"
  >
    <slot></slot>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
/** ce que j'ai besoin
 * - le goTo
 * - le src de l'image
 * - la class pour le bouton
 *  penser a voir comment recup le lieux de la navigation pour mettre le
 *  bouton en select
 */
export default {
  props: ["target", "src", "dataClass", "slot", "comparTarget", "btnName"],
  data() {
    const store = useStoreAuth();
    return {
      classBTN: "",
      classCompar: "",
      stat: "",
      store,
    };
  },
  methods: {
    goTo(value) {
      if (value !== "") {
        this.store.view = value;
        this.$router.push({ name: value });
      }
    },
    classButton() {
      if (this.dataClass === "small") {
        this.classBTN = "h-10 w-10 ";
        this.classCompar = "hover:bg-Stone hover:text-White";
      } else if (this.dataClass === "") {
        this.classBTN = "h-15 w-15";
        this.classCompar = " hover:bg-DarkRock hover:text-LightGrey";
      } else if (this.dataClass === "settings") {
        this.classBTN = "h-15 w-15";
        this.classCompar = " hover:bg-DarkRock text-White";
      } else if (this.dataClass === "reave") {
        this.classBTN = "h-15 w-15";
        this.classCompar = " bg-DarkRock text-White hover:bg-LightRock";
      } else if (this.dataClass === "top") {
        this.classBTN = "h-9 w-9";
        this.classCompar =
          " bg-LightRock text-LightGrey hover:bg-Platinium hover:text-Cloud";
      } else if (this.dataClass === "logoGame") {
        this.classBTN = "h-15 w-15";
        this.classCompar =
          " bg-LightRock text-Gravel hover:bg-Stone hover:text-LightGrey";
      } else if (this.dataClass === "spaceIcon") {
        this.classBTN = "h-15 w-15";
        this.classCompar =
          " bg-DarckRock text-Gravel hover:bg-Rock hover:text-LightGrey";
      }
    },
    compar() {
      if (this.dataClass === "small" && this.comparTarget === this.stat) {
        this.classCompar = "";
      }
      if (this.dataClass === "small" && this.comparTarget !== this.stat) {
        this.classCompar = "hover:bg-Stone hover:text-White";
      }

      if (this.dataClass === "" && this.comparTarget === this.stat) {
        this.classCompar = "text-White bg-LightRock";
      }
      if (this.dataClass === "" && this.comparTarget !== this.stat) {
        this.classCompar = " hover:bg-DarkRock hover:text-LightGrey";
      }

      if (this.dataClass === "settings" && this.comparTarget === this.stat) {
        this.classCompar = "text-White bg-LightRock";
      }
      if (this.dataClass === "settings" && this.comparTarget !== this.stat) {
        this.classCompar = " hover:bg-DarkRock text-White";
      }

      if (this.dataClass === "reave" && this.comparTarget === this.stat) {
        this.classCompar = "bg-White text-Anthracite";
      }
      if (this.dataClass === "reave" && this.comparTarget !== this.stat) {
        this.classCompar = " bg-DarkRock text-White hover:bg-LightRock";
      }

      if (this.dataClass === "top" && this.comparTarget === this.stat) {
        this.classCompar = "bg-White text-Anthracite";
      }
      if (this.dataClass === "top" && this.comparTarget !== this.stat) {
        this.classCompar =
          " bg-LightRock text-LightGrey hover:bg-Platinium hover:text-Cloud";
      }

      if (this.dataClass === "logoGame" && this.comparTarget === this.stat) {
        this.classCompar = "bg-Platinium text-White";
      }
      if (this.dataClass === "logoGame" && this.comparTarget !== this.stat) {
        this.classCompar =
          " bg-LightRock text-Gravel hover:bg-Stone hover:text-LightGrey";
      }

      if (this.dataClass === "spaceIcon" && this.comparTarget === this.stat) {
        this.classCompar = "bg-LightRock text-White";
      }
      if (this.dataClass === "spaceIcon" && this.comparTarget !== this.stat) {
        this.classCompar =
          "bg-DarkRock text-Gravel hover:bg-Rock hover:text-LightGrey";
      }
    },
    verif() {
      if (this.target === "") {
        this.stat = this.btnName;
      } else {
        this.stat = this.target;
      }
      this.compar();
    },
  },
  watch: {
    comparTarget() {
      this.compar();
    },
  },
  mounted() {
    this.classButton();
    this.verif();
  },
};
</script>
