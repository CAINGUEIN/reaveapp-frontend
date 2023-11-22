<template>
    <img :src="srcImg" :alt="type + size" />
  </template>
  
  <script>
  import useStoreAuth from "@stores/auth";
  
  export default {
    props: ["srcImg"],
    data() {
      const store = useStoreAuth();
      // const spaceStore = useStoreSpace();
    },
    methods: {
      
      },
    
    watch: {
      $route() {
        this.setSrcImg();
      },
    },
    mounted() {
      this.setSrcImg();
    },
  };
  </script>
  