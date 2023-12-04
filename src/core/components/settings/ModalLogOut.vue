<template>
  <div class="p-6 w-164">
    <div class="flex justify-between items-center">
      <h2>Sure of logging out?</h2>
      <p @click="close">X</p>
    </div>
    <div class="flex justify-evenly">
      <ToolsButtonSubmit
        class="w-[160px]"
        :txtButton="'Cancel'"
        :color="''"
        @click="close"
      />
      <ToolsButtonSubmit
        class="w-[160px]"
        :txtButton="'Log out'"
        :color="'red'"
        @click="logout"
      />
    </div>
  </div>
</template>

<script>
import useStoreAuth from "@stores/auth";
import AuthServices from "@axios/services/authServices";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
export default {
  data() {
    const store = useStoreAuth();
    return {
      store,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async logout() {
      let result = await AuthServices.logout();
      if (result.data.success) {
        this.$cookies.remove("userSession"); //return this
        this.store.deleteDataAccount();
        this.$router.push({ name: "Events" });
      } else {
        console.log("erreur de deconnexion");
      }
    },
  },
  components: { ToolsButtonSubmit },
};
</script>
