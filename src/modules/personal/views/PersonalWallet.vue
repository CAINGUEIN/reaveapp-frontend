<template>
  <div class="flex flex-wrap overflow-hidden">
    <div name="leftContent" class="w-2/5 max-w-2/5">
      <main
        class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <h1
          id="order-history-heading"
          class="text-3xl font-bold tracking-tight text-white"
        >
          Balance
        </h1>
        <div
          name="coin"
          class="flex flex-col mt-8 bg-LightRock rounded-xl h-24 p-4"
        >
          <div class="flex w-full justify-between">
            <div class="flex items-center space-x-2">
              <h2>
                {{ store.dataAccount.coin }}
              </h2>
              <GoldRC></GoldRC>
            </div>

            <div class="flex space-x-4">
              <button
                class="bg-white text-black rounded-full h-10 w-10 flex"
                @click.prevent="(open = true), (modal = 'credit')"
              >
                <Credit class="m-auto" :color1="'black'"></Credit>
              </button>
              <button
                class="bg-white text-black rounded-full h-10 w-10 flex"
                @click.prevent="(open = true), (modal = 'debit')"
              >
                <Debit class="m-auto" :color1="'black'"></Debit>
              </button>
              <button
                class="bg-white text-black rounded-full h-10 w-10 flex"
                @click.prevent="(open = true), (modal = 'transferTo')"
              >
                <TransferTo class="m-auto" :color1="'black'"></TransferTo>
              </button>
            </div>
          </div>
          <a href="">View details</a>
        </div>
        <div name="Histories">
          <div class="flex justify-between items-baseline">
            <h1
              id="order-history-heading"
              class="text-3xl font-bold tracking-tight text-white mt-8 mb-4"
            >
              Transaction
            </h1>
            <a href="">View all transactions</a>
          </div>

          <table
            class="overflow-hidden text-[18px] text-center w-full"
          >
            <tr>
              <th><p class="font-medium text-White">Type</p></th>
              <th><p class="font-medium text-White">Name</p></th>
              <th><p class="font-medium text-White">Date</p></th>
              <th><p class="font-medium text-White">Amount</p></th>
            </tr>
            <tr>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
            </tr>
            <tr v-for="item in reverse(10)" class="h-12">
              <td>
                <div v-if="item.type === 'coin' && item.value > 0" class="flex">
                  <div class="bg-LightRock rounded-full h-10 w-10 flex mx-auto">
                    <Credit class="m-auto" :color1="'white'"></Credit>
                  </div>
                </div>
                <div v-if="item.type === 'coin' && item.value < 0" class="flex">
                  <div class="bg-LightRock rounded-full h-10 w-10 flex mx-auto">
                    <Debit class="m-auto" :color1="'white'"></Debit>
                  </div>
                </div>
                <div v-if="item.type === 'sendCoin' && item.value > 0" class="flex">
                  <div class="bg-LightRock rounded-full h-10 w-10 flex mx-auto">
                    <TransferFrom class="m-auto" :color1="'white'"></TransferFrom>
                  </div>
                </div>
                <div v-if="item.type === 'sendCoin' && item.value < 0" class="flex">
                  <div class="bg-LightRock rounded-full h-10 w-10 flex mx-auto">
                    <TransferTo class="m-auto" :color1="'white'"></TransferTo>
                  </div>
                </div>
                <div v-if="item.type === 'BuyTicket'" class="flex">
                  <div class="bg-LightRock rounded-full h-10 w-10 flex mx-auto">
                    <Purshase class="m-auto" :color1="'white'"></Purshase>
                  </div>
                </div>
              </td>
              <td>
                <h5 v-if="item.type === 'sendCoin' && item.value > 0">cadeau</h5>
                <h5 v-if="item.type === 'sendCoin' && item.value < 0">don</h5>
                <h5 v-if="item.type === 'coin' && item.value > 0">Achat</h5>
                <h5 v-if="item.type === 'coin' && item.value < 0">Vente</h5>
                <h5 v-if="item.type === 'BuyTicket'">{{ item.message }}</h5>
              </td>
              <td>
                <h5>{{ $dayjs(item.date).format("DD-MM-YYYY") }}</h5>
              </td>
              <td>
                <h5 :class="item.value > 0 ? 'text-Green' : 'text-Red'">
                  {{ item.value }}
                </h5>
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
    <div
      name="rightContent"
      class="w-3/5 max-w-3/5 max-h-full hover:overflow-auto overflow-hidden scrollbarV"
    >
      <main
        class="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-full"
        aria-labelledby="order-history-heading"
      >
        <div class="">
          <h1
            id="order-history-heading"
            class="text-3xl font-bold tracking-tight text-white"
          >
            Inventory
          </h1>
        </div>

        <div
          class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 sm:gap-y-16 xl:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4"
        >
          <WalletCard
            v-for="ticket in store.dataAccount.ticket"
            :data="ticket"
          ></WalletCard>
        </div>
      </main>
    </div>
    <ModalClear :open="open" @action="close()">
      <TransferingTo
        @action="close()"
        v-if="modal === 'transferTo'"
      ></TransferingTo>
      <Crediting @action="close()" v-if="modal === 'credit'"></Crediting>
      <Debiting @action="close()" v-if="modal === 'debit'"></Debiting>
    </ModalClear>
  </div>
</template>

<script>
//component
import ModalClear from "@core/components/modal/ModalClear.vue";
import Credit from "@assets/icons/Wallet/Credit.vue";
import Debit from "@assets/icons/Wallet/Debit.vue";
import Purshase from "@assets/icons/Wallet/Purshase.vue";
import TransferTo from "@assets/icons/Wallet/TransferTo.vue";
import TransferFrom from "@assets/icons/Wallet/TransferFrom.vue";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";
import WalletCard from "@components/eventCardContent/WalletCard.vue";
import TransferingTo from "@components/modal/wallet/TransferingTo.vue";
import Debiting from "@components/modal/wallet/Debiting.vue";
import Crediting from "@components/modal/wallet/Crediting.vue";

//tool
import useStoreAuth from "@stores/auth";

export default {
  components: {
    ModalClear,
    WalletCard,
    Credit,
    Debit,
    TransferTo,
    GoldRC,
    Crediting,
    Debiting,
    TransferingTo,
    Purshase,
    TransferFrom,
  },
  data() {
    const store = useStoreAuth();
    return {
      open: false,
      store,
      modal: "",
    };
  },
  methods: {
    close() {
      this.open = false;
      this.modal = "";
    },
    reverse(limite) {
      let newArray = [];
      this.store.dataAccount.historiesCoin;
      for (
        let index = 0;
        index < this.store.dataAccount.historiesCoin.length;
        index++
      ) {
        newArray.unshift(this.store.dataAccount.historiesCoin[index]);
      }
      return newArray.slice(0, limite);
    },
  },
};
</script>
