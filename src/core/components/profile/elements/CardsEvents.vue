<template>
    <div class="flex flex-1 cursor-pointer" @click="goTo(data._id)">
      <div
        class="w-2/5 flex-shrink-0 aspect-1 rounded-xl text-transparent hover:text-white overflow-hidden flex flex-col justify-end z-10"
      >
        <img src="/img/imageeventcard.png" alt="" class="z-0" />
        <div
        class="absolute w-full h-full"
          :class="
            comparedContent
              ? 'transition duration-300 ease-in-out hoverCardEvent'
              : 'transition duration-300 ease-in-out opacity-0'
          "
          v-on:mouseover="mouseover"
          v-on:mouseleave="mouseleave"
        ></div>
      </div>
      <div class="w-3/5 pl-4 py-2 flex flex-col justify-between">
        <div class="flex ">
          <p class="text-white font-bold text-xl">{{ data.name }}</p>
        </div>
        <div class="">
          <p class="text-LightGrey font-normal text-base">
            {{ $dayjs(data.date).format("DD MMMM YYYY HH:mm") }}
          </p>
          <p class="text-LightGrey font-normal text-base">
            {{ data.city + " " + data.country }}
          </p>
        </div>
        <div class="flex gap-2">
            <SvgTarget target="LOLIcon" :width="14" :height="14"></SvgTarget>
            <SvgTarget target="VALOIcon" :width="14" :height="14"></SvgTarget>

        </div>
      </div>
    </div>
  </template>
  
  <script>
import SvgTarget from "@components/SvgTarget.vue";
  export default {
    components: {
    SvgTarget,
  },
    props: {
      data: {
        type: Object,
        default: {},
      },
      reload: {
        type: Function,
      },
    },
    data() {
      return {
        open: false,
        viewModal: "",
        dateNow: "",
        comparedContent: false,
      };
    },
    methods: {
      mouseover: function () {
        this.comparedContent = true;
      },
      mouseleave: function () {
        this.comparedContent = false;
      },
      close(value) {
        this.open = false;
        if (value === "reload") {
          console.log("dans le reload");
          this.$emit("reload");
        }
      },
      async addCoins(balance) {
        let data = "";
        //recup la value de money
        if (balance) {
          data = { coin: this.money.value };
        } else {
          data = { coin: 0 - this.money.value };
        }
        //axios pour mettre a jour le compte
        let result = await UserUpdateServices.coinBalance(data);
        // recup de la data dans le result et le mettre dans le store
        if (result.data.success) {
          this.store.dataAccount.coin = result.data.data.coin;
          this.store.dataAccount.historiesCoin = result.data.data.historiesCoin;
          this.open = false;
          this.money.value = "";
        } else {
          this.errors["money"] = result.data.message;
        }
        // fermeture de la modal si ok avec changment du chiffre dans la reavecoin
      },
      ticketsRemaining() {
        let totalTickets = 0;
        for (let index = 0; index < this.data.tickets.length; index++) {
          totalTickets = totalTickets + this.data.tickets[index].quantities;
        }
        return totalTickets;
      },
      goTo(target) {
        this.$router.push({ name: "EventId", params: { id: target } });
      },
    },
  };
  </script>
  
  <style scoped>
  .hoverCardEvent {
    background: linear-gradient(45.07deg, #484848 0%, #c9c9c9 100%);
    opacity: 0.15;
  }
  </style>
  