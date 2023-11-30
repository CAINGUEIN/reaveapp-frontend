<template>
  <div>{{ }}</div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
const { data3 } = defineProps(['']);

const getData = () => {
}

//TODO SEND DATA FROM PEOPLEVENUE
onMounted(() => {
  getData();
});

</script>

