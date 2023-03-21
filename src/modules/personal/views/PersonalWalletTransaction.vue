<template>
  <div class="max-h-full overflow-auto scrollbarV">
    <div class="flex w-full justify-between items-center my-6">
      <div class="flex">
        <button
          class="bg-DarkRock rounded-full h-10 w-10 flex mr-4"
          @click.prevent="changeView()"
        >
          <SvgTarget
            target="Chevron"
            class="mx-auto my-auto rotate-90"
          ></SvgTarget>
        </button>
        <h1
          class="text-3xl font-bold tracking-tight text-white flex items-center"
        >
          <span><SvgTarget target="Exchanges" class="mr-4"></SvgTarget></span>
          Transactions
        </h1>
      </div>
      <p>Order by Most Recent</p>
    </div>
    <div class="w-full h-full flex">
      <div name="filter" class="absolute left-0">
        <div name="givenState" class="mt-4 overflow-hidden">
          <h3
            class="text-[20px] flex items-center cursor-pointer"
            @click="
              givenState === true ? (givenState = false) : (givenState = true)
            "
          >
            GIVEN TO<span class="ml-2"
              ><Chevron
                :class="
                  givenState === true
                    ? 'transition-all ease-in-out'
                    : 'transition-all ease-in-out rotate-180'
                "
            /></span>
          </h3>
          <label for="search" class="sr-only">Search</label>
          <div
            class="relative w-[360PX] text-gray-400 border-White"
            :class="
              givenState
                ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
                : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-11'
            "
          >
            <SearchIcon
              class="absolute h-5 w-5 z-10 my-3 ml-6"
              aria-hidden="true"
            />
            <input
              id="search"
              class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
              :class="
                givenName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
              "
              placeholder="Search"
              type="search"
              name="givenName"
              v-model="givenName"
              :disabled="wait"
            />
          </div>
        </div>
        <div name="receivedState" class="mt-4 overflow-hidden">
          <h3
            class="text-[20px] flex items-center cursor-pointer"
            @click="
              receivedState === true
                ? (receivedState = false)
                : (receivedState = true)
            "
          >
            RECEIVED FROM<span class="ml-2"
              ><Chevron
                :class="
                  receivedState === true
                    ? 'transition-all ease-in-out'
                    : 'transition-all ease-in-out rotate-180'
                "
            /></span>
          </h3>
          <label for="search" class="sr-only">Search</label>
          <div
            class="relative w-[360PX] text-gray-400 border-White"
            :class="
              receivedState
                ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 mt-3'
                : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 -mb-11'
            "
          >
            <SearchIcon
              class="absolute h-5 w-5 z-10 my-3 ml-6"
              aria-hidden="true"
            />
            <input
              id="search"
              class="block w-full h-11 pl-[57px] rounded-full appearance-none border-0 focus:bg-LightRock focus:ring-0 focus:border-0 focus:text-Cloud placeholder-Gravel fill-Cloud"
              :class="
                receivedName === '' ? 'bg-DarkRock' : 'bg-Rock text-LightGrey'
              "
              placeholder="Search"
              type="search"
              name="receivedName"
              v-model="receivedName"
              :disabled="wait"
            />
          </div>
        </div>
      </div>
      <div name="content" class="w-1/2 items-center mx-auto">
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
          <tr v-for="item in reverse(100)" class="hover:bg-DarkRock">
            <td class="py-3 rounded-l-2xl">
              <div class="flex justify-center mr-6">
                <div v-if="item.type === 'coin' && item.value > 0" class="flex">
                  <div class="bg-DarkRock rounded-full h-10 w-10 flex">
                    <Credit class="m-auto" :color1="'white'"></Credit>
                  </div>
                </div>
                <div v-if="item.type === 'coin' && item.value < 0" class="flex">
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
              <p class="text-xl font-normal" v-if="item.type === 'GiftTicket'">
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
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";
import { SearchIcon, GiftIcon } from "@heroicons/vue/solid";
import { Chevron } from "../../../core/assets/icons/iconsOldImport";
import useStoreAuth from "@stores/auth";
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

export default {
  components: {
    SvgTarget,
    SearchIcon,
    Chevron,
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
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      givenState: true,
      receivedState: true,
      givenName: "",
      receivedName: "",
      wait: false,
    };
  },
  methods: {
    changeView() {
      this.$emit("action", "wallet");
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

<style lang="scss" scoped></style>
