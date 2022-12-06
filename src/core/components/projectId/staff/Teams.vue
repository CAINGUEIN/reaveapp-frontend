<template>
  <div>
    <table class="min-w-full divide-y divide-White">
      <thead class="border-b-2 border-white">
        <tr>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-White sm:pl-6 md:pl-0"
          >
            Member
          </th>
          <th
            scope="col"
            class="py-3.5 px-3 text-left text-lg font-semibold text-White"
          >
            Permission
          </th>
          <th
            scope="col"
            class="py-3.5 px-3 text-left text-lg font-semibold text-White"
          >
            Team
          </th>
          <th
            scope="col"
            class="py-3.5 px-3 text-left text-lg font-semibold text-White"
          >
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
            class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
          >
            <p class="text-White">{{ user.profileName }}</p>
            <p class="text-LightGrey">@{{ user.userTag }}</p>
          </td>
          <td class="whitespace-nowrap py-4 px-3">
            <p class="text-Gravel">{{ user.permission }}</p>
          </td>
          <td class="whitespace-nowrap py-4 px-3">
            <p class="text-Gravel">{{ user.team }}</p>
          </td>
          <td class="whitespace-nowrap py-4 px-3">
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
                            ? ((open = true), (select = user))
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
      <EditMember :data="data" :select="select" @action="close()"></EditMember>
    </ModalClear>
  </div>
</template>

<script>
//components
import ModalClear from "@components/modal/ModalClear.vue";
import EditMember from "@components/modal/projectId/staff/editMember.vue";
import { DotsHorizontalIcon } from "@heroicons/vue/solid";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

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
  },
  props: ["data"],
  data() {
    return {
      open: false,
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
    close() {
      this.open = false;
    },
    tableOrder() {
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
  mounted() {
    this.tableOrder();
  },
};
</script>
