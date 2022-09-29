<template>
  <div>
    <h3>Your Profile For Space Friends</h3>
    <p>Show the world you're a Champion.</p>

    <div v-if="stage === 1">
      <InputModel
        class="mt-8"
        :data="profile"
        v-model="profile.value"
        :errors="errors"
      />
      <p>It's your team's profile tag on Reave's Social Platform (feed).</p>
      <ToolsButtonSubmit
        @action="validate"
        txtButton="Continue"
        :color="profile.value === '' ? 'desactivated' : ''"
      />
    </div>
    <div v-if="stage === 2">
      <UploadModel
        v-if="img === ''"
        class="mt-4"
        :data="imgUpload"
        v-model="imgUpload.value"
        @change="submit"
      />
      <CropperProfileFriend
        v-if="img !== ''"
        :src="img"
        :spaceId="spaceId"
        @closeAction="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
import UploadModel from "@core/components/inputs/uploadModel.vue";
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import FriendsServices from "@axios/services/friendsServices";
import useStoreSpace from "@stores/storeSpace";
import useStoreAuth from "@stores/auth";
import CropperProfileFriend from "../../cropper/CropperProfileFriend.vue";

export default {
  components: {
    UploadModel,
    InputModel,
    ToolsButtonSubmit,
    CropperProfileFriend,
  },
  data() {
    const storeSpace = useStoreSpace();
    const store = useStoreAuth();
    return {
      stage: 1,
      img: "",
      spaceId: "",
      profile: {
        label: "@Profile",
        name: "profile",
        type: "text",
        value: "",
      },
      imgUpload: {
        label: "SpaceFriend",
        name: "friend",
        type: "file",
        value: "",
      },
      errors: "",
      storeSpace,
      store,
    };
  },
  methods: {
    async validate() {
      let dataRequeste = {
        type: "friends",
        profile: this.profile.value,
      };
      //a recup dans le service les datas du user
      // pour le createBy:user._id
      let result = await FriendsServices.create(dataRequeste);
      console.log("ici dans result", result);
      if (result.success) {
        this.stage = 2;
        this.spaceId = result.data.newSpace._id;
        this.store.dataAccount.spaces = result.data.updateSpaceUser;
        this.store.dataSpaces[result.data.newSpace._id] = result.data.newSpace;
        //si ok on recup le Space_id
      } else {
        //voir un message d'erreur
      }
    },
    submit() {
      let cache = document.getElementById("friend").files[0];
      this.img = URL.createObjectURL(cache);
    },
  },
};
</script>
