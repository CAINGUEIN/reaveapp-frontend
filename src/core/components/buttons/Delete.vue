<!-- 
  a besoin pour fonctionné d'un name pour comparer avec l'input avant de valider le delete
 -->
<template>
  <div>
    <ToolsButtonSubmit class="p-0 m-1 text-Red" @action="openDelete" txtButton="Del" />
    <TransitionRoot as="template" :show="isOpenDelete">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="close"
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
              class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
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
              class="inline-block align-bottom bg-appDark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <h2 class="">Cette action est ireversible</h2>
                  <p class="">
                    Pour supprimer
                    <span class="text-red">{{ data.name }}</span> veuillez
                    recopier .
                  </p>
                  <div class="mt-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom"
                        autocomplete="name"
                        :class="classInputLoginPage"
                        v-model="name"
                      />
                    </div>

                    <p class="mt-2">
                      cette action ne peux pas etre annulé une fois terminé
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <ToolsButtonSubmit
                  @action="deleteFunction"
                  txtButton="Confirme delete"
                  :color="'p-red'"
                />
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
/* Import Tools */
/* Import components*/
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import ToolsButtonSubmit from "./ToolsButtonSubmit.vue";

export default {
  name: "Delete",
  props: ["data", "color"],
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    ToolsButtonSubmit,
  },
  data() {
    return {
      isOpenDelete: false,

      name: "",
      classInputLoginPage:
        "bg-appGrey shadow appearance-none border rounded w-full py-2px-3 text-white leading-tight focus:outline-none focus:border-yellow focus:shadow-outline",
    };
  },
  methods: {
    openDelete() {
      this.isOpenDelete = true;
    },
    close($event) {
      this.isOpenDelete = $event;
      this.name = "";
      console.log($event);
    },
    deleteFunction() {
      this.$emit("actionDelete", this.data._id);
      this.close(false);
    },
  },
};
</script>
