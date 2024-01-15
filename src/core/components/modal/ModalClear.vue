<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="closeModal()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-LightRock bg-opacity-70 backdrop-blur-[14px] transition-opacity"
        ></div>
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
            <DialogPanel
              class="relative inline-block align-bottom p-6 bg-Anthracite rounded-2xl text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-modal"
              :class="width === 728 ? 'sm:max-w-[728px]' : 'sm:max-w-lg'"
            >
              <Closebutton
                @closeModal="closeModal"
                :width="12"
                :height="12"
                class="absolute z-30 right-6 top-6"
              />
              
              <!-- content here -->
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Closebutton from "../buttons/closebutton.vue";

export default {
  components: {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    Closebutton,
  },
  props: ["open", "action", "width"],
  methods: {
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>
