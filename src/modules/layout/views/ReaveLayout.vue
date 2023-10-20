<template>
  <div class="flex h-screen">
    <div class="w-full flex flex-col h-screen">
      <div name="nav-bar-top" :class="{
          'sticky top-0 mx-8 left-0 right-0 flex pt-6 pb-[18px] items-center bg-Anthracite':
            !isMapsRoute,
          'absolute top-0 left-0 right-0 flex pt-6 pb-[18px] items-center':
            isMapsRoute,
        }" style="z-index: 100000;margin-left: 30px;margin-right: 30px;padding-top: 0px;margin-top: 20px;">
        <div class="flex justify-between w-full">
          <div class="flex space-x-4 items-center">
            <ToolsButtonNav :target="'PersonalMessages'" :dataClass="'reave'" :comparTarget="store.view" class="">
              <Reave />
            </ToolsButtonNav>

            <ToolsButtonNav target="SpacePrivate">
              <div class="h-12 w-12 bg-slate-600 rounded-full"></div>
            </ToolsButtonNav>

            <SpaceNavBar class="" @action="openSpace" :data="store.dataSpaces" />
            <!--marked-->
            <div class="h-15 flex items-center">

              <ToolsButtonNav @click="openModal" :dataClass="'top'" class="mr-2" :btnName="'+'" :comparTarget="''">
                <Plus />
              </ToolsButtonNav>

              <ToolsButtonNav :dataClass="'top'" :target="'Spaces'" :comparTarget="store.view">
                <Spaces />
              </ToolsButtonNav>

            </div>
          </div>

          <div class="flex space-x-4 items-center">
            <ToolsButtonNav :target="'Settings'" :subTarget="'account'" :dataClass="''">
              <Settings color1="#BEBEBE" />
            </ToolsButtonNav>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[
                  open
                    ? 'text-Cloud bg-LightRock hover:text-Cloud hover:bg-LightRock'
                    : 'text-gray-500',
                  'flex items-center justify-center rounded-full cursor-pointer h-12 w-12 hover:bg-DarkRock hover:text-LightGrey',
                ]">
                <Bento :color1="open ? '#BEBEBE' :'#BEBEBE'"></Bento>
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute right-0 z-10 mt-5">
                  <div class="overflow-visible">
                    <div
                      class="transition ease-out rounded-[20px] duration-300 relative grid w-80 bg-Anthracite grid-cols-4 p-2">

                      <ToolsButtonNav v-for="item in solutions" :btnName="item.icon" :key="item.target"
                        :target="item.target" :dataClass="item.dataClass" :comparTarget="store.view"
                        :isMouseOver="item.icon"
                        class="flex mx-auto rounded-full h-15 w-15 transition duration-150 ease-in-out">
                        <!-- <template v-slot:custom>
                        <div class="tag" v-if="showTag">{{ btnName }}</div>
                      </template> -->

                        <!-- NEW -->
                        <Events v-if="item.icon === 'Events'"></Events>
                        <Shards v-if="item.icon === 'Shards'"></Shards>
                        <Hub v-if="item.icon === 'Hub'"></Hub>
                        <Jobs v-if="item.icon === 'Jobs'"></Jobs>
                        <Academy v-if="item.icon === 'Academy'"></Academy>
                        <Bootcamps v-if="item.icon === 'Bootcamps'"></Bootcamps>
                        <Maps v-if="item.icon === 'Maps'"></Maps>
                        <Conceptor v-if="item.icon === 'Conceptor'"></Conceptor>

                        <!-- OLD -->
                        <!--
                        <Feed v-if="item.icon === 'Events'"></Feed>
                        <Academy v-if="item.icon === 'Academy'"></Academy>
                        <Jobs v-if="item.icon === 'Jobs'"></Jobs>
                        <Bootcamps v-if="item.icon === 'Bootcamps'"></Bootcamps>
                        <Leagues v-if="item.icon === 'Leagues'"></Leagues>
                        <NFTs v-if="item.icon === 'NFTs'"></NFTs>
                        <Maps v-if="item.icon === 'Maps'"></Maps>
                        -->

                      </ToolsButtonNav>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <div class="relative">
              <ToolsButtonNav :target="'Personal'" :subTarget="'dashboard'" :comparTarget="store.view" :dataClass="''"
                @click.right.prevent="toggleDropdown">
                <img :src="
                    'https://media.reave.dev/useravatar/s' +
                    store.dataAccount._id +
                    'avatar.png'
                  " class="h-10 w-10 rounded-full bg-Gravel" @error="replaceUrl" /></ToolsButtonNav>
              <div :class="dropdown"
                class="absolute right-0 bg-white divide-y divide-gray-100 rounded w-44 dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Online</a>
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inactif</a>
                  </li>
                  <li>
                    <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ne pas
                      déranger</a>
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invisible</a>
                  </li>
                </ul>
                <div class="py-1 text-sm">
                  <InputModel class="m-0 p-0 text-gray-700 dark:text-gray-200" :data="moodMessage"
                    v-model="moodMessage.value" :errors="errors" />
                </div>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">list</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">des</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">status
                      perso</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view class="max-h-fit" />
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
  import {
    DotsVerticalIcon,
    GlobeIcon,
    PlusIcon
  } from "@heroicons/vue/outline";
  import Settings from "@assets/icons/Settings.vue";
  import Reave from "@assets/icons/Reave.vue";
  import {
    Popover,
    PopoverButton,
    PopoverPanel
  } from "@headlessui/vue";
  import Plus from "@assets/icons/Plus.vue";
  import Spaces from "@assets/icons/Spaces.vue";

  /* OLD */
  /*
  import Explore from "@assets/icons/Explore.vue";
  import Feed from "@assets/icons/Feed.vue";
  import Academy from "@assets/icons/Academy.vue";
  import Jobs from "@assets/icons/Jobs.vue";
  import Bootcamps from "@assets/icons/Bootcamps.vue";
  import Leagues from "@assets/icons/Leagues.vue";
  import NFTs from "@assets/icons/NFTs.vue";
  import Maps from "@assets/icons/Maps.vue";
  import Stars from "@core/assets/svg/general/Stars.vue"

  /* NEW */
  import Events from "@assets/icons/Events.vue";
  import Shards from "@assets/icons/Shards.vue";
  import Hub from "@assets/icons/Hub.vue";
  import Jobs from "@assets/icons/Jobs.vue";
  import Academy from "@assets/icons/Academy.vue";
  import Bootcamps from "@assets/icons/Bootcamps.vue";
  import Maps from "@assets/icons/Maps.vue";
  import Conceptor from "@assets/icons/Conceptor.vue";

  //data
  import dataTopLeft from "@modules/layout/data/dataTopLeftNavBar";
  import dataBottomLeft from "@modules/layout/data/dataBottomLeftNavBar";
  import Bento from "../../../core/assets/icons/Bento.vue";

  export default {
    components: {
      CreateSpaceModal,
      SpaceNavBar,
      TopLeftNavBar,
      ToolsButtonNav,
      BottomLeftNavBar,
      GlobeIcon,
      PlusIcon,
      Plus,
      Spaces,
      Reave,
      Settings,
      Popover,
      PopoverButton,
      PopoverPanel,
      /*OLD*/
      /*
      Explore,
      Feed,
      Stars,
      Academy,
      Bootcamps,
      Leagues,
      NFTs,
      Jobs,
      DotsVerticalIcon,
      Maps,
      */

      /*NEW*/
      Events,
      Shards,
      Hub,
      Jobs,
      Academy,
      Bootcamps,
      Maps,
      Conceptor,
      Bento
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
        solutions: [
          /*OLD*/
          /*
          {
            target: "Event",
            icon: "Leagues",
            dataClass: "settings",
            btnName: 'Event',
          },
          {
            target: "Nft",
            icon: "NFTs",
            dataClass: "settings",
            btnName: 'Item',
          },
          {
            target: "Social",
            icon: "Feed",
            dataClass: "settings",
            btnName: 'Social',
          },
          {
            target: "Jobs",
            icon: "Jobs",
            dataClass: "settings",
            btnName: 'Jobs',
          },
          {
            target: "Academy",
            icon: "Academy",
            dataClass: "settings",
            btnName: 'Academy',
          },
          {
            target: "Bootcamps",
            icon: "Bootcamps",
            dataClass: "settings",
            btnName: 'Bootcamps',
          },
          {
            target: "Maps",
            icon: "Maps",
            dataClass: "settings",
            btnName: 'Maps',
          },
          */
          /*NEW*/
          {
            target: "Events",
            icon: "Events",
            dataClass: "settings",
            btnName: 'Events',
          },
          {
            target: "Shards",
            icon: "Shards",
            dataClass: "settings",
            btnName: 'Shards',
          },
          {
            target: "Hub",
            icon: "Hub",
            dataClass: "settings",
            btnName: 'Hub',
          },
          {
            target: "Jobs",
            icon: "Jobs",
            dataClass: "settings",
            btnName: 'Jobs',
          },
          {
            target: "Academy",
            icon: "Academy",
            dataClass: "settings",
            btnName: 'Academy',
          },
          {
            target: "Bootcamps",
            icon: "Bootcamps",
            dataClass: "settings",
            btnName: 'Bootcamps',
          },
          {
            target: "Maps",
            icon: "Maps",
            dataClass: "settings",
            btnName: 'Maps',
          },
          {
            target: "Conceptor",
            icon: "Conceptor",
            dataClass: "settings",
            btnName: 'Conceptor',
          },
        ],
      };
    },
    methods: {
      openModal() {
        this.isOpenModal = true;
      },
      closeModal() {
        this.isOpenModal = false;
      },
      async openSpace(target, type) {
        if (await this.storeSpace.feedDataSpace({
            id: target
          })) {
          this.$router.push({
            path: "/space/" + type,
            query: {
              id: target
            }
          });
        } else {
          this.$router.push({
            name: "Personal"
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
        let randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16)
        let formatSize = "40/"
        e.target.src = "https://via.placeholder.com/" + formatSize + randomColor
      }
    },
    watch: {
      $route() {
        if (this.$route.name !== this.store.view) {
          this.store.view = this.$route.name;
        }
      },
      $route(to, from) {
        this.isMapsRoute = to.path === '/maps';
      },
    },
    mounted() {
      this.getUrl();
      this.isMapsRoute = this.$route.path === '/maps';
    },
  };
</script>