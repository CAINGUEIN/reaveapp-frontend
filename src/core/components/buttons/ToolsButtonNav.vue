<template>
  <button
    class="w-auto h-auto m-0 p-0 cursor-pointer hover:bg-DarkRock text-Gravel hover:text-LightGrey"
    :class="classBTN"
    @click="goTo(target)"
  >
    <slot
      v-if="slot === true"
      :class="classIMG"
    >
    </slot>
    <img
      v-else
      :src="src"
      alt=""
      class="mx-auto h-15 w-15 "
      :class="classIMG"
    />
  </button>
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
