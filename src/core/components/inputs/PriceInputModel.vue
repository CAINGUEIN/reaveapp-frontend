<template>
  <div class="flex flex-col justify-between">
    <label
      class="flex text-White font-black text-base leading-none"
      :for="data.name"
    >
      {{ data.label }} <GoldRC style="margin-left: 4px;" width="16" height="16" />
      <span class="text-Red ml-2 text-H6" id="email-error">{{
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
        :placeholder="data.placeholder ? data.placeholder : data.label"
        :autocomplete="data.name"
        class="block w-full font-bold py-5 px-6 rounded-Large text-H2 text-White bg-DarkRock border-DarkRock border-2 leading-none focus:ring-0 focus:border-DarkRock focus:outline-none"
        :class="data.class"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
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
import GoldRC from "../../assets/icons/Wallet/GoldRC.vue";

/**
 * composant qui gere l'affichage
 * de l'input de type text
 */
export default {
  components: {
    ExclamationCircleIcon,GoldRC
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
input[type=number] {
  -moz-appearance: textfield;
}

</style>