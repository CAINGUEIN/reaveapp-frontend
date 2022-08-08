<template>
  <div
    class="flex items-center justify-center hover:bg-Stone hover:text-White rounded-full"
    :class="(view === 'dashboard' ? 'text-White bg-Stone ' : '', classBTN)"
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
      classBTN: "",
    };
  },
  methods: {
    goTo(target) {
      this.$router.push({ name: target });
    },
    classButton() {
      if (this.dataClass === "small") {
        this.classBTN = "h-10 w-10";
      } else if (this.dataClass === "") {
        this.classBTN = "h-15 w-15";
      }
    },
  },
  mounted() {
    this.classButton();
  },
};
</script>
