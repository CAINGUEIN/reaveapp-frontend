<template>
  <div>
    <div name="identity" class="mt-[56px] flex flex-col">
      <p class="font-medium text-[32px] text-White">Description</p>
      <div class="bg-Gravel mt-4 h-1 rounded-full w-[730px]"></div>
      <div class="flex mt-6">
        <div name="leftContent" class="w-[420px]">
          <InputModel
            class="mt-8"
            :data="bio"
            v-model="bio.value"
            :errors="errors"
          />
          <InputModel
            class="mt-8"
            :data="status"
            v-model="status.value"
            :errors="errors"
          />
          <InputModel
            class="mt-8"
            :data="birthDate"
            v-model="birthDate.value"
            :errors="errors"
          />
          <InputModel
          class="mt-8"
          :data="location"
          v-model="location.value"
          :errors="errors"
          />
          <p>You can be creative here, not only physical places are possible.</p>
          <InputModel
          class="mt-8"
          :data="link"
          v-model="link.value"
          :errors="errors"
          />
          <ToolsButtonSubmit
            class="w-40 mt-5"
            @action="submit"
            txtButton="Modify"
            :color="''"
          />
        </div>
        <div name="rightContent" class="w-[661px] m-auto">
          
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
      status: {
        label: "STATUS",
        name: "status",
        type: "text",
        value: "",
      },
      bio: {
        label: "BIO",
        name: "bio",
        type: "text",
        value: "",
      },
      birthDate: {
        label: "BIRTH DATE",
        name: "birthDate",
        type: "text",
        value: "",
      },
      location: {
        label: "LOCATION",
        name: "location",
        type: "text",
        value: "",
      },
      link: {
        label: "Link",
        name: "link",
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
        status: this.status.value,
        bio: this.bio.value,
        birthDate: this.birthDate.value,
        location: this.location.value,
        link: this.link.value,
      }
      let result = await UserUpdateServices.description(body)
      if (result.data.success) {
        this.store.dataAccount.status = this.status.value
        this.store.dataAccount.bio = this.bio.value
        this.store.dataAccount.birthDate = this.birthDate.value
        this.store.dataAccount.location = this.location.value
        this.store.dataAccount.link = this.link.value
      }
    }
  },
  mounted () {
    this.status.value = this.store.dataAccount.status || "";
    this.bio.value = this.store.dataAccount.bio || "";
    this.birthDate.value = this.store.dataAccount.birthDate || "";
    this.location.value = this.store.dataAccount.location || "";
    this.link.value = this.store.dataAccount.link || "";
  },
};
</script>