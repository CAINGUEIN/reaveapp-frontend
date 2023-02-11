<template>
  <div class="my-14">
    <div class="w-2/3 mx-auto flex flex-col">
      <div>
        <img class="w-1/3" src="../../../../../public/Sponsors.png" alt="" />
      </div>
      <div class="w-full mt-12">
        <h2 class="mb-4">Staff</h2>
        <div class="w-full grid grid-cols-3 gap-4">
          <div class="flex col-span-1">
            <div class="bg-White h-15 w-15 rounded-full"></div>
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
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
