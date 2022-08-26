<template>
  <div class="flex flex-col justify-between">
    <label
      class="flex text-H4 text-White font-bold leading-none"
      :for="data.name"
    >
      {{ data.label }}
      <span class="text-Red ml-2 text-H6 font-normal" id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : errorsHelpers.affichageError(errors[data.name].message)
      }}</span>
    </label>

    <select
      :id="data.name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block border-0 file:border file:border-solid w-full font-normal py-3 px-6 rounded-Large text-H4 text-White bg-Anthracite focus:ring-0 leading-none"
    >
      <option
        v-for="option in data.options"
        :key="option.value"
        v-bind:value="option.value"
      >
        {{ option.slot }}
      </option>
    </select>
  </div>
</template>

<script>
import errorsHelpers from "@core/support/functions/errorsHelpers";
import useStoreAuth from "@stores/auth";

/**
 * composant qui gere l'affichage
 * de l'input de type select
 */
export default {
  props: {
    /** :data="inputExemple"
     * inputExemple: {
     *  label: "Exemple",
     *  name: "exemple",
     *  type: "select",
     *  value: "",
     *  options: [""],
     * },
     */
    data: Object,
    /** v-model="inputExemple.value"
     * ce qui va etre submit
     */
    modelValue: { String, Number },
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

      classLabel: "block text-blue text-sm font-bold mb-2",
      classInput:
        "bg-appGrey shadow appearance-none border rounded-full w-full py-2px-3 text-white leading-tight focus:outline-none focus:border-blue focus:shadow-outline",
      classLabelError: "block text-error text-sm font-bold mb-2",
      classInputError:
        "placeholder-error bg-warning text-error selected-warning shadow appearance-none border rounded-full w-full py-2px-3 leading-tight focus:outline-none focus:border-warning focus:shadow-outline",
    };
  },
};
</script>
