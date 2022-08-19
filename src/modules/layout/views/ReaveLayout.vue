<template>
  <div class="flex relative">
    <div
      name="nav-bar-left"
      class="sticky top-0 left-0 bottom-0 z-50 flex flex-col justify-between w-32 h-screen items-center"
    >
      <div name="top" class="mt-8">
        <TopLeftNavBar />
      </div>
      <div name="bottom" class="my-8">
        <div class="bg-white h-1 w-14 mx-auto rounded-full"></div>
        <BottomLeftNavBar/>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div
        name="nav-bar-top"
        class="sticky top-0 left-0 right-0 z-50 bg-Anthracite flex pt-6 pb-[18px] items-center"
      >
        <SpaceNavBar @action="openSpace" :data="store.dataSpaces" />
        <div class="bg-white h-14 my-auto w-1 rounded-full mr-2"></div>
        <ToolsButtonNav
          @click="openModal"
          :dataClass="'medium'"
          :slot="true"
          class="mr-2"
        >
          <PlusIcon class="h-15 w-15" />
        </ToolsButtonNav>
        <ToolsButtonNav :dataClass="'medium'" :slot="true">
          <GlobeIcon class="h-15 w-15" />
        </ToolsButtonNav>
      </div>
      <router-view class="pr-[30px]" />
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
import TopLeftNavBar from "@core/components/barNav/TopLeftNavBar.vue";
import BottomLeftNavBar from "@core/components/barNav/BottomLeftNavBar.vue";
import ToolsButtonNav from "@core/components/buttons/ToolsButtonNav.vue";
import { GlobeIcon, PlusIcon } from "@heroicons/vue/outline";
//data
import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";

export default {
  components: {
    CreateSpaceModal,
    SpaceNavBar,
    TopLeftNavBar,
    ToolsButtonNav,
    BottomLeftNavBar,
    GlobeIcon,
    PlusIcon,
  },
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      dataTopLeft,
      dataBottomLeft,
      isOpenModal: false,
      isOpenStatusMenu: false,
      store,
      storeSpace,
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    goTo(target) {
      this.$router.push({ name: target });
    },
    async openSpace(target, type) {
      if (await this.storeSpace.feedDataSpace({ id: target })) {
        this.$router.push({ path: "/space/" + type, query: { id: target } });
      } else {
        this.$router.push({ name: "Personal" });
      }
      console.log("open", "/space/" + type + "/" + target);
    },
  },
};
</script>
