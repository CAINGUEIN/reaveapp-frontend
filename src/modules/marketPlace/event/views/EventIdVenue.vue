<template>
  <div class="my-14 w-[90%] max-w-[1260] mx-auto">
    <div class="flex flex-col">
      <img src="/Maps.png" alt="" />
    </div>
    <h2 class="text-5xl font-medium">Explore</h2>
    <div class="flex flex-col justify-between pt-12">
      <div class="mt-8 grid grid-cols-3 gap-8">
        <div class="flex items-center">
          <img src="/img/Eventpage/Mcdonalds.png" alt="">
          <div>
            <p class="ml-4 text-xl text-white font-medium">McDonalds</p>
            <p class="ml-4 text-xl text-white font-normal">10min away</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="/img/Eventpage/Louvre.png" alt="">
          <div>
            <p class="ml-4 text-xl text-white font-medium">Musée du Louvre</p>
            <p class="ml-4 text-xl text-white font-normal">3min away</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="/img/Eventpage/Pretamanger.png" alt="">
          <div>
            <p class="ml-4 text-xl text-white font-medium">Musée du Louvre</p>
            <p class="ml-4 text-xl text-white font-normal">5min away</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
