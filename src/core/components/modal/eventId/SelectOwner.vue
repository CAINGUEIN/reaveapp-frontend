<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="pt-3 flex flex-col" v-if="etape === 1">
      <p class="text-2xl text-White text-center font-black">
        To whom are you gifting
      </p>
      <p class="text-2xl text-White text-center font-black">this ticket?</p>
      <div class="mt-8 w-full">
        <p
          for="search"
          class="text-white text-base font-black text-left w-full uppercase"
        >
          Enter user tag or profile name
        </p>
        <div class="relative text-gray-400 border-White my-3">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-1.5 ml-3 text-Gravel"
            aria-hidden="true"
          />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="bg-DarkRock font-medium placeholder:text-Gravel block w-full h-8 pl-11 rounded-full text-White placeholder-Gravel ring-0 focus:ring-0 focus:outline-none border-0 focus:border-0"
            placeholder="Search"
            type="search"
            name="search"
            v-model="friendsSearch"
          />
        </div>
      </div>
      <div name="listContact" class="h-60 overflow-auto scrollbarV">
        <div v-for="friend in store.dataAccount.friends">
          <div
            @click="submit(friend)"
            class="h-20 flex justify-between items-center p-4 rounded-2xl hover:bg-Rock"
          >
            <div class="flex items-center">
              <ImgFormated
                :key="friend._id"
                :size="'l'"
                :targetSpace="friend._id"
                :type="'avatar'"
                class="h-9 w-9 bg-slate-500 rounded-full"
              />
              <div class="ml-4">
                <h4>{{ friend.userTag }}</h4>
                <h5 class="text-Gravel">@{{ friend.profileName }}</h5>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-White rounded-full h-10 w-10 flex">
                <ArrowRightIcon
                  class="h-8 w-8 text-Black m-auto"
                ></ArrowRightIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ArrowRightIcon, SearchIcon } from "@heroicons/vue/outline";
import XButton36 from "@components/buttons/XButton36.vue";
//tool
import useStoreAuth from "@stores/auth";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import ImgFormated from "../../img/ImgFormated.vue";
//services

export default {
  props: ["userSelect"],
  components: {
    XButton36,
    ArrowRightIcon,
    SearchIcon,
    ChevronUpIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ImgFormated,
  },
  data() {
    const store = useStoreAuth();
    return {
      etape: 1,
      store,
      friendsSearch: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async submit(userSelect) {
      this.$emit("action", userSelect);
    },
  },
};
</script>

<style lang="scss" scoped></style>
