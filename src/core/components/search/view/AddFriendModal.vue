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
                  <h3>Add a Friend</h3>
                  <h5>It’s better to progress together, than alone.</h5>
                  <div class="">
                    <label for="search" class="sr-only">Search</label>
                    <div class="relative text-gray-400 border-White m-2">
                      <SearchIcon
                        class="absolute h-5 w-5 z-10 m-3"
                        aria-hidden="true"
                      />
                      <!-- voir a comprendre pourquoi j'ai un ring bleu -->
                      <input
                        id="search"
                        class="bg-Anthracite block w-full h-11 pl-11 border border-transparent rounded-full text-White placeholder-Gravel"
                        placeholder="Search"
                        type="search"
                        name="user"
                        v-model="input"
                        :disabled="wait"
                      />
                    </div>
                  </div>
                  <div
                    v-for="user in listUsers"
                    class="flex justify-between items-center my-1.5"
                  >
                    <div name="left" class="flex">
                      <img
                        src="http://via.placeholder.com/50"
                        alt=""
                        class="h-15 w-15 rounded-full"
                      />
                      <div class="ml-3 text-left">
                        <h5>
                          {{ user.userName }}
                        </h5>
                        <h5 class="text-LightGrey">@{{ user.profileTag }}</h5>
                      </div>
                    </div>

                    <div name="right" class="">
                      <button
                        v-if="ifSended(user._id)"
                        name="addFriends"
                        class="bg-White text-Anthracite h-9 rounded-full items-center hover:bg-DarkRock hover:text-White"
                        @click="addFriend(user._id)"
                      >
                        <PlusIcon class="mx-2 h-5 w-5" />
                      </button>
                      <p v-else>Wait responce</p>
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
import { SearchIcon, PlusIcon } from "@heroicons/vue/outline";
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
 */
export default {
  components: {
    ToolsButtonSubmit,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    SearchIcon,
    PlusIcon,
  },
  props: ["isOpenModal"],
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
    ifSended(_id) {
      let result;
      let find = this.store.invitationSended.find(
        (sended) => sended._targetUser_id === _id
      );
      if (find) {
        console.log("false", result);
        result = false;
      } else {
        console.log("true", result);
        result = true;
      }
      return result;
    },
    close() {
      this.$emit("isOpenModal", false);
      this.target = "";
    },
    async addFriend(_id) {
      let dataSubmit = {
        _targetUser_id: _id,
      };
      let result = await UsersServices.addFriend(dataSubmit);
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

<style lang="scss" scoped></style>
