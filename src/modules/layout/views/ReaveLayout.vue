<template>
  <div class="flex h-screen">
    <div
      name="nav-bar-left"
      class="sticky top-0 left-0 bottom-0 z-20 flex flex-col justify-between mx-[30px] h-screen items-center"
    >
      <div name="top" class="mt-6">
        <TopLeftNavBar />
      </div>
      <div name="bottom" class="mb-6">
        <div class="bg-LightRock h-0.5 mb-3 w-14 mx-auto rounded-full"></div>
        <BottomLeftNavBar />
      </div>
    </div>
    <div class="w-full flex flex-col h-screen">
      <div
        name="nav-bar-top"
        class="sticky top-0 left-0 right-0 z-20 bg-Anthracite flex pt-6 pb-[18px] items-center"
      >
        <SpaceNavBar @action="openSpace" :data="store.dataSpaces" />
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
            :target="'Explore'"
            :comparTarget="store.view"
          >
            <Explore />
          </ToolsButtonNav>
        </div>
      </div>
      <router-view class="overflow-hidden"/>
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
import Explore from "@assets/icons/Explore.vue";
import Plus from "@assets/icons/Plus.vue";

export default {
  components: {
    CreateSpaceModal,
    SpaceNavBar,
    TopLeftNavBar,
    ToolsButtonNav,
    BottomLeftNavBar,
    GlobeIcon,
    PlusIcon,
    Explore,
    Plus,
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
