<template>
  <div v-if="!waiting && space !== ''" class="flex flex-1">
    <div
      name="correspondants"
      class="w-64 bg-DarkRock rounded-tl-2xl flex flex-col justify-between"
    >
      <div>
        <div v-for="category in space.dataOfSpace.categories">
          <div class="m-2 flex items-center justify-between">
            <h3>{{ category.name }}</h3>
            <div class="flex">
              <button
                class="p-0 m-1 text-right text-Green"
                @click="openModalRoom(category._id)"
              >
                Add
              </button>
              <Delete @actionDelete="deleteCategory" :data="category" />
            </div>
          </div>
          <div class="mx-4 flex" v-for="room in category.rooms">
            <button class="m-0 p-0 text-left" @click="showRoom(room._id)">
              {{ room.name }}
            </button>
            <Delete
              @actionDelete="deleteRoom(room._id, category._id)"
              :data="room"
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <button
          class="p-0 m-1 text-Green"
          @click="openModalCategory(storeSpace.dataSpace.dataOfSpace._id)"
        >
          Add Category
        </button>
      </div>
    </div>
    <div name="messages" class="flex flex-col flex-1 justify-between">
      <div name="message-body" class="">
        <div
          name="message"
          class="flex"
          v-for="(message, key) in messages"
          :key="message._id"
        >
          <div name="username">{{ message._id_sender.userName + " -" }}</div>
          <div name="text-message">{{ message.content }}</div>
          <div
            name="action"
            @click="deleteMsg(message._id, key)"
            class="text-Red"
          >
            (X)
          </div>
        </div>
      </div>
      <div
        name="message-input"
        class="min-w-max bg-Stone rounded-2xl m-2 flex justify-between"
      >
        <div name="start" class="flex">
          <img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
          <ChatRoom @action="sendMessage" />
        </div>
        <div name="end" class="flex">
          <img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
        </div>
      </div>
    </div>
    <div v-if="space !== ''" name="correspondants-contact" class="w-56">
      <div
        v-for="user in space.dataOfSpace.users"
        class="flex rounded-xl m-2 px-4 py-1 bg-LightRock"
      >
        <ImgFormated
          :key="store.avatarKey"
          :targetSpace="user._id"
          :size="'s'"
          :type="'avatar'"
          class="rounded-full my-auto"
        />
        <div name="user-div" class="ml-2">
          <h5>{{ user._id_user.userTag }}</h5>
          <p>{{ user._id_user.profileName }}</p>
        </div>
      </div>
    </div>

    <CreateCategory
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModalCategory"
      :_id_dataOfSpace="_id_data"
    />
    <CreateRoom
      @isOpenModal="closeModal"
      :isOpenModal="isOpenModalRoom"
      :_id_category="_id_data"
    />
  </div>
</template>

<script>
import { io } from "socket.io-client";
import ChatRoom from "@core/components/chat/ChatRoom.vue";
import useStoreAuth from "@stores/auth";
import useStoreSpace from "@stores/storeSpace";
import CreateCategory from "@core/components/modal/CreateCategory.vue";
import CreateRoom from "@core/components/modal/CreateRoom.vue";
import Delete from "@core/components/buttons/Delete.vue";
import ImgFormated from "../img/ImgFormated.vue";

export default {
  components: { ChatRoom, CreateCategory, CreateRoom, Delete, ImgFormated },
  props: ["spaceId"],
  data() {
    const store = useStoreAuth();
    const storeSpace = useStoreSpace();
    return {
      socket: "",
      waiting: false,
      _id_data: "",
      isOpenModalCategory: false,
      isOpenModalRoom: false,
      messages: [],
      users: [],
      store,
      storeSpace,
      categories: "",
      space: "",
    };
  },
  methods: {
    openModalCategory(id) {
      this._id_data = id;
      this.isOpenModalCategory = true;
    },
    openModalRoom(id) {
      this._id_data = id;
      this.isOpenModalRoom = true;
    },
    closeModal() {
      this._id_data = "";
      this.isOpenModalRoom = false;
      this.isOpenModalCategory = false;
      this.sidebarOpen = false;
    },
    log(param) {
      console.log("dans le log", param);
    },
    async deleteRoom(_id_room, _id_category) {},
    async deleteCategory(_id_category) {},
    async dataquery() {},
    showRoom() {},
    joinServeur() {
      this.socket = new io.connect(import.meta.env.VITE_API_BACK_URL);
      this.socket.emit("connectedUser", () => {
        let user = this.store.dataAccount.userTag;
        return user;
      });
      this.socket.on("user", (user) => {
        console.log("new connected user");
      });
      console.log("ici");
    },
    listen() {},
    sendMessage() {},
    deleteMsg() {},
  },
  watch: {
    spaceId() {
      this.space = this.storeSpace.dataSpace[this.spaceId];
    },
  },
  mounted() {
    this.space = this.storeSpace.dataSpace[this.spaceId];
    this.joinServeur();
  },
};
</script>
