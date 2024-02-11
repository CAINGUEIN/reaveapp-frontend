<template>
  <div class="relative flex flex-col">
    <div class="w-full h-fit relative" @click="goTo">
      <img
        :src="props.dataEvent.posterPic"
        class="max-w-full h-auto object-cover rounded-xl"
      />
      <div
        class="absolute text-White space-x-2 pr-0 top-3 right-3 flex flex-row"
      >
        <Icon v-for="game in props.dataEvent.games" :key="game" :icon="game" />
      </div>
      <div class="absolute text-White space-x-2 pr-0 bottom-3 right-3">
        <Icon :icon="props.dataEvent.type" :width="24" :height="24" />
      </div>
    </div>
    <div>
      <div class="flex flex-row mt-2 space-y-1">
        <img
          class="w-6 h-6 rounded-full my-auto mr-2"
          :src="props.dataSpace.picture"
        />
        <p class="font-medium text-White">{{ props.dataSpace.nameSpace }}</p>
      </div>
      <p class="text-White mt-2 text-xl font-semibold">
        {{ props.dataEvent.name }}
      </p>
      <p class="text-Cloud font-medium">{{ formattedDate }}</p>
      <p class="text-Cloud font-medium mt-1">
        {{
          props.dataEvent.venueName +
          ", " +
          props.dataEvent.city +
          ", " +
          props.dataEvent.country
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { onMounted, ref } from "vue";
import Icon from "./Icon.vue";
const props = defineProps({
  dataEvent: Object,
  dataSpace: Object,
});
const formattedDate = ref("");
const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = {
    weekday: "long", // Jour de la semaine (nom complet)
    day: "numeric", // Jour du mois
    month: "long", // Mois (nom complet)
    year: "numeric", // Année
  };

  return date.toLocaleDateString("en-US", options);
};
onMounted(() => {
  formattedDate.value = formatDate(props.dataEvent.date);
  console.log(props.dataSpace);
});

const goTo = () => {
  router.push({
    name: "EventPage",
    params: {
      idSpace: props.dataSpace._id,
      id: props.dataEvent._id,
    },
  });
};
</script>
