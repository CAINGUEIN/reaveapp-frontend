<template>
  <div class="flex flex-col p-12 pl-18 pb-8 max-w-authPage w-full">
    <div class="flex justify-between">
      <img src="../../components/icons/Logo.svg" class="h-6" alt="" />
      <img src="../../components/icons/Settings.svg" class="h-6 w-6" alt="" />
    </div>
    <h1 class="w-164 mt-16 text-5xl">{{ title }}</h1>
    <div class="w-input">
      <InputModel
        class="mt-8"
        :data="email"
        v-model="email.value"
        :errors="errors"
      />
      <ToolsButtonSubmit
        @action="submit"
        txtButton="Reset password"
        :color="email.value === '' ? 'desactivated' : ''"
      />
    </div>
    <router-link
      to="Login"
      class="mt-4 block text-Blue test-H5 font-bold"
      >Return Login page.</router-link
    >
    <div class="flex justify-between mt-auto">
      <span class="text-H6 font-normal">V0.0.1</span>
      <span>Copyright © 2022 REAVE</span>
    </div>
  </div>
</template>

<script>
import InputModel from "../../components/core/input/InputModel.vue";
import AuthServices from "../../services/authServices";
import ToolsButtonSubmit from "../../support/toolsBox/ToolsButtonSubmit.vue";
import useStoreAuth from "../../plugins/stores/auth";

export default {
  components: { InputModel, ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();

    return {
      title: "Reset your password",
      email: {
        label: "EMAIL",
        name: "email",
        type: "text",
        value: "",
      },

      store,
      errors: "",
    };
  },
  methods: {
    async submit() {
      this.store.loading = true;
      let forReset = {
        email: this.email.value,
      };
      let result = await AuthServices.login(forReset);
      if (result.data.access_token) {
        this.$cookies.set("userSession", result.data.access_token);
        store.commit("feedDataAccount");
        this.errors = ErrorsHelpers.resetError();
        this.$router.push({ name: "Home" });
      } else {
        this.errors = ErrorsHelpers.handleError(result.data.errors);
      }
    },
  },
};
</script>