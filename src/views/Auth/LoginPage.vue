<template>
  <div class="flex flex-col p-12 pl-18 pb-8 max-w-authPage w-full">
    <div class="flex justify-between">
      <img src="../../components/icons/Logo.svg" class="h-6" alt="" />
      <img src="../../components/icons/Settings.svg" class="h-6 w-6" alt="" />
    </div>
    <h1 class="w-164 mt-16">{{ title }}</h1>
    <div class="flex mt-24">
      <div class="w-input">
        <InputModel :data="email" v-model="email.value" :errors="errors" />
        <InputModel
          class="mt-8"
          :data="password"
          v-model="password.value"
          :errors="errors"
        />
        <router-link
          to="ResetPassword"
          class="mt-4 block text-Blue test-H5 font-bold "
          >Forgot your password ?</router-link
        >
        <ToolsButtonSubmit
          @action="submit"
          txtButton="Login"
          :color="password.value ==='' || email.value ==='' ? 'desactivated' : ''"
        />
        <div class="flex mt-4">
          <span class="text-Gravel test-H5 font-normal">Need an account ? </span>
          <router-link to="Signup" class="text-Blue test-H5 font-bold ml-1"
            >Register</router-link
          >
        </div>
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
import InputModel from "../../components/core/input/InputModel.vue";
import ToolsButtonSubmit from "../../support/toolsBox/ToolsButtonSubmit.vue";
import useStoreAuth from "../../plugins/stores/auth";
import AuthServices from "../../services/authServices";
import ErrorsHelpers from "../../support/functions/ErrorsHelpers";

export default {
  components: { InputModel, ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();
    return {
      title: "Everything about Esport in one place, for everyone.",
      email: {
        label: "EMAIL",
        name: "email",
        type: "text",
        value: "",
      },
      password: {
        label: "PASSWORD",
        name: "password",
        type: "password",
        value: "",
      },

      errors: "",
      store,
    };
  },
  methods: {
    async submit() {
      this.store.loading = true;
      let forLogin = {
        email: this.email.value,
        password: this.password.value,
      };
      let result = await AuthServices.login(forLogin);
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
