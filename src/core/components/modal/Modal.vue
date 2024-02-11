<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="isOpenModal">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="emit('isOpenModal', false)"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-Stone backdrop-blur-sm transition-all bg-opacity-60"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <component
            @submitSuccess="emit('submitSuccess')"
            :is="componentMap[props.modal]"
            @isOpenModal="emit('isOpenModal', false)"
            @deleteSpace="emit('deleteSpace')"
            @close="emit('isOpenModal', false)"
            :spaceName="props.spaceName"
            :idSpace="props.idSpace"
          />
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import CreateSpaceModal from "./space/CreateSpaceModal.vue";
import CreateRoom from "./CreateRoom.vue";
import CreateFriends from "./CreateFriends.vue";
import CreateCalendarEvent from "./CreateCalendarEvent.vue";
import CreateTeam from "./CreateTeam.vue";
import DeleteSpace from "./space/DeleteSpace.vue";
import CreateCategory from "./CreateCategory.vue";
import EditProfilePictureSpace from "./space/EditProfilePictureSpace.vue";
import Search from "./Search.vue";
const componentMap = {
  CreateSpaceModal,
  CreateRoom,
  CreateCategory,
  CreateFriends,
  CreateTeam,
  CreateCalendarEvent,
  EditProfilePictureSpace,
  DeleteSpace,
  Search,
};

const emit = defineEmits(["isOpenModal", "submitSuccess", "deleteSpace"]);
const props = defineProps({
  isOpenModal: Boolean,
  modal: String,
  spaceName: String,
  idSpace: String,
});
</script>
