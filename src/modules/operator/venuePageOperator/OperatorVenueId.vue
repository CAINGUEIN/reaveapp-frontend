<template>
    <div class="overflow-hidden h-screen w-screen flex scrollbarV">
      <SideNavVenue
        class="w-[270px] sticky top-0"
        v-model="select"
        :select="select"
        :yourPerm="yourPerm"
        :infoEvent="infoEvent"
      ></SideNavVenue>
      <div name="content" class="w-full px-[30px] pt-8 overflow-auto scrollbarV pb-4">
        <component
          :is="select"
          v-if="infoEvent !== ''"
          :data="infoEvent"
          :yourPerm="yourPerm"
          @action="updateData()"
        ></component>
      </div>
    </div>
  </template>
  
  <script>
  //components
  import SideNavVenue from "./SideNavVenue.vue";
  import XButton36 from "@components/buttons/XButton36.vue";
  //pages
  import Staff from "@components/projectId/staff/Staff.vue";
  import Format from "@components/projectId/logistics/Format.vue";
  import Equipements from "@components/projectId/logistics/Equipements.vue";
  import Tickets from "@components/projectId/products/Tickets.vue";
  import OverviewVenue from "@components/projectId/OverviewVenue.vue";
  import Analytics from "@components/projectId/analytics/Analytics.vue";
  import Panel from "@components/projectId/finance/Panel.vue";
  //tool
  import useStoreAuth from "@stores/auth";
  //services
  import eventServices from "@axios/services/eventServices";
  export default {
    components: {
      XButton36,
      OverviewVenue,
      Format,
      Equipements,
      Staff,
      Tickets,
      Panel,
      Analytics,
      SideNavVenue,
    },
    data() {
      const store = useStoreAuth();
      return {
        store,
        id: "",
        infoEvent: "",
        select: "Overview",
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
        let result = await eventServices.dataVenue(body);
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
  