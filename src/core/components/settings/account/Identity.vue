<template>
  <div>
    <div name="identity" class="ml-16 flex flex-col">
      <h3>Identity</h3>
      <div class="bg-White h-1 rounded-full w-[730px]"></div>
      <div class="flex">
        <div name="leftContent" class="w-[420px]">
          <InputModel
            class="mt-8"
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
          <p>You can change your profile name every 93 days.</p>
          <p>You’ll be on cooldown if you change it.</p>
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
            class="w-40 mx-auto mt-5"
            @action="submit"
            txtButton="Save"
            :color="''"
          />
        </div>
        <div name="rightContent" class="w-[661px] m-auto">
          <p>PROFILE APPEARANCE</p>
          <div class="bg-Gravel w-[661px] h-[150px] rounded-2xl">
            <div
              class="w-[661px] h-[150px] rounded-2xl overflow-hidden"
              @click="openModal('banner')"
            >
              <img
                :src="
                  'https://media.reave.dev/userbannier/status' +
                    store.dataAccount._id +
                    'bannier.png' ||
                  'https://media.reave.dev/userbannier/status' +
                    store.dataAccount._id +
                    'bannier.jpeg'
                "
                alt=""
              />
            </div>
            <img
              :src="
                'https://media.reave.dev/useravatar/xl' +
                store.dataAccount._id +
                'avatar.png'
              "
              alt=""
              class="absolute rounded-full left-8 -bottom-8"
              @click="openModal('avatar')"
            />
          </div>
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
  },
};
</script>

<style lang="scss" scoped></style>
