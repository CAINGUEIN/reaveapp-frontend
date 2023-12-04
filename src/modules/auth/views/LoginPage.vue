<template>
  <div @keyup.enter="submit" class="flex flex-col p-6 flex-1">
    <div class="flex justify-between">
      <Reave />
      <Settings />
    </div>
    <div class="flex m-auto flex-col">
      <h1 class="w-144 mb-16" style="font-size: 54px;">Everything about Esport in one place,<br>for everyone.</h1>
      <div class="flex items-center">
        <form class="w-input">
          <InputModel :data="email" v-model="email.value" :errors="errors" />
          <InputModel
            class="mt-6"
            :data="password"
            v-model="password.value"
            :errors="errors"
          />
          <router-link
            to="ResetPassword"
            class="mt-4 block text-Blue test-H5 font-bold"
            >Forgot your password ?</router-link
          >
          <ToolsButtonSubmit
            class="mt-4"
            @action="submit"
            txtButton="Login"
            :color="
              password.value === '' || email.value === '' ? 'desactivated' : ''
            "
          />
          <div class="flex mt-4">
            <span class="text-Gravel test-H5 font-normal"
              >Need an account ?
            </span>
            <router-link to="Signup" class="text-Blue test-H5 font-bold ml-1">Register</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-between mt-auto">
      <span class="text-H6 font-normal">V0.0.1</span>
      <span>Copyright © 2023 REAVE</span>
    </div>
  </div>
</template>

<script>
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import useStoreAuth from "@stores/auth";
import AuthServices from "@axios/services/authServices";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import Reave from "@assets/icons/Reave.vue";
import Settings from "../../../core/assets/icons/Settings.vue";

export default {
  components: { InputModel, ToolsButtonSubmit, Reave, Settings },
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
      if (result.data.success) {
        this.$cookies.set("userSession", result.data.token);
        let resultDataAccount = await this.store.feedDataAccount();
        if (resultDataAccount) {
          this.errors = errorsHelpers.resetError();
          this.$router.push({ path: "/events"});
          this.store.loading = false;
        }
      } else {
        this.errors = errorsHelpers.handleError(result.data.errors);
        this.store.loading = false;
      }
    },
  },
};
</script>
