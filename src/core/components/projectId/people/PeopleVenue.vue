<template>
  <div v-for="item in data" @click="goTo()" class="w-5 cursor-pointer h-5">
    {{ item.name }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VenueServices from '../../../../plugins/axios/services/venueServices';

const data = ref("");

const FindPublishedVenues = async () => {
      // Retrieve published venues
      let result = await VenueServices.findPublishedVenues();
      if (result.data.success) {
        data.value = result.data.data;
      }
}

const goTo = () => {
  // Go to Venue page
}

onMounted( () => {
  FindPublishedVenues();
  console.log('oui');
})

</script>