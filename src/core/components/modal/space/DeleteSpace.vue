<template>
  <div
    class="relative inline-block align-bottom bg-Anthracite rounded-2xl text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-modal"
  >
    <CloseButton
      @closeModal="close"
      :width="12"
      :height="12"
      class="absolute z-30 right-6 top-6"
    />
    <div>
      <div class="mt-3 sm:mt-5">
        <div class="flex flex-col items-center justify-center">
          <h3 class="text-center w-3/4 pt-6">
            Are you sure you want to delete {{ props.spaceName }}?
          </h3>
          <p class="text-Gravel text-base">
            Write the space's name to confirm.
          </p>
        </div>
        <InputModel
          class="mt-8 px-5 uppercase"
          :data="space"
          v-model="space.value"
          :errors="errors"
          @update:modelValue="handleUpdate"
        ></InputModel>
        <p class="text-Red" v-if="errors.length > 0">{{ errors }}</p>
        <button
          @click="submit"
          :disabled="!isEnabled"
          class="disabled:cursor-not-allowed flex flex-row items-center mx-auto disabled:opacity-50 hover:bg-red-700 px-4 py-2 mt-8 mb-7 rounded-full bg-Ruby transition"
        >
          <SvgTarget :target="'Trash'" class="my-auto pr-2 text-White" />
          <p class="text-White font-black">Delete Space</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpaceServices from "@axios/services/spaceServices.js";
import SvgTarget from "../../SvgTarget.vue";
import { useRouter } from "vue-router";
import InputModel from "@core/components/inputs/InputModel.vue";
import { ref } from "vue";
import CloseButton from "../../buttons/CloseButton.vue";
const emit = defineEmits(["isOpenModal", "deleteSpace", "submitSuccess"]);
const props = defineProps({
  idSpace: String,
  spaceName: String,
});
const space = {
  label: "Space name",
  name: "name",
  type: "text",
  value: "",
};

const router = useRouter();
const errors = ref({});
const isEnabled = ref(false);
const handleUpdate = (value) => {
  if (value === props.spaceName) {
    isEnabled.value = true;
  } else {
    isEnabled.value = false;
  }
};

function close() {
  emit("isOpenModal", false);
  space.value = "";
}

const submit = async () => {
  // faire le submit
  let result = await SpaceServices.deleteSpace(props.idSpace);
  if (result.data.success) {
    emit("submitSuccess");
    emit("isOpenModal", false);
    router.push("/personalMessages");
  } else {
    errors.value = result.data.message;
    console.log(errors.value);
  }
};
</script>
