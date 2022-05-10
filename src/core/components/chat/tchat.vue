<template>
  <div>
    <h1>ChatRoom</h1>
    <p class="text-Gravel test-H5 font-normal">User: {{ username }}</p>
    <p class="text-Gravel test-H5 font-normal">online: {{ users.length }}</p>
    <div name="view-messages">
      <div name="message" class="flex" v-for="(message, key) in messages" :key="message._id">
        <div name="username">{{ message.user + " -" }}</div>
        <div name="text-message">{{ message.msg }}</div>
        <div name="action" @click="deleteMsg(message._id, key)" class="text-Red">(X)</div>
      </div>
    </div>
    <ChatRoom @action="sendMessage"/>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import ChatRoom from "../../components/core/chat/ChatRoom.vue";
import useStoreAuth from "../../plugins/stores/auth"

export default {
  components: { ChatRoom },
  data() {
    const store = useStoreAuth();
    return {
      username: "",
      room: "",
      socket: io(import.meta.env.VITE_API_BACKURL),
      messages: [],
      users: [],
      store,
    };
  },
  methods: {
    log(param) {
      console.log(param);
    },
    joinServeur() {
      this.socket.emit("connectionWithRoom", this.room)
      this.listen();
    },
    listen() {
      this.socket.on("loggedIn", (data) => {
        this.messages = data.messages;
        this.users = data.users;
        this.socket.emit("newUser", this.username);
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
    deleteMsg(msgId, key) {
      console.log("ici");
      this.socket.emit("deleteMsg", msgId, key)
    }
  },
  mounted() {
    //recup le pseudo de l'utilisateur connecté
    this.username = this.store.dataAccount.userName;
    this.joinServeur();
    this.log(this.store.dataAccount);
  },
};
</script>
