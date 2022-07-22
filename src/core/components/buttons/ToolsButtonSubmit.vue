<!-- exemple du fonctionnement du composant

<toolsButtonSubmit
  @action="la function invoqué par le $emit du BTN"
  :txtButton="'mettre ici le txt du BTN'"
  :color="'mettre ici le pre-set de la color'" (pas encore mis en place)
  :loading="loading" etat commun pour desacticé tout les boutons pendant un contact du service
/>

pas oublié l'import et la création et la variable loading a false de base 
et surtout passé le loading en debut de la function service a true et un retour a false quand fini
 -->

<template>
  <div class="w-full">
    <div
      v-if="store.loading"
      type="button"
      :class="[classBtn]"
      class="text-Black"
      disabled
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-Black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Processing...
    </div>
    <div
      v-else
      type="button"
      :class="[classBtn, classTxtBtn]"
      @click.prevent="action"
    >
      {{ txtButton }}
    </div>
  </div>
</template>

<script>
/* Import Tools */
import useStoreAuth from "../../../plugins/stores/auth";

export default {
  props: ["txtButton", "color"],
  data() {
    const store = useStoreAuth();
    return {
      store,
      classBtn: "",
      classTxtBtn: "",
    };
  },
  methods: {
    action($event) {
      if (this.color === "desactivated") {
        return;
      } else {
        console.log("action", $event);
        this.$emit("action");
      }
    },
    BTN() {
      if (this.color === "") {
        this.classBtn = "bg-White rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-black text-[20px] leading-none";
      } else if (this.color === "desactivated") {
        this.classBtn = "bg-LightGrey rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } else if (this.color === "blue") {
        this.classBtn = "bg-Blue rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } else if (this.color === "yellow") {
        this.classBtn = "bg-Yellow rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } else if (this.color === "red") {
        this.classBtn = "bg-Red rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } else if (this.color === "green") {
        this.classBtn = "bg-Green rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } else if (this.color === "orange") {
        this.classBtn = "bg-Orange rounded-full py-4 justify-center flex ";
        this.classTxtBtn = "text-Black font-bold text-H4 leading-none";
      } 
    },
  },
  watch: {
    color: function () {
      this.BTN();
    },
  },
  mounted() {
    this.BTN();
  },
};
</script>
