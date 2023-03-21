<template>
  <div class="mx-auto w-[1000px]">
    <nav class="flex justify-center p-4 z-10">
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'Posts'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('Posts')"
      >
        Posts
      </p>
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'Events'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('Events')"
      >
        Events
      </p>
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'Products'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('Products')"
      >
        Products
      </p>
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'Career'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('Career')"
      >
        Career
      </p>
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'People'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('People')"
      >
        People
      </p>
      <p
        class="px-8 pb-2 cursor-pointer border-b-2 font-medium text-lg"
        :class="
          view === 'About'
            ? 'text-White border-White'
            : 'border-Gravel text-Gravel'
        "
        @click="changeView('About')"
      >
        About
      </p>
    </nav>
    <div
      class="absolute bottom-4 z-0 w-[1000px] bg-Gravel h-0.5 rounded-full"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["view"],
  methods: {
    changeView(value) {
      this.$emit("action", value);
    },
  },
};
</script>
