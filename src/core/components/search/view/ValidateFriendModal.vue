<template>
  <TransitionRoot as="template" :show="isOpenModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="close">
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
                <div class="bg-Black p-8 rounded-lg h-full text-center">
                  <button
                    class="text-right hover:border-2 hover:border-Stone w-auto absolute top-0 right-2"
                    @click="close"
                  >
                    X
                  </button>
                  <h3>Validate Friend</h3>
                  <h5>It’s better to progress together, than alone.</h5>
                  <div
                    v-for="(user, index) in data"
                    class="flex justify-between items-center my-1.5"
                  >
                    <div name="left" class="flex">
                      <div class="ml-3 text-left">
                        <p>
                          {{ user.content }}
                        </p>
                      </div>
                    </div>

                    <div name="right" class="flex space-x-1">
                      <button
                        name="validateFriend"
                        class="bg-Green text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
                        @click="validateFriend(user, index)"
                      >
                        <CheckIcon class="mx-2 h-5 w-5" />
                      </button>
                      <button
                        name="declinFriend"
                        class="bg-Red text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
                        @click="declineFriend(user, index)"
                      >
                        <XIcon class="mx-2 h-5 w-5" />
                      </button>
                      <button
                        name="banUser"
                        class="bg-Gravel text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
                        @click="banUser(user, index)"
                      >
                        <BanIcon class="mx-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
// store
import useStoreAuth from "../../../../plugins/stores/auth";
//component
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon, CheckIcon, BanIcon } from "@heroicons/vue/outline";
import ToolsButtonSubmit from "../../buttons/ToolsButtonSubmit.vue";
//services
import UsersServices from "../../../../modules/personal/services/userServices";
import SearchUsersServices from "../services/searchUsers";
/* ce que doit faire la page
une fois le bouton add friends click affiche la modal
modal est constitué d'une partie input qui une fois
commencé a entre remplie 3 string
puis aprés 500ms fait une recherche
avec une logique de debounce on empeche de multi requete entre temps une fois les res
on regarde si la demande initiale a etait changé si oui on affiche et on recommence
chaque element de la list recup devront etre affiché avec un bouton add qui donnera sur un service d'addFriend
rajout d'une verification ban friends ou wait
 */
export default {
  components: {
    ToolsButtonSubmit,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
    CheckIcon,
    BanIcon,
  },
  props: ["isOpenModal", "data", "pullNotification"],
  data() {
    const store = useStoreAuth();
    return {
      user: {
        label: "ENTER USER NAME OR PROFILE TAG",
        name: "user",
        type: "text",
        value: "",
      },
      errors: "",
      listUsers: "",
      notUser: false,
      timeout: null,
      wait: false,
      store,
    };
  },
  methods: {
    async validateFriend(data, index) {
      //création des data de base
      let dataSubmit = {
        _targeter_id: data.data._targeter_id,
        _notification_id: data._id,
      };
      //requete
      let result = await UsersServices.validateFriend(dataSubmit);
      //supression de la notification si success
      if (result.data.success === true) {
        this.$emit("pullNotification", index);
      }
    },
    async declineFriend(data, index) {
      // voir validateFriend
      let dataSubmit = {
        _targeter_id: data.data._targeter_id,
        _notification_id: data._id,
      };
      let result = await UsersServices.declineFriend(dataSubmit);
      if (result.data.success === true) {
        this.$emit("pullNotification", index);
      }
    },
    async banUser(data, index) {
      // voir validateFriend
      let dataSubmit = {
        _targeter_id: data.data._targeter_id,
        _notification_id: data._id,
      };
      let result = await UsersServices.banUser(dataSubmit);
      if (result.data.success === true) {
        this.$emit("pullNotification", index);
      }
    },
    close() {
      this.$emit("isOpenModal", false);
      this.target = "";
    },
  },
  computed: {
    input: {
      get() {
        return this.user.value;
      },
      set(val) {
        if (val.length < 3) {
          this.listUsers = "";
          return (this.user.value = val);
        }
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(async () => {
          this.wait = true;
          this.user.value = val;
          let submitData = { userName: val, profileTag: val };
          let result = await SearchUsersServices.usersList(submitData);
          if (result.data.success) {
            if (result.data.data.length === 0) {
              this.listUsers = false;
              this.notUser = true;
            } else {
              this.listUsers = result.data.data;
              this.notUser = false;
            }
          } else {
            this.notUser = false;
            this.errors = true;
          }
          console.log(this.listUsers);
          this.wait = false;
        }, 500);
      },
    },
  },
};
</script>