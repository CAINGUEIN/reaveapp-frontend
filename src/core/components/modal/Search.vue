<template>
  <div
  style="
        background-image: url(../../../../../public/img/Global_Search.png);
        background-size: cover;
        background-position: center;
      "
    class="w-[720px] h-[540px] inline-block align-bottom pb-2 rounded-2xl text-center overflow-hidden shadow-xl transform transition-all sm:align-middle"
  >
  </div>
</template>
<script setup>
import SvgTarget from "@components/SvgTarget.vue";
import { onMounted, ref } from "vue";

const emit = defineEmits(["close"]);
const dataSearch = ref({
  value: "moodMessage",
  placeholder: "Search anything on Reave...",
});
const data = ref({});

const close = () => {
  emit("close", false);
  dataSearch.value.value = "";
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close();
    }
  });
});
</script>
