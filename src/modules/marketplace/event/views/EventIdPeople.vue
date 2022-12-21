<template>
  <div class="my-14">
    <div class="w-1/2 mx-auto flex">
      <div class="w-full">
        <h2>Staff</h2>
        <div class="w-full grid grid-cols-3 gap-4">
          <div v-for="item in data.staff" class="flex col-span-1">
            <div class="bg-White h-15 w-15 rounded-full"></div>
            <div>
                <p>@{{ item.staff_id.userTag }}</p>
                <p>{{ item.role }}</p>
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
