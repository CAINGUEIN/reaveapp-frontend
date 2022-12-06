<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <XButton36 class="absolute right-0 z-10" @click.prevent="closeModal()"></XButton36>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">Who are you sending to?</h4>
      <div class="mt-4">
        <label for="search" class="text-white"
          >ENTER USER TAG OR PROFILE NAME</label
        >
        <div class="relative text-gray-400 border-White mt-2">
          <SearchIcon
            class="absolute h-5 w-5 z-10 my-1.5 ml-3"
            aria-hidden="true"
          />
          <!-- voir a comprendre pourquoi j'ai un ring bleu -->
          <input
            id="search"
            class="bg-Anthracite block w-full h-8 pl-11 rounded-full text-White placeholder-Gravel ring-0 focus:ring-0 focus:outline-none border-0 focus:border-0"
            placeholder="Search"
            type="search"
            name="search"
            v-model="friendsSearch"
          />
        </div>
      </div>
      <div name="listContact" class="h-60 overflow-auto scrollbarV">
        <div v-for="friend in store.dataAccount.friends">
          <div
            v-if="
              friend.userTag.includes(friendsSearch) ||
              friend.profileName.includes(friendsSearch) ||
              friendsSearch === ''
            "
            @click="(select = friend), (etape = 2)"
            class="h-20 flex justify-between items-center p-4 rounded-2xl"
            :class="select === friend._id ? 'bg-LightRock' : 'hover:bg-Rock'"
          >
            <div class="flex items-center">
              <div class="h-9 w-9 bg-slate-500 rounded-full"></div>
              <div class="ml-4">
                <h4>{{ friend.userTag }}</h4>
                <h5 class="text-Gravel">@{{ friend.profileName }}</h5>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button class="bg-White rounded-full h-10 w-10 flex">
                <ArrowRightIcon
                  class="h-8 w-8 text-Black m-auto"
                ></ArrowRightIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 2">
      <div>
        <h4 class="text-center">How much are you</h4>
        <h4 class="text-center">sending to {{ select.profileName }}?</h4>
      </div>
      <div class="h-24 w-24 bg-slate-500 rounded-full mx-auto"></div>
      <div>
        <h4 class="text-center">{{ select.profileName }}</h4>
        <h5 class="text-center">@{{ select.userTag }}</h5>
      </div>
      <InputModel
        :data="money"
        v-model="money.value"
        :errors="errors[money.name]"
      >
      </InputModel>
      <input
        id="search"
        class="bg-Anthracite block w-full h-8 pl-11 rounded-full text-White placeholder-Gravel ring-0 focus:ring-0 focus:outline-none border-0 focus:border-0"
        :placeholder="descritpion.placeholder"
        :type="descritpion.type"
        :name="descritpion.name"
        v-model="descritpion.value"
      />
      <button
        :class="
          money.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="money.value !== '' ? (etape = 3) : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col space-y-4" v-if="etape === 3">
      <div>
        <h4 class="text-center">Recap</h4>
      </div>
      <div class="flex justify-evenly items-center">
        <div>
          <div class="h-24 w-24 bg-slate-500 rounded-full mx-auto"></div>
          <div>
            <h4 class="text-center">{{ store.dataAccount.profileName }}</h4>
            <h5 class="text-center">@{{ store.dataAccount.userTag }}</h5>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center">
            <h4>{{ money.value }}</h4>
            <SilverRC class="ml-2" :width="14" :height="14"></SilverRC>
          </div>
          <h4 class="mx-2">-----------></h4>
        </div>
        <div>
          <div class="h-24 w-24 bg-slate-500 rounded-full mx-auto"></div>
          <div>
            <h4 class="text-center">{{ select.profileName }}</h4>
            <h5 class="text-center">@{{ select.userTag }}</h5>
          </div>
        </div>
      </div>
      <button
        v-if="!end"
        :class="
          money.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="sendCoin()"

      >
        <h4 class="text-black">Send</h4>
      </button>
      <Checkmark v-if="end" class="mx-auto"></Checkmark>
    </div>
  </div>
</template>

<script>
//components
import { ArrowRightIcon, SearchIcon } from "@heroicons/vue/outline";
import Checkmark from "@assets/icons/Wallet/Checkmark.vue";
import SilverRC from "@assets/icons/Wallet/SilverRC.vue";
import InputModel from "@components/inputs/InputModel.vue";
import XButton36 from "@components/buttons/XButton36.vue";
// services
import UserUpdateServices from "@axios/services/userUpdateServices";
//tool
import useStoreAuth from "@stores/auth";

export default {
  data() {
    const store = useStoreAuth();
    return {
      etape: 1,
      money: {
        label: "",
        placeholder: "0,00",
        name: "money",
        type: "number",
        value: "",
        class: "text-center border-0 rounded-full",
      },
      descritpion: {
        label: "",
        placeholder: "Add Description (Optional)",
        name: "descritpion",
        type: "text",
        value: "",
        class: "text-center",
      },
      friendsSearch: "",
      errors: {},
      store,
      select: "",
      end: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    async sendCoin() {
      let data = {
        value: this.money.value,
        target: this.select,
        message: this.descritpion.value,
      }
      //axios pour mettre a jour le compte
      let result = await UserUpdateServices.sendCoin(data);
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
  },
  components: { SearchIcon, ArrowRightIcon, InputModel, SilverRC, Checkmark, XButton36 },
};
</script>
