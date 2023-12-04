<template>
  <div
    class="min-w-[270px] border-r-2 border-DarkRock overflow-auto scrollbarV pb-4"
  >
    <div
      v-if="infoEvent !== ''"
      class="z-10 flex-col hover:bg-Rock rounded-lg m-6 p-2 pl-3 pr-3"
    >
    <div class="flex items-center">
          <ImgFormated
            :key="infoEvent.name"
            :size="'s'"
            :srcImg = "imageURL"
            class="z-10 h-10 w-10 bg-white rounded-full mr-3"
          />
          <p class="truncate font-bold text-xl">{{ infoEvent.name }}</p>
        </div>
        <div class="flex justify-end">
        
        </div>
      </div>
      <div v-for="section in nav" 
        :class="section.cathegory == 'Search' ? 
        'flex flex-col mx-8' : 'flex flex-col mt-5 mx-8'">
        <p
          class="flex items-center text-LightGrey font-medium text-xl cursor-pointer p-2 rounded-lg"
          @click="
            section.items.length > 0
              ? section.open === true
                ? (section.open = false)
                : (section.open = true)
              : section.target !== ''
              ? $emit('update:modelValue', section.target)
              : ''
          "
          :class=" 
            select === section.target
              ? section.cathegory == 'Search' ? 'text-LightRock cursor-not-allowed' : 'text-LightGrey bg-DarkRock'
              : section.cathegory == 'Search' ? 'text-LightRock cursor-not-allowed' : 'text-Gravel hover:text-LightGrey hover:bg-LightRock'
          "
        >
          <SvgTarget
            :target="section.icon"
            :height="20"
            :width="20"
            :class="section.cathegory == 'Search' ? 'text-LightRock mr-[10px]' : 'mr-2'"
            
          ></SvgTarget>
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
          class="ml-6 text-left px-2 py-1.5 rounded-lg my-0.5 flex items-center text-base font-medium"
          :class="
            select === item.target
              ? 'text-white bg-DarkRock'
              : item.target !== ''
              ? 'text-Gravel hover:text-white hover:bg-LightRock'
              : 'text-LightRock cursor-not-allowed'
          "
        >
          <SvgTarget
            :target="item.icon"
            :height="18"
            :width="18"
            class="mr-2"
          ></SvgTarget>
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button40Slot from "@components/buttons/Button40Slot.vue";
import ImgFormated from "@core/components/img/ImgFormated.vue";
import SvgTarget from "@components/SvgTarget.vue";

import { SpeakerphoneIcon } from "@heroicons/vue/outline";
import { DotsHorizontalIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
  components: {
    Button40Slot,
    SpeakerphoneIcon,
    SvgTarget,
    ChevronUpIcon,
    DotsHorizontalIcon,
    ImgFormated,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: ["yourPerm", "infoEvent", "select", "modelValue", "imageURL"],
  data() {
    return {
      userNavigation: [{ name: "opt1" }, { name: "opt2" }, { name: "Remove" }],
      nav: [
        {
          cathegory: "Overview",
          target: "Overview",
          icon: "Overview",
          open: true,
          items: [],
        },
        {
          cathegory: "Search",
          target: "Search",
          icon: "Search",
          open: true,
          items: [],
        },
        {
          cathegory: "Items",
          target: "",
          icon: "Shards",
          open: true,
          items: [
            { target: "Tickets", icon: "Tickets", name: "Tickets" },
            { target: "", icon: "Trophees", name: "Prizes" },
            { target: "", icon: "Stars", name: "Badges" },
            { target: "", icon: "Merch", name: "Merch" },
            { target: "", icon: "Skins", name: "Drops" },
            { target: "", icon: "ReaveCards", name: "Reave Cards" },
          ],
        },
        {
          cathegory: "Logistics",
          target: "",
          icon: "Logistics",
          open: true,
          items: [
            { target: "Format", icon: "Format", name: "Format" },
            { target: "", icon: "Plan", name: "Plans" },
            { target: "Equipements", icon: "Equipment", name: "Equipment" },
            { target: "", icon: "Calendar", name: "Calendar" },
          ],
        },
        {
          cathegory: "Production",
          target: "",
          icon: "TV",
          open: true,
          items: [
            { target: "", icon: "MatchHistory", name: "History" },
            { target: "", icon: "Dashboards", name: "Dashboards" },
            { target: "", icon: "Mirror", name: "Clips" },
            { target: "", icon: "Planner", name: "Reviews" },
            { target: "", icon: "Insights", name: "Insights" },
            { target: "", icon: "Programs", name: "Programs" },
          ],
        },
        {
          cathegory: "People",
          target: "",
          icon: "People",
          open: true,
          items: [
            { target: "Staff", icon: "Heart", name: "Staff" },
            { target: "PeopleVenue", icon: "Venue", name: "Venues" },
            { target: "", icon: "Marketing", name: "Sponsors" },
            { target: "", icon: "Stand", name: "Booths" },
            { target: "", icon: "Stars", name: "Guests" },
            { target: "", icon: "Fist", name: "Participants" },
            { target: "", icon: "Eye", name: "Spectators" },
          ],
        },
        {
          cathegory: "Analytics",
          target: "",
          icon: "Analytics",
          open: true,
          items: [
            { target: "", icon: "Shards", name: "Items" },
            { target: "", icon: "Logistics", name: "Logistics" },
            { target: "", icon: "Marketing", name: "Marketing" },
            { target: "", icon: "People", name: "People" },
          ],
        },
        {
          cathegory: "Marketing",
          target: "",
          icon: "Marketing",
          open: true,
          items: [
            { target: "", icon: "Notification", name: "Notifications" },
            { target: "", icon: "Profiles", name: "Profiles" },
            { target: "", icon: "Campaigns", name: "Campaigns" },
          ],
        },
        {
          cathegory: "Finance",
          target: "",
          icon: "Finance",
          open: true,
          items: [
            { target: "Panel", icon: "Panel", name: "Panel" },
            { target: "", icon: "Budgets", name: "Budgets" },
            { target: "", icon: "Documents", name: "Contracts" },
          ],
        },
      ],
    };
  },
};
</script>
