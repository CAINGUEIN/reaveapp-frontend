<template>
    <div :key="'add' + update"  class="flex flex-col justify-between">
      <h4>fake payement future use api of stripe</h4>
      <h4>Rajouter {{ money.value }}</h4>
      <div>
        <button
          class="bg-white text-black rounded-full px-3"
          @click.prevent="addCoins()"
        >
          <h4 class="text-black">Add Coins</h4>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import UserUpdateServices from "@axios/services/userUpdateServices";
  import NumberModel from "@components/inputs/NumberModel.vue";
  import useStoreAuth from "@stores/auth";
  export default {
    components: {
      NumberModel,
    },
    props: ["data", "action"],
    data() {
      const store = useStoreAuth();
      return {
        store,
        money: {
          label: "Add Payement",
          name: "money",
          type: "number",
          value: "",
        },
        errors: {},
        update: 0,
      };
    },
    methods: {
      async addCoins() {
        let data = { coin: this.money.value };
  
        //recup la value de money
        //axios pour mettre a jour le compte
        let result = await UserUpdateServices.coinBalance(data);
        // recup de la data dans le result et le mettre dans le store
        if (result.data.success) {
          this.store.dataAccount.coin = result.data.data.coin;
          this.store.dataAccount.historiesCoin = result.data.data.historiesCoin;
          this.update++;
          this.closeModal()
        } else {
          this.errors["money"] = result.data.message;
        }
        // fermeture de la modal si ok avec changment du chiffre dans la reavecoin
      },
      setValue() {
        this.money.value = - this.data;
      },
      closeModal() {
        this.$emit("action");
      },
    },
    mounted() {
      this.setValue();
    },
  };
  </script>
  