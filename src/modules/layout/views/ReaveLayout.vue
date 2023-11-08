<template>
  <div class="flex h-screen">
    <div class="w-full flex flex-col h-full">
      <TopNavBar
        :class="{
          'sticky top-0 mx-8 left-0 right-0 flex pt-6 pb-[18px] items-center bg-Anthracite':
            !isMapsRoute,
          'absolute top-0 left-0 right-0 flex pt-6 pb-[18px] items-center':
            isMapsRoute,
        }"
        @modal-changed="handleModalValueChanged"
        :dataStore="dataSpace"
      />
      <div
        class="mt-[20px] mx-8 h-full flex border-2 border-Rock rounded-t-xl border-b-0"
        v-if="$route.path.includes('SpacePrivate')"
      >
        <LeftNavBar />
        <router-view class="max-h-fit w-full" />
      </div>
      <router-view
        class="max-h-fit"
        v-if="!$route.path.includes('SpacePrivate')"
      />
    </div>
    <CreateSpaceModal
      @submitSuccess="feedDataSpace"
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModal"
    />
  </div>
</template>

<script>
//store
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
//components
import CreateSpaceModal from "@core/components/modal/CreateSpaceModal.vue";
import TopNavBar from "@core/components/barNav/TopNavBar.vue";
//data
import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";
import LeftNavBar from "@components/barNav/LeftNavBar.vue";
export default {
  components: {
    CreateSpaceModal,
    LeftNavBar,
    TopNavBar,
  },
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    let dataSpace;
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
      dataSpace,
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
    async feedDataSpace() {
      await this.storeSpace.feedDataSpace();
      this.dataSpace = this.storeSpace.dataSpace;
    },
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
    this.feedDataSpace();
  },
};
</script>

<style lang="css">
.space {
  border-radius: 100%;
  transition: border-radius 1s;
  transition-delay: 0ms;
}

.space-selected {
  border-radius: 12px;
}

.space:hover {
  border-radius: 12px;
}
</style>
