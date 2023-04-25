<template>
  <div>
    <div name="layout" class="flex justify-between items-center">
      <p class="flex items-center">
        <SvgTarget
          target="Logistics"
          :height="20"
          :width="20"
          class="mr-2"
        ></SvgTarget>
        <span class="font-black text-xl text-LightGrey">PRODUCTS ></span>

        <span class="font-black text-xl text-white flex items-center"
          ><SvgTarget
            target="Format"
            :height="20"
            :width="20"
            class="mx-2"
          ></SvgTarget>
          FORMAT</span
        >
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div class="max-w-7xl w-[95%] mx-auto">
      <div name="formatSection">
        <div name="headerSchedule" class="flex items-end justify-between mt-10">
          <p class="text-xl text-LightGrey font-black leading-none">SCHEDULE</p>
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
        <div name="separateSchedule" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentSchedule" class="flex mt-8">
          <div v-if="edit" class="w-[644px]">
            <PersonalDateModel
              v-model="eventDate.value"
              :data="eventDate"
            ></PersonalDateModel>
          </div>
          <div v-else>
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ eventDate.label }}
            </p>
            <p class="flex text-H4 text-White font-book leading-none mt-4">
              {{
                eventDate.value === ""
                  ? "Empty"
                  : $dayjs(eventDate.value).format("dddd DD MMMM YYYY HH:mm")
              }}
            </p>
          </div>
        </div>
        <div name="headerEsport" class="flex items-end justify-between mt-10">
          <p class="text-xl text-LightGrey font-black leading-none">ESPORT</p>
          <div>
            <button
              v-if="editEsport"
              :class="
                ifUpdatingEsport() ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
              "
              class="text-black rounded-full h-10 px-10 mx-auto"
              @click.prevent="updateEsport()"
            >
              <h4 class="text-black text-xl">Save</h4>
            </button>
            <Button40Slot
              v-if="
                (yourPerm === 'Owner' || yourPerm === 'Admin') &&
                !data.isPublished &&
                !editEsport
              "
              :selected="editEsport"
              class=""
              @click="
                editEsport === true ? (editEsport = false) : (editEsport = true)
              "
              ><PencilIcon class="h-5 m-auto"></PencilIcon
            ></Button40Slot>
          </div>
        </div>
        <div name="separateEsport" class="h-0.5 w-full bg-Gravel mt-4"></div>
        <div name="contentSchedule" class="flex mt-8">
          <div v-if="editEsport" class="w-[644px]">
            <InputModel
              class="w-full"
              :data="platform"
              v-model="platform.value"
              :errors="errors"
            ></InputModel>
            <InputModel
              class="w-full mt-4"
              :data="game"
              v-model="game.value"
              :errors="errors"
            ></InputModel>
          </div>
          <div v-else>
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ platform.label }}
            </p>
            <p class="mt-4 font-medium text-H4 text-LightGrey">
              {{ platform.value === "" ? "Empty" : platform.value }}
            </p>
            <p class="flex text-H4 text-White font-black leading-none mt-4">
              {{ game.label }}
            </p>
            <p class="mt-4 font-medium text-H4 text-LightGrey">
              {{ game.value === "" ? "Empty" : game.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XButton36 from "@components/buttons/XButton36.vue";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import SvgTarget from "@components/SvgTarget.vue";
import InputModel from "@components/inputs/InputModel.vue";
import PersonalDateModel from "@components/inputs/PersonalDateModel.vue";

import { ChevronUpIcon, PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";

export default {
  components: {
    XButton36,
    PencilIcon,
    Button40Slot,
    InputModel,
    ChevronUpIcon,
    PersonalDateModel,
    SvgTarget,
  },
  props: ["data", "yourPerm"],
  emits: ["update:modelValue"],
  data() {
    return {
      eventDate: {
        //ici les data a passer dans le personaldate
        label: "EVENT DATE",
        name: "eventDate",
        value: "",
        //yearsBefore et yearAfter doit etre egal a zero au minimum
        yearsBefore: 0,
        yearAfter: 5,
      },
      platform: {
        label: "PLATFORM",
        name: "platform",
        type: "text",
        value: "",
      },
      game: {
        label: "GAME",
        name: "game",
        type: "text",
        value: "",
      },
      errors: [],
      edit: false,
      editEsport: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.eventDate.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.eventDate.value !== this.data.date) {
        return true;
      } else {
        return false;
      }
    },
    ifUpdatingEsport() {
      if (this.platform.value !== this.data.platform) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        date: this.eventDate.value,
      };
      console.log(body);
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.$emit("action");
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.eventDate.value = this.data.eventDate;
      }
    },
    async updateEsport() {
      let body = {
        event_id: this.data._id,
        platform: this.platform.value,
        game: this.game.value,
      };
      console.log(body);
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.$emit("action");
        this.editEsport = false;
      } else {
        this.errors.push(result.data.errors);
        this.eventDate.value = this.data.eventDate;
      }
    },
    goBack() {
      this.$router.back();
    },
  },
  watch: {},
  mounted() {
    this.data.date ? (this.eventDate.value = this.data.date) : "";
    this.data.platform ? (this.platform.value = this.data.platform) : "";
    this.data.game ? (this.game.value = this.data.game) : "";
    this.setEdit();
  },
};
</script>
