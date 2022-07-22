<template>
  <div>
    <h2>settings</h2>
    <div class="flex items-center">
      <h4>If you want delete your user account</h4>
      <ToolsButtonSubmit
        class="w-48 m-auto mt-0"
        @action="deleteAccount"
        txtButton="Delete"
        :color="''"
      />
    </div>
  </div>
</template>

<script>
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import UsersServices from "@axios/services/userServices";
import useStoreAuth from "@stores/auth";

export default {
  components: { ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();
    return {
      store,
      errors: "",
    };
  },
  methods: {
    async deleteAccount() {
      this.store.loading = true;
      let result = await UsersServices.deleteUser();
      console.log("dans le delete", result);
      if (result.data.success) {
        await this.store.deleteDataAccount();
        this.$cookies.remove("userSession");
        this.$router.push({ name: "Login" });
        this.store.loading = false;
      } else {
        this.errors = errorsHelpers.handleError(result.data.errors);
        this.store.loading = false;
      }
    },
  },
};
</script>
