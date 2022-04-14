<template>
  <div class="flex flex-col justify-between">
    <label class="flex text-H4 text-White font-bold leading-none" :for="data.name">
      {{ data.label }}
      <span class="text-Red ml-2 text-H6 font-normal " id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : ErrorsHelpers.affichageError(errors[data.name].message)
      }}</span>
    </label>
    
    <div class="mt-3 relative ">
      <input
        :type="data.type"
        :name="data.name"
        :id="data.name"
        :placeholder="data.label"
        :autocomplete="data.name"
        class="
          block w-full font-normal py-3 px-6 rounded-Large text-H4 text-White
          bg-Anthracite border-LightGrey leading-none
          focus:border-White border-2 focus:outline-none"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="store.loading"
        aria-describedby="email-error"
        aria-invalid="true"
      />
      <div v-if="errors.hasOwnProperty(data.name)" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ExclamationCircleIcon class="h-5 w-5 text-Red" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import ErrorsHelpers from "../../../support/functions/ErrorsHelpers";
import useStoreAuth from "../../../plugins/stores/auth";

/**
 * composant qui gere l'affichage
 * de l'input de type text
 */
export default {
  components: {
    ExclamationCircleIcon,
  },
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
    /** v-model="inputExemple.value"
     * ce qui va etre submit
     */
    modelValue: String,
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
    };
  },
};
</script>