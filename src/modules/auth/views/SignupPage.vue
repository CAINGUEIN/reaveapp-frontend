<template>
  <div class="flex flex-col p-12 pl-18 pb-8 max-w-authPage w-full">
    <div class="flex justify-between">
      <Reave/>
      <Settings/>
    </div>
    <h1 class="w-164 mt-16 text-5xl">{{ title }}</h1>
    <div v-if="etape === 1" class="w-input">
      <InputModel
        class="mt-8"
        :data="email"
        v-model="email.value"
        :errors="errors"
      />
      <InputModel
        class="mt-8"
        :data="userName"
        v-model="userName.value"
        :errors="errors"
      />
      <InputModel
        class="mt-8"
        :data="profileTag"
        v-model="profileTag.value"
        :errors="errors"
      />
      <InputModel
        class="mt-8"
        :data="password"
        v-model="password.value"
        :errors="errors"
      />
      <InputModel
        class="mt-8"
        :data="confirmPassword"
        v-model="confirmPassword.value"
        :errors="errors"
      />
      <ToolsButtonSubmit
        @action="submit /* next */"
        txtButton="Continue"
        :color="
          email.value === '' ||
          userName.value === '' ||
          profileTag.value === '' ||
          password.value === '' ||
          password.value !== confirmPassword.value
            ? 'desactivated'
            : ''
        "
      />
    </div>
    <div v-else-if="etape === 2">
      <div class="w-input">
        <InputModel
          class="mt-8"
          :data="birthDay"
          v-model="birthDay.value"
          :errors="errors"
        />
        <InputModel
          class="mt-8"
          :data="role"
          v-model="role.value"
          :errors="errors"
        />
        <InputModel
          class="mt-8"
          :data="played"
          v-model="played.value"
          :errors="errors"
        />
        <InputModel
          class="mt-8"
          :data="rolePlayed"
          v-model="rolePlayed.value"
          :errors="errors"
        />
      </div>
      <div class="flex items-center mt-8">
        <CheckboxModel
          class="text-LightGrey"
          :data="cgu"
          v-model="cgu.value"
          :errors="errors"
        />
        <router-link
          to="Login"
          class="ml-2 text-Blue text-H6 font-normal leading-none"
          >Terms of Service</router-link
        >
        <span class="text-LightGrey text-H6 font-normal leading-none ml-2"
          >and</span
        >
        <router-link
          to="Login"
          class="ml-2 text-Blue text-H6 font-normal leading-none"
          >Privacy Policy</router-link
        >
      </div>
      <CheckboxModel
        class="mt-8 text-Gravel"
        :data="newsLetters"
        v-model="newsLetters.value"
        :errors="errors"
      />
      <div class="w-input">
        <ToolsButtonSubmit
          @action="submit"
          txtButton="Register"
          :color="
            birthDay.value === '' ||
            role.value === '' ||
            played.value === '' ||
            rolePlayed.value === '' ||
            cgu.value === false
              ? 'desactivated'
              : ''
          "
        />
      </div>
    </div>
    <router-link to="Login" class="mt-4 block text-Blue test-H5 font-bold"
      >Already have an account?</router-link
    >
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
      title: "Create on account",
      email: {
        label: "EMAIL",
        name: "email",
        type: "text",
        value: "",
      },
      userName: {
        label: "USERNAME",
        name: "userName",
        type: "text",
        value: "",
      },
      profileTag: {
        label: "PROFILE NAME",
        name: "profilename",
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

      birthDay: {
        label: "BIRTHDAY",
        name: "birthDay",
        type: "text",
        value: "",
      },
      role: {
        label: "ECOSYSTEM ROLE(S)",
        name: "role",
        type: "text",
        value: "",
      },
      played: {
        label: "ESPORT(S) PLAYED",
        name: "played",
        type: "text",
        value: "",
      },
      rolePlayed: {
        label: "ESPORT ROLE(S) PLAYED",
        name: "rolePlayed",
        type: "text",
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
        userName: this.userName.value,
        profileTag: this.profileTag.value,
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
          this.$router.push({ name: "Personal" });
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
