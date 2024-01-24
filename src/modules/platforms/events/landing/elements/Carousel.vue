<template>
  <fwb-carousel :pictures="images" />
</template>

<script setup>
import { FwbCarousel } from "flowbite-vue";
const props = defineProps({
    pictures: {
        type: Array,
        required: true,
    },
});

const images = props.pictures.map((picture, i) => ({
    src: picture,
    alt: "Image " + i,
}));

console.log(images);
</script>
