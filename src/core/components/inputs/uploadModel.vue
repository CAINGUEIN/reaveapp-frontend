<template>
  <div class="flex flex-col justify-between text-white">
    <label
      class="h-20 font-400 mb-1 rounded-2xl border-dashed border-2 flex"
      :for="data.name"
    >
        <div class="flex flex-1 flex-col">
          <svg
            class="m-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="">
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
  </div>
</template>

<script>
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
    data: Object,
    miniature: {
      default: {},
    },
    /** v-model="inputExemple.value"
     * ce qui va etre submit
     */
    modelValue: { Object, String },
    /** :errors="errors[exemple]"
     * retour de l'erreur
     */
    errors: {
      default: {},
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitImg(e) {
      console.log(e.target.files[0]);
      this.$emit("update:modelValue", e.target.files[0]);
    },
  },
};
</script>
