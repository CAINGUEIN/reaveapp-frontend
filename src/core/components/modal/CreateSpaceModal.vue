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
            class="relative inline-block align-bottom bg-appDark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-modal"
          >
            <div>
              <div class="mt-3 sm:mt-5">
                <ChoiseSpaceType v-if="target === ''" v-model="target" @close="close"/>
                <CreateFriends v-else-if="target === 'friends'" v-model="target" @close="close"/>
                <CreateTeam v-else-if="target === 'team'" v-model="target" @close="close"/>
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
import ChoiseSpaceType from "@core/components/modal/ChoiseSpaceType.vue";
import CreateFriends from "@core/components/modal/CreateFriends.vue";
import CreateTeam from "@core/components/modal/CreateTeam.vue";

export default {
  props: ["isOpenModal"],
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    ChoiseSpaceType,
    CreateFriends,
    CreateTeam
},
  data() {
      return {
          target: ""
      }
  },
  methods: {
    close() {
      this.$emit("isOpenModal", false);
      this.target = ""
    },
    changeTarget(value) {
      this.target = value
      console.log(value);
    },
  },
};
</script>
