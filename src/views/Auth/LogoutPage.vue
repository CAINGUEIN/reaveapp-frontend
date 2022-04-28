<template>
  <div class="flex flex-col p-12 pl-18 pb-8 max-w-authPage w-full">
    <div class="flex justify-between">
      <img src="../../components/icons/Logo.svg" class="h-6" alt="" />
      <img src="../../components/icons/Settings.svg" class="h-6 w-6" alt="" />
    </div>
    <h1 class="w-164 mt-16">{{ title }}</h1>
    <div class="flex mt-24">
      <!-- soumettre BTN -->
      <div class="flex items-center justify-between">
        <ToolsButtonSubmit
          @action="logout"
          txtButton="Logout"
          :color="''"
        />
      </div>
      <div class="mt-8 ml-8">
        <img src="http://via.placeholder.com/190" alt="" class="rounded" />
      </div>
    </div>
    <div class="flex justify-between mt-auto">
      <span class="text-H6 font-normal">V0.0.1</span>
      <span>Copyright © 2022 REAVE</span>
    </div>
  </div>
</template>

<script>
/* import Services */
import AuthServices from "../../services/authServices";
/* Import Tools */
import ToolsButtonSubmit from "../../support/toolsBox/ToolsButtonSubmit.vue";
import useStoreAuth from "../../plugins/stores/auth";

export default {
  components: { ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();

    return {
      nameTitle: "LogoutPage",
      store,
    };
  },
  methods: {
    async logout() {
      let result = await AuthServices.logout();
      this.$cookies.remove("userSession"); //return this
      this.store.deleteDataAccount;
      if (result.status == "204") {
        this.$router.replace({ name: "Login" });
      } else {
        console.log("erreur de deconnexion");
        this.$router.replace({ name: "Login" });
      }
    },
  },
};
</script>
