<template>
  <div class="w-[1322px]">
    <nav class="flex justify-center p-4 z-10">
      <a
        class="px-8 pb-2 cursor-pointer border-b-2"
        :class="
          view === 'posts' ? 'text-White border-White' : 'border-LightRock'
        "
        @click="view = 'posts'"
        >Posts</a
      >
      <a
        class="px-8 pb-2 cursor-pointer border-b-2"
        :class="
          view === 'career' ? 'text-White border-White' : 'border-LightRock'
        "
        @click="view = 'career'"
        >Career</a
      >
      <a
        class="px-8 pb-2 cursor-pointer border-b-2"
        :class="
          view === 'inventory' ? 'text-White border-White' : 'border-LightRock'
        "
        @click="view = 'inventory'"
        >Inventory</a
      >
      <a
        class="px-8 pb-2 cursor-pointer border-b-2"
        :class="
          view === 'tags' ? 'text-White border-White' : 'border-LightRock'
        "
        @click="view = 'tags'"
        >Tags</a
      >
    </nav>
    <div
      class="absolute bottom-4 z-0 w-[1322px] bg-LightRock h-0.5 rounded-full"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: "posts",
    };
  },
};
</script>
