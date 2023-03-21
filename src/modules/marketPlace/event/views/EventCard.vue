<template>
  <div class="flex flex-1 flex-col cursor-pointer" @click="goTo(data._id)">
    <div
      class="w-full flex-shrink-0 bg-slate-500 aspect-1 rounded-xl text-transparent hover:text-white overflow-hidden flex flex-col justify-end z-10"
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
      <!--   <div
        class="h-full flex"
        :class="
          comparedContent
            ? 'transition duration-300 ease-in-out'
            : 'hoverCardEvent transition duration-300 ease-in-out'
        "
      >
       <button
          @click.prevent="(open = true), (viewModal = 'info')"
          class="m-auto bg-Rock rounded-full py-2 px-5 font-black"
        >
          Info
        </button>
        <button
          @click.prevent="(open = true), (viewModal = 'buy')"
          class="m-auto bg-Rock rounded-full py-2 px-5 font-black"
        >
          Buy
        </button>
        <button
          @click.prevent="(open = true), (viewModal = 'gift')"
          class="m-auto bg-Rock rounded-full py-2 px-5 font-black"
        >
          Gift
        </button>
      </div> -->
    </div>
    <div class="pl-1 pt-4">
      <div class="flex items-center">
        <div class="h-6 w-6 bg-Gravel rounded-full mr-2"></div>
        <p class="text-white text-base font-medium">{{ data.owner.user_id }}</p>
      </div>
      <div class="flex mt-2">
        <p class="text-white font-bold text-2xl">{{ data.name }}</p>
      </div>
      <div class="flex mt-2">
        <p class="text-LightGrey font-bool text-xl">
          {{ $dayjs(data.date).format("DD/MM/YYYY") }}
        </p>
      </div>
      <div class="flex">
        <p class="text-LightGrey font-bool text-xl">
          {{ data.city + " " + data.country }}
        </p>
      </div>
    </div>

    <ModalClear :open="open" @action="close()">
      <BuyModal
        :data="data"
        @action="close"
        v-if="viewModal === 'buy'"
      ></BuyModal>
      <GiftModal
        :data="data"
        @action="close()"
        v-if="viewModal === 'gift'"
      ></GiftModal>
      <InfoModal
        :data="data"
        @action="close()"
        v-if="viewModal === 'info'"
      ></InfoModal>
    </ModalClear>
  </div>
</template>

<script>
import ModalClear from "@core/components/modal/ModalClear.vue";
import BuyModal from "@core/components/eventCardContent/BuyModal.vue";
import GiftModal from "@core/components/eventCardContent/GiftModal.vue";
import InfoModal from "@core/components/eventCardContent/InfoModal.vue";
export default {
  components: { ModalClear, BuyModal, GiftModal, InfoModal },
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
