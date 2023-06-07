<template>
  <div class="flex">
    <div
      class="hidden md:flex w-imgAuthPAge h-screen bg-cover bg-center"
      style="flex: 1"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    ></div>
    <router-view style="flex: 2" />
  </div>
</template>

<script>
const imageUrl = new URL("../data/bg.jpeg", import.meta.url).href;

export default {
  data() {
    return {
      imageUrl,
    };
  },
  methods: {
    paramInURL() {
      if (this.$route.path === "/") {
        this.$router.replace({ name: "Login" });
      }
    },
  },
  mounted() {
    this.paramInURL();
  },
};
</script>
