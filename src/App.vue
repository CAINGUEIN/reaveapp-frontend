<template>
  <div class="bg-Anthracite h-full">
    <div v-if="store.isLogin === true">
      <ReaveLayout>
      </ReaveLayout>
    </div>
    <div v-else-if="store.isLogin === false">
      <AuthLayoutPage />
    </div>
  </div>
</template>

<script>
/* Import Tools */
import useStoreAuth from "./plugins/stores/auth";
/* Import components*/
import AuthLayoutPage from "./views/Auth/AuthLayoutPage.vue";
import ReaveLayout from "./views/Public/ReaveLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayoutPage,
    ReaveLayout
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
  mounted() {
    this.store.feedDataAccount();
    this.isColor();
  },
};
</script>
