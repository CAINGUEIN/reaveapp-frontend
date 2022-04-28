<template>
  <div class="">
    <div name="nav-bar-top" class="p-2 bg-slate-500">
      <div name="add-space">
        <h1>+</h1>
      </div>
      <div name="space-for">
        <div>
          
        </div>
      </div>
    </div>
    <div name="body" class="flex h-max">
      <div name="nav-bar-left" class="w-16 bg-slate-700"></div>
      <div name="body-contain" class="m-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
