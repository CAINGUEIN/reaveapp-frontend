<template>
  <div>
    <div name="layout" class="flex justify-between items-center">
      <p class="flex items-center">
        <button
          v-if="view === 'Calendar' || view === 'Plan'"
          class="bg-DarkRock text-white h-8 w-8 rounded-full items-center hover:bg-LightRock flex mr-2"
          @click.prevent="view = 'list'"
        >
          <SvgTarget
            target="Chevron"
            :width="24"
            :height="24"
            class="m-auto rotate-90"
          ></SvgTarget>
        </button>
        <SvgTarget
          target="Finance"
          :height="20"
          :width="20"
          class="mr-2"
        ></SvgTarget>
        <span class="font-black text-xl text-LightGrey">FINANCE ></span>
        
        <span class="font-black text-xl text-white flex items-center"><SvgTarget
          target="Panel"
          :height="20"
          :width="20"
          class="mx-2"
        ></SvgTarget>PANEL</span>
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div
      name="topContent"
      class="mt-8 justify-between max-w-7xl w-[95%] mx-auto"
    >
      <p class="font-black text-xl text-white">REVENUE</p>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <img class="mr-4" src=" /Sales.png" alt="" />
        <img class="mr-4" src=" /Revenue.png" alt="" />
        <img class="mr-4" src=" /Sales.png" alt="" />
        <img class="mr-4" src=" /Revenue.png" alt="" />
        <img class="mr-4" src=" /Sales.png" alt="" />
        <img class="mr-4" src=" /Revenue.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Button40Slot from "../../buttons/Button40Slot.vue";
import XButton36 from "@components/buttons/XButton36.vue";
import SvgTarget from "../../SvgTarget.vue";
import { PlusIcon, PencilIcon } from "@heroicons/vue/outline";
import EventServices from "@axios/services/eventServices";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
export default {
  components: {
    Button40Slot,
    PlusIcon,
    SvgTarget,
    XButton36,
    PencilIcon,
    AdjustmentsIcon,
    ChevronDownIcon,
    SearchIcon,
    ViewBoardsIcon,
    ViewGridIcon,
    ViewListIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      description: {
        label: "Event Description",
        name: "description",
        type: "textarea",
        value: "",
      },
      errors: [],
      edit: false,
    };
  },
  methods: {
    setEdit() {
      if (!this.description.value) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    ifUpdating() {
      if (this.description.value !== this.data.description) {
        return true;
      } else {
        return false;
      }
    },
    async update() {
      let body = {
        event_id: this.data._id,
        description: this.description.value,
      };
      let result = await EventServices.updateEvent(body);
      if (result.data.success) {
        this.edit = false;
      } else {
        this.errors.push(result.data.errors);
        this.venueName.value = this.data.venueName;
      }
    },
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    this.data.description
      ? (this.description.value = this.data.description)
      : "";
    this.setEdit();
  },
};
</script>

<style lang="scss" scoped></style>
