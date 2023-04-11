<template>
  <div class="h-full w-full">
    <div class="flex mt-5">
      <button
        class="bg-DarkRock rounded-full h-10 w-10 flex mr-4"
        @click.prevent="changeView()"
      >
        <SvgTarget
          target="Chevron"
          class="mx-auto my-auto rotate-90"
        ></SvgTarget>
      </button>
      <h1
        class="text-3xl font-bold tracking-tight text-white flex items-center"
      >
        <span><SvgTarget target="Inventory" class="mr-4"></SvgTarget></span>
        Inventory
      </h1>
    </div>
    <div class="w-full h-full">
      <div name="filter" class="absolute left-0">
        <div name="givenState" class="mt-4 overflow-hidden">
          <h3
            class="text-[20px] flex items-center cursor-pointer"
            @click="
              givenState === true ? (givenState = false) : (givenState = true)
            "
          >
            GIVEN TO<span class="ml-2"
              ><Chevron
                :class="
                  givenState === true
                    ? 'transition-all ease-in-out'
                    : 'transition-all ease-in-out rotate-180'
                "
            /></span>
          </h3>
          <label for="search" class="sr-only">Search</label>
          <div
            class="relative w-[360PX] text-gray-400 border-White"
            :class="
              givenState
                ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
                : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-11'
            "
          >
            <SearchIcon
              class="absolute h-5 w-5 z-10 my-3 ml-6"
              aria-hidden="true"
            />
            <input
              id="search"
              class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
              :class="
                givenName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
              "
              placeholder="Search"
              type="search"
              name="givenName"
              v-model="givenName"
              :disabled="wait"
            />
          </div>
        </div>
        <div name="receivedState" class="mt-4 overflow-hidden">
          <h3
            class="text-[20px] flex items-center cursor-pointer"
            @click="
              receivedState === true
                ? (receivedState = false)
                : (receivedState = true)
            "
          >
            RECEIVED FROM<span class="ml-2"
              ><Chevron
                :class="
                  receivedState === true
                    ? 'transition-all ease-in-out'
                    : 'transition-all ease-in-out rotate-180'
                "
            /></span>
          </h3>
          <label for="search" class="sr-only">Search</label>
          <div
            class="relative w-[360PX] text-gray-400 border-White"
            :class="
              receivedState
                ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
                : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-11'
            "
          >
            <SearchIcon
              class="absolute h-5 w-5 z-10 my-3 ml-6"
              aria-hidden="true"
            />
            <input
              id="search"
              class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
              :class="
                receivedName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
              "
              placeholder="Search"
              type="search"
              name="receivedName"
              v-model="receivedName"
              :disabled="wait"
            />
          </div>
        </div>
      </div>
      <div name="content" class="w-1/2 items-center mx-auto">
        <div
          class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 sm:gap-y-16 xl:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4"
        >
          <WalletCard
            v-for="ticket in dataTicket(100)"
            :data="ticket"
          ></WalletCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";
import { Chevron } from "@assets/icons/iconsOldImport";
import { SearchIcon } from "@heroicons/vue/solid";
import WalletCard from "@components/eventCardContent/WalletCard.vue";
import useStoreAuth from "@stores/auth";

export default {
  components: {
    Chevron,
    SearchIcon,
    SvgTarget,
    WalletCard
},
  data() {
    const store = useStoreAuth();
    return {
      store,
      givenState: true,
      receivedState: true,
      givenName: "",
      receivedName: "",
      wait: false,
    }
  },
  methods: {
    changeView() {
      this.$emit("action", "wallet");
    },
    dataTicket(limite) {
      let newArray = [];
      for (
        let index = 0;
        index < this.store.dataAccount.ticket.length;
        index++
      ) {
        newArray.unshift(this.store.dataAccount.ticket[index]);
      }
      return newArray.slice(0, limite);
    },
  },
};
</script>

<style lang="scss" scoped></style>
