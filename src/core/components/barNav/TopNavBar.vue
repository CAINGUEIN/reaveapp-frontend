<template>
  <div
    name="nav-bar-top"
    style="
      z-index: 100000;
      margin-left: 30px;
      margin-right: 30px;
      padding-top: 0px;
      margin-top: 20px;
    "
  >
    <div class="flex justify-between w-full">
      <div class="flex space-x-2 items-center overflow-x-hidden">
        <ToolsButtonNav
          :target="'PersonalMessages'"
          :dataClass="'reave'"
          :comparTarget="store.view"
          class="mr-2 transition-all duration-300 max-w-none"
        >
          <Reave />
        </ToolsButtonNav>
        <div v-if="loadingStore" class="flex">
          <div
            class="w-12 h-12 bg-LightRock mr-2.5 rounded-full animate-pulse"
          ></div>
          <div
            class="w-12 h-12 bg-LightRock mr-2.5 rounded-full animate-pulse"
          ></div>
          <div
            class="w-12 h-12 bg-LightRock mr-2.5 rounded-full animate-pulse"
          ></div>
          <div
            class="w-12 h-12 bg-LightRock mr-2.5 rounded-full animate-pulse"
          ></div>
        </div>
        <div v-else class="flex overflow-x-auto snap-x">
          <SpaceNavBar @action="openSpace" :dataSpace="dataStore" />
        </div>
        <!--marked-->
        <div class="h-15 flex items-center">
          <ToolsButtonNav
            @click="openModal"
            :dataClass="'top'"
            class="mr-2"
            :btnName="'+'"
            :comparTarget="''"
          >
            <Plus />
          </ToolsButtonNav>

          <ToolsButtonNav
            :dataClass="'top'"
            :target="'Spaces'"
            :comparTarget="store.view"
          >
            <Spaces />
          </ToolsButtonNav>
        </div>
      </div>

      <div class="flex space-x-4 items-center">
        <ToolsButtonNav
          :target="'Settings'"
          :subTarget="'account'"
          :dataClass="''"
        >
          <Settings color1="#BEBEBE" />
        </ToolsButtonNav>

        <Popover class="relative" v-slot="{ open }">
          <PopoverButton
            :class="[
              open
                ? 'text-Cloud bg-LightRock hover:text-Cloud hover:bg-LightRock'
                : 'text-gray-500',
              'flex items-center justify-center rounded-full outline-0 cursor-pointer h-12 w-12 hover:bg-DarkRock hover:text-LightGrey',
            ]"
          >
            <Bento :color1="open ? '#BEBEBE' : '#BEBEBE'"></Bento>
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel ref="bento" class="absolute right-0 z-10 mt-1">
              <div class="overflow-visible">
                <div
                  class="transition ease-out rounded-[20px] duration-300 relative grid w-52 bg-DarkRock grid-cols-4 p-2"
                >
                  <ToolsButtonNav
                    @tool-clicked="closeBento"
                    v-for="item in solutions"
                    :btnName="item.icon"
                    :key="item.target"
                    :target="item.target"
                    :dataClass="item.dataClass"
                    :comparTarget="store.view"
                    :isMouseOver="true"
                    class="flex rounded-full transition duration-150 ease-in-out my-1 mx-1"
                  >
                    <SvgTarget :target="item.icon" :width="24" :height="24" />
                  </ToolsButtonNav>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <div class="relative">
          <ToolsButtonNav
            :target="'Personal'"
            :subTarget="'dashboard'"
            :comparTarget="store.view"
            :dataClass="''"
            @click.right.prevent="toggleDropdown"
          >
            <ImgFormated class="rounded-full" type="avatar" />
          </ToolsButtonNav>
          <div
            :class="dropdown"
            class="absolute right-0 bg-white divide-y divide-gray-100 rounded w-44 dark:bg-gray-700"
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Online</a
                >
              </li>
              <li>
                <a
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Inactif</a
                >
              </li>
              <li>
                <a
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Ne pas déranger</a
                >
              </li>
              <li>
                <a
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Invisible</a
                >
              </li>
            </ul>
            <div class="py-1 text-sm">
              <InputModel
                class="m-0 p-0 text-gray-700 dark:text-gray-200"
                :data="moodMessage"
                v-model="moodMessage.value"
                :errors="errors"
              />
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >list</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >des</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >status perso</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//store
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
import SvgTarget from "@core/components/SvgTarget.vue";
//components
import SpaceNavBar from "@core/components/barNav/SpaceNavBar.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import Settings from "@assets/icons/Settings.vue";
import Reave from "@assets/icons/Reave.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import Plus from "@assets/icons/Plus.vue";
import Spaces from "@assets/icons/Spaces.vue";
import Bento from "@assets/icons/Bento.vue";

// Data
import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";
import ImgFormated from "../img/ImgFormated.vue";
export default {
  props: {
    dataStore: Object,
    loadingStore: Boolean,
  },
  components: {
    SpaceNavBar,
    ToolsButtonNav,
    Plus,
    SvgTarget,
    Spaces,
    Reave,
    Bento,
    Settings,
    Popover,
    PopoverButton,
    PopoverPanel,
    ImgFormated,
  },
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      dataTopLeft,
      dataBottomLeft,
      isLoaded: false,
      isOpenModal: false,
      isOpenStatusMenu: false,
      store,
      storeSpace,
      storeView: store.view,
      moodMessage: {
        name: "moodMessage",
        type: "text",
        value: "",
      },
      dropdown: "hidden",

      solutions: [
        {
          target: "Events",
          icon: "Events",
          dataClass: "settings",
          btnName: "Events",
        },
        {
          target: "Shards",
          icon: "Shards",
          dataClass: "settings",
          btnName: "Shards",
        },
        {
          target: "Hub",
          icon: "Hub",
          dataClass: "settings",
          btnName: "Hub",
        },
        {
          target: "Jobs",
          icon: "Jobs",
          dataClass: "settings",
          btnName: "Jobs",
        },
        {
          target: "Academy",
          icon: "Academy",
          dataClass: "settings",
          btnName: "Academy",
        },
        {
          target: "Bootcamps",
          icon: "Bootcamps",
          dataClass: "settings",
          btnName: "Bootcamps",
        },
        {
          target: "Maps",
          icon: "Maps",
          dataClass: "settings",
          btnName: "Maps",
        },
        {
          target: "Scrims",
          icon: "Scrims",
          dataClass: "settings",
          btnName: "Scrims",
        },
      ],
    };
  },
  methods: {
    closeBento() {
      // Utilisez la référence du Popover pour le fermer
      this.$refs.bento.close();
      console.log("CLOSED");
    },
    loaded() {
      console.log("C'est pret!");
      this.isLoaded = true;
    },
    openModal() {
      this.isOpenModal = true;
      this.$emit("modal-changed", this.isOpenModal);
    },
    async openSpace(target, type) {
      if (this.storeSpace.dataSpace[target]) {
        console.log(this.$store);
        this.$router.push({
          name: "Operator",
          params: { id: target, target: "projects" },
        });
        //location.reload();
      } else {
        this.$router.push({
          name: "Personal",
        });
      }
      console.log("open", "/spacePrivate/" + type + "/" + target);
    },
    getUrl() {
      if (this.$route.name !== this.store.view) {
        this.store.view = this.$route.name;
      }
    },
    toggleDropdown() {
      if (this.dropdown === "hidden") {
        this.dropdown = "";
      } else {
        this.dropdown = "hidden";
      }
      this.$emit("toggleDropdown", this.dropdown);
    },
    replaceUrl(e) {
      console.log("dans le replace layout");
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      let formatSize = "40/";
      e.target.src = "https://via.placeholder.com/" + formatSize + randomColor;
    },
  },
  watch: {
    $route() {
      if (this.$route.name !== this.store.view) {
        this.store.view = this.$route.name;
      }
    },
  },
};
</script>
