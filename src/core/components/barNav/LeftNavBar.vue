<template>
  <div
    class="flex-col justify-between px-3 py-3 items-center space-y-2 border-r-2 border-Rock"
  >
    <div
      class="transition duration-150 space-y-2 flex-col justify-between ease-in-out hover:text-White"
    >
      <ToolsButtonNav
        v-for="item in buttonsMenu"
        :btnName="item.icon"
        :key="item.target"
        :target="item.target"
        :dataClass="item.dataClass"
        :comparTarget="store.view"
        class="transition-all duration-300"
      >
        <img
          v-if="item.icon === 'Space'"
          :src="spaceStore.getImg(props.idSpace)"
          alt="Space picture"
          class="rounded-full cursor-pointer h-6 w-6 hover:bg-Rock text-Gravel"
        />
        <ImgFormated
          v-if="item.icon === 'Space' && !spaceStore.getImg(props.idSpace)"
          :key="store.spaceKey"
          :srcImg="img"
          :size="'xs'"
          :type="'space'"
          class="rounded-full cursor-pointer h-6 w-6 hover:bg-Rock text-Gravel"
        />
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
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
// Components
import Operator from "@assets/icons/Operator.vue";
import Analytics from "@assets/svg/pricing/Analytics.vue";
import Conceptor from "@assets/icons/Conceptor.vue";
import Calendar from "@assets/icons/Calendar.vue";
import Messages from "@assets/icons/Messages.vue";
import ToolsButtonNav from "../buttons/ToolsButtonNav.vue";
import Dashboard from "../../assets/icons/Dashboard.vue";
import ImgFormated from "../img/ImgFormated.vue";

const props = defineProps({
  idSpace: String,
});
const store = useStoreAuth();
const spaceStore = useStoreSpace();

const buttonsMenu = [
  {
    target: "Space",
    icon: "Space",
    dataClass: "spaces",
  },
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

watch(route, () => {
  if (route.name !== store.view) {
    store.view = route.name;
  }
});
</script>
