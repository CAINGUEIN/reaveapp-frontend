<template>
  <div>
    <div name="topContent" class="mt-8 flex justify-between">
      <div class="flex">
        <button
          class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
          @click.prevent=""
        >
          <PlusIcon class="mx-2 h-5 w-5" />
        </button>
        <label for="search" class="sr-only">Search</label>
        <div
          class="relative text-white border-White flex items-center justify-between h-10 w-full ml-3"
        >
          <div class="flex bg-DarkRock rounded-full">
            <SearchIcon
              class="h-10 w-10 p-2 z-10 my-auto ml-3 text-Gravel rounded-full"
              aria-hidden="true"
            />
            <input
              id="search"
              class="bg-DarkRock block h-10 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel text-xl font-medium"
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
          <Button40Slot class="flex bg-LightRock rounded-full ml-3"
            ><AdjustmentsIcon
              class="h-10 w-10 p-2 m-auto -rotate-90"
            ></AdjustmentsIcon
          ></Button40Slot>
        </div>
      </div>
      <div class="flex">
        <div class="rounded-lg bg-DarkRock h-10">
          <button
            class="w-12 h-10 rounded-lg"
            :class="show === 'list' ? 'bg-LightRock' : 'bg-DarkRock'"
            @click="show = 'list'"
          >
            <ViewListIcon class="h-8 mx-auto"></ViewListIcon>
          </button>
          <button
            class="w-12 h-10 rounded-lg"
            :class="show === 'board' ? 'bg-LightRock' : 'bg-DarkRock'"
            @click="show = 'board'"
          >
            <ViewBoardsIcon class="h-8 mx-auto"></ViewBoardsIcon>
          </button>
          <button
            class="w-12 h-10 rounded-lg"
            :class="show === 'grid' ? 'bg-LightRock' : 'bg-DarkRock'"
            @click="show = 'grid'"
          >
            <ViewGridIcon class="h-8 mx-auto"></ViewGridIcon>
          </button>
        </div>
        <Menu as="div" class="relative inline-block text-left ml-3">
          <div class="">
            <MenuButton
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 h-10 bg-DarkRock text-white"
            >
              <span class="text-LightGrey text-base font-medium">Order by</span>
              Most Recent
              <ChevronDownIcon
                class="-mr-1 h-5 w-5 text-white"
                aria-hidden="true"
              />
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
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-DarkRock shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm',
                    ]"
                    >exemple</a
                  ></MenuItem
                >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm',
                    ]"
                    >exemple</a
                  ></MenuItem
                >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm',
                    ]"
                    >exemple</a
                  ></MenuItem
                >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-white',
                      'block px-4 py-2 text-sm',
                    ]"
                    >exemple</a
                  ></MenuItem
                >
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  AdjustmentsIcon,
  PlusIcon,
  SearchIcon,
  ChevronDownIcon,
  ViewListIcon,
  ViewGridIcon,
ViewBoardsIcon,
} from "@heroicons/vue/solid";
import Button40Slot from "@components/buttons/Button40Slot.vue";
export default {
  components: {
    PlusIcon,
    Button40Slot,
    SearchIcon,
    AdjustmentsIcon,
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ViewListIcon,
    ViewGridIcon,
    ViewBoardsIcon
},
  data() {
    return {
      show: "list",
    };
  },
};
</script>
