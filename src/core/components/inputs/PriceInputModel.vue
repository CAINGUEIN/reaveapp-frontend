<template>
  <div class="flex flex-col justify-between">
    <label
      class="flex text-White font-black text-base leading-none"
      :for="data.name"
    >
      {{ data.label }}
      <span class="text-Red ml-2 text-H6" id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : errorsHelpers.affichageError(errors[data.name].message)
      }}</span>
    </label>

    <div
      class="mt-3 relative w-full font-black py-3 px-6 rounded-Large text-H2 text-White bg-DarkRock border-DarkRock border-2 leading-none focus:ring-0 focus:border-DarkRock focus:outline-none"
    >
      <div class="flex flex-row justify-center">
        <input
          :type="data.type"
          :name="data.name"
          :id="data.name"
          maxlength="5"
          :placeholder="data.placeholder ? data.placeholder : data.label"
          :autocomplete="data.name"
          class="max-w-full min-w-auto font-black text-H2 pr-0 text-White bg-DarkRock border-DarkRock leading-none focus:ring-0 focus:border-DarkRock focus:outline-none"
          :class="data.class"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :disabled="store.loading"
          aria-describedby="email-error"
          aria-invalid="true"
        />
        <span
          :class="modelValue.length === 0 ? ' text-gray-500' : 'text-White'"
          class="font-black text-H2 my-auto"
        >
          €
        </span>
      </div>

      <div
        v-if="errors.hasOwnProperty(data.name)"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon class="h-5 w-5 text-Red" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import useStoreAuth from "@stores/auth";

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
      errorsHelpers,
      store,
    };
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>
