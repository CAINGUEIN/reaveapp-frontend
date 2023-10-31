<template>
  <div
    class="flex items-center justify-center rounded-full cursor-pointer"
    :class="[classBTN, classCompar]"
    @click="goTo(target)"
    @mouseover="showTag = isMouseOver"
    @mouseleave="showTag = false"
  >
    <slot></slot>
    <div
      class="font-bold block p-[4px] rounded-[5px] -bottom-5 z-50 text-Gravel absolute translate-x--1/2 bg-LightRock transition duration-[300ms] ease-out"
      :class="{ 'opacity-100': showTag, 'opacity-0': !showTag }"
    >
      {{ btnName }}
    </div>
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
        this.$router.push({ name: value, params: { view: this.subTarget } });
      }
    },
    classButton() {
      
      if (this.dataClass === "spaces") {
        this.classBTN = "h-10 w-10";
        this.classCompar = " hover:bg-DarkRock text-Gravel";
      }
    },
    compar() {
      // Icone selectionnée
      if (this.dataClass === "spaces" && this.comparTarget === this.stat) {
        this.classCompar = "text-White bg-LightRock";
      }
      
      // Icone non sélectionnée
      if (this.dataClass === "settings" && this.comparTarget !== this.stat) {
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
