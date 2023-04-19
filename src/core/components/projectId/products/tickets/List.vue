<template>
  <div>
    <div name="topContent" class="mt-8 flex justify-between">
      <div class="flex gap-3">
        <button
          class="bg-White text-Anthracite h-10 w-10 rounded-full items-center hover:bg-DarkRock hover:text-White"
          @click.prevent="$emit('open')"
          v-if="
            (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
          "
        >
          <PlusIcon class="m-auto h-5 w-5" />
        </button>
        <button
          class="bg-DarkRock text-white h-10 w-10 rounded-full items-center hover:bg-LightRock flex"
          @click.prevent="$emit('change', 'Plan')"
          v-if="
            (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
          "
        >
          <SvgTarget
            target="Events"
            :width="24"
            :height="24"
            class="m-auto"
          ></SvgTarget>
        </button>
        <button
          class="bg-DarkRock text-white h-10 w-10 rounded-full items-center hover:bg-LightRock flex"
          @click.prevent="$emit('change', 'Calendar')"
          v-if="
            (yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
          "
        >
          <SvgTarget
            target="Calendar"
            :width="24"
            :height="24"
            class="m-auto"
          ></SvgTarget>
        </button>
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
    <div class="flex flex-col space-y-4 mt-4">
      <table class="min-w-full divide-y divide-LightGrey">
        <thead class="border-b-2 border-LightGrey">
          <tr>
            <th
              scope="col"
              class="text-left text-base font-black text-LightGrey pl-4"
            >
              TICKET
            </th>
            <th
              scope="col"
              class="text-left text-base font-black text-LightGrey"
            >
              SALES STARTS ON
            </th>
            <th
              scope="col"
              class="text-left text-base font-black text-LightGrey"
            >
              PRICE
            </th>
            <th
              scope="col"
              class="text-right text-base font-black text-LightGrey pr-4"
            >
              QUANTITIES
            </th>
            <th scope="col" class="">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.tickets" :key="item._id">
            <td>
              <div class="flex items-center ml-4 my-2">
                <div
                  class="h-15 w-15 rounded-xl mr-4"
                  :style="'background: #' + item.color"
                ></div>
                <p class="text-base font-black text-LightGrey">
                  {{ item.cathegory }}
                </p>
              </div>
            </td>
            <td>
              <p class="text-base text-LightGrey">
                {{ $dayjs(data.openDate).format("DD/MM/YYYY") }}
              </p>
            </td>
            <td>
              <div class="flex items-center">
                <p class="text-base font-black text-LightGrey">
                  {{ item.price }}
                </p>
                <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
              </div>
            </td>
            <td>
              <p class="text-right text-base font-black text-LightGrey mr-4">
                {{ item.quantities }}
              </p>
            </td>
            <td class="py-4 px-3">
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
                            ? ((open = true),
                              (select = user),
                              (modalView = 'Modify'))
                            : item.name === 'Remove'
                            ? ((open = true),
                              (select = user),
                              (modalView = 'Remove'))
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
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button40Slot from "@components/buttons/Button40Slot.vue";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  PlusIcon,
  SearchIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/vue/outline";
import SvgTarget from "../../../SvgTarget.vue";

export default {
  components: {
    Button40Slot,
    GoldRC,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    PlusIcon,
    SearchIcon,
    AdjustmentsIcon,
    ViewListIcon,
    ViewBoardsIcon,
    ViewGridIcon,
    ChevronDownIcon,
    SvgTarget,
    DotsHorizontalIcon
},
  props: ["data", "yourPerm"],
  data() {
    return {
      show: "list",
      userNavigation: [
        { name: "Modify" },
        { name: "Activity" },
        { name: "Remove" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
