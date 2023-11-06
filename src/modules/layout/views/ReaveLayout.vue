<template>
  <div
    class="flex h-screen"
    v-bind:class="{ 'pb-5': !$route.path.includes('SpacePrivate') }"
  >
    <div class="w-full flex flex-col h-full">
      <TopNavBar
        :class="{
          'sticky top-0 mx-8 left-0 right-0 flex pt-6 pb-[18px] items-center bg-Anthracite':
            !isMapsRoute,
          'absolute top-0 left-0 right-0 flex pt-6 pb-[18px] items-center':
            isMapsRoute,
        }"
        @modal-changed="handleModalValueChanged"
      />
      <div
        class="mt-[12px] mx-8 h-full flex border-2 border-Rock rounded-t-xl border-b-0"
        v-if="$route.path.includes('SpacePrivate')"
      >
        <LeftNavBar v-if="$route.path.includes('SpacePrivate')" />
        <router-view
          class="max-h-fit w-full"
          v-if="$route.path.includes('SpacePrivate')"
        />
      </div>
      <router-view
        class="max-h-fit"
        v-if="!$route.path.includes('SpacePrivate')"
      />
    </div>
    <CreateSpaceModal @isOpenModal="closeModal" :isOpenModal="isOpenModal" />
  </div>
</template>

<script>
//store
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
//components
import CreateSpaceModal from "@core/components/modal/CreateSpaceModal.vue";
import SpaceNavBar from "@core/components/barNav/SpaceNavBar.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import TopNavBar from "@core/components/barNav/TopNavBar.vue";
import Settings from "@assets/icons/Settings.vue";
import Reave from "@assets/icons/Reave.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import Plus from "@assets/icons/Plus.vue";
import Spaces from "@assets/icons/Spaces.vue";
import Events from "@assets/icons/Events.vue";
import Shards from "@assets/icons/Shards.vue";
import Hub from "@assets/icons/Hub.vue";
import Jobs from "@assets/icons/Jobs.vue";
import Academy from "@assets/icons/Academy.vue";
import Bootcamps from "@assets/icons/Bootcamps.vue";
import Maps from "@assets/icons/Maps.vue";
import Conceptor from "@assets/icons/Conceptor.vue";
import Riot from "@assets/icons/Riot.vue";
//data
import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";
import Bento from "../../../core/assets/icons/Bento.vue";
import LeftNavBar from "@components/barNav/LeftNavBar.vue";
export default {
  components: {
    CreateSpaceModal,
    SpaceNavBar,
    LeftNavBar,
    TopNavBar,
    ToolsButtonNav,
    Plus,
    Spaces,
    Reave,
    Riot,
    Settings,
    Popover,
    PopoverButton,
    PopoverPanel,
    Events,
    Shards,
    Hub,
    Jobs,
    Academy,
    Bootcamps,
    Maps,
    Conceptor,
    Bento,
  },
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      dataTopLeft,
      dataBottomLeft,
      isMapsRoute: false,
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
          target: "Conceptor",
          icon: "Conceptor",
          dataClass: "settings",
          btnName: "Conceptor",
        },
      ],
    };
  },
  methods: {
    handleModalValueChanged(value) {
      this.isOpenModal = value;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    async openSpace(target, type) {
      if (
        await this.storeSpace.feedDataSpace({
          id: target,
        })
      ) {
        this.$router.push({
          path: "/space/" + type,
          query: {
            id: target,
          },
        });
      } else {
        this.$router.push({
          name: "Personal",
        });
      }
      console.log("open", "/space/" + type + "/" + target);
    },
    getUrl() {
      if (this.$route.name !== this.store.view) {
        this.store.view = this.$route.name;
      }
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
    $route(to, from) {
      this.isMapsRoute = to.path === "/maps";
    },
  },
  mounted() {
    this.getUrl();
    this.isMapsRoute = this.$route.path === "/maps";
    console.log(this.isMapsRoute);
  },
};
</script>
