<template>
  <div class="flex flex-col">
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="flex items-center">
      <div class="bg-slate-400 h-10 w-10 rounded-xl mr-2"></div>
      <p class="text-xl font-bold text-white">{{ data.name }} ></p>
      <SvgTarget
        target="Equipment"
        :height="20"
        :width="20"
        class="mx-2"
      ></SvgTarget>
      <p class="text-xl font-medium text-white">Create an Item</p>
    </div>
    <div name="sectionName" class="flex mt-8 mx-auto justify-center">
      <button
        class="h-[160px] w-[160px] border-2 border-dashed rounded-xl my-auto"
      >
        Upload file
      </button>
      <div class="ml-6">
        <div name="inputName">
          <InputModel
            class="w-full"
            :data="name"
            v-model="name.value"
            :errors="errors"
          ></InputModel>
        </div>
        <div name="code">
          <InputModel
            class="w-full mt-6"
            :data="quantity"
            v-model="quantity.value"
            :errors="errors"
          ></InputModel>
        </div>
      </div>
    </div>
    <div name="sectionSelect" class="mt-8 flex justify-center">
      <Menu name="bundle" as="div" class="relative ml-3">
        <div>
          <MenuButton class="flex max-w-xs items-center rounded-full"
            ><button
              class="flex bg-DarkRock hover:bg-LightRock text-white h-10 px-4 items-center rounded-lg"
            >
              Move to Bundle
            </button>
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
            class="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  bundle !== 'opt1'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="bundle = 'opt1'"
              >
                opt1
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  bundle !== 'opt2'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="bundle = 'opt2'"
              >
                opt2
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  bundle !== 'opt3'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="bundle = 'opt3'"
              >
                opt3
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <Menu name="kit" as="div" class="relative ml-3">
        <div>
          <MenuButton class="flex max-w-xs items-center rounded-full"
            ><button
              class="flex bg-DarkRock hover:bg-LightRock text-white h-10 px-4 items-center rounded-lg"
            >
              Move to Kit
            </button>
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
            class="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  kit !== 'opt1'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="kit = 'opt1'"
              >
                opt1
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  kit !== 'opt2'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="kit = 'opt2'"
              >
                opt2
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  kit !== 'opt3'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="kit = 'opt3'"
              >
                opt3
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <Menu name="tag" as="div" class="relative ml-3">
        <div>
          <MenuButton class="flex max-w-xs items-center rounded-full"
            ><button
              class="flex bg-DarkRock hover:bg-LightRock text-white h-10 px-4 items-center rounded-lg"
            >
              Add a Tag
            </button>
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
            class="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  tags !== 'opt1'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="tags = 'opt1'"
              >
                opt1
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  tags !== 'opt2'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="tags = 'opt2'"
              >
                opt2
              </button>
            </MenuItem>
            <MenuItem>
              <button
                class="text-left block px-4 py-2 text-sm w-full rounded-lg"
                :class="
                  tags !== 'opt3'
                    ? 'hover:text-Anthracite hover:bg-white text-White'
                    : 'text-Anthracite bg-white'
                "
                @click="tags = 'opt3'"
              >
                opt3
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <button
      class="h-[50px] w-[160px] mx-auto bg-white text-Anthracite rounded-full mt-6 text-xl font-black"
      @click="submit()"
    >
      Add Item
    </button>
  </div>
</template>

<script>
import XButton36 from "@components/buttons/XButton36.vue";

import InputModel from "@components/inputs/InputModel.vue";
import SvgTarget from "../../../SvgTarget.vue";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
//services
import EventServices from "@axios/services/eventServices";

export default {
  components: {
    XButton36,
    SvgTarget,
    InputModel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: ["data"],
  data() {
    return {
      name: {
        label: "ITEM NAME",
        placeholder: " ",
        name: "name",
        type: "text",
        value: "",
      },
      quantity: {
        label: "QUANTITIES",
        placeholder: " ",
        name: "quantity",
        type: "number",
        value: "",
      },
      bundle: "",
      kit: "",
      tags: "",
      errors: [],
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async submit() {
      let body = {
        project_id: this.data._id,
        name: this.name.value,
        quantity: this.quantity.value,
        bundle: this.bundle,
        kit: this.kit,
        tags: this.tags,
      };
      console.log(body);
      let result = "";
      result = await EventServices.addItem(body);
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
