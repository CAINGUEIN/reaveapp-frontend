<template>
  <div
    class="flex-col justify-between px-3 py-3 items-center space-y-2 border-r-2 border-Rock"
  >
    <div
      class="transition duration-150 space-y-2 flex-col justify-between ease-in-out hover:text-White"
    >
      <Popover class="relative" v-slot="{ open }">
        <div
          :class="[
            open ? ' bg-LightRock' : 'hover:bg-Rock',
            'flex items-center justify-center rounded-full h-10 w-10  text-Gravel transition-all duration-300',
          ]"
        >
          <PopoverButton class="outline-none">
            <img
              draggable="false"
              class="rounded-full cursor-pointer h-6 w-6"
              :src="spaceStore.getImg(props.idSpace)"
              alt="Space picture"
            />
          </PopoverButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-200 z-50"
          enter-from-class="opacity-0 -translate-x-1 z-50"
          enter-to-class="opacity-100 translate-y-0 z-50"
          leave-active-class="transition ease-in duration-150 z-50"
          leave-from-class="opacity-100 translate-y-0 z-50"
          leave-to-class="opacity-0 -translate-x-1 z-50"
        >
          <PopoverPanel ref="bento" class="absolute z-1000">
            <div
              style="border: solid 1px"
              class="transition w-[242px] left-9 bottom-9 flex-col z-50 space-y-1 p-3 ease-out right-2/3 rounded-xl border-Gravel duration-300 relative bg-DarkRock"
            >
              <p class="font-bold py-2 px-3 w-fit text-White">
                {{ spaceStore.dataSpace[props.idSpace].nameSpace }}
              </p>
              <div
                v-for="menu in spaceMenu"
                :key="menu"
                @mouseover="hoverState[menu.icon] = true"
                @mouseleave="hoverState[menu.icon] = false"
                @click="goToModal(menu.modal)"
                class="flex cursor-pointer flex-row pl-3 py-2 space-x-3"
              >
                <SvgTarget
                  :target="menu.icon"
                  :width="24"
                  :height="24"
                  :class="{
                    'text-Ruby': menu.icon === 'Trash',
                    'opacity-50':
                      menu.icon === 'Trash' && !hoverState[menu.icon],
                    'opacity-100':
                      menu.icon === 'Trash' && hoverState[menu.icon],
                    'text-White': hoverState[menu.icon],
                    'text-Stone':
                      !hoverState[menu.icon] && menu.icon !== 'Trash',
                  }"
                  class="my-auto transition-all"
                />
                <p
                  :class="{
                    'text-Ruby': menu.icon === 'Trash',
                    'opacity-50':
                      menu.icon === 'Trash' && !hoverState[menu.icon],
                    'opacity-100':
                      menu.icon === 'Trash' && hoverState[menu.icon],
                    'text-White': hoverState[menu.icon],
                    'text-Stone':
                      !hoverState[menu.icon] && menu.icon !== 'Trash',
                  }"
                  class="my-auto transition-all font-semibold text-base"
                >
                  {{ menu.name }}
                </p>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <ToolsButtonNav
        v-for="item in buttonsMenu"
        :btnName="item.icon"
        :key="item.target"
        :target="item.target"
        :dataClass="item.dataClass"
        :comparTarget="store.view"
        class="transition-all duration-300"
      >
        <Messages
          v-if="item.icon === 'Messages'"
          :width="24"
          :height="24"
        ></Messages>
        <Dashboard
          v-if="item.icon === 'Dashboard'"
          :width="24"
          :height="24"
        ></Dashboard>
        <Operator
          v-if="item.icon === 'Operator'"
          :width="24"
          :height="24"
        ></Operator>
        <Conceptor
          v-if="item.icon === 'Conceptor'"
          :width="24"
          :height="24"
        ></Conceptor>
        <Calendar
          v-if="item.icon === 'Calendar'"
          :width="24"
          :height="24"
        ></Calendar>
        <Analytics
          v-if="item.icon === 'Analytics'"
          :width="24"
          :height="24"
        ></Analytics>
      </ToolsButtonNav>
    </div>
  </div>
</template>

<script setup>
// hooks
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
// Components
import Operator from "@assets/icons/Operator.vue";
import Analytics from "@assets/svg/pricing/Analytics.vue";
import Conceptor from "@assets/icons/Conceptor.vue";
import Calendar from "@assets/icons/Calendar.vue";
import Messages from "@assets/icons/Messages.vue";
import ToolsButtonNav from "../buttons/ToolsButtonNav.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import Dashboard from "../../assets/icons/Dashboard.vue";
import SvgTarget from "../SvgTarget.vue";

const props = defineProps({
  idSpace: String,
});
const store = useStoreAuth();
const spaceStore = useStoreSpace();
const emit = defineEmits(["modal"]);
const hoverState = ref({});
const spaceMenu = [
  {
    icon: "Profile",
    name: "Profile",
    modal: "",
  },
  {
    icon: "Plus",
    name: "Add Space Member",
    modal: "",
  },
  {
    icon: "Settings",
    name: "Settings",
    modal: "",
  },
  {
    icon: "Trash",
    name: "Delete Space",
    modal: "DeleteSpace",
  },
];
const buttonsMenu = [
  {
    target: "SpaceFriendsChat",
    icon: "Messages",
    dataClass: "spaces",
  },
  {
    target: "Dashboard",
    icon: "Dashboard",
    dataClass: "spaces",
  },
  {
    target: "Operator",
    icon: "Operator",
    dataClass: "spaces",
  },
  {
    target: "Conceptor",
    icon: "Conceptor",
    dataClass: "spaces",
  },
  {
    target: "SpaceFriendsCalendar",
    icon: "Calendar",
    dataClass: "spaces",
  },
  {
    target: "Analytics",
    icon: "Analytics",
    dataClass: "spaces",
  },
];

const route = useRoute();

const goToModal = (menu) => {
  emit("modal", menu);
}
watch(route, () => {
  if (route.name !== store.view) {
    store.view = route.name;
  }
});
</script>

<style>
menu:hover {
  color: antiquewhite;
}
</style>
