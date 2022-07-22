<template>
  <div class="bg-Anthracite h-full">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
/* Import Tools */
import useStoreAuth from "@stores/auth";
/* Import components*/
import AuthLayout from "@modules/layout/views/AuthLayout.vue";
import ReaveLayout from "@modules/layout/views/ReaveLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayout,
    ReaveLayout,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
  methods: {
    isColor() {
      document.querySelector("html").style.backgroundColor = "#000000";
    },
  },
  computed: {
    layout() {
      let layout = (this.$route.meta.layout || "Reave") + "Layout";
      console.log("layout", layout);
      return layout;
    },
  },
  mounted() {
    this.isColor();
  },
};
</script>
