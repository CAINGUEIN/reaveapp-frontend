<template>
  <div class="flex overflow-hidden max-h-full">
    <div
      name="leftContent"
      class="w-2/5 max-w-2/5 max-h-full hover:overflow-auto overflow-hidden scrollbarV px-4"
    >
      <main
        class="mx-auto max-w-2xl py-8 lg:max-w-7xl"
        aria-labelledby="order-history-heading"
      >
        <div class="flex justify-between items-baseline">
          <h1
            id="order-history-heading"
            class="text-3xl font-bold tracking-tight text-white mb-4 flex items-center"
          >
            <span><SvgTarget target="Balance" class="mr-4"></SvgTarget></span>
            Balance
          </h1>
          <a
            @click="changeView('walletBallance')"
            class="text-base cursor-pointer"
            >View monitor</a
          >
        </div>
        <div name="coin" class="flex flex-col bg-DarkRock rounded-xl p-4">
          <div class="flex w-full justify-between">
            <div class="flex items-center space-x-2">
              <h2>
                {{ store.dataAccount.coin }}
              </h2>
              <GoldRC></GoldRC>
            </div>

            <div class="flex space-x-4">
              <button
                class="bg-white text-black rounded-full h-[50px] w-[50px] flex"
                @click.prevent="(open = true), (modal = 'credit')"
              >
                <Credit
                  class="m-auto"
                  :width="26"
                  :height="26"
                  :color1="'black'"
                ></Credit>
              </button>
              <button
                class="bg-white text-black rounded-full h-[50px] w-[50px] flex"
                @click.prevent="(open = true), (modal = 'debit')"
              >
                <Debit
                  class="m-auto"
                  :width="26"
                  :height="26"
                  :color1="'black'"
                ></Debit>
              </button>
              <button
                class="bg-white text-black rounded-full h-[50px] w-[50px] flex"
                @click.prevent="(open = true), (modal = 'transferTo')"
              >
                <TransferTo
                  class="m-auto"
                  :width="26"
                  :height="26"
                  :color1="'black'"
                ></TransferTo>
              </button>
            </div>
          </div>
        </div>
        <div name="Histories">
          <div class="flex justify-between items-baseline">
            <h1
              id="order-history-heading"
              class="text-3xl font-bold tracking-tight text-white mt-8 flex items-center"
            >
              <span
                ><SvgTarget target="Exchanges" class="mr-4"></SvgTarget
              ></span>
              Transactions
            </h1>
            <a
              @click="changeView('walletTransaction')"
              class="text-base cursor-pointer"
              >View all transactions</a
            >
          </div>

          <table class="overflow-hidden text-[18px] text-center w-full my-4">
            <tr>
              <th class="py-2">
                <p class="font-medium text-White mr-6">Type</p>
              </th>
              <th><p class="font-medium text-White text-left">Name</p></th>
              <th><p class="font-medium text-White">Date</p></th>
              <th><p class="font-medium text-White">Amount</p></th>
            </tr>
            <tr class="">
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
            </tr>
            <tr v-for="item in reverse(10)" class="hover:bg-DarkRock">
              <td class="py-3 rounded-l-2xl">
                <div class="flex justify-center mr-6">
                  <div
                    v-if="item.type === 'coin' && item.value > 0"
                    class="flex"
                  >
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <Credit class="m-auto" :color1="'white'"></Credit>
                    </div>
                  </div>
                  <div
                    v-if="item.type === 'coin' && item.value < 0"
                    class="flex"
                  >
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <Debit class="m-auto" :color1="'white'"></Debit>
                    </div>
                  </div>
                  <div
                    v-if="item.type === 'sendCoin' && item.value > 0"
                    class="flex"
                  >
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <TransferFrom
                        class="m-auto"
                        :color1="'white'"
                      ></TransferFrom>
                    </div>
                  </div>
                  <div
                    v-if="item.type === 'sendCoin' && item.value < 0"
                    class="flex"
                  >
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <TransferTo class="m-auto" :color1="'white'"></TransferTo>
                    </div>
                  </div>
                  <div v-if="item.type === 'BuyTicket'" class="flex">
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <Purshase class="m-auto" :color1="'white'"></Purshase>
                    </div>
                  </div>
                  <div v-if="item.type === 'GiftTicket'" class="flex">
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <GiftFrom class="m-auto" :color1="'white'"></GiftFrom>
                    </div>
                  </div>
                  <div v-if="item.type === 'GiftedTicket'" class="flex">
                    <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                      <GiftTo class="m-auto" :color1="'white'"></GiftTo>
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-3 text-left">
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'sendCoin' && item.value > 0"
                >
                  cadeau
                </p>

                <p></p>
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'sendCoin' && item.value < 0"
                >
                  don
                </p>
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'coin' && item.value > 0"
                >
                  Achat
                </p>
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'coin' && item.value < 0"
                >
                  Vente
                </p>
                <p class="text-xl font-normal" v-if="item.type === 'BuyTicket'">
                  {{ item.message }}
                </p>
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'GiftTicket'"
                >
                  {{ item.message }}
                </p>
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'GiftedTicket'"
                >
                  {{ item.message }}
                </p>
              </td>
              <td class="py-3">
                <p class="text-xl font-normal">
                  {{ $dayjs(item.date).format("DD-MM-YYYY") }}
                </p>
              </td>
              <td class="rounded-r-2xl py-3">
                <p
                  class="text-xl font-normal"
                  :class="item.value > 0 ? 'text-Green' : 'text-Red'"
                >
                  {{ item.value }}
                </p>
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
    <div
      name="rightContent"
      class="w-3/5 max-w-3/5 max-h-full hover:overflow-auto overflow-hidden scrollbarV px-4"
    >
      <main
        class="mx-auto max-w-2xl py-8 lg:max-w-7xl pl-8 h-full"
        aria-labelledby="order-history-heading"
      >
        <div class="flex justify-between items-baseline">
          <h1
            id="order-history-heading"
            class="text-3xl font-bold tracking-tight text-white mb-4 flex items-center"
          >
            <span><SvgTarget target="Inventory" class="mr-4"></SvgTarget></span>
            Inventory
          </h1>
          <a
            @click="changeView('walletInventory')"
            class="text-base cursor-pointer"
            >View all items</a
          >
        </div>
        <div
          class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 sm:gap-y-16 xl:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4"
        >
          <WalletCard
            v-for="ticket in dataTicket(20)"
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
import GiftFrom from "@assets/icons/Wallet/GiftFrom.vue";
import GiftTo from "@assets/icons/Wallet/GiftTo.vue";
import WalletCard from "@components/eventCardContent/WalletCard.vue";
import TransferingTo from "@components/modal/wallet/TransferingTo.vue";
import Debiting from "@components/modal/wallet/Debiting.vue";
import Crediting from "@components/modal/wallet/Crediting.vue";

//tool
import useStoreAuth from "@stores/auth";
import { GiftIcon } from "@heroicons/vue/solid";
import SvgTarget from "@components/SvgTarget.vue";

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
    GiftIcon,
    GiftFrom,
    GiftTo,
    SvgTarget,
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
    changeView(value) {
      this.$emit("action", value);
    },
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
    dataTicket(limite) {
      let newArray = [];
      for (
        let index = 0;
        index < this.store.dataAccount.ticket.length;
        index++
      ) {
        newArray.unshift(this.store.dataAccount.ticket[index]);
      }
      return newArray.slice(0, limite);
    },
  },
};
</script>
