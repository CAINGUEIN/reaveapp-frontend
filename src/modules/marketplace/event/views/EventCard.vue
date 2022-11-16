<template>
  <div class="flex flex-1 flex-col h-96 p-4">
    <div
      class="mb-1 h-3/5 w-full flex-shrink-0 bg-slate-500 rounded-xl text-transparent hover:text-white overflow-hidden flex flex-col justify-end"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
      <div
        class="bg-LightRock h-15 flex"
        :class="
          comparedContent
            ? 'transition duration-300 ease-in-out'
            : 'opacity-0 transition duration-300 ease-in-out'
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
      </div>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <h4 class="text-white">{{ data.name }}</h4>
      <h5 class="text-white">{{ data.game }}</h5>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{ $dayjs(data.date).format("DD-MM-YYYY") }}</p>
      <p class="text-white">
        {{ $dayjs().to($dayjs(data.date)) }}
      </p>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{ data.orga }}</p>
      <p class="text-white">
        {{ data.country }}
      </p>
    </div>
    <div class="mt-1 flex justify-between items-center">
      <p class="text-white">{{ data.ticket }} Tickets</p>
      <p class="text-white">{{ data.price }} €</p>
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
    }
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
      if (value === 'reload') {
        console.log('dans le reload');
        this.$emit('reload')
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
  },
};
</script>

<style lang="scss" scoped></style>
