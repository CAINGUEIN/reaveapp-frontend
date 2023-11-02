<template>
  <div class="flex h-screen">
    <div class="w-full flex flex-col h-full">
      <TopNavBar @modal-changed="handleModalValueChanged" />
      <div
        class="mx-8 mt-6 h-full flex border-2 border-Rock rounded-t-xl border-b-0"
      >
        <LeftNavBar />
        <router-view class="max-h-fit w-full" />
      </div>
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
import LeftNavBar from "../../../core/components/barNav/LeftNavBar.vue";
import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";
import TopNavBar from "@core/components/barNav/TopNavBar.vue";
export default {
  components: {
    CreateSpaceModal,
    LeftNavBar,
    TopNavBar,
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
    toggleDropdown() {
      if (this.dropdown === "hidden") {
        this.dropdown = "";
      } else {
        this.dropdown = "hidden";
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
  },
};
</script>
