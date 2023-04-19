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
        <span class="font-black text-xl text-LightGrey">LOGISTICS ></span>
        <SvgTarget
          target="Equipment"
          :height="20"
          :width="20"
          class="mx-2"
        ></SvgTarget>
        <span class="font-black text-xl text-white"> EQUIPMENT</span>
      </p>
      <XButton36 @click="goBack" class="z-10"></XButton36>
    </div>
    <div class="max-w-7xl w-[95%] mx-auto">
      <div name="emptySection" v-if="data.equipements.length === 0">
        <div class="w-[500px] mx-auto bg-DarkRock rounded-xl p-8 mt-[100px]">
          <p class="flex items-center">
            <SvgTarget
              target="Equipment"
              :height="20"
              :width="20"
              class="mr-2"
            ></SvgTarget>
            <span class="font-black text-xl text-white">Equipment</span>
          </p>
          <p class="mt-6 text-base">
            Organise your items across warehouses & projects; into bundles &
            kits; and add tags & notes.
          </p>
          <p class="mt-6 text-base">
            With the Reave mobile app or a standard scanner, use QR/Bar codes
            and get automatic item identification for easy inventory tracking.
          </p>
          <p class="mt-6 text-base">
            Schedule, plan & communicate who on your on team is using what and
            when.
          </p>
          <p class="mt-6 text-base">
            Buy & order items through Reave, from a list of integrated famous
            suppliers brands and AV ecommerce platforms.
          </p>
          <p class="mt-6 text-base">No item has been added here yet.</p>
          <button
            class="text-black rounded-full h-10 px-10 mx-auto bg-white mt-9"
            @click.prevent="(open = true), (modalView = 'AddItem')"
          >
            <p class="text-black text-base font-black">Add your first item</p>
          </button>
        </div>
      </div>
      <div v-else>
        <div name="topContent" class="mt-8 flex justify-between">
          <div class="flex">
            <button
              class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
              @click.prevent="(open = true), (modalView = 'AddItem')"
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
                  <span class="text-LightGrey text-base font-medium"
                    >Order by</span
                  >
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
                  ITEM
                </th>
                <th
                  scope="col"
                  class="text-left text-base font-black text-LightGrey"
                >
                  QUANTITY
                </th>
                <th
                  scope="col"
                  class="text-left text-base font-black text-LightGrey"
                >
                  BUNDLE
                </th>
                <th
                  scope="col"
                  class="text-left text-base font-black text-LightGrey"
                >
                  KIT
                </th>
                <th
                  scope="col"
                  class="text-right text-base font-black text-LightGrey pr-4"
                >
                  TAGS
                </th>
                <th scope="col" class="">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data.equipements" :key="item._id">
                <td>
                  <div class="flex items-center ml-4 my-2">
                    <div class="h-15 w-15 rounded-xl mr-4 bg-slate-400"></div>
                    <p class="text-base font-black text-LightGrey">
                      {{ item.name }}
                    </p>
                  </div>
                </td>
                <td>
                  <p class="text-base font-black text-LightGrey">
                    {{ item.quantity }}
                  </p>
                </td>
                <td>
                  <p class="text-base font-black text-LightGrey">
                    {{ item.bundle }}
                  </p>
                </td>
                <td>
                  <p class="text-base font-black text-LightGrey">
                    {{ item.kit }}
                  </p>
                </td>
                <td>
                  <p
                    class="text-right text-base font-black text-LightGrey mr-4"
                  >
                    {{ item.tags }}
                  </p>
                </td>
                <td class="py-4 px-3">
                  <div class="flex justify-end">
                    <Menu as="div" class="relative ml-3">
                      <div>
                        <MenuButton
                          class="flex max-w-xs items-center rounded-full"
                          ><Button40Slot class="flex my-auto"
                            ><DotsHorizontalIcon
                              class="m-1.5"
                            ></DotsHorizontalIcon
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
                          <MenuItem v-for="nav in navs" :key="nav.name">
                            <button
                              :class="[
                                nav.name === 'Remove'
                                  ? 'text-Red'
                                  : 'text-White',
                                'block px-4 py-2 text-sm',
                              ]"
                              @click="
                                nav.name === 'Modify'
                                  ? ((open = true),
                                    (select = item),
                                    (modalView = 'EditItem'))
                                  : nav.name === 'Remove'
                                  ? ((open = true),
                                    (select = item),
                                    (modalView = 'RemoveItem'))
                                  : ''
                              "
                            >
                              {{ nav.name }}
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
    </div>
    <ModalClear
      :width="modalView === 'RemoveItem' ? '' : 728"
      :open="open"
      @action="close()"
    >
      <component
        :is="modalView"
        :data="data"
        :select="select"
        @action="close"
      ></component>
    </ModalClear>
  </div>
</template>

<script>
import Button40Slot from "@components/buttons/Button40Slot.vue";
import XButton36 from "@components/buttons/XButton36.vue";
import SvgTarget from "@components/SvgTarget.vue";
import ModalClear from "@components/modal/ModalClear.vue";

import AddItem from "@components/modal/projectId/equipements/AddItem.vue";
import EditItem from "@components/modal/projectId/equipements/EditItem.vue";
import RemoveItem from "@components/modal/projectId/equipements/RemoveItem.vue";

import { DotsHorizontalIcon, PlusIcon } from "@heroicons/vue/outline";
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
    AddItem,
    EditItem,
    RemoveItem,
    ModalClear,
    Button40Slot,
    XButton36,
    SvgTarget,
    PlusIcon,
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
    DotsHorizontalIcon,
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      show: "list",
      select: "",
      open: false,
      modalView: "AddItem",
      navs: [{ name: "Modify" }, { name: "Remove" }],
    };
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        this.$emit("action");
      }
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
