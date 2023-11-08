<template>
  <div class="flex flex-col items-center text-Gravel hover:text-White w-full h-[299px]">
    <label
      class="font-400 mb-1 rounded-full border-dashed w-64 h-64 border-2 flex text-Gravel hover:text-White"
      :for="data.name"
    >
      <div class="flex flex-col w-full text-Gravel hover:text-White">
        <div 
          class="my-auto w-[136px] mx-auto p-3 cursor-pointer rounded-xl label hover:bg-LightRock text-Gravel hover:text-White"
        >
         <div class="text-Gravel hover:text-White">

         </div>
          <Picture class="mx-auto" :width="24" :height="24"></Picture>
          <p class="text-sm mt-2 w-fit font-medium">
            {{ props.data.label }}
          </p>
          <label :for="data.name">
            <input
              :id="data.name"
              :name="data.name"
              :type="data.type"
              class="sr-only"
              @input="emitImg"
              accept="image/png"
            />
          </label>
        </div>
      </div>
    </label>
    <h4 class="text-Gravel w-64 pt-3 font-medium text-xs">
      By creating a Space, you agree to Reave's
      <span class="text-Blue font-bold">Community Guidelines.</span>
    </h4>
  </div>
</template>
<script setup>
import Picture from "@assets/icons/Picture.vue";

const emit = defineEmits("update:modelValue");

const colorPlus = "#111111";

const changeColor = () => {
  colorPlus = "#2a2a2a";
}

const props = defineProps({
  data: Object,
  miniature: {
    default: {},
  },
  modelValue: { Object, String },
  error: Object,
});
function emitImg(e) {
  console.log(e.target.files[0]);
  emit("update:modelValue", e.target.files[0]);
}
</script>
<!-- <script>
/**
 * composant qui gere l'affichage
 * de l'input de type text
 */
export default {
  components: {},
  props: {
    /** :data="inputExemple"
     * inputExemple: {
     *  label: "Exemple",
     *  name: "exemple",
     *  type: "text",
     *  value: "",
     * },
     */

    /** :errors="errors[exemple]"
     * retour de l'erreur
     */
    errors: {
      default: {},
    },
  },
  emits: ["update:modelValue"],
  methods: {},
};
</script> -->

<style>
.label {
  color: rgb(128 128 128);
}

.label:hover {
  color: rgb(255 255 255);
}
</style>
