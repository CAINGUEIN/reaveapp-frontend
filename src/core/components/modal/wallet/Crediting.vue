<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 bg-DarkRock hover:bg-LightRock p-3 rounded-full z-10"
      @click.prevent="(etape = etape - 1), (select = '')"
    >
      <SvgTarget
        :target="'Arrow'"
        :height="15"
        :width="15"
        class="text-White rotate-180"
      />
    </button>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <div v-if="data > 0">
        <h4 class="text-center">How much are you crediting</h4>
        <h4 class="text-center">your Wallet?</h4>
      </div>
      <div v-else>
        <h4 class="text-center">You need more funds (min. {{ 0 - data }}€)</h4>
        <h4 class="text-center">for your purshase.</h4>
      </div>
      <PriceInputModel
        :data="money"
        v-model="money.value"
        :errors="errors[money.name]"
      />
      <ArrowDownIcon
        class="absolute left-[202px] top-[205px] bg-White text-black rounded-full h-15 w-15 p-2"
      ></ArrowDownIcon>
      <div class="flex mx-auto items-center mt-16 pl-10">
        <p
          class="font-black text-H2 text-center"
          :class="{ 'text-White': money.value > 0 }"
        >
          {{ money.value === "" ? 0.0 : money.value }}
        </p>
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

    <div class="pt-6 flex flex-col space-y-4" v-if="etape === 2">
      <div>
        <h4 class="text-center font-black">How do you credit</h4>
        <h4 class="text-center font-black">your Wallet?</h4>
      </div>
      <div
        @click="(select = 'Mastercard'), (etape = 3)"
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
            <ArrowRightIcon
              class="h-8 w-8 p-1 text-Black m-auto"
            ></ArrowRightIcon>
          </button>
        </div>
      </div>
      <div
        @click="(select = 'Visa'), (etape = 3)"
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
            <ArrowRightIcon
              class="h-8 w-8 p-1 text-Black m-auto"
            ></ArrowRightIcon>
          </button>
        </div>
      </div>
      <button class="rounded-full h-16 px-10 mx-auto mt-6">
        <h4 class="text-White">Add Card</h4>
      </button>
    </div>
    <div class="pt-6 flex flex-col space-y-4" v-if="etape === 3">
      <h4 class="text-center font-black">Recap</h4>
      <div class="flex mx-auto">
        <h4>{{ money.value }} €</h4>
        <svg
          class="mx-6 my-auto"
          width="107"
          height="18"
          viewBox="0 0 107 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9L102 8.99999"
            stroke="#BEBEBE"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M98 2L105.158 8.57595C105.603 8.98558 105.586 9.69432 105.12 10.0814L98 16"
            stroke="#BEBEBE"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

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
import PriceInputModel from "@components/inputs/PriceInputModel.vue";

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
import SvgTarget from "../../SvgTarget.vue";

export default {
  components: {
    InputModel,
    ChevronDownIcon,
    PriceInputModel,
    ArrowDownIcon,
    GoldRC,
    XIcon,
    ArrowRightIcon,
    Arrow,
    Checkmark,
    SvgTarget,
  },
  props: ["action", "data"],
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
