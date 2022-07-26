<template>
  <div v-if="!storeSpace.isWaiting" class="flex flex-col h-full">
    <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex ml-4">
        <img
          src="https://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-2">{{ storeSpace.dataSpace.nameSpace }}</h4>
      </div>
      <div name="select-game" class="flex bg-Rock rounded-full">
        <img
          src="@core/assets/icons/LeagueOfLegends.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
        /><img
          src="@core/assets/icons/Overwatch.svg"
          alt=""
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
        /><img
          src="@core/assets/icons/Valorant.svg"
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
          @click="view = 'chat'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="view = ''"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <input type="text" class="rounded-full my-2" />
      </div>
    </nav>
    <div class="flex-1 flex">
      <Tchat v-if="view === 'chat'" class="w-full" />
      <FriendsDashboard
        v-if="view === 'dashboard'"
        class="w-full"
      ></FriendsDashboard>
      <FriendsCalendar
        v-if="view === 'calendar'"
        class="w-full"
      ></FriendsCalendar>
    </div>
  </div>
</template>

<script>
import useStoreSpace from "@stores/storeSpace";
import Tchat from "@core/components/chat/Chat.vue";
import FriendsDashboard from "@modules/friends/views/Dashboard.vue";
import FriendsCalendar from "@modules/friends/views/Calendar.vue";
export default {
  components: { Tchat, FriendsDashboard, FriendsCalendar },
  data() {
    const storeSpace = useStoreSpace();
    return {
      view: "chat",
      storeSpace,
      space: "",
    };
  },
  methods: {
    async paramInURL() {
      console.log("in param URL");
      if (Object.keys(this.$route.query).length === 0) {
        console.log("si rien " + this.$route.query);
        //si rien on degage c'est pas normal
      } else {
        console.log(this.$route.query);
        await this.storeSpace.feedDataSpace(this.$route.query);
        this.space === this.storeSpace.dataSpace;
      }
    },
  },
  async mounted() {
    await this.paramInURL();
    console.log("le friends layout est mounted");
  },
};
</script>
