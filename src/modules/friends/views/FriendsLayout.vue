<template>
  <div v-if="!storeSpace.isWaiting" class="flex flex-col h-full">
     <nav
      class="mt-2 flex h-16 min-w-max justify-between items-center bg-DarkRock rounded-full"
    >
      <div name="space-name" class="flex ml-4">
        <img
          src="http://via.placeholder.com/36"
          alt=""
          class="rounded-full my-auto"
        />
        <h4 class="ml-2">{{storeSpace.dataSpace.nameSpace}}</h4>
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
    <div class="flex-1">
      <Tchat v-if="view === 'chat'" :dataSpace="storeSpace.dataSpace"/>
    </div>
  </div>
</template>

<script>
import useStoreSpace from "../../../plugins/stores/storeSpace";
import Tchat from "../../../core/components/chat/tchat.vue";
export default {
    data() {
        const storeSpace = useStoreSpace();
        return {
            view: "chat",
            storeSpace,
            space: storeSpace.dataSpace,
        };
    },
    components: { Tchat },
    mounted () {
      console.log("le friends layout est mounted");;
    },
};
</script>
