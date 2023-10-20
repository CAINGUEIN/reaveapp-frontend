<template>
    <div
      class="min-w-[270px] border-r-2 border-DarkRock overflow-auto scrollbarV pb-4"
    >
      <div
        v-if="infoEvent !== ''"
        class="z-10 flex items-center justify-between my-6 pl-8 pr-3"
      >
        <div class="flex items-center">
          <ImgFormated
            :key="infoEvent.name"
            :size="'s'"
            :type="'avatar'"
            class="z-10 h-10 w-10 bg-white rounded-full mr-3"
          />
          <p class="truncate font-bold text-xl">{{ infoEvent.name }}</p>
        </div>
        <div class="flex justify-end">
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><Button40Slot class="flex my-auto"
                  ><DotsHorizontalIcon class="m-1.5"></DotsHorizontalIcon
                ></Button40Slot>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-for="item in userNavigation" :key="item.name">
                  <button
                    :class="[
                      item.name === 'Remove' ? 'text-Red' : 'text-White',
                      'block px-4 py-2 text-sm',
                    ]"
                    @click="
                      item.name === 'Modify'
                        ? ((open = true), (select = user), (modalView = 'Modify'))
                        : item.name === 'Remove'
                        ? ((open = true), (select = user), (modalView = 'Remove'))
                        : ''
                    "
                  >
                    {{ item.name }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <div v-for="section in nav" class="flex flex-col mt-5 mx-8">
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
              ? 'text-LightGrey bg-DarkRock'
              : 'text-Gravel hover:text-LightGrey hover:bg-LightRock'
          "
        >
          <SvgTarget
            :target="section.icon"
            :height="20"
            :width="20"
            class="mr-2"
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
              :height="12"
              :width="12"
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
    props: ["yourPerm", "infoEvent", "select", "modelValue"],
    data() {
      return {
        userNavigation: [{ name: "opt1" }, { name: "opt2" }, { name: "Remove" }],
        nav: [
          {
            cathegory: "Overview",
            target: "OverviewVenue",
            icon: "Overview",
            open: true,
            items: [],
          },
          {
            cathegory: "Logistics",
            target: "",
            icon: "Logistics",
            open: true,
            items: [
              { target: "Format", icon: "Plans", name: "Plans" },
              { target: "Equipements", icon: "Equipment", name: "Equipment" },
              { target: "", icon: "Maps", name: "Travel" },
              { target: "", icon: "Calendar", name: "Calendar" },
              { target: "", icon: "Tasks", name: "Tasks" },
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
              { target: "", icon: "Stars", name: "Events" },
              { target: "", icon: "Fist", name: "Sponsors" },
              { target: "", icon: "Stand", name: "Booths" },
              { target: "", icon: "Events", name: "Guests" },
              { target: "", icon: "Sponsors", name: "Subscribers" },
            ],
          },
          {
            cathegory: "Analytics",
            target: "",
            icon: "Analytics",
            open: true,
            items: [
              { target: "", icon: "Products", name: "Items" },
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
              { target: "", icon: "Profiles", name: "Notifications" },
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
  