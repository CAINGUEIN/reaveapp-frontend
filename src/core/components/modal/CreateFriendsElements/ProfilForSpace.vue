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
import UploadModel from "@core/components/inputs/uploadModel.vue";
import InputModel from "@core/components/inputs/InputModel.vue";
import ToolsButtonSubmit from "@core/components/buttons/ToolsButtonSubmit.vue";
import errorsHelpers from "@core/support/functions/errorsHelpers";
import FriendsServices from "@axios/services/friendsServices";
import useStoreSpace from "@stores/storeSpace";
import useStoreAuth from "@stores/auth";

export default {
  components: { UploadModel, InputModel, ToolsButtonSubmit },
  data() {
    const storeSpace = useStoreSpace();
    const store = useStoreAuth();
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
      store,
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
      console.log("ici dans result", result );
      if (result.success) {
        this.store.updateDataSpaces(result.data.spaces)
        let resultSpaceData = await this.storeSpace.feedDataSpace(
          {id: result.idNewSpace}
        );
        console.log(resultSpaceData);
        if (resultSpaceData) {
          this.errors = errorsHelpers.resetError();
          this.$router.push({
            path: "/space/friends",
            query: { id: result.idNewSpace },
          });
          this.$emit("close")
        } else {
          this.errors = errorsHelpers.handleError(/**/);
        }
      } else {
        this.errors = errorsHelpers.handleError(/**/);
      }
    },
  },
};
</script>
