<template>
  <div>
    <h1>Wallet</h1>
    <div class="flex">
      <div class="flex border-2 bg-white rounded-full">
        <h4 class="text-Black rounded-full px-4">ReaveCoin</h4>
        <h4 class="px-4 bg-black rounded-full">{{ store.dataAccount.coin }}</h4>
      </div>
      <button
        class="bg-white text-black rounded-full ml-4"
        @click.prevent="open = true"
      >
        Add
      </button>
    </div>
    <div name="Histories">
      <div v-for="item in store.dataAccount.historiesCoin" class="flex">
        <h4>{{item.type}}</h4>
        <h4>{{item.value}}</h4>
        <h4>{{item.date}}</h4>
      </div>
    </div>
    <ModalClear :open="open" @action="close()">
      <div class="flex justify-between">
        <h2>add Money</h2>
        <button
          class="bg-white text-black rounded-full px-3"
          @click.prevent="open = false"
        >
          <h2 class="text-black">X</h2>
        </button>
      </div>
      <h4>fake payement future use api of stripe</h4>
      <InputModel
        :data="money"
        v-model="money.value"
        :errors="errors[exemple]"
      ></InputModel>
      <button
        class="bg-white text-black rounded-full px-3"
        @click.prevent="addCoins(true)"
      >
        <h4 class="text-black">Add Coins</h4>
      </button>
      <button
        class="bg-white text-black rounded-full px-3"
        @click.prevent="addCoins(false)"
      >
        <h4 class="text-black">remove Coins</h4>
      </button>
    </ModalClear>
  </div>
</template>

<script>
//component
import ModalClear from "@core/components/modal/ModalClear.vue";
import InputModel from "@components/inputs/InputModel.vue";
// services
import UserUpdateServices from "@axios/services/userUpdateServices";
//tool
import useStoreAuth from "@stores/auth";

export default {
  components: { ModalClear, InputModel },
  data() {
    const store = useStoreAuth();
    return {
      open: false,
      store,
      money: {
        label: "Add Payement",
        name: "money",
        type: "number",
        value: "",
      },
      errors: {},
    };
  },
  methods: {
    close() {
      this.open = false;
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
        this.money.value = ""
      } else {
        this.errors["money"] = result.data.message;
      }
      // fermeture de la modal si ok avec changment du chiffre dans la reavecoin
    },
  },
};
</script>
