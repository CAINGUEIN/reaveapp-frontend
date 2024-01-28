<template>
  <div class="overflow-visible">
    <div
      class="transition ease-out rounded-[12px] mt-1 duration-300 relative w-fit bg-DarkRock p-3"
    >
      <div
        class="w-[304px] h-[72px] rounded-lg"
        style="
          background-image: url(../../../../../public/img/PersonalBanneer.png);
          background-size: cover;
          background-position: center;
        "
      >
        <div class="absolute -bottom-4 left-3">
          <ImgFormated class="rounded-full w-12 h-12" type="avatar" />
          <span
            class="bottom-1 left-9 absolute w-4 h-4 bg-Green border-2 border-DarkRock rounded-full"
          ></span>
        </div>
      </div>

      <p class="font-black w-fit mt-5 text-xl text-White">
        {{ props.profileInfo.profileName }}
      </p>

      <p class="font-medium text-base w-fit text-Gravel">
        @{{ props.profileInfo.userTag }}
      </p>
      <div class="h-0.5 w-full bg-Platinium my-4"></div>
      <div class="flex flex-row space-x-1">
        <ToolsButtonNav
          v-for="item in personalTools"
          :key="item.name"
          :target="'Personal'"
          :btnName="item.name"
          :subTarget="item.target"
          @click="emit('close')"
          :isMouseOver="true"
          :class="
            route.params.view === item.target ? 'bg-LightRock text-White' : ''
          "
          class="flex rounded-full hover:bg-LightRock hover:text-LightGrey text-Gravel transition duration-150 ease-in-out p-2"
        >
          <SvgTarget :width="24" :height="24" :target="item.icon" />
        </ToolsButtonNav>
      </div>
      <div class="h-0.5 w-full bg-Platinium my-4"></div>
      <div class="flex flex-row space-x-1">
        <div class="mx-2 p-2 w-6 h-6 bg-Green rounded-full my-auto"></div>
        <div
          v-for="item in personalOptions"
          :key="item.name"
          @click="emit('close')"
          class="flex rounded-full"
        >
          <ToolsButtonNav
            v-if="item.type === 'page'"
            :target="'Personal'"
            :subTarget="item.target"
            :dataClass="'settings'"
            class="w-10 hover:bg-LightRock transition duration-150 ease-in-out"
            :btnName="item.name"
            :class="
              route.params.view === item.target ? 'bg-LightRock text-White' : ''
            "
            :isMouseOver="true"
          >
            <SvgTarget
              :class="item.target === 'save' ? 'pr-0.5' : ''"
              :width="24"
              :height="24"
              :target="item.icon"
            />
          </ToolsButtonNav>
          <div
            v-if="item.type === 'settings'"
            class="flex w-10 h-10 cursor-pointer hover:text-LightGrey text-Gravel hover:bg-LightRock rounded-full my-auto transition duration-150 ease-in-out"
            @click="emit('logout', item.target)"
          >
            <SvgTarget
              class="m-auto hover:text-LightGrey text-Gravel"
              :width="24"
              :height="24"
              :target="'switch'"
            />
          </div>
          <div
            v-if="item.type === 'modal'"
            class="flex w-10 h-10 cursor-pointer hover:text-LightGrey text-Gravel hover:bg-LightRock rounded-full my-auto transition duration-150 ease-in-out"
            @click="emit('modalChanged', item.target)"
          >
            <SvgTarget
              class="m-auto"
              :width="24"
              :height="24"
              :target="item.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import SvgTarget from "@components/SvgTarget.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const emit = defineEmits(["logout", "close", "modalChanged"]);
const props = defineProps({
  profileInfo: {
    type: Object,
    required: true,
  },
});
const personalTools = [
  {
    name: "Wallet",
    icon: "ReaveWallet",
    target: "wallet",
  },
  {
    name: "Conceptor",
    icon: "Conceptor",
    target: "conceptor",
  },
  {
    name: "Calendar",
    icon: "Calendar",
    target: "calendar",
  },
  {
    name: "Notification",
    icon: "Notification",
    target: "notifs",
  },
];
const personalOptions = [
  {
    icon: "Search",
    name: "Search",
    target: "search",
    type: "modal",
  },
  {
    icon: "Friends",
    name: "Friends",
    target: "friends",
    type: "page",
  },
  {
    icon: "Save",
    name: "Save",
    target: "save",
    type: "page",
  },
  {
    icon: "Switch",
    name: "Switch Account",
    target: "logout",
    type: "settings",
  },
];
</script>
