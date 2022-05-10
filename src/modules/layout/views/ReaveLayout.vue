<template>
  <div class="flex">
    <div
      name="nav-bar-left"
      class="flex flex-col justify-between w-32 h-screen items-center"
    >
      <div name="top">
        <img
          src="../../../core/assets/icons/logo.svg"
          alt=""
          class="h-16 w-16 p-4 m-8 bg-DarkRock rounded-full"
        />
        <img
          src="http://via.placeholder.com/24"
          alt=""
          class="rounded-full mt-8 mx-auto"
        />
        <img
          src="http://via.placeholder.com/24"
          alt=""
          class="rounded-full mt-8 mx-auto"
        />
        <img
          src="http://via.placeholder.com/24"
          alt=""
          class="rounded-full mt-8 mx-auto"
        />
        <img
          src="http://via.placeholder.com/24"
          alt=""
          class="rounded-full mt-8 mx-auto"
        />
      </div>
      <div name="bottom" class="my-8">
        <div class="bg-white h-1 w-14 mx-auto rounded-full"></div>
        <img
          src="../../../core/assets/icons/Settings.svg"
          alt=""
          class="h-16 w-16 p-4 mt-4 bg-DarkRock rounded-full"
        />
        <img
          src="http://via.placeholder.com/60"
          alt=""
          class="rounded-full mt-4 mx-auto"
        />
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div name="nav-bar-top" class="flex pt-8 items-center">
        <div name="space-for" class="flex space-x-2">
          <img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
          <img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
          <div class="bg-white h-14 my-auto w-1 rounded-full"></div>
          <button
            @click="openModal"
            name="svg-div"
            class="bg-Rock hover:bg-Stone hover:text-White rounded-full p-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button
            name="svg-div"
            class="bg-Rock hover:bg-Stone hover:text-White rounded-full p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <router-view />
    </div>
    <CreateSpaceModal @isOpenModal="closeModal" :isOpenModal="isOpenModal" />
  </div>
</template>

<script>
import CreateSpaceModal from "../../../core/components/modal/CreateSpaceModal.vue";
export default {
  components: { CreateSpaceModal },
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
      this.sidebarOpen = false;
      console.log("open");
    },
    closeModal() {
      this.isOpenModal = false;
    },
  },
};
</script>
