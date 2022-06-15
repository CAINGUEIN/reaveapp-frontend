<template>
  <div>
    <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex ml-4">
        <img
          src="http://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-2">SPACE OF {{ store.userName }}</h4>
      </div>
      <div name="select-game" class="flex bg-Rock rounded-full">
        <img
          src="../../../core/assets/icons/League Of Legends.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
        /><img
          src="../../../core/assets/icons/Overwatch.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
        /><img
          src="../../../core/assets/icons/Valorant.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
        />
      </div>
      <div name="icon-search" class="flex mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="view = 'dashboard'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="view = 'calendar'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <input type="text" class="rounded-full my-2" />
      </div>
    </nav>
    <div class="flex-1 flex">
      <Tchat v-if="view === 'chat'" class="w-full" />
      <PersonalCalendar
        v-if="view === 'calendar'"
        class="w-full"
        @action="(e) => openModal(e)"
      ></PersonalCalendar>
      <PersonalSpacePage v-if="view === 'dashboard'" class="w-full">
      </PersonalSpacePage>
    </div>
    <CreateCalendarEvent @isOpenModal="closeModal" :isOpenModal="isOpenModal" :data="data" />
  </div>
</template>

<script>
import useStoreAuth from "../../../plugins/stores/auth";
import Tchat from "../../../core/components/chat/tchat.vue";
import PersonalCalendar from "./PersonalCalendar.vue";
import PersonalSpacePage from "./PersonalSpacePage.vue";
import CreateCalendarEvent from "../../../core/components/modal/CreateCalendarEvent.vue";

export default {
  data() {
    const store = useStoreAuth();
    return {
      view: "chat",
      store,
      space: "",
      store,
      isOpenModal: false,
      data: "",
    };
  },
  methods: {
    openModal(e) {
      console.log(e);
      this.isOpenModal = true;
      this.data = e
    },
    closeModal() {
      this.isOpenModal = false;
    },
  },
  components: {
    Tchat,
    PersonalCalendar,
    PersonalSpacePage,
    CreateCalendarEvent,
  },
};
</script>

<style lang="scss" scoped></style>
