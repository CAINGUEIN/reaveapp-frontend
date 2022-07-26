<template>
  <div class="flex h-full w-full">
    <div name="contact" class="w-72 bg-Rock rounded-tl-2xl">
      <div class="w-full pt-1 px-1 flex justify-between">
        <h4>Direct Messages</h4>
        <button
          name="addFriends"
          class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
          @click="openModal"
        >
          <PlusIcon class="mx-2 h-5 w-5" />
        </button>
      </div>
      <div class="">
        <label for="search" class="sr-only">Search</label>
        <div class="relative text-gray-400 border-White m-2">
          <SearchIcon class="absolute h-5 w-5 z-10 m-3" aria-hidden="true" />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
            placeholder="Find a conversation"
            type="search"
            name="search"
          />
        </div>
      </div>
      <!-- mettre ici un bouton qui pop quand une invitation en attente -->
      <div v-if="addFriendInvite">
        <a @click="openModalValidate">
          <h4>new invitation</h4>
        </a>
      </div>
      <!-- si dans les option du user il laisse les inconue le DM -->
      <div>
        <div v-if="!select === false">
          <div name="selectCategory" class="flex w-full mt-2">
            <!-- switch button friends general -->
            <button
              class="flex-1 pb-2 border-b-2"
              :class="
                select === 'friends'
                  ? 'border-White text-White'
                  : 'border-Gravel text-Gravel'
              "
              @click="select = 'friends'"
            >
              Friends
            </button>
            <button
              class="flex-1 pb-2 border-b-2"
              :class="
                select === 'general'
                  ? 'border-White text-White'
                  : 'border-Gravel text-Gravel'
              "
              @click="select = 'general'"
            >
              General
            </button>
          </div>
          <div v-if="select === 'friends'" name="friends">
            <!-- list des amis -->
            <!-- recup ici peut etre avec un populate dans la DB les infos des firends
             en limitant au nom photo de profile et note -->
            <div v-for="friend in store.friends">
              <div
                name="left"
                class="flex mt-2 ml-2 justify-between items-center"
              >
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt=""
                    class="h-12 w-12 rounded-full"
                  />
                  <div class="ml-3 text-left">
                    <h5>
                      {{ friend.userName }}
                    </h5>
                    <h5 class="text-LightGrey">@{{ friend.profileTag }}</h5>
                  </div>
                </div>

                <Popover class="relative" v-slot="{ open }">
                  <PopoverButton
                    class="'group rounded-md inline-flex items-center'"
                  >
                    <DotsVerticalIcon
                      class="h-8 w-8 bg-LightRock text-Gravel rounded-full items-center hover:bg-White hover:text-Anthracite mr-2"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
                    >
                      <div
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div class="relative grid p-4 bg-LightRock">
                          <a
                            v-for="item in solutions"
                            :key="item.name"
                            :href="item.href"
                          >
                            <div
                              class="p-1 block rounded-md hover:bg-Stone transition ease-in-out duration-150"
                            >
                              <p class="text-base font-medium text-White">
                                {{ item.name }}
                              </p>
                            </div>
                            <div
                              v-if="item.divide"
                              class="border-b-2 border-Gravel"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </div>
            </div>
          </div>
          <div v-if="select === 'general'" name="general"></div>
        </div>

        <!-- si non  -->
        <div class="flex w-full mt-2" v-else>
          <div
            name="friendsSelected"
            class="flex-1 pb-2 border-b-2 border-White text-White text-center"
          >
            Friends
          </div>
          <div name="friends"></div>
        </div>
      </div>
    </div>
    <div name="DM" class="flex-1 flex flex-col">
      <nav class="bg-DarkRock rounded-r-full h-15 w-full flex justify-between">
        <div name="leftSide" class="flex items-center">
          <div name="name">
            <h4 class="ml-6">
              <!-- mettre ici le pseudo de la personne DM -->
              {{ store.dataAccount.userName }}
            </h4>
          </div>
        </div>
        <div name="rightSide" class="flex">
          <div name="visio" class="w-15 h-15">
            <VideoCameraIcon class="m-4" />
          </div>
          <div name="call" class="w-15 h-15">
            <PhoneIcon class="m-4" />
          </div>
          <div name="host" class="w-15 h-15">
            <UserAddIcon class="m-4" />
          </div>
          <div class="">
            <label for="search" class="sr-only">Search</label>
            <div class="relative text-gray-400 border-White m-2">
              <SearchIcon
                class="absolute h-5 w-5 z-10 m-3"
                aria-hidden="true"
              />
              <!-- voir a comprendre pourquoi j'ai un ring bleu -->
              <input
                id="search"
                class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
      </nav>
      <div name="content">
        <div name="message"></div>
        <div name="sender" class="bg-Stone rounded-full">
          <div name="btnMedia"></div>
          <div name="inputTxt"></div>
          <div name="btnGifs"></div>
          <div name="btnModules"></div>
          <div name="btnGifts"></div>
          <div name="btnEmojis"></div>
        </div>
      </div>
    </div>
    <AddFriendModal @isOpenModal="closeModal" :isOpenModal="isOpenModal" />
    <ValidateFriendModal
      @pullNotification="pullNotification"
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModalValidate"
      :data="friendInviteList"
    />
  </div>
</template>

<script>
import AddFriendModal from "@core/components/search/AddFriendModal.vue";
import ValidateFriendModal from "@core/components/search/ValidateFriendModal.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  DotsVerticalIcon,
  PhoneIcon,
  UserAddIcon,
  VideoCameraIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/vue/outline";

import useStoreAuth from "@stores/auth";
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    DotsVerticalIcon,
    PhoneIcon,
    UserAddIcon,
    VideoCameraIcon,
    SearchIcon,
    PlusIcon,
    AddFriendModal,
    ValidateFriendModal,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      select: "friends",
      isOpenModal: false,
      isOpenModalValidate: false,
      addFriendInvite: false,
      friendInviteList: [],
      solutions: [
        {
          name: "Mark as Read",
          href: "#",
          divide: true,
        },
        {
          name: "Profile",
          href: "#",
        },
        {
          name: "Call",
          href: "#",
        },
        {
          name: "Add Note",
          href: "#",
        },
        {
          name: "Close DM",
          href: "#",
          divide: true,
        },
        {
          name: "Invite to Server",
          href: "#",
        },
        {
          name: "Remove Friend",
          href: "#",
        },
        {
          name: "Block",
          href: "#",
          divide: true,
        },
        {
          name: "Mute @",
          href: "#",
          divide: true,
        },
        {
          name: "Copy ID",
          href: "#",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    openModalValidate() {
      this.isOpenModalValidate = true;
    },
    closeModal() {
      this.isOpenModal = false;
      this.isOpenModalValidate = false;
    },
    notificationFriend() {
      this.store.notifications.forEach((notification) => {
        if (notification.type === "addFriend") {
          this.friendInviteList.push(notification);
        }
      });
      if (this.friendInviteList.length > 0) {
        this.addFriendInvite = true;
      }
      console.log("ici");
    },
    pullNotification(index) {
      this.friendInviteList.splice(index, 1);
    },
  },
  mounted() {
    this.notificationFriend();
  },
};
</script>

<style lang="scss" scoped></style>
