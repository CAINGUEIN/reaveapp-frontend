<template>
  <div class="mb-4 flex flex-col justify-between text-white">
    <label
      class="flex text-H4 text-White font-bold leading-none"
      :for="data.name"
      >{{ data.label
      }}<span class="text-Red ml-2 text-H6 font-normal" id="email-error">{{
        !errors.hasOwnProperty(data.name)
          ? ""
          : errorsHelpers.affichageError(errors[data.name].message)
      }}</span></label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :type="data.type"
        :name="data.name"
        :id="data.name"
        :placeholder="data.label"
        :autocomplete="data.name"
        min="1"
        max="999"
        class="block w-full font-normal py-3 px-6 rounded-Large text-H4 text-White bg-Anthracite border-LightGrey leading-none focus:border-White border-2 focus:outline-none"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <p class="text-error" id="input-error">
      {{
        !errors.hasOwnProperty(data.name)
          ? ""
          : ErrorsHelpers.affichageError(errors[data.name].message)
      }}
    </p>
  </div>
</template>

<script>
import errorsHelpers from "@core/support/functions/errorsHelpers";
import useStoreAuth from "@stores/auth";

/**
 * composant qui gere l'affichage
 * de l'input de type number
 */
export default {
  props: {
    /** :data="inputExemple"
     * inputExemple: {
     *  label: "Exemple",
     *  name: "exemple",
     *  type: "number",
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
