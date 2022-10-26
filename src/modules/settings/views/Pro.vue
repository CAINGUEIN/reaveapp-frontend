<template>
  <div class="h-screen overflow-auto scrollbarV p-16">
    <p class="font-black text-White text-[64px]">Profesional</p>
    <p class="mt-6 text-[16px] font-normal text-LightGrey">
      <span class="text-Ruby">*</span> indicates required
    </p>
    <div name="contact" class="mt-[56px] flex flex-col">
      <p class="font-medium text-[32px] text-White">Go To The Profesional</p>
      <div class="bg-Gravel mt-4 h-1 rounded-full w-[730px]"></div>
      <div class="flex mt-6">
        <div name="leftContent" class="w-[420px]">
          <InputModel
            class="mt-8"
            :data="email"
            v-model="email.value"
            :errors="errors"
          />
          <ToolsButtonSubmit
            class="w-40 mt-5"
            @action="submit"
            txtButton="Contact"
            :color="''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputModel from "@components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@components/buttons/ToolsButtonSubmit.vue";
//tool
import useStoreAuth from "@stores/auth";
import UserUpdateServices from "@axios/services/userUpdateServices";

export default {
  components: { InputModel, ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();
    return {
      store,
      errors: "",
      email: {
        label: "Your E-Mail",
        name: "email",
        type: "text",
        value: "",
      },
    };
  },
  methods: {
    async submit() {
      let body = {
        contactPro: this.email.value,
      };
      let result = await UserUpdateServices.contactPro(body);
      if (result.data.success) {
        this.store.dataAccount.pro = result.data.data.pro;
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
