<template>
  <div @keyup.enter="submit" class="flex flex-col p-6 flex-1">
    <div class="flex justify-between">
      <Reave />
      <Settings />
    </div>

    <div class="m-auto">
      <h1 class="w-164 text-5xl">{{ title }}</h1>
      <InputModel
        class="mt-6 w-input"
        :data="email"
        v-model="email.value"
        :errors="errors"
      />
      <InputModel
        class="mt-6 w-input"
        :data="userTag"
        v-model="userTag.value"
        :errors="errors"
      />
      <InputModel
        class="mt-6 w-input"
        :data="profileName"
        v-model="profileName.value"
        :errors="errors"
      />
      <InputModel
        class="mt-6 w-input"
        :data="password"
        v-model="password.value"
        :errors="errors"
      />
      <InputModel
        class="mt-6 w-input"
        :data="confirmPassword"
        v-model="confirmPassword.value"
        :errors="errors"
      />
      <div class="flex items-center mt-4">
        <CheckboxModel
          class="text-LightGrey"
          :data="cgu"
          v-model="cgu.value"
          :errors="errors"
        />
        <router-link
          to="Login"
          class="ml-1 text-Blue text-H6 font-normal leading-none"
          >Terms of Service</router-link
        >
        <span class="text-LightGrey text-H6 font-normal leading-none ml-1"
          >and</span
        >
        <router-link
          to="Login"
          class="ml-1 text-Blue text-H6 font-normal leading-none"
          >Privacy Policy</router-link
        >
      </div>
      <CheckboxModel
        class="mt-4 text-Gravel"
        :data="newsLetters"
        v-model="newsLetters.value"
        :errors="errors"
      />
      <div class="mt-4 w-input">
        <ToolsButtonSubmit
          @action="submit"
          
          txtButton="Register"
          :color="
            email.value === '' ||
            userTag.value === '' ||
            profileName.value === '' ||
            password.value === '' ||
            confirmPassword.value === '' ||
            cgu.value === false
              ? 'desactivated'
              : ''
          "
        />
      </div>
      <router-link to="Login" class="mt-2 block text-Blue test-H5 font-bold"
        >Already have an account?</router-link
      >
    </div>

    <div class="flex justify-between mt-auto">
      <span class="text-H6 font-normal">V0.0.1</span>
      <span>Copyright © 2022 REAVE</span>
    </div>
  </div>
</template>

<script>
import InputModel from "@core/components/inputs/InputModel.vue";
import AuthServices from "@axios/services/authServices";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import useStoreAuth from "@stores/auth";
import CheckboxModel from "@core/components/inputs/CheckboxModel.vue";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import Reave from "@assets/icons/Reave.vue";
import Settings from "@assets/icons/Settings.vue";

export default {
  components: { InputModel, ToolsButtonSubmit, CheckboxModel, Reave, Settings },
  data() {
    const store = useStoreAuth();

    return {
      title: "Create an account",
      email: {
        label: "EMAIL",
        name: "email",
        type: "text",
        value: "",
      },
      userTag: {
        label: "USER TAG",
        name: "userTag",
        type: "text",
        value: "",
      },
      profileName: {
        label: "PROFILE NAME",
        name: "profileName",
        type: "text",
        value: "",
      },
      password: {
        label: "PASSWORD",
        name: "password",
        type: "password",
        value: "",
      },
      confirmPassword: {
        label: "CONFIRM PASSWORD",
        name: "confirmPassword",
        type: "password",
        value: "",
      },
      cgu: {
        label: "I have read and agree to Reave's",
        name: "cgu",
        type: "checkbox",
        value: "",
      },
      newsLetters: {
        label:
          "I want to receive emails about Reave's announcements, tips & updates.",
        name: "newsLetters",
        type: "checkbox",
        value: "",
      },

      store,
      errors: "",
      etape: 1,
    };
  },
  methods: {
    next() {
      this.etape = 2;
    },
    async submit() {
      this.store.loading = true;
      //passé pour plus tard mettre tout les elements
      let forRegister = {
        email: this.email.value,
        userTag: this.userTag.value,
        profileName: this.profileName.value,
        password: this.password.value,
        email: this.email.value,
      };
      console.log(forRegister);
      let result = await AuthServices.register(forRegister);
      console.log(result);
      if (result.data.success) {
        this.$cookies.set("userSession", result.data.token);
        let resultDataAccount = await this.store.feedDataAccount();
        if (resultDataAccount) {
          this.errors = errorsHelpers.resetError();
          this.$router.push({ name: "Personal", params: {view: 'dashboard'} });
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
