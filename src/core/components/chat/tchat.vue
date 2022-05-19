<template>
  <div v-if="!waiting" class="flex h-full">
    <div
      name="correspondants"
      class="w-64 bg-DarkRock rounded-tl-2xl flex flex-col justify-between"
    >
      <div v-for="category in categories">
        <h3>{{ category.name }}</h3>
        <div v-for="room in category._id_rooms">
          <button @click="joinServeur(room._id)">{{ room.name }}</button>
        </div>
      </div>
      <div class="flex">
        <button @click="openModal">Add Category</button>
        <button @click="openModal">Add room</button>
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
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
          <ChatRoom @action="sendMessage" />
        </div>
        <div name="end" class="flex">
          <img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="http://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
        </div>
      </div>
    </div>
    <div name="correspondants-contact" class="">
      <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
        <img
          src="http://via.placeholder.com/40"
          alt=""
          class="rounded-full my-auto"
        />
        <div name="user-div" class="ml-2">
          <h5>User</h5>
          <p>Mood message</p>
        </div>
      </div>
      <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
        <img
          src="http://via.placeholder.com/40"
          alt=""
          class="rounded-full my-auto"
        />
        <div name="user-div" class="ml-2">
          <h5>User</h5>
          <p>Mood message</p>
        </div>
      </div>
      <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
        <img
          src="http://via.placeholder.com/40"
          alt=""
          class="rounded-full my-auto"
        />
        <div name="user-div" class="ml-2">
          <h5>User</h5>
          <p>Mood message</p>
        </div>
      </div>
    </div>
    <Createcategory @isOpenModal="closeModal" :isOpenModal="isOpenModal" />

    <!-- <p class="text-Gravel test-H5 font-normal">User: {{ store.dataAccount.userName }}</p>
    <p class="text-Gravel test-H5 font-normal">online: {{ users.length }}</p>
    <div name="view-messages">
      <div name="message" class="flex" v-for="(message, key) in messages" :key="message._id">
        <div name="username">{{ message.user + " -" }}</div>
        <div name="text-message">{{ message.msg }}</div>
        <div name="action" @click="deleteMsg(message._id, key)" class="text-Red">(X)</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { io } from "socket.io-client";
import ChatRoom from "./ChatRoom.vue";
import useStoreAuth from "../../../plugins/stores/auth";
import FriendsServices from "../../../modules/friends/services/friendsServices";
import Createcategory from "../modal/Createcategory.vue";

export default {
  components: { ChatRoom, Createcategory },
  props: ["dataSpace"],
  data() {
    const store = useStoreAuth();
    return {
      socket: io(import.meta.env.VITE_API_BACKURL),
      waiting: false,
      isOpenModal: false,
      messages: [],
      users: [],
      store,
      categories: "",
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
      this.sidebarOpen = false;
      console.log("open");
    },
    closeModal() {
      this.isOpenModal = false;
    },
    log(param) {
      console.log("dans le log", param);
    },
    async dataquery() {
      this.waiting = true;
      // ici je doit recup les categories et les rooms
      console.log(this.dataSpace.dataOfSpace._id);
      let result = await FriendsServices.allRooms({
        _id: this.dataSpace.dataOfSpace._id,
      });
      console.log(result);
      if (result.success) {
        console.log("aprés le success");
        this.categories = result.data._id_categories;
        this.waiting = false;
      } else {
        //TODO: faire une sortie du space
      }
    },
    joinServeur(targetRoom) {
      console.log(this.store);
      this.socket.emit("connectionWithRoom", {
        room: targetRoom,
        _id_user: this.store.dataAccount._id,
      });
      this.listen();
    },
    listen() {
      this.socket.on("loggedIn", (data) => {
        this.messages = data.messages._id_messages;
        this.users = data.users;
        this.socket.emit("newUser", this.store.dataAccount.userName);
      });
      this.socket.on("userOnline", (user) => {
        this.users.push(user);
      });
      this.socket.on("disconnect", (user) => {
        this.users.splice(this.users.indexOf(user), 1);
      });
      this.socket.on("msg", (message) => {
        this.messages.push(message);
      });
      this.socket.on("deleteMsg", (key) => {
        this.messages.splice(key, 1);
      });
    },
    sendMessage(message) {
      this.socket.emit("msg", message);
    },
    //TODO: penser a bloqué que pour le proprietaire du message ou qui a le droit
    deleteMsg(msgId, key) {
      console.log("ici");
      this.socket.emit("deleteMsg", msgId, key);
    },
  },
  mounted() {
    //recup le pseudo de l'utilisateur connecté
    this.username = this.store.dataAccount.userName;
    this.dataquery();
  },
};
</script>
