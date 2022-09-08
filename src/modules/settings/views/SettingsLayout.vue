<template>
  <div class="flex max-h-screen max-w-screen overflow-hidden">
    <div
      class="w-[360px] bg-DarkRock pl-[30px] max-h-fit pt-6 overflow-hidden flex flex-col sticky top-0 left-0 bottom-0"
    >
      <Reave class="mb-6 h-15 w-15" />
      <div name="NavBar" class="hover:overflow-auto overflow-hidden scrollbarV">
        <div class="flex flex-col mt-4 items-start">
          <h3>USER SETTINGS</h3>
          <button
            @click="view === 'account' ? (view = '') : (view = 'account')"
          >
            Account
          </button>
          <button
            @click="view === 'privacy' ? (view = '') : (view = 'privacy')"
          >
            Privacy & Safety
          </button>
          <button
            @click="
              view === 'accessibility' ? (view = '') : (view = 'accessibility')
            "
          >
            Accessibility
          </button>
          <button
            @click="view === 'activity' ? (view = '') : (view = 'activity')"
          >
            Activity
          </button>
          <button
            @click="
              view === 'connections' ? (view = '') : (view = 'connections')
            "
          >
            Connections
          </button>
          <button
            @click="view === 'homePage' ? (view = '') : (view = 'homePage')"
          >
            Home Page
          </button>
          <button
            @click="
              view === 'feedSettings' ? (view = '') : (view = 'feedSettings')
            "
          >
            Feed Settings
          </button>
          <button
            @click="
              view === 'requestSettings'
                ? (view = '')
                : (view = 'requestSettings')
            "
          >
            Request Settings
          </button>
          <button
            @click="
              view === 'calendarSettings'
                ? (view = '')
                : (view = 'calendarSettings')
            "
          >
            Calendar Settings
          </button>
          <h3>APP SETTINGS</h3>
          <button
            @click="view === 'appearance' ? (view = '') : (view = 'appearance')"
          >
            Appearance
          </button>
          <button
            @click="view === 'audioVideo' ? (view = '') : (view = 'audioVideo')"
          >
            Audio & Video
          </button>
          <button
            @click="
              view === 'textVisuals' ? (view = '') : (view = 'textVisuals')
            "
          >
            Text & Visuals
          </button>
          <button
            @click="
              view === 'notifications' ? (view = '') : (view = 'notifications')
            "
          >
            Notifications
          </button>
          <button
            @click="view === 'keybinds' ? (view = '') : (view = 'keybinds')"
          >
            Keybinds
          </button>
          <button
            @click="view === 'language' ? (view = '') : (view = 'language')"
          >
            Language
          </button>
          <h3>AI SETTINGS</h3>
          <button @click="view === 'status' ? (view = '') : (view = 'status')">
            Status
          </button>
          <button
            @click="
              view === 'gameOverlay' ? (view = '') : (view = 'gameOverlay')
            "
          >
            Game Overlay
          </button>
          <button @click="view === 'maps' ? (view = '') : (view = 'maps')">
            Maps
          </button>
          <button @click="view === 'health' ? (view = '') : (view = 'health')">
            Health
          </button>
          <h3>ECONOMIC SETTINGS</h3>
          <button
            @click="view === 'reaveCoins' ? (view = '') : (view = 'reaveCoins')"
          >
            Reave Coins
          </button>
          <button
            @click="
              view === 'subscriptions' ? (view = '') : (view = 'subscriptions')
            "
          >
            Subscriptions
          </button>
          <button
            @click="
              view === 'paymentBilling'
                ? (view = '')
                : (view = 'paymentBilling')
            "
          >
            Payment & Billing
          </button>
          <button
            @click="
              view === 'walletInventory'
                ? (view = '')
                : (view = 'walletInventory')
            "
          >
            Wallet & Inventory
          </button>
          <h3>REAVE</h3>
          <button @click="view === 'whoWhy' ? (view = '') : (view = 'whoWhy')">
            Who we are & Why
          </button>
          <button
            @click="view === 'culture' ? (view = '') : (view = 'culture')"
          >
            Our internal Culture
          </button>
          <button
            @click="view === 'nextEvents' ? (view = '') : (view = 'nextEvents')"
          >
            Next Events
          </button>
          <button @click="view === 'badges' ? (view = '') : (view = 'badges')">
            Badges
          </button>
          <button
            @click="view === 'products' ? (view = '') : (view = 'products')"
          >
            Products
          </button>
          <button
            @click="view === 'patchNotes' ? (view = '') : (view = 'patchNotes')"
          >
            Patch Notes
          </button>
          <button
            @click="view === 'feedback' ? (view = '') : (view = 'feedback')"
          >
            Give us feedback
          </button>
          <button
            @click="view === 'tutorials' ? (view = '') : (view = 'tutorials')"
          >
            Tutorials
          </button>
          <button @click="view === 'logout' ? (view = '') : (view = 'logout')">
            Log out
          </button>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none rounded-xl"></div>
    </div>

    <div name="content" class="relative flex-1 pt-6">
      <button @click="goBack" class=" absolute right-6 top-6 z-10">X</button>
      <Account v-if="view === 'account'" @action="openModal"/>
    </div>
    <ModalSettings @isOpenModal="closeModal" :isOpenModal="isOpenModal" :target="target" />
  </div>
</template>

<script>
import DeleteAccount from "./DeleteAccount.vue";
import UpdateAccount from "./UpdateAccount.vue";
import Reave from "../../../core/assets/icons/Reave.vue";
import Account from "./Account.vue";
import ModalSettings from "../../../core/components/settings/ModalSettings.vue";
export default {
  components: { DeleteAccount, UpdateAccount, Reave, Account, ModalSettings },
  data() {
    return {
      view: 'account',
      isOpenModal: false,
      target: ''
    };
  },
  methods: {
    
    openModal(e) {
      this.isOpenModal = true;
      this.target = e
    },
    closeModal() {
      this.isOpenModal = false;
      this.target = ''
    },
    goBack() {
      this.$router.back()
    }
  },
};
</script>
