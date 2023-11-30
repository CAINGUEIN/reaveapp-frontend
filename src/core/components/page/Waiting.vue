
ici faire une page qui passe par dessus tout le reste a la façon d'une modal qui
rend ilisible le dessous le temps du chargement des datas

<template>
    <div class="h-screen flex justify-center items-center">
        <Reave id="reaveLogo" width="30" height="30" />
    </div>
</template>

<style scoped>

#reaveLogo {
    -webkit-animation: breathing 3s ease-out infinite normal;
    animation: breathing 3s ease-out infinite normal;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(4);
    -ms-transform: scale(4);
    transform: scale(4);
  }

  50% {
    -webkit-transform: scale(4.4);
    -ms-transform: scale(4.4);
    transform: scale(4.4);
  }

  100% {
    -webkit-transform: scale(4);
    -ms-transform: scale(4);
    transform: scale(4);
  }
}


</style>

<script setup>
    import Reave from '../../assets/icons/Reave.vue';
</script>
<!-- ici faire une page qui passe par dessus tout le reste a la façon d'une modal qui
rend ilisible le dessous le temps du chargement des datas 
<template>
    <div>
        <h1>
            ca arrive
        </h1>
    </div>
</template>

<script>
    export default {
        
    }
</script> -->