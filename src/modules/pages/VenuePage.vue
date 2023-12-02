<template>
  <div>{{ }}</div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import { useRoute } from "vue-router";


//Services
import VenueServices from "@axios/services/venueServices";

const route = useRoute();
const { data3 } = defineProps(['']);

const id = route.params.id;

const getData = async() => {

  const result = await VenueServices.searchPersonalVenueOperator(id);
  console.log('aaa',result);



}

//TODO SEND DATA FROM PEOPLEVENUE
onMounted(() => {
  getData();
});

</script>

