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
        <div class="flex justify-between mb-[18px] items-end">
          <h1
            id="order-history-heading"
            class="text-2xl font-bold tracking-tight text-white flex items-center"
          >
            <span><SvgTarget target="Balance" class="mr-4"></SvgTarget></span>
            Balance
          </h1>
          <a
            @click="changeView('walletBallance')"
            class="text-base cursor-pointer font-medium underline"
            >View monitor</a
          >
        </div>
        <div name="coin" class="flex flex-col bg-DarkRock rounded-2xl p-4">
          <div class="flex w-full justify-between">
            <div class="flex items-center space-x-2">
              <h2>{{ store.dataAccount.coin }}€</h2>
            </div>

            <div class="flex space-x-3">
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
            </div>
          </div>
        </div>
        <div name="Histories">
          <div class="flex justify-between items-baseline">
            <h1
              id="order-history-heading"
              class="text-2xl font-bold tracking-tight text-white mt-8 flex items-center"
            >
              <span
                ><SvgTarget
                  target="Exchanges"
                  :width="24"
                  :height="24"
                  class="mr-3"
                ></SvgTarget
              ></span>
              Transactions
            </h1>
            <a
              @click="changeView('walletTransaction')"
              class="text-base font-medium underline cursor-pointer"
              >View all transactions</a
            >
          </div>

          <table
            style="border-collapse:separate; border-spacing: 0 12px"
            class="overflow-hidden table-auto border-separate font-medium text-xl text-center w-full my-4"
          >
            <tr>
              <th>
                <p class="text-left text-White font-medium">Type</p>
              </th>
              <th>
                <p class="text-left text-White font-medium">Name</p>
              </th>
              <th><p class="text-White text-left font-medium">Date</p></th>
              <th>
                <p class="text-White text-right mr-3 font-medium">Amount</p>
              </th>
            </tr>
            <tr>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
              <th class="bg-white h-0.5"></th>
            </tr>
            <tr
              v-for="item in reverse(10)"
              :key="item"
              class="hover:bg-DarkRock border-Anthracite"
            >
              <td class="py-3 rounded-l-2xl">
                <div class="flex justify-start mr-6">
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
              <td class="py-3 text-left w-fit">
                <p
                  class="text-xl font-normal"
                  v-if="item.type === 'sendCoin' && item.value > 0"
                >
                  cadeau
                </p>

                <p></p>
                <p
                  class="text-xl font-medium"
                  v-if="item.type === 'sendCoin' && item.value < 0"
                >
                  don
                </p>
                <p
                  class="text-xl text-left font-medium"
                  v-if="item.type === 'coin' && item.value > 0"
                >
                  Achat
                </p>
                <p
                  class="text-xl text-left font-medium"
                  v-if="item.type === 'coin' && item.value < 0"
                >
                  Vente
                </p>
                <p
                  class="text-xl text-left font-normal"
                  v-if="item.type === 'BuyTicket'"
                >
                  {{ item.message }}
                </p>
                <p
                  class="text-xl text-left font-normal"
                  v-if="item.type === 'GiftTicket'"
                >
                  {{ item.message }}
                </p>
                <p
                  class="text-xl text-left font-medium"
                  v-if="item.type === 'GiftedTicket'"
                >
                  {{ item.message }}
                </p>
              </td>
              <td class="py-3 w-fit">
                <p class="text-xl text-left font-medium">
                  {{ $dayjs(item.date).format("DD/MM/YYYY") }}
                </p>
              </td>
              <td class="rounded-r-2xl py-3">
                <p
                  class="text-xl text-right font-medium"
                  :class="item.value > 0 ? 'text-Green' : 'text-Red'"
                >
                  <span class="font-medium w-fit" v-if="item.value > 0">+</span
                  >{{ item.value }}€
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
            class="text-2xl font-bold tracking-tight text-white mb-4 flex items-center"
          >
            <span
              ><SvgTarget
                target="Inventory"
                :width="24"
                :height="24"
                class="mr-4"
              ></SvgTarget
            ></span>
            Inventory
          </h1>
          <a
            @click="changeView('walletInventory')"
            class="text-base font-medium underline cursor-pointer"
            >View all items</a
          >
        </div>
        <div
          class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 sm:gap-y-16 xl:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4"
        >
          <WalletCard
            v-for="ticket in dataTicket(20)"
            :key="ticket"
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
import GiftFrom from "@assets/icons/Wallet/GiftFrom.vue";
import GiftTo from "@assets/icons/Wallet/GiftTo.vue";
import WalletCard from "@components/eventCardContent/WalletCard.vue";
import TransferingTo from "@components/modal/wallet/TransferingTo.vue";
import Debiting from "@components/modal/wallet/Debiting.vue";
import Crediting from "@components/modal/wallet/Crediting.vue";

//tool
import useStoreAuth from "@stores/auth";
import SvgTarget from "@components/SvgTarget.vue";

export default {
  components: {
    ModalClear,
    WalletCard,
    Credit,
    Debit,
    TransferTo,
    Crediting,
    Debiting,
    TransferingTo,
    Purshase,
    TransferFrom,
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
