<template>
  <div>
    <div name="layout" class="flex justify-between items-center">
      <p class="flex items-center">
        <span class="font-black uppercase text-xl text-white flex items-center">
          <SvgTarget
            target="Overview"
            :height="20"
            :width="20"
            class="mr-2"
          ></SvgTarget>
          Overview</span
        >
        <button
          class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10"
          v-if="(yourPerm === 'Owner' || yourPerm === 'Admin') && !isPublished"
          @click="(open = true), (modalView = 'publish')"
        >
          <SvgTarget
            target="Publish"
            :height="20"
            :width="20"
            color1="#000000"
            class="mr-2"
          ></SvgTarget>
          Publish
        </button>
        <button
          class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base font-black bg-DarkRock text-white rounded-full h-10"
          @click="goTo"
        >
          <SvgTarget target="Preview" color1="#FFFFFF" class="mr-2"></SvgTarget>
          See Event Page Preview
        </button>
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div class="max-w-7xl w-[95%] mx-auto">
      <div name="eventSection">
        <div name="headerEvent" class="flex items-end justify-between mt-10">
          <p class="text-xl text-LightGrey uppercase font-black leading-none">
            Global
          </p>
        </div>
        <div name="separateEvent" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentEvent" class="flex mt-6">
          <div>
            <label class="text-base text-White font-black uppercase"
              >Event poster</label
            >
            <div
              name="uploadPic"
              :style="customBg"
              @mouseover="hoverEdit = true"
              @mouseleave="hoverEdit = false"
              class="mt-4"
              :class="
                this.imageURL != null
                  ? 'flex hover:opacity-50 rounded-[12px] flex-col w-[318px] h-[318px]'
                  : 'flex border-dashed border-4 rounded-[12px] border-Silver flex-col w-[220px] h-[220px]'
              "
            >
              <!-- Upload Event Pic -->
              <input
                type="file"
                class="hidden"
                name="selectedEventPic"
                ref="inputPoster"
                accept=".jpg, .jpeg, .png"
                @change="onPosterPicSelected"
              />
              <div
                class="text-center my-auto cursor-pointer"
                @click="$refs.inputPoster.click()"
              >
                <pre
                  v-bind:class="{
                    relative: hoverEdit && !imageURL,
                    hidden: !hoverEdit && imageURL,
                  }"
                  class="font-sans text-White opacity-100 font-medium text-lg"
                >
Upload
Poster Image</pre
                >
              </div>
            </div>
          </div>
          <div class="ml-6 mt-1 w-[400px]">
            <div name="inputName">
              <InputModel
                v-if="!isPublished"
                @update:value="update"
                class="w-[318px] space-y-5"
                :fontBold="'font-medium'"
                :data="name"
                v-model="name.value"
                :errors="errors"
              ></InputModel>
              <div v-else>
                <p class="font-black text-base text-white uppercase">
                  Event Name
                </p>
                <p class="mt-4 font-medium text-H4 text-LightGrey">
                  {{ name.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div name="secondaryPics" class="flex mt-8">
          <div>
            <label class="text-base text-White font-black uppercase"
              >Secondary Images</label
            >
            <div class="w-full grid grid-cols-4 gap-2.5 mt-4">
              <div v-for="image in secondaryPics" :key="image">
                <img
                  v-if="image"
                  :src="image"
                  alt=""
                  class="rounded-[12px] flex-col w-[248px] h-[154px]"
                />
              </div>
              <div
                v-if="secondaryPics.length === 0"
                name="uploadPic"
                @mouseover="hoverSecondEdit = true"
                @mouseleave="hoverSecondEdit = false"
                class="mt-4 flex border-dashed border-4 rounded-[12px] border-Silver flex-col w-[248px] h-[154px]"
              >
                <!-- Upload Additionnal Pic -->
                <input
                  type="file"
                  name="selectedSecondPic"
                  ref="picSecondUpload"
                  class="sr-only"
                  accept=".jpg, .jpeg, .png"
                  @change="onSecondPicSelected"
                />
                <div
                  class="text-center my-auto cursor-pointer"
                  @click="$refs.picSecondUpload.click()"
                >
                  <pre
                    v-bind:class="{
                      relative: hoverSecondEdit || secondaryPics.length === 0,
                      hidden: !hoverSecondEdit && secondaryPics.length > 0,
                    }"
                    class="font-sans text-LightRock font-medium text-lg"
                  >
Upload
Additionnal Image</pre
                  >
                </div>
              </div>

              <div
                v-else
                class="rounded-full cursor-pointer my-auto ml-2 w-10 h-10 bg-White text-LightRock"
              >
                <!-- Upload Secondary Pic -->
                <label class="cursor-pointer rounded-full">
                  <Picture
                    class="mx-auto my-auto h-full"
                    :color3="'#fff'"
                    :width="18"
                    :height="16"
                  ></Picture>

                  <input
                    type="file"
                    name="selectedSecondPic"
                    ref="picSecondUpload"
                    class="sr-only"
                    accept=".jpg, .jpeg, .png"
                    @change="onSecondPicSelected"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="locationSection" class="">
        <div name="headerLocation" class="flex items-end justify-between mt-8">
          <p class="text-xl text-LightGrey uppercase font-black leading-none">
            About
          </p>
          <div></div>
        </div>
        <div name="separateLocation" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentEvent" class="flex w-full">
          <div name="inputDesc" class="flex flex-row pt-6 space-x-6 w-full">
            <div v-if="!isPublished" class="w-fit">
              <p
                class="flex text-base text-white uppercase font-black leading-none"
              >
                {{ description.label }}
              </p>
              <div class="relative w-fit max-h-80 mt-4">
                <textarea
                  :name="description.name"
                  v-model="description.value"
                  :placeholder="description.name"
                  maxlength="240"
                  resize="none"
                  @focusout="update"
                  oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                  class="w-full py-4 px-4 resize max-w-[500px] max-h-72 min-h-fit overflow-y-hidden font-medium bg-Anthracite border-DarkRock focus:border-White border-2 focus:ring-0 focus:outline-none rounded-2xl"
                ></textarea>
                <div class="absolute bottom-3 flex right-3 text-LightRock">
                  <span
                    v-bind:class="{
                      'text-Red opacity-70': description.value.length === 240,
                    }"
                    class="font-medium text-base"
                    >{{ 240 - description.value.length }}</span
                  >
                  <div class="resizer"></div>
                </div>
              </div>
            </div>
            <div v-else class="w-fit">
              <p
                class="flex text-base text-white uppercase font-black leading-none"
              >
                {{ description.label }}
              </p>
              <p class="mt-4 font-medium text-H4 text-LightGrey">
                {{ description.value === "" ? "Empty" : description.value }}
              </p>
            </div>
            <div>
              <label
                class="text-base text-White font-black leading-none uppercase"
                >Description Image</label
              >
              <div
                name="uploadPic"
                :style="customDescBg"
                @mouseover="hoverDescEdit = true"
                @mouseleave="hoverDescEdit = false"
                class="mt-2.5"
                :class="
                  this.descURL != null
                    ? 'flex hover:opacity-50 rounded-[12px] flex-col w-[248px] h-[154px]'
                    : 'flex border-dashed border-4 rounded-[12px] border-Silver flex-col w-[248px] h-[154px]'
                "
              >
                <!-- Upload Desc Pic -->
                <input
                  type="file"
                  name="selectedDescPic"
                  ref="inputDescFile"
                  class="hidden"
                  accept=".jpg, .jpeg, .png"
                  @change="onDescPicSelected"
                />

                <div
                  class="text-center my-auto cursor-pointer"
                  @click="$refs.inputDescFile.click()"
                >
                  <pre
                    v-bind:class="{
                      relative: hoverDescEdit && !descURL,
                      hidden: !hoverDescEdit && descURL,
                    }"
                    class="font-sans text-White font-medium text-lg"
                  >
Upload
Description Image</pre
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <PublishEvent
        v-if="modalView === 'publish'"
        :data="data"
        @action="close"
        @update="isPublished = true"
      ></PublishEvent>
      <CropperEvent
        v-if="selectedPic !== null"
        :data="data"
        :src="selectedPic"
        :type="imageType"
        @closeAction="close"
        @callFromCropSecondPic="useCroppedImageSecondPic"
        @callFromCrop="useCroppedImage"
        @callFromCropDescPic="useCroppedImageDescPic"
      />
    </ModalClear>
  </div>
</template>

<script>
//components
import XButton36 from "@components/buttons/XButton36.vue";
import SvgTarget from "../SvgTarget.vue";
import Picture from "@assets/icons/Picture.vue";
import InputModel from "@components/inputs/InputModel.vue";

import ModalClear from "@components/modal/ModalClear.vue";
import PublishEvent from "@components/modal/projectId/PublishEvent.vue";

import EventServices from "@axios/services/eventServices";
import UploadServices from "@axios/services/uploadServices";
import CropperEvent from "../cropper/CropperEvent.vue";

export default {
  components: {
    XButton36,
    SvgTarget,
    InputModel,
    Picture,
    ModalClear,
    PublishEvent,
    CropperEvent,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      hoverEdit: false,
      hoverSecondEdit: false,
      hoverDescEdit: false,
      routeId: this.$route.params.id,
      imageURL: null,
      descURL: null,
      imageType: "",
      isMenuOpen: false,
      openAdd: false,
      selectedPic: null,
      picUpload: null,
      descPicUpload: null,
      picSecondUpload: null,
      secondaryPics: [],
      isPublished: this.data.isPublished,
      open: false,
      edit: false,
      editLocation: false,
      modalView: "",
      imgUpload: "",
      img: "",
      errors: [],
      name: {
        label: "EVENT NAME",
        name: "name",
        type: "text",
        value: "",
      },
      description: {
        label: "Event Description",
        name: "Text",
        type: "textarea",
        value: this.data.description,
      },
      venueName: {
        label: "VENUE NAME",
        name: "venueName",
        type: "text",
        value: "",
      },
      adress: {
        label: "VENUE ADRESS",
        name: "adress",
        type: "text",
        value: "",
      },
      city: {
        placeholder: "City",
        name: "city",
        type: "text",
        value: "",
      },
      cp: {
        placeholder: "CP",
        name: "cp",
        type: "text",
        value: "",
      },
      country: {
        placeholder: "Country",
        name: "country",
        type: "text",
        value: "",
      },
    };
  },
  computed: {
    customBg() {
      return {
        "background-image": `url('${this.imageURL}')`,
        "background-size": "contain",
        "background-repeat": "no-repeat",
      };
    },
    customDescBg() {
      return {
        "background-image": `url('${this.descURL}')`,
        "background-size": "cover",
        "background-repeat": "no-repeat",
      };
    },
    customSecondPics(pic) {
      return {
        "background-image": `url('${pic}')`,
        "background-size": "contain",
        "background-repeat": "no-repeat",
      };
    },
  },
  methods: {
    onPosterPicSelected(event) {
      console.log("PRIMARY PIC");
      this.picUpload = event.target.files[0];
      this.selectedPic = URL.createObjectURL(this.picUpload);
      console.log("selectedPic after onFile : ", this.selectedPic);
      this.imageType = "posterPic";
      this.open = true;
      // Reset input to select a picture again
      event.target.value = null;
    },
    onSecondPicSelected(event) {
      console.log("IMAGE SECONDARY");
      this.picSecondUpload = event.target.files[0];
      this.selectedPic = URL.createObjectURL(this.picSecondUpload);
      console.log("selectedPic after onFile : ", this.selectedPic);
      this.imageType = "secondPic";
      this.open = true;
      // Reset input to select a picture again
      event.target.value = null;
    },
    onDescPicSelected(event) {
      console.log("IMAGE DESC");
      this.descPicUpload = event.target.files[0];
      this.selectedPic = URL.createObjectURL(this.descPicUpload);
      console.log("selectedPic after onFile : ", this.selectedPic);
      this.imageType = "descPic";
      this.open = true;
      // Reset input to select a picture again
      event.target.value = null;
    },
    publish() {
      //let body = { _id: this.$route.params.id };
      //VenueServices.publishVenue(body);
      //this.open = true;
      this.modalView = "publish";
    },
    goTo() {
      this.$router.push({
        name: "EventPage",
        params: { id: this.routeId },
      });
    },

    goBack() {
      this.$router.back();
    },
    closeCropper() {
      this.selectedPic = null;
      this.open = false;
      console.log("selected pic : ", this.selectedPic);
      this.picUpload = null;
      // this.modalView = "";
    },
    async getBackendImage(img) {
      if (img !== "") {
        let result = await UploadServices.getImageFromBackend(img);
        return result;
      }
    },
    async useCroppedImageSecondPic(data) {
      console.log(data);
      const formData = new FormData();
      formData.append("selectedPic", data.selectedPic);
      formData.append("routeId", this.routeId);
      let result = await UploadServices.uploadPicture(
        "event/secondaryPics",
        formData
      );
      console.log("llm3", result);
      const image = await this.getBackendImage(result.data.name);
      this.secondaryPics.push(image);
      this.closeCropper();
    },
    async useCroppedImage(data) {
      console.log(data.selectedPic.filename);
      const formData = new FormData();
      formData.append("selectedPic", data.selectedPic);
      formData.append("routeId", this.routeId);
      console.log("llm3");
      let result = await UploadServices.uploadPicture(
        "event/posterPic",
        formData
      );
      console.log("llm4", result);
      this.imageURL = await this.getBackendImage(result.data.name);
      this.closeCropper();
    },
    async useCroppedImageDescPic(data) {
      const formData = new FormData();
      formData.append("selectedPic", data.selectedPic);
      formData.append("routeId", this.routeId);
      let result = await UploadServices.uploadPicture(
        "event/descPic",
        formData
      );
      console.log("llm5", result);
      this.descURL = await this.getBackendImage(result.data.name);
      this.closeCropper();
    },
    close() {
      this.open = false;
      //this.img = "";
      //this.imgUpload = "";
      //this.modalView = "";
    },
    submit() {
      let cache = document.getElementById("eventUpload").files[0];
      this.img = URL.createObjectURL(cache);
      this.open = true;
    },
    ifUpdating() {
      if (
        this.name.value !== this.data.name ||
        this.description.value !== this.data.description
      ) {
        return true;
      } else {
        return false;
      }
    },
    ifUpdatingLocation() {
      if (this.venueName.value !== this.data.venueName) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      if (this.ifUpdating()) {
        let body = {
          event_id: this.data._id,
          name: this.name.value,
          description: this.description.value,
        };
        let result = await EventServices.updateEvent(body);
        if (result.data.success) {
          this.edit = false;
          this.$emit("action");
        } else {
          this.errors.push(result.data.errors);
          this.name.value = this.data.name;
        }
      }
    },
    async updateLocation() {
      let body = {
        event_id: this.data._id,
        venueName: this.venueName.value,
        adress: this.adress.value,
        city: this.city.value,
        cp: this.cp.value,
        country: this.country.value,
      };
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.editLocation = false;
        this.$emit("action");
      } else {
        this.errors.push(result.data.errors);
        this.venueName.value = this.data.venueName;
      }
    },
    setEdit() {
      if (!this.name.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
  },
  // watch: {
  //   '$route.params.id': function(newId) {
  //     this.getSpaceId = newId;
  //     this.searchEventOperator();
  //   }},
  async mounted() {
    this.name.value = this.data.name;
    this.data.venueName ? (this.venueName.value = this.data.venueName) : "";
    this.data.adress ? (this.adress.value = this.data.adress) : "";
    this.data.city ? (this.city.value = this.data.city) : "";
    this.data.cp ? (this.cp.value = this.data.cp) : "";
    this.data.country ? (this.country.value = this.data.country) : "";
    this.setEdit();
    this.imageURL = await this.getBackendImage(this.data.posterPic);
    this.descURL = await this.getBackendImage(this.data.descriptionPic);
    if (this.data.secondaryPics) {
      for (const image in this.data.secondaryPics) {
        this.secondaryPics[image] = await this.getBackendImage(
          this.data.secondaryPics[image]
        );
      }
    }
  },
};
</script>

<style scoped>
textarea {
  border: ridge 2px;
  min-height: 154px;
  max-width: 452px;
  min-width: 260px;
}
.resizer {
  background-image: url("svg/textarea-resize.svg");
  background-size: cover;
  width: 12px;
  height: 12px;
  margin-top: auto;
  margin-left: 8px;
  margin-bottom: auto;
}

textarea::-webkit-resizer {
  display: none;
}
</style>
