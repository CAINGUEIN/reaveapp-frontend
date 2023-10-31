<template>
  <div>
    <div name="topContent" class="mt-8 flex justify-between">
      <div class="w-1/3 flex">
        <button
          class="bg-White text-Anthracite h-10 w-10 rounded-full items-center hover:bg-DarkRock hover:text-White flex"
          @click.prevent=""
        >
          <SvgTarget
            target="Plus"
            height="16"
            width="16"
            class="mx-auto"
          ></SvgTarget>
        </button>
        <label for="search" class="sr-only">Search</label>
        <div
          class="relative text-white border-White flex justify-between h-10 w-2/3 ml-3"
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
          <Button40Slot class="flex bg-LightRock rounded-full ml-3">
            <SvgTarget
              target="Filters"
              height="24"
              width="24"
              class="mx-auto my-auto"
            ></SvgTarget>
          </Button40Slot>
        </div>
      </div>
      <div class="flex">
        <div class="rounded-lg bg-DarkRock h-10 flex">
          <button
            class="w-12 h-10 rounded-lg flex"
            :class="show === 'list' ? 'bg-LightRock text-White' : 'bg-DarkRock'"
            @click="show = 'list'"
          >
            <SvgTarget
              target="Ligns"
              height="24"
              width="24"
              class="mx-auto my-auto"
            ></SvgTarget>
          </button>
          <button
            class="w-12 h-10 rounded-lg flex"
            :class="
              show === 'board' ? 'bg-LightRock text-White' : 'bg-DarkRock'
            "
            @click="show = 'board'"
          >
            <SvgTarget
              target="smsq"
              height="24"
              width="24"
              class="mx-auto my-auto"
            ></SvgTarget>
          </button>
          <button
            class="w-12 h-10 rounded-lg flex"
            :class="show === 'grid' ? 'bg-LightRock text-White' : 'bg-DarkRock'"
            @click="show = 'grid'"
          >
            <SvgTarget
              target="lgsq"
              height="24"
              width="24"
              class="mx-auto my-auto"
            ></SvgTarget>
          </button>
        </div>
        <Menu as="div" class="relative inline-block text-left ml-3">
          <div class="">
            <MenuButton
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 h-10 bg-DarkRock text-white font-medium items-baseline"
            >
              <span class="text-LightGrey text-base font-medium">Order by</span>
              Most Recent
              <SvgTarget
                target="Chevron"
                height="24"
                width="24"
                class="mx-auto my-auto"
              ></SvgTarget>
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
    <div name="Content" class="mt-8 space-y-4">
      <table class="w-full">
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
              PROJECT
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
        <tbody v-for="event in data">
          <tr v-for="item in event.equipements" :key="item._id">
            <td>
              <div class="flex items-center ml-4 my-2">
                <ImgFormated
                  :key="item._id"
                  :size="'m'"
                  :targetSpace="item._id"
                  :type="'item'"
                  class="h-15 w-15 rounded-xl mr-4 bg-slate-400"
                />
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
            <td class="">
              <div class="flex items-center">
                <ImgFormated
                  :key="event._id"
                  :size="'s'"
                  :targetSpace="event._id"
                  :type="'event'"
                  class="h-10 w-10 rounded-xl mr-4 bg-white"
                />
                <p class="text-base font-black text-LightGrey">
                  {{ event.name }}
                </p>
              </div>
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
              <p class="text-right text-base font-black text-LightGrey mr-4">
                {{ item.tags }}
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
                      <MenuItem v-for="nav in navs" :key="nav.name">
                        <button
                          :class="[
                            nav.name === 'Remove' ? 'text-Red' : 'text-White',
                            'block px-4 py-2 text-sm',
                          ]"
                          @click="
                            nav.name === 'Modify'
                              ? ((open = true),
                                (select = item),
                                (dataEdit = event),
                                (modalView = 'EditItem'))
                              : nav.name === 'Remove'
                              ? ((open = true),
                                (select = item),
                                (dataEdit = event),
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
    <ModalClear
      :width="modalView === 'RemoveItem' ? '' : 728"
      :open="open"
      @action="close()"
    >
      <component
        :is="modalView"
        :data="dataEdit"
        :select="select"
        @action="close"
      ></component>
    </ModalClear>
  </div>
</template>

<script>
//component
import ModalClear from "@components/modal/ModalClear.vue";
import EditItem from "@components/modal/projectId/equipements/EditItem.vue";
import RemoveItem from "@components/modal/projectId/equipements/RemoveItem.vue";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import SvgTarget from "@components/SvgTarget.vue";
//tool
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  AdjustmentsIcon,
  SearchIcon,
  ChevronDownIcon,
  ViewListIcon,
  ViewGridIcon,
  ViewBoardsIcon,
} from "@heroicons/vue/solid";
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
//services
import EventServices from "@axios/services/eventServices";
import useStoreAuth from "@stores/auth";
import ImgFormated from "../../core/components/img/ImgFormated.vue";

export default {
  components: {
    Button40Slot,
    SearchIcon,
    AdjustmentsIcon,
    ChevronDownIcon,
    SvgTarget,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ViewListIcon,
    ViewGridIcon,
    ViewBoardsIcon,
    DotsHorizontalIcon,
    ModalClear,
    EditItem,
    RemoveItem,
    ImgFormated,
  },
  data() {
    const store = useStoreAuth();
    return {
      open: false,
      store,
      modalView: "EditItem",
      select: "",
      show: "list",
      data: "",
      dataEdit: "",
      navs: [{ name: "Modify" }, { name: "Remove" }],
    };
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        this.searchEventOperator();
      }
    },
    async searchEventOperator() {
      //recup de toute les datas dans les event qui on pour owner le id du user
      let result = await EventServices.searchPersonalEventOperator();
      if (result.data.success) {
        this.data = result.data.data;
      }
    },
  },
  mounted() {
    this.searchEventOperator();
  },
};
</script>
