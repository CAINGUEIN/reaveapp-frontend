<template>
  <button
    v-for="space in data"
    @click="$emit('action', space._id, space.typeOfSpace)"
    name="svg-div"
    class="bg-Rock hover:bg-Stone hover:text-White rounded-full p-0.5"
  >
    <img
      src="http://via.placeholder.com/60"
      alt=""
      class="rounded-full my-auto"
    />
  </button>
</template>

<script>
export default {
  props: ["data"],
  emits: ["action"]
};
</script>
