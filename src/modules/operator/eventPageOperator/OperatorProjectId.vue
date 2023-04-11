<template>
  <div class="overflow-y-auto h-screen flex">
    <SideNav
      v-model="select"
      :select="select"
      :yourPerm="yourPerm"
      :infoEvent="infoEvent"
    ></SideNav>
    <div name="content" class="w-full px-[30px] mt-8">
      <component
        :is="select"
        v-if="infoEvent !== ''"
        :data="infoEvent"
      ></component>
    </div>
  </div>
</template>

<script>
//components
import SideNav from "./SideNav.vue";
import XButton36 from "@components/buttons/XButton36.vue";
//pages
import Staff from "@components/projectId/staff/Staff.vue";
import Venue from "@components/projectId/venue/Venue.vue";
import Logistics from "@components/projectId/logistics/Logistics.vue";
import Marketing from "@components/projectId/marketing/Marketing.vue";
import Analytics from "@components/projectId/analytics/Analytics.vue";
//tool
import useStoreAuth from "@stores/auth";
//services
import eventServices from "@axios/services/eventServices";
export default {
  components: {
    XButton36,
    Venue,
    Staff,
    Logistics,
    Marketing,
    Analytics,
    SideNav,
  },
  data() {
    const store = useStoreAuth();
    return {
      store,
      id: "",
      infoEvent: "",
      select: "Venue",
      index: 1,
      yourPerm: "",
    };
  },
  methods: {
    getUrl() {
      if (Object.keys(this.$route.params).length > 0) {
        this.id = this.$route.params.id;
        this.feadData();
      } else {
        this.goBack();
      }
    },
    async feadData() {
      let body = { _id: this.id };
      let result = await eventServices.dataEvent(body);
      if (result.data.success) {
        this.infoEvent = result.data.data;
        this.perm();
      }
    },
    updateData() {
      //relance un feadData pour mettre a jour
      this.feadData();
    },
    perm() {
      //verif du grade de perm sur certaine route cela est aussi en back
      //a mettre dans les composant qui on besoin de connaitre la perm du user
      let _id = this.store.dataAccount._id;
      console.log(this.infoEvent.staff, _id);
      if (this.infoEvent.owner.user_id._id == _id) {
        this.yourPerm = "Owner";
      } else if (this.matchArray(this.infoEvent.staff, _id)) {
        this.infoEvent.staff.forEach((element) => {
          if (element.staff_id._id === _id) {
            this.yourPerm = element.permission;
          }
        });
      } else {
        this.goBack();
      }
      console.log(this.yourPerm);
    },
    matchArray(array, value) {
      //une fonction helper
      let match = false;
      array.forEach((element) => {
        if (element.staff_id._id === value) {
          match = true;
        }
      });
      return match;
    },
    close(value) {
      this.open = false;
      if (value === "update") {
        this.updateData();
      }
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped></style>
