<template>
  <div class="bg-Anthracite">
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
import WaitingLayout from "./components/page/Waiting.vue";
import VisitorLayout from "@modules/layout/views/VisitorLayout.vue";
import EventLayout from "@modules/layout/views/EventLayout.vue";
export default {
  name: "App",
  components: {
    AuthLayout,
    ReaveLayout,
    WaitingLayout,
    VisitorLayout,
    EventLayout,
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
      let layout = (this.$route.meta.layout || "Waiting") + "Layout";
      console.log("layout", layout);
      return layout;
    },
  },
  mounted() {
    this.isColor();
  },
};
</script>
