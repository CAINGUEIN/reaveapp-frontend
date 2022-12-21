<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1, select = ''"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <button
      class="absolute right-0 rounded-full px-3 z-10"
      @click.prevent="closeModal()"
    >
      <h2 class="text-white">X</h2>
    </button>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">How much are you crediting</h4>
      <h4 class="text-center">your Wallet?</h4>
      <InputModel
        :data="money"
        v-model="money.value"
        :errors="errors[money.name]"
      >
      </InputModel>
      <ArrowDownIcon
        class="absolute left-[202px] top-[175px] bg-white text-black rounded-full h-15 w-15"
      ></ArrowDownIcon>
      <div class="flex mx-auto items-center mt-16">
        <h4>{{ money.value === "" ? 0 : money.value }}</h4>
        <GoldRC class="ml-2"></GoldRC>
      </div>
      <button
        :class="
          money.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="money.value !== '' ? (etape = 2) : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>

    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 2">
      <div>
        <h4 class="text-center">How do you credit</h4>
        <h4 class="text-center">your Wallet?</h4>
      </div>
      <div
        @click="select = 'Mastercard', etape = 3"
        class="h-20 flex justify-between items-center p-4 rounded-2xl"
        :class="select === 'Mastercard' ? 'bg-LightRock' : 'hover:bg-Rock'"
      >
        <div class="flex items-center">
          <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
          <div class="ml-4">
            <h5>Mastercard</h5>
            <h5 class="text-Gravel">**** **** **** 9876 12/25</h5>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <XIcon class="h-7 w-7"></XIcon>
          <button class="bg-White rounded-full h-10 w-10 flex">
            <ArrowRightIcon class="h-8 w-8 text-Black m-auto"></ArrowRightIcon>
          </button>
        </div>
      </div>
      <div
        @click="select = 'Visa', etape = 3"
        class="h-20 flex justify-between items-center p-4 rounded-2xl"
        :class="select === 'Visa' ? 'bg-LightRock' : 'hover:bg-Rock'"
      >
        <div class="flex items-center">
          <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
          <div class="ml-4">
            <h5>Visa</h5>
            <h5 class="text-Gravel">**** **** **** 1234 04/24</h5>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <XIcon class="h-7 w-7"></XIcon>
          <button class="bg-White rounded-full h-10 w-10 flex">
            <ArrowRightIcon class="h-8 w-8 text-Black m-auto"></ArrowRightIcon>
          </button>
        </div>
      </div>
      <button class="rounded-full h-16 px-10 mx-auto mt-6">
        <h4 class="text-White">Add Card</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 3">
      <h4 class="text-center">Recap</h4>
      <div class="flex mx-auto">
        <h4>{{ money.value }} €</h4>
        <h4 class="mx-2">-----------></h4>
        <div class="flex items-center">
          <h4>{{ money.value }}</h4>
          <GoldRC class="ml-2" :width="14" :height="14"></GoldRC>
        </div>
      </div>
      <div v-if="select === 'Mastercard'" class="flex mx-auto">
        <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
        <div class="ml-4">
          <h5>Mastercard</h5>
          <h5 class="text-Gravel">**** **** **** 9876 12/25</h5>
        </div>
      </div>
      <div v-if="select === 'Visa'" class="flex mx-auto">
        <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
        <div class="ml-4">
          <h5>Visa</h5>
          <h5 class="text-Gravel">**** **** **** 1234 04/24</h5>
        </div>
      </div>
      <button
        v-if="!end"
        class="bg-white text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="addCoins(true)"
      >
        <h4 class="text-black">Confirm Credit</h4>
      </button>
      <Checkmark v-if="end" class="mx-auto"></Checkmark>
    </div>
  </div>
</template>

<script>
//components
import InputModel from "@components/inputs/InputModel.vue";

// services
import UserUpdateServices from "@axios/services/userUpdateServices";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/vue/solid";
import GoldRC from "@assets/icons/Wallet/GoldRC.vue";
import Arrow from "@assets/icons/Wallet/Arrow.vue";
import Checkmark from "@assets/icons/Wallet/Checkmark.vue";
//tool
import useStoreAuth from "@stores/auth";

export default {
  components: {
    InputModel,
    ChevronDownIcon,
    ArrowDownIcon,
    GoldRC,
    XIcon,
    ArrowRightIcon,
    Arrow,
    Checkmark,
  },
  props: ["action"],
  data() {
    const store = useStoreAuth();
    return {
      etape: 1,
      money: {
        label: "",
        placeholder: "0,00 €",
        name: "money",
        type: "number",
        value: "",
        class: "text-center",
      },
      errors: {},
      select: "",
      end: false,
      store,
    };
  },
  methods: {
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
        this.end = true;
      } else {
        this.errors["money"] = result.data.message;
      }
      // fermeture de la modal si ok avec changment du chiffre dans la reavecoin
    },
    closeModal() {
      this.$emit("action");
    },
  },
};
</script>
