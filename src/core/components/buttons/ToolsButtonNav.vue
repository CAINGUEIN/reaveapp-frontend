<template>
  <div
    class="h-16 w-16 p-4 hover:bg-Stone hover:text-White rounded-full"
    :class="view === 'dashboard' ? 'text-White bg-Stone ' : ''"
    @click="goTo(target)"
  >
    <slot></slot>
  </div>
</template>

<script>
/** ce que j'ai besoin
 * - le goTo
 * - le src de l'image
 * - la class pour le bouton
 *  penser a voir comment recup le lieux de la navigation pour mettre le
 *  bouton en select
 */
export default {
  props: ["target", "src", "dataClass", "slot"],
  data() {
    return {
      classIMG: "",
      classBTN: "",
    };
  },
  methods: {
    goTo(target) {
      this.$router.push({ name: target });
    },
    classButton() {
      if (this.dataClass === "small") {
        this.classIMG = "p-4";
      } else if (this.dataClass === "medium") {
        this.classIMG = "p-2";
      } else if (this.dataClass === "logo") {
        this.classIMG = "p-2 rounded-full";
        this.classBTN = "hover:bg-LightRock";
      } else if (this.dataClass === "large") {
        this.classIMG = "rounded-full";
      }
    },
  },
  mounted() {
    this.classButton();
  },
};
</script>
