<template>
  <div class="flex flex-col justify-between">
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
    <div class="grid grid-cols-1">
      <div v-if="modelValue !== ''" class="flex relative">
        <ToolsButtonSubmit
          class="mb-0 mx-1"
          @action="remove()"
          :color="modelValue"
        />
        <XIcon
          class="absolute h-6 w-6 text-red right-0 rounded-full bg-black bg-opacity-50"
          aria-hidden="true"
          @click="remove()"
        />
      </div>
    </div>
    <label class="flex text-H4 text-White font-bold leading-none"
      >Event Color</label
    >
    <div class="grid grid-cols-5">
      <div class="flex relative" v-for="option in data.options" :key="option">
        <ToolsButtonSubmit
          class="mb-0 mx-1 w-full"
          @action="add(option, modelValue)"
          :txtButton="option.slot"
          :color="option.value"
        />
        <XIcon
          v-if="modelValue === option.value"
          class="absolute h-6 w-6 text-red right-0 rounded-full bg-black bg-opacity-50"
          aria-hidden="true"
          @click="remove()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import useStoreAuth from "@stores/auth";
import { XIcon } from "@heroicons/vue/outline";

/**
 * composant qui gere l'affichage
 * de l'input de type arrayMono
 */
export default {
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
      cache: this.data,
      errorsHelpers,
      store,
    };
  },
  methods: {
    add(option, data) {
      if (data === option.value) {
        this.$emit("update:modelValue", "");
      } else {
        this.$emit("update:modelValue", option.value);
      }
      console.log(data, option);
    },
    remove() {
      this.$emit("update:modelValue", "");
    },
    affichage(value) {
      console.log(value);
      for (const key in this.data.options) {
        if (value === this.data.options[key].value) {
          return this.data.options[key].slot;
        }
      }
    },
  },
  components: {
    XIcon,
    ToolsButtonSubmit,
  },
};
</script>
