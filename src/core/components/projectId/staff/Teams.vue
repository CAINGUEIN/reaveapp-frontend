<template>
  <div class="flex flex-col space-y-4 mt-4">
    <table class="min-w-full divide-y divide-LightGrey">
      <thead class="border-b-2 border-LightGrey">
        <tr>
          <th
            scope="col"
            class="text-left text-base font-black text-LightGrey pl-4"
          >
            Member
          </th>
          <th scope="col" class="text-left text-base font-black text-LightGrey">
            Permission
          </th>
          <th scope="col" class="text-left text-base font-black text-LightGrey">
            Team
          </th>
          <th scope="col" class="text-left text-base font-black text-LightGrey">
            Role
          </th>

          <th scope="col" class="">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="user in tableOrganized" :key="user._id">
          <td
            class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 flex items-center"
          >
            <ImgFormated
              :key="user.user_id"
              :size="'s'"
              :targetSpace="user.user_id"
              :type="'avatar'"
              class="h-10 w-10 bg-slate-400 rounded-full mr-4"
            />

            <div>
              <p class="text-White">{{ user.profileName }}</p>
              <p class="text-LightGrey">@{{ user.userTag }}</p>
            </div>
          </td>
          <td class="whitespace-nowrap py-4">
            <p class="text-Gravel">{{ user.permission }}</p>
          </td>
          <td class="whitespace-nowrap py-4">
            <p class="text-Gravel">{{ user.team }}</p>
          </td>
          <td class="whitespace-nowrap py-4">
            <p class="text-Gravel">{{ user.role }}</p>
          </td>
          <td class="py-4 px-3">
            <div class="flex justify-end">
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton class="flex max-w-xs items-center rounded-full"
                    ><Button40Slot class="flex my-auto"
                      ><DotsHorizontalIcon class="m-1.5"></DotsHorizontalIcon
                    ></Button40Slot>
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
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem v-for="item in userNavigation" :key="item.name">
                      <button
                        :class="[
                          item.name === 'Remove' ? 'text-Red' : 'text-White',
                          'block px-4 py-2 text-sm',
                        ]"
                        @click="
                          item.name === 'Modify'
                            ? ((open = true),
                              (select = user),
                              (modalView = 'Modify'))
                            : item.name === 'Remove'
                            ? ((open = true),
                              (select = user),
                              (modalView = 'Remove'))
                            : ''
                        "
                      >
                        {{ item.name }}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalClear :open="open" @action="close()">
      <EditMember
        v-if="modalView === 'Modify'"
        :data="data"
        :select="select"
        @action="close"
      ></EditMember>
      <RemoveMember
        v-if="modalView === 'Remove'"
        :data="data"
        :select="select"
        @action="close"
      ></RemoveMember>
    </ModalClear>
  </div>
</template>

<script>
//components
import ModalClear from "@components/modal/ModalClear.vue";
import EditMember from "@components/modal/projectId/staff/EditMember.vue";
import { DotsHorizontalIcon } from "@heroicons/vue/solid";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import RemoveMember from "../../modal/projectId/staff/RemoveMember.vue";
import ImgFormated from "../../img/ImgFormated.vue";

export default {
  components: {
    Button40Slot,
    DotsHorizontalIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    EditMember,
    ModalClear,
    RemoveMember,
    ImgFormated,
  },
  props: ["data"],
  data() {
    return {
      open: false,
      modalView: "",
      userNavigation: [
        { name: "Modify" },
        { name: "Activity" },
        { name: "Remove" },
      ],
      select: "",
      tableOrganized: [],
    };
  },
  methods: {
    close(value) {
      this.open = false;
      if (value === "update") {
        console.log("ici");
        this.$emit("action", "update");
      }
    },
    tableOrder() {
      this.tableOrganized = [];
      let dataOwner = {
        user_id: this.data.owner.user_id._id,
        profileName: this.data.owner.user_id.profileName,
        userTag: this.data.owner.user_id.userTag,
        permission: "Owner",
        role: this.data.owner.role,
        team: this.data.owner.team,
      };
      this.tableOrganized.push(dataOwner);
      this.data.staff.forEach((element) => {
        let dataStaff = {
          _id: element._id,
          user_id: element.staff_id._id,
          profileName: element.staff_id.profileName,
          userTag: element.staff_id.userTag,
          permission: element.permission,
          role: element.role,
          team: element.team,
        };
        this.tableOrganized.push(dataStaff);
      });
      console.log(this.tableOrganized);
    },
  },
  watch: {
    data() {
      this.tableOrder();
    },
  },
  mounted() {
    this.tableOrder();
  },
};
</script>
