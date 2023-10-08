<template>
  <div class="flex flex-col items-center">
    <!-- <div class="flex">
      <ToolsButtonNav :dataClass="'small'">
        <Screenshare class="h-6 w-6" />
      </ToolsButtonNav>
      <ToolsButtonNav :dataClass="'small'">
        <Camera class="h-6 w-6" />
      </ToolsButtonNav>
    </div>
    <div class="flex">
      <ToolsButtonNav :dataClass="'small'">
        <Microphone class="h-6 w-6" />
      </ToolsButtonNav>
      <ToolsButtonNav :dataClass="'small'">
        <Headphone class="h-6 w-6" />
      </ToolsButtonNav>
    </div> -->

    <ToolsButtonNav
      :target="'Settings'"
      :subTarget="'account'"
      :dataClass="'settings'"
    >
      <Settings />
    </ToolsButtonNav>
    <div class="relative">
      <ToolsButtonNav
        :target="'Personal'"
        :subTarget="'dashboard'"
        :comparTarget="store.view"
        :dataClass="''"
        @click.right.prevent="toggleDropdown"
      >
        <img
          :src="'https://media.reave.dev/useravatar/s' + store.dataAccount._id + 'avatar.png'"
          class="h-10 w-10 rounded-full bg-Gravel"
          @error="replaceUrl"
      /></ToolsButtonNav>
      <div
        :class="dropdown"
        class="absolute bottom-0 left-16 z-20 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
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
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import InputModel from "@core/components/inputs/InputModel.vue";
import Screenshare from "@assets/icons/Screenshare.vue";
import Camera from "@assets/icons/Camera.vue";
import Microphone from "@assets/icons/Microphone.vue";
import Headphone from "@assets/icons/Headphone.vue";
import Settings from "@assets/icons/Settings.vue";
import useStoreAuth from "@stores/auth";
export default {
  data() {
    const store = useStoreAuth();
    return {
      moodMessage: {
        name: "moodMessage",
        type: "text",
        value: "",
      },

      store,
      errors: "",
      dropdown: "hidden",
    };
  },
  methods: {
    toggleDropdown() {
      if (this.dropdown === "hidden") {
        this.dropdown = "";
      } else {
        this.dropdown = "hidden";
      }
    },
    replaceUrl (e) {
      console.log("dans le replace bottom");
      let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16)
      let formatSize = "40/"
      e.target.src = "https://via.placeholder.com/" + formatSize + randomColor
    }
  },
  components: {
    ToolsButtonNav,
    MenuItems,
    MenuItem,
    MenuButton,
    Menu,
    InputModel,
    Screenshare,
    Camera,
    Microphone,
    Headphone,
    Settings,
  },
};
</script>
