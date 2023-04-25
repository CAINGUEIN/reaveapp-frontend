<template>
  <div>
    <div class="flex justify-center gap-8 mt-8">
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-Yellow font-medium">Gold</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Bootcamps"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Standing"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Handicap"
              width="12"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-slate-400 font-medium">Silver</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Bootcamps"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Standing"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Handicap"
              width="12"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="h-[50px] w-[50px] bg-slate-400 rounded-xl"></div>
        <div class="ml-2">
          <p class="text-base text-orange-700 font-medium">Bronze</p>
          <p class="text-base text-white font-black flex items-center">
            <SvgTarget
              target="Bootcamps"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1"
            ></SvgTarget>
            300
            <SvgTarget
              target="Standing"
              color1="#000000"
              width="12"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            600
            <SvgTarget
              target="Handicap"
              width="12"
              color1="#000000"
              class="h-4 w-4 flex items-center justify-center rounded-full bg-white mr-1 ml-3"
            ></SvgTarget>
            15
          </p>
        </div>
      </div>
    </div>
    <img src="/plan.png" class="max-w-[1000px] w-9/10 mt-14 mx-auto" />
    <div
      class="w-[700px] h-16 bg-DarkRock rounded-xl mx-auto my-20 flex items-center justify-between px-4"
    >
      <p class="text-Blue font-medium text-base">6 Selected</p>
      <Menu as="div" class="relative inline-block text-left ml-3">
        <div class="">
          <MenuButton
            class="flex justify-between rounded-xl px-3 py-2 h-10 w-[130px] bg-LightRock text-white font-medium"
          >
            <span class="text-LightGrey text-base font-medium">{{
              ticket === "" ? "Select" : ticket
            }}</span>
            <SvgTarget
              target="Chevron"
              height="24"
              width="24"
              class="my-auto -mx-2"
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
            class="absolute right-0 z-10 mt-2 w-[130px] origin-top-right rounded-md bg-LightRock shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : 'text-white',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="ticket = 'Gold'"
                  class="flex items-center text-base font-medium text-Yellow"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      ticket === 'Gold' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget
                  >Gold</a
                ></MenuItem
              >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : 'text-white',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="ticket = 'Silver'"
                  class="flex items-center text-base font-medium text-LightGrey"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      ticket === 'Silver' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget
                  >Silver</a
                ></MenuItem
              >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : 'text-white',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="ticket = 'Bronze'"
                  class="flex items-center text-base font-medium text-[#8C4C29]"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      ticket === 'Bronze' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget
                  >Bronze</a
                ></MenuItem
              >
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <Menu as="div" class="relative inline-block text-left ml-3">
        <div class="">
          <MenuButton
            class="flex justify-between rounded-xl px-3 py-2 h-10 w-[180px] bg-LightRock text-white font-medium"
          >
            <div class="flex">
              <SvgTarget
                :target="cathegory === 'Sitting' ? 'Bootcamps' : cathegory"
                height="16"
                width="16"
                class="h-6 w-6 flex items-center justify-center rounded-full bg-white mr-2 text-Anthracite"
              ></SvgTarget>
              <span class="text-white text-base font-medium">{{
                cathegory === "" ? "Select" : cathegory
              }}</span>
            </div>

            <SvgTarget
              target="Chevron"
              height="24"
              width="24"
              class="my-auto -mx-2"
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
            class="absolute right-0 z-10 mt-2 w-[180px] origin-top-right rounded-md bg-LightRock shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : '',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="cathegory = 'Sitting'"
                  class="flex items-center text-base font-medium text-white"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      cathegory === 'Sitting' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget>
                  <SvgTarget
                    target="Bootcamps"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center rounded-full bg-white mr-2 text-Anthracite"
                  ></SvgTarget>
                  Sitting</a
                ></MenuItem
              >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : '',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="cathegory = 'Standing'"
                  class="flex items-center text-base font-medium text-white"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      cathegory === 'Standing' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget>
                  <SvgTarget
                    target="Standing"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center rounded-full bg-white mr-2 text-Anthracite"
                  ></SvgTarget>
                  Standing</a
                ></MenuItem
              >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-Stone' : '',
                    'block mx-2 rounded-lg px-2 py-2 text-sm',
                  ]"
                  @click.prevent="cathegory = 'Handicap'"
                  class="flex items-center text-base font-medium text-white"
                  ><SvgTarget
                    target="CheckVoid"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center mr-2"
                    :class="
                      cathegory === 'Handicap' ? 'text-white' : 'text-LightRock'
                    "
                  ></SvgTarget>
                  <SvgTarget
                    target="Handicap"
                    height="16"
                    width="16"
                    class="h-6 w-6 flex items-center justify-center rounded-full bg-white mr-2 text-Anthracite"
                  ></SvgTarget>
                  Handicap</a
                ></MenuItem
              >
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <div name="separate" class="w-0.5 bg-Gravel h-8 mx-4"></div>
      <button
        class="w-[200px] h-10 bg-LightRock rounded-xl px-4"
        @click="btn === true ? (btn = false) : (btn = true)"
      >
        <span
          class="text-Red flex justify-between font-medium text-base"
          v-if="btn"
          ><SvgTarget target="Block"></SvgTarget> Desactivate Seats</span
        >
        <span
          class="text-Green flex justify-between font-medium text-base"
          v-else
          ><SvgTarget target="Check"></SvgTarget>Reactivate Seats</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import SvgTarget from "../../../SvgTarget.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
  components: { SvgTarget, Menu, MenuButton, MenuItem, MenuItems },
  data() {
    return {
      cathegory: "",
      ticket: "",
      btn: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
