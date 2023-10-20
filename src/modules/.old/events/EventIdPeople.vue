<template>
  <div class="my-14">
    <div class="w-2/3 mx-auto flex flex-col">
      <div>
        <h2 c class="text-5xl font-medium">Sponsors</h2>
        <div class="flex flex-wrap w-full mt-8 gap-8 gap-x-10">
          <div class="flex flex-col items-center">
            <img src="/img/Asus_ROG.png" alt="" class="mx-auto mb-3" />
            <p class=" text-xl font-medium">Asus ROG</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="/img/HermanMiller.png" alt="" class="mx-auto mb-3" />
            <p class=" text-xl font-medium">Herman Miller</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="/img/Redbull.png" alt="" class="mx-auto mb-3" />
            <p class=" text-xl font-medium">Redbull</p>
          </div>
        </div>
      </div>
      <div class="w-full mt-12">
        <h2 class="text-5xl font-medium">Staff</h2>
        <div class="w-full grid grid-cols-3 gap-4 mt-8">
          <div class="flex col-span-1">
            <ImgFormated
                :key="data.owner._id"
                :size="'l'"
                :targetSpace="data.owner._id"
                :type="'avatar'"
                class="bg-White h-15 w-15 rounded-full"
              />
            <div class="ml-4">
              <p>@{{ data.owner.user_id.userTag }}</p>
              <p>{{ data.owner.role }} {{ data.owner.team }}</p>
            </div>
          </div>
          <div v-for="item in data.staff" class="flex col-span-1">
            <div class="bg-White h-15 w-15 rounded-full"></div>
            <div class="ml-4">
              <p>@{{ item.staff_id.userTag }}</p>
              <p>{{ item.role }} {{ item.team }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgFormated from '@components/img/ImgFormated.vue';

export default {
    props: ["data"],
    components: { ImgFormated }
};
</script>

<style lang="scss" scoped></style>
