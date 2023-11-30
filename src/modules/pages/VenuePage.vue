<template>
  <div>{{ data3 }}</div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
const { data3 } = defineProps(['data3']);

//TODO SEND DATA FROM PEOPLEVENUE
onMounted(() => {
  try {
    console.log('llp', data3);
  } catch (error) {
    console.error('Error | Parsing JSON data:', error);
  }
});

</script>

