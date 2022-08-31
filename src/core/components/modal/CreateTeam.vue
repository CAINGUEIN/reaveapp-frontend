<template>
  <div class="bg-Black p-8 rounded-lg h-screen text-center">
    <button
      class="text-right hover:border-2 hover:border-Stone w-auto absolute top-0 right-2"
      @click="$emit('close')"
    >
      X
    </button>
    <h3>Create a Space Team</h3>
    <p class="px-16 justify-center flex">
      Spaces are the place to be in the Esport Ecosystem to grind!
    </p>
    <button
      @click="$emit('changeTarget', 'friends')"
      class="bg-img1 rounded-xl pl-8 text-left text-white"
    >
      <h4>Friends</h4>
    </button>
    <button
      @click="$emit('changeTarget', 'team')"
      class="bg-img2 rounded-xl pl-8 text-left text-white"
    >
      <h4>Team</h4>
    </button>
    <button
      @click="$emit('changeTarget', 'organisation')"
      class="bg-img3 rounded-xl pl-8 text-left text-white"
    >
      <h4>Organisation</h4>
    </button>
    <button
      @click="$emit('changeTarget', 'community')"
      class="bg-img4 rounded-xl pl-8 text-left text-white"
    >
      <h4>Community</h4>
    </button>
    <button
      @click="$emit('changeTarget', 'event')"
      class="bg-img5 rounded-xl pl-8 text-left text-white"
    >
      <h4>Event</h4>
    </button>
  </div>
</template>

<script>
export default {};
</script>
