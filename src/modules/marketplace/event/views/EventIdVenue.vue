<template>
  <div class="my-14">
    <div class="w-1/2 mx-auto flex">
      <div class="w-1/4 flex flex-col space-y-4">
        <h2>{{ data.venueName }}</h2>
        <div>
            <p>Address location</p>
        <h4>
          {{
            data.venueName +
            ", " +
            data.adress +
            ", " +
            data.city +
            ", " +
            data.country
          }}
        </h4>
        </div>
        
      </div>
      <div class="w-3/4 aspect-2 rounded-2xl bg-slate-500"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
