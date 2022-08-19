<template>
  <div
    class="flex items-center justify-center hover:bg-Stone hover:text-White rounded-full"
    :class="classBTN"
    @click="goTo(target)"
  >
    <slot
    ></slot>
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
  props: ["target", "src", "dataClass", "slot"],
  data() {
    const store = useStoreAuth();
    return {
      classBTN: "",
      store,
    };
  },
  methods: {
    goTo(value) {
      this.store.view = value
      this.$router.push({ name: value });
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
