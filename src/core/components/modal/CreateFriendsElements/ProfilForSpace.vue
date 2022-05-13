<template>
  <div>
    <h3>Your Profile For Space Friends</h3>
    <p>Show the world you're a Champion.</p>
    <UploadModel class="mt-4" :data="imgUpload" v-model="imgUpload.value" />
    <InputModel
      class="mt-8"
      :data="profile"
      v-model="profile.value"
      :errors="errors"
    />
    <p>It's your team's profile tag on Reave's Social Platform (feed).</p>
    <InputModel class="mt-8" :data="bio" v-model="bio.value" :errors="errors" />
    <p>It's your team's profile bio on Reave's Social Platform (feed).</p>
    <ToolsButtonSubmit
      @action="validate"
      txtButton="Continue"
      :color="profile.value === '' ? 'desactivated' : ''"
    />
  </div>
</template>

<script>
import UploadModel from "../../inputs/uploadModel.vue";
import InputModel from "../../inputs/InputModel.vue";
import ToolsButtonSubmit from "../../buttons/ToolsButtonSubmit.vue";
import ErrorsHelpers from "../../../support/functions/ErrorsHelpers";
import FriendsServices from "../../../../modules/friends/services/friendsServices";
import useStoreSpace from "../../../../plugins/stores/storeSpace";

export default {
  components: { UploadModel, InputModel, ToolsButtonSubmit },
  data() {
    const storeSpace = useStoreSpace();
    return {
      imgUpload: {
        label: "Logo",
        name: "logo_image",
        type: "file",
        value: "",
      },
      profile: {
        label: "@Profile",
        name: "profile",
        type: "text",
        value: "",
      },
      bio: {
        label: "@Bio",
        name: "bio",
        type: "textarea",
        value: "",
      },
      errors: "",
      storeSpace,
    };
  },
  methods: {
    async validate() {
      let dataRequeste = {
        type: "friends",
        profile: this.profile.value,
        bio: this.bio.value,
      };
      //a recup dans le service les datas du user
      // pour le createBy:user._id
      let result = await FriendsServices.create(dataRequeste);
      console.log("ici dans result", result);
      if (result.success) {
        let resultSpaceData = await this.storeSpace.feedDataSpace(
          result.idNewSpace
        );
        if (resultSpaceData.succes) {
          this.errors = ErrorsHelpers.resetError();
          this.$router.push({
            path: "/space/friends",
            query: { id: result.idNewSpace },
          });
        } else {
          this.errors = ErrorsHelpers.handleError(/**/);
        }
      } else {
        this.errors = ErrorsHelpers.handleError(/**/);
      }
    },
  },
};
</script>
