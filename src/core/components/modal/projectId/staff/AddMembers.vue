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
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">Invite & team-up with</h4>
      <h4 class="text-center">great people.</h4>
      <div class="mt-4">
        <label for="search" class="text-white"
          >ENTER USER TAG OR PROFILE NAME</label
        >
        <div class="relative text-gray-400 border-White my-4">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-1.5 ml-3"
            aria-hidden="true"
          />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="bg-DarkRock block w-full h-8 pl-11 rounded-full text-White placeholder-Gravel ring-0 focus:ring-0 focus:outline-none border-0 focus:border-0"
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
            v-if="
              friend.userTag.includes(friendsSearch) ||
              friend.profileName.includes(friendsSearch) ||
              friendsSearch === ''
            "
            @click="(select = friend), (etape = 2)"
            class="h-20 flex justify-between items-center p-4 rounded-2xl"
            :class="select === friend._id ? 'bg-LightRock' : 'hover:bg-Rock'"
          >
            <div class="flex items-center">
              <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
              <div class="ml-4">
                <h4>{{ friend.userTag }}</h4>
                <h5 class="text-Gravel">@{{ friend.profileName }}</h5>
              </div>
            </div>
            <div v-if="matchStaffProject(friend._id)"><p>In project</p></div>
            <div v-else class="flex items-center space-x-4">
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
    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 2">
      <div>
        <h4 class="text-center flex justify-center items-center">
          Invite
          <span
            ><div class="h-6 w-6 mx-2 bg-slate-500 rounded-full"></div
          ></span>
          @{{ select.userTag }}
        </h4>
      </div>

      <div>
        <h5 class="text-center font-normal">
          Setup permissions, a team and a role
        </h5>
        <h5 class="text-center font-normal">to your staff member.</h5>
      </div>
      <div class="flex flex-col">
        <label class="font-bold text-White" for="">PERMISSIONS</label>
        <Menu as="div" class="relative" v-slot="{ open }">
          <div>
            <MenuButton class="flex max-w-xs items-center rounded-full"
              ><button
                class="text-sm py-2 px-3 rounded-xl font-normal flex items-center cursor-pointer"
                :class="[
                  !open ? 'bg-DarkRock' : 'bg-LightRock',
                  permission === '' ? '' : 'text-White',
                ]"
              >
                {{ permission === "" ? "choice permission" : permission }}
                <span class="ml-2"
                  ><ChevronUpIcon
                    class="h-7"
                    :class="
                      open === false
                        ? 'transition-all ease-in-out'
                        : 'transition-all ease-in-out rotate-180'
                    "
                /></span>
              </button>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem
                v-for="item in choiceList(store.dataAccount._id)"
                :key="item.name"
              >
                <button
                  :class="[
                    item === 'Remove' ? 'text-Red' : 'text-White',
                    'block px-4 py-2 text-sm',
                  ]"
                  @click="(permission = item), (permState = false)"
                >
                  {{ item }}
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="flex flex-col">
        <label class="font-bold text-White" for="">TEAM</label>
        <Menu as="div" class="relative" v-slot="{ open }">
          <div>
            <MenuButton class="flex max-w-xs items-center rounded-full"
              ><button
                class="text-sm py-2 px-3 rounded-xl font-normal flex items-center cursor-pointer"
                :class="[
                  !open ? 'bg-DarkRock' : 'bg-LightRock',
                  team === '' ? '' : 'text-White',
                ]"
              >
                {{ team === "" ? "choice permission" : team }}
                <span class="ml-2"
                  ><ChevronUpIcon
                    class="h-7"
                    :class="
                      open === false
                        ? 'transition-all ease-in-out'
                        : 'transition-all ease-in-out rotate-180'
                    "
                /></span>
              </button>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-for="item in listTeams" :key="item.name">
                <button
                  :class="[
                    item === 'Remove' ? 'text-Red' : 'text-White',
                    'block px-4 py-2 text-sm',
                  ]"
                  @click="team = item"
                >
                  {{ item }}
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="flex flex-col">
        <label class="font-bold text-White" for="">ROLE</label>
        <Menu as="div" class="relative" v-slot="{ open }">
          <div>
            <MenuButton
              class="flex max-w-xs items-center rounded-full"
              :disabled="team === ''"
              ><button
                class="text-sm py-2 px-3 rounded-xl font-normal flex items-center"
                :class="[
                  !open ? 'bg-DarkRock' : 'bg-LightRock',
                  team === ''
                    ? 'cursor-not-allowed'
                    : ' cursor-pointer text-White',
                ]"
              >
                {{
                  team === ""
                    ? "choice Team before"
                    : role === ""
                    ? "choice permission"
                    : role
                }}
                <span class="ml-2"
                  ><ChevronUpIcon
                    class="h-7"
                    :class="
                      open === false
                        ? 'transition-all ease-in-out'
                        : 'transition-all ease-in-out rotate-180'
                    "
                /></span>
              </button>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-for="item in listRoles[team]" :key="item.name">
                <button
                  :class="[
                    item === 'Remove' ? 'text-Red' : 'text-White',
                    'block px-4 py-2 text-sm',
                  ]"
                  @click="role = item"
                >
                  {{ item }}
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <button
        :class="permission !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="permission !== '' ? submit() : ''"
      >
        <h4 class="text-black">Invite</h4>
      </button>
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
//data
import roleTeam from "./roleTeam.js";
//services
import EventServices from "@axios/services/eventServices";

export default {
  props: ["data"],
  components: {
    XButton36,
    ArrowRightIcon,
    SearchIcon,
    ChevronUpIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  data() {
    const store = useStoreAuth();
    return {
      etape: 1,
      store,
      friendsSearch: "",
      select: "",
      permission: "",
      permState: false,
      team: "",
      role: "",
      listPermOwner: ["Viewer", "Editor", "Admin", "Owner"],
      listPerm: ["Viewer", "Editor", "Admin"],
      listRoles: roleTeam.role,
      listTeams: roleTeam.team,
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async submit() {
      let body = {
        project_id: this.data._id,
        staff_id: this.select._id,
        role: this.role,
        permission: this.permission,
        team: this.team,
      };
      console.log(body);
      let result = "";
      if (this.permission === "Owner") {
        result = await EventServices.addStaffAndSwitchOwner(body);
      } else {
        result = await EventServices.addStaff(body);
      }
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
    matchStaffProject(value) {
      let match = false;
      if (this.data.owner.user_id._id === value) {
        match = true;
      }
      this.data.staff.forEach((userStaff) => {
        if (userStaff.staff_id._id === value) {
          match = true;
        }
      });
      return match;
    },
    choiceList(value) {
      if (this.data.owner.user_id._id === value) {
        return this.listPermOwner;
      } else {
        return this.listPerm;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
