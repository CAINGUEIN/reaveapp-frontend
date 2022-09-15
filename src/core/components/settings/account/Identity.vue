<template>
  <div>
    <div name="identity" class="mt-[56px] flex flex-col">
      <p class="font-medium text-[32px] text-White">Identity</p>
      <div class="bg-Gravel mt-4 h-1 rounded-full w-[730px]"></div>
      <div class="flex mt-6">
        <div name="leftContent" class="w-[420px]">
          <InputModel
            class=""
            :data="profileName"
            v-model="profileName.value"
            :errors="errors"
          />
          <InputModel
            class="mt-8"
            :data="userTag"
            v-model="userTag.value"
            :errors="errors"
          />
          <p class="text-[12px] font-medium text-Gravel leading-3 mt-3">You can change your profile name every 93 days.</p>
          <p class="text-[12px] font-medium text-Gravel leading-3 mt-1">You’ll be on cooldown if you change it.</p>
          <div class="flex">
            <InputModel
              class="mt-8 mr-2"
              :data="firstName"
              v-model="firstName.value"
              :errors="errors"
            /><InputModel
              class="mt-8"
              :data="lastName"
              v-model="lastName.value"
              :errors="errors"
            />
          </div>
          <ToolsButtonSubmit
            class="w-40 mt-5"
            @action="submit"
            txtButton="Modify"
            :color="''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//component
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "../../buttons/ToolsButtonSubmit.vue";
//tool
import useStoreAuth from "@stores/auth";
import UserUpdateServices from "../../../../plugins/axios/services/userUpdateServices";
export default {
  components: { InputModel, ToolsButtonSubmit },
  data() {
    const store = useStoreAuth();
    return {
      store,
      errors: "",
      userTag: {
        label: "USER TAG",
        name: "userTag",
        type: "text",
        value: "",
      },
      profileName: {
        label: "PROFILE NAME",
        name: "profilename",
        type: "text",
        value: "",
      },
      firstName: {
        label: "FIRST NAME",
        name: "firstName",
        type: "text",
        value: "",
      },
      lastName: {
        label: "LAST NAME",
        name: "lastName",
        type: "text",
        value: "",
      },
    };
  },
  methods: {
    openModal(e) {
      this.$emit("action", e);
    },
    async submit() {
      let body = {
        userTag: this.userTag.value,
        profileName: this.profileName.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
      };
      let result = await UserUpdateServices.identity(body);
      if (result.data.success) {
        this.store.dataAccount.userTag = this.userTag.value;
        this.store.dataAccount.profileName = this.profileName.value;
        this.store.dataAccount.firstName = this.firstName.value;
        this.store.dataAccount.lastName = this.lastName.value;
      }
    },
  },
  mounted() {
    this.userTag.value = this.store.dataAccount.userTag || "";
    this.profileName.value = this.store.dataAccount.profileName || "";
    this.firstName.value = this.store.dataAccount.firstName || "";
    this.lastName.value = this.store.dataAccount.lastName || "";
  },
};
</script>
