ici faire une page qui passe par dessus tout le reste a la façon d'une modal qui
rend ilisible le dessous le temps du chargement des datas

<template>
    <div class="h-screen flex justify-center items-center">
        <Reave id="reaveLogo" width="100" height="100" />
    </div>
</template>

<style scoped>

#reaveLogo {
    -webkit-animation: breathing 3s ease-out infinite normal;
    animation: breathing 3s ease-out infinite normal;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
}


</style>

<script setup>
    import Reave from '../../assets/icons/Reave.vue';
</script>