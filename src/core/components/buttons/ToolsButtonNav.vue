<template>
  <div class="flex items-center justify-center rounded-full cursor-pointer" :class="[classBTN, classCompar]"
    @click="goTo(target)" @mouseover="showTag = isMouseOver" @mouseleave="showTag = false">

    <slot></slot>
    <div
      class="block rounded-[5px] -bottom-5 z-50 text-White absolute translate-y-1 translate-x--1/2 bg-LightRock transition duration-[300ms] ease-out"
      :class="{ 'opacity-100': showTag, 'opacity-0': !showTag  }"><div class="p-[4px]">{{ btnName }}</div></div>

  </div>
</template>

<script>
  import useStoreAuth from "@stores/auth";
  /** ce dont j'ai besoin
   * - le goTo
   * - le src de l'image
   * - la class pour le bouton
   *  penser a voir comment recup le lieux de la navigation pour mettre le
   *  bouton en select
   */
  export default {
    props: {
      target: String,
      subTarget: String,
      src: String,
      dataClass: String,
      slot: String,
      comparTarget: String,
      btnName: String,
      isMouseOver: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      const store = useStoreAuth();
      return {
        showTag: false,
        classBTN: "",
        classCompar: "",
        stat: "",
        store,
      };
    },
    methods: {
      goTo(value) {
        if (value !== undefined) {
          this.store.view = value;
          this.$router.push({
            name: value,
            params: {
              view: this.subTarget
            }
          });
        }
      },
      classButton() {
        if (this.dataClass === "small") {
          this.classBTN = "h-10 w-10 ";
          this.classCompar = "hover:bg-Stone hover:text-White";
        } else if (this.dataClass === "") {
          this.classBTN = "h-12 w-12";
          this.classCompar = " hover:bg-DarkRock hover:text-LightGrey";
        } else if (this.dataClass === "settings") {
          this.classBTN = "h-10 w-10";
          this.classCompar = "text-Gravel hover:text-LightGrey";
        } else if (this.dataClass === "reave") {
          this.classBTN = "h-12 w-12";
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
        } else if (this.dataClass === "spaces") {
          this.classBTN = "h-10 w-10";
          this.classCompar = " hover:bg-DarkRock text-Gravel";
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
          this.classCompar = " hover:bg-LightRock hover:text-LightGrey text-Gravel";
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
        // Icone selectionnée
        if (this.dataClass === "spaces" && this.comparTarget === this.stat) {
          this.classCompar = "text-White bg-LightRock";
        }
        // Icone non sélectionnée
        if (this.dataClass === "spaces" && this.comparTarget !== this.stat) {
          this.classCompar = " hover:bg-Rock text-Gravel";
        }
      },
      verif() {
        if (this.target === undefined) {
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