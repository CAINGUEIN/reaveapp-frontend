<template>
  <div class="flex flex-col p-12 pl-18 pb-8 max-w-authPage w-full">
    <div class="flex justify-between">
      <img src="@core/assets/icons/Logo1.svg" class="h-6" alt="" />
      <img
        src="@core/assets/icons/Settings.svg"
        class="h-6 w-6"
        alt=""
      />
    </div>
    <h1 class="w-164 mt-16">{{ nameTitle }}</h1>
    <div class="flex mt-24">
      <!-- soumettre BTN -->
      <div class="flex items-center justify-between">
        <ToolsButtonSubmit @action="logout" txtButton="Logout" :color="''" />
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
import AuthServices from "@axios/services/authServices";
/* Import Tools */
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import useStoreAuth from "@stores/auth";

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
      if (result.data.success) {
        this.$cookies.remove("userSession"); //return this
        this.store.deleteDataAccount;
        this.$router.replace({ name: "Login" });
      } else {
        console.log("erreur de deconnexion");
      }
    },
  },
};
</script>
