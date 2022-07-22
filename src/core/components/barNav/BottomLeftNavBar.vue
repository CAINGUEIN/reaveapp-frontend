<template>
  <div class="flex flex-col">
    <ToolsButtonNav :dataClass="'medium'" :slot="true">
      <Ecran />
    </ToolsButtonNav>
    <ToolsButtonNav
      :target="'PersonalSettings'"
      :src="'@core/assets/icons/Settings.svg'"
      :dataClass="'medium'"
    />
    <div class="relative">
      <ToolsButtonNav
        :target="'Personal'"
        :src="'http://via.placeholder.com/60'"
        :dataClass="'large'"
        @click.right.prevent="toggleDropdown"
      />
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
        <div class="py-1 text-sm ">
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
import Ecran from "@core/assets/icons/ecran.vue";
import InputModel from "@core/components/inputs/InputModel.vue";
export default {
  props: ["dataButtons"],
  data() {
    return {
        moodMessage: {
        name: "moodMessage",
        type: "text",
        value: "",
      },

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
  },
  components: {
    ToolsButtonNav,
    Ecran,
    MenuItems,
    MenuItem,
    MenuButton,
    Menu,
    InputModel,
  },
};
</script>
