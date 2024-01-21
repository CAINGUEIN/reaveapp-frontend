<template>
  <div class="flex flex-col justify-between">
    <label
      class="flex text-White text-base font-black leading-none"
      :for="data.name"
    >
      {{ data.label }}
      <span class="text-Red ml-2 text-H6 font-normal" id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : errorsHelpers.affichageError(errors[data.name].message)
      }}</span>
    </label>

    <div class="mt-3 relative">
      <input
        :type="data.type"
        :name="data.name"
        :id="data.name"
        :placeholder="data.placeholder"
        :autocomplete="data.name"
        min="0"
        class="block w-full placeholder:font-semibold py-2 px-4 transition-all duration-200 text-H6 text-White bg-Anthracite border-DarkRock leading-none focus:border-White border-2 focus:ring-0 focus:outline-none"
        :class="`${paddingY} ${borderRadius} ${fontBold}`"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focusout="$emit('update:value', $event.target.value)"
        :disabled="store.loading"
        aria-describedby="email-error"
        aria-invalid="true"
      />
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
    textClass: {
      type: String,
      default: "text-H4", // Valeur par défaut
    },
    paddingY: {
      type: String,
      default: "py-3",
    },
    fontBold: {
      type: String,
      default: "font-normal",
    },
    borderRadius: {
      type: String,
      default: "rounded-Large",
    },

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
  emits: ["update:modelValue", "update:value"],
  data() {
    const store = useStoreAuth();
    return {
      errorsHelpers,
      store,
    };
  },
};
</script>
