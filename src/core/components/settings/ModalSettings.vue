<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="isOpenModal">
      <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" @close="close">
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
              class="fixed inset-0 bg-Stone bg-opacity-60 transition-opacity"
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
            <div
              class="relative inline-block align-bottom bg-DarkRock rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
            >
              <div>
                <div class="">
                  <AvatarModal v-if="target === 'avatar'" @close="close"/>
                  <BannerModal v-if="target === 'banner'" @close="close"/>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script>
  import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
import BannerModal from "./account/BannerModal.vue";
import AvatarModal from "./account/AvatarModal.vue";
  
  export default {
    props: ["isOpenModal", "target"],
    components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    BannerModal,
    AvatarModal
},
    data() {
        return {
        }
    },
    methods: {
      close() {
        this.$emit("isOpenModal", false);
      },
    },
  };
  </script>
  