<template>
  <div
    class="w-[270px] h-full border-r-2 border-DarkRock px-8 overflow-auto scrollbarV"
  >
    <div v-if="infoEvent !== ''" class="z-10 flex items-center mt-6">
      <div class="h-10 w-10 rounded-full bg-slate-400"></div>
      <Naming :yourPerm="yourPerm" class="flex ml-3" :data="infoEvent"></Naming>
      <Button40Slot
        v-if="
          (yourPerm === 'Owner' || yourPerm === 'Admin') &&
          !infoEvent.isPublished
        "
        class="mx-4"
        @click="open = true"
        ><SpeakerphoneIcon class="h-5 m-auto"></SpeakerphoneIcon
      ></Button40Slot>
    </div>
    <div v-for="section in nav" class="flex flex-col mt-4">
      <p
        class="flex items-center text-LightGrey font-medium text-base"
        @click="
          section.items.length > 0
            ? section.open === true
              ? (section.open = false)
              : (section.open = true)
            : ''
        "
      >
        {{ section.cathegory
        }}<ChevronUpIcon
          v-if="section.items.length > 0"
          class="h-8"
          :class="
            section.open === true
              ? 'transition-all ease-in-out rotate-180'
              : 'transition-all ease-in-out'
          "
        />
      </p>
      <div
        v-for="item in section.items"
        :class="
          section.open === true
            ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100'
            : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
        "
      >
        <button
          @click="
            item.target !== '' ? $emit('update:modelValue', item.target) : ''
          "
          class="ml-6 text-left px-2 py-1 rounded-lg my-0.5 flex items-center text-xs font-medium"
          :class="
            select === item.target
              ? 'text-white bg-LightRock'
              : item.target !== ''
              ? 'text-Gravel hover:text-white hover:bg-LightRock'
              : 'text-LightRock'
          "
        >
          <SvgTarget
            :color1="
              select === item.target
                ? '#fff'
                : item.target !== ''
                ? '#808080'
                : '#2a2a2a'
            "
            :target="item.icon"
            :height="12"
            :width="12"
            class="mr-2"
          ></SvgTarget>
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
  <ModalClear :open="open" @action="close()">
    <Published :data="infoEvent" @action="close"></Published>
  </ModalClear>
</template>

<script>
import Naming from "@components/projectId/Naming.vue";
import Button40Slot from "@components//buttons/Button40Slot.vue";
import { SpeakerphoneIcon } from "@heroicons/vue/outline";
import ModalClear from "@components/modal/ModalClear.vue";
import Published from "@components/modal/projectId/Published.vue";
import SvgTarget from "@components/SvgTarget.vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Naming,
    Button40Slot,
    SpeakerphoneIcon,
    ModalClear,
    Published,
    SvgTarget,
    ChevronUpIcon,
  },
  props: ["yourPerm", "infoEvent", "select", "modelValue"],
  data() {
    return {
      open: false,
      nav: [
        {
          cathegory: "Overview",
          open: true,
          items: [],
        },
        {
          cathegory: "Products",
          open: true,
          items: [
            { target: "Ticket", icon: "Tickets", name: "Tickets" },
            { target: "", icon: "Trophees", name: "Prizes" },
            { target: "", icon: "Merch", name: "Merch" },
            { target: "", icon: "Skins", name: "Drops" },
            { target: "", icon: "ReaveCards", name: "Reave Cards" },
          ],
        },
        {
          cathegory: "Logistics",
          open: true,
          items: [
            { target: "Format", icon: "Format", name: "Format" },
            { target: "Equipment", icon: "Equipment", name: "Equipment" },
            { target: "", icon: "ReaveMaps", name: "Travel" },
            { target: "", icon: "Calendar", name: "Calendar" },
            { target: "", icon: "Tasks", name: "Tasks" },
          ],
        },
        {
          cathegory: "People",
          open: true,
          items: [
            { target: "Staff", icon: "Heart", name: "Staff" },
            { target: "", icon: "Eye", name: "Spectators" },
            { target: "", icon: "Fist", name: "Participants" },
            { target: "", icon: "Stand", name: "Stands" },
            { target: "Venue", icon: "Events", name: "Venues" },
            { target: "Sponsors", icon: "Sponsors", name: "Sponsors" },
          ],
        },
        {
          cathegory: "Analytics",
          open: true,
          items: [
            { target: "", icon: "Products", name: "Products" },
            { target: "", icon: "Logistics", name: "Logistics" },
            { target: "", icon: "Game", name: "Game" },
            { target: "", icon: "Marketing", name: "Marketing" },
            { target: "", icon: "People", name: "People" },
          ],
        },
        {
          cathegory: "Marketing",
          open: true,
          items: [
            { target: "", icon: "Profiles", name: "Profiles" },
            { target: "", icon: "Campaigns", name: "Campaigns" },
          ],
        },
        {
          cathegory: "Finance",
          open: true,
          items: [
            { target: "", icon: "Panel", name: "Panel" },
            { target: "", icon: "Budgets", name: "Budgets" },
            { target: "", icon: "Documents", name: "Contracts" },
          ],
        },
      ],
    };
  },
};
</script>
