<template>
  <div class="flex items-center">
    <input
      :type="data.type"
      :name="data.name"
      :id="data.name"
      class="bg-Anthracite text-Anthracite h-7 w-7 mr-3 rounded-full border-2 border-White 
      focus:outline-non focus:ring-0
      checked:text-Anthracite checked:border checked:border-White
      hover:border hover:border-White hover:checked:border hover:checked:border-White"
      :class="
        !errors.hasOwnProperty(data.name)
          ? ''
          : ''
      "
      :value="modelValue"
      @input="$emit('update:modelValue', !modelValue)"
      :disabled="store.loading"
    />
    <div>
      <label
        class="flex text-H6 font-normal leading-none"
        :for="data.name"
      >
        <span class="text-Red ml-2 text-H6 font-normal " id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : ErrorsHelpers.affichageError(errors[data.name].message)
      }}</span>
        {{ data.label }}
      </label>
    </div>
  </div>
</template>

<script>
import ErrorsHelpers from "../../../support/functions/ErrorsHelpers";
import useStoreAuth from "../../../plugins/stores/auth";

/**
 * composant qui gere l'affichage
 * de l'input de type checkbox
 */
export default {
  props: {
    /** :data="inputExemple"
     * inputExemple: {
     *  label: "Exemple",
     *  name: "exemple",
     *  type: "checkbox",
     *  value: "",
     * },
     */
    data: Object,
    /** v-model="inputExemple.value"
     * ce qui va etre submit
     */
    modelValue: Boolean,
    /** :errors="errors[exemple]"
     * retour de l'erreur
     */
    errors: {
      default: {},
    },
  },
  emits: ["update:modelValue"],
  data() {
    const store = useStoreAuth();
    return {
      ErrorsHelpers,
      store,

      classInput: "",
      classLabelError: "",
      classInputError: "",
    };
  },
  methods: {},
};
</script>
