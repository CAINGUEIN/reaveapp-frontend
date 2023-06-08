<template>
  <div>
    <div name="layout" class="flex justify-between items-center">
      <p class="flex items-center">
        <span class="font-black text-xl text-white flex items-center"
          ><SvgTarget
            target="Overview"
            :height="20"
            :width="20"
            class="mr-2"
          ></SvgTarget>
          OVERVIEW</span
        >
        <button
          class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10"
          v-if="
            (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
          "
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
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div class="max-w-7xl w-[95%] mx-auto">
      <div name="eventSection">
        <div name="headerEvent" class="flex items-end justify-between mt-10">
          <p class="text-xl text-LightGrey font-black leading-none">EVENT</p>
          <div>
            <button
              v-if="edit"
              :class="
                ifUpdating() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
              "
              class="text-black rounded-full h-10 px-10 mx-auto"
              @click.prevent="update()"
            >
              <h4 class="text-black text-xl">Save</h4>
            </button>
            <Button40Slot
              v-if="
                (yourPerm === 'Owner' || yourPerm === 'Admin') &&
                !data.isPublished &&
                !edit
              "
              :selected="edit"
              class=""
              @click="edit === true ? (edit = false) : (edit = true)"
              ><PencilIcon class="h-5 m-auto"></PencilIcon
            ></Button40Slot>
          </div>
        </div>
        <div name="separateEvent" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentEvent" class="flex mt-8">
          <label
            class="h-[220px] w-[220px] border-2 border-dashed rounded-xl px-10 cursor-pointer flex"
            for="eventUpload"
          >
            <input
              id="eventUpload"
              name="eventUpload"
              type="file"
              class="sr-only"
              @input="imgUpload"
              accept="image/png"
              @change="submit"
            />
            <ImgFormated
              :key="data._id"
              :size="'xl'"
              :targetSpace="data._id"
              :type="'event'"
              class="absolute opacity-50 left-0 right-0 top-0 bottom-0 rounded-xl bg-white"
            />
            <p class="text-center my-auto">Upload Event Poster</p>
          </label>
          <div class="ml-6 w-[400px]">
            <div name="inputName">
              <InputModel
                v-if="edit"
                class="w-full"
                :data="name"
                v-model="name.value"
                :errors="errors"
              ></InputModel>
              <div v-else>
                <p class="text-H4 font-black text-white">NAME</p>
                <p class="mt-4 font-medium text-H4 text-LightGrey">
                  {{ name.value }}
                </p>
              </div>
            </div>
            <div name="inputDesc">
              <div v-if="edit">
                <p class="flex text-H4 text-White font-black leading-none mt-4">
                  {{ description.label }}
                </p>
                <textarea
                  :name="description.name"
                  v-model="description.value"
                  :placeholder="description.label"
                  id=""
                  class="w-full bg-transparent border-2 border-White rounded-2xl mt-4"
                ></textarea>
              </div>
              <div v-else>
                <p class="flex text-H4 text-White font-black leading-none mt-4">
                  {{ description.label }}
                </p>
                <p class="mt-4 font-medium text-H4 text-LightGrey">
                  {{ description.value === "" ? "Empty" : description.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div name="footerEvent">
          <p class="cursor-pointer text-xs text-LightGrey font-normal mt-5">
            Show preview
          </p>
        </div>
      </div>
      <div name="locationSection">
        <div name="headerLocation" class="flex items-end justify-between mt-8">
          <p class="text-xl text-LightGrey font-black leading-none">LOCATION</p>
          <div>
            <button
              v-if="editLocation"
              :class="
                ifUpdatingLocation()
                  ? 'bg-white'
                  : 'bg-Gravel cursor-not-allowed'
              "
              class="text-black rounded-full h-10 px-10 mx-auto"
              @click.prevent="updateLocation()"
            >
              <h4 class="text-black text-xl">Save</h4>
            </button>
            <Button40Slot
              v-if="
                (yourPerm === 'Owner' || yourPerm === 'Admin') &&
                !data.isPublished &&
                !editLocation
              "
              :selected="editLocation"
              class=""
              @click="
                editLocation === true
                  ? (editLocation = false)
                  : (editLocation = true)
              "
              ><PencilIcon class="h-5 m-auto"></PencilIcon
            ></Button40Slot>
          </div>
        </div>
        <div name="separateLocation" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentEvent" class="flex mt-8">
          <div v-if="editLocation" class="w-[644px]">
            <InputModel
              class="mt-4"
              :data="venueName"
              v-model="venueName.value"
              :errors="errors"
            ></InputModel>
            <InputModel
              class="mt-4"
              :data="adress"
              v-model="adress.value"
              :errors="errors"
            ></InputModel>
            <div class="flex gap-2 mt-2">
              <InputModel
                :data="city"
                v-model="city.value"
                :errors="errors"
              ></InputModel>
              <InputModel
                :data="cp"
                v-model="cp.value"
                :errors="errors"
              ></InputModel>
              <InputModel
                :data="country"
                v-model="country.value"
                :errors="errors"
              ></InputModel>
            </div>
          </div>
          <div v-else>
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ venueName.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
              {{ venueName.value === "" ? "Empty" : venueName.value }}
            </p>
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ adress.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4 p-3">
              {{ adress.value === "" ? "Empty" : adress.value }}
            </p>
            <div class="flex">
              <div class="w-1/3">
                <p class="flex text-H4 text-White font-black leading-none">
                  {{ city.label }}
                </p>
                <p class="flex text-H4 text-White font-book leading-none p-3">
                  {{ city.value === "" ? "Empty" : city.value }}
                </p>
              </div>
              <div class="w-1/3">
                <p class="flex text-H4 text-White font-black leading-none">
                  {{ cp.label }}
                </p>
                <p class="flex text-H4 text-White font-book leading-none p-3">
                  {{ cp.value === "" ? "Empty" : cp.value }}
                </p>
              </div>
              <div class="w-1/3">
                <p class="flex text-H4 text-White font-black leading-none">
                  {{ country.label }}
                </p>
                <p class="flex text-H4 text-White font-book leading-none p-3">
                  {{ country.value === "" ? "Empty" : country.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <Published
        v-if="modalView === 'publish'"
        :data="data"
        @action="close"
      ></Published>
      <CropperEvent
        v-if="img !== ''"
        :data="data"
        :src="img"
        @closeAction="close"
      />
    </ModalClear>
  </div>
</template>

<script>
//components
import XButton36 from "@components/buttons/XButton36.vue";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import SvgTarget from "../SvgTarget.vue";
import InputModel from "@components/inputs/InputModel.vue";

import { PencilIcon } from "@heroicons/vue/outline";

import ModalClear from "@components/modal/ModalClear.vue";
import Published from "@components/modal/projectId/Published.vue";

import EventServices from "@axios/services/eventServices";
import CropperEvent from "../cropper/CropperEvent.vue";
import ImgFormated from "../img/ImgFormated.vue";

export default {
  components: {
    XButton36,
    Button40Slot,
    SvgTarget,
    InputModel,
    PencilIcon,
    ModalClear,
    Published,
    CropperEvent,
    ImgFormated,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      open: false,
      edit: false,
      editLocation: false,
      modalView: "",
      imgUpload: "",
      img: "",
      errors: [],
      name: {
        label: "NAME",
        name: "name",
        type: "text",
        value: "",
      },
      description: {
        label: "DESCRIPTION",
        name: "description",
        type: "textarea",
        value: "",
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
  methods: {
    goBack() {
      this.$router.back();
    },
    close() {
      this.open = false;
      this.img = "";
      this.imgUpload = "";
      this.modalView = "";
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
  mounted() {
    this.name.value = this.data.name;
    this.data.venueName ? (this.venueName.value = this.data.venueName) : "";
    this.data.adress ? (this.adress.value = this.data.adress) : "";
    this.data.city ? (this.city.value = this.data.city) : "";
    this.data.cp ? (this.cp.value = this.data.cp) : "";
    this.data.country ? (this.country.value = this.data.country) : "";
    this.setEdit();
  },
};
</script>
