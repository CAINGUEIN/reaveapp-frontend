<template>
  <div class="flex h-full">
    <div name="correspondants" class="w-64 bg-DarkRock rounded-tl-2xl h-full">
      <div name="correspondants-type" class="flex">
        <button class="border-b-2 border-White text-White rounded-none">
          Friends
        </button>
        <button class="border-b-2 border-Gravel text-Gravel rounded-none">
          General
        </button>
      </div>
      <div name="correspondants-contact" class="">
        <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
          <img
            src="https://via.placeholder.com/40"
            alt=""
            class="rounded-full my-auto"
          />
          <div name="user-div" class="ml-2">
            <h5>User</h5>
            <p>Mood message</p>
          </div>
        </div>
        <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
          <img
            src="https://via.placeholder.com/40"
            alt=""
            class="rounded-full my-auto"
          />
          <div name="user-div" class="ml-2">
            <h5>User</h5>
            <p>Mood message</p>
          </div>
        </div>
        <div class="flex rounded-xl m-2 px-4 py-1 bg-LightRock">
          <img
            src="https://via.placeholder.com/40"
            alt=""
            class="rounded-full my-auto"
          />
          <div name="user-div" class="ml-2">
            <h5>User</h5>
            <p>Mood message</p>
          </div>
        </div>
      </div>
    </div>
    <div name="messages" class="flex flex-col flex-1 justify-between">
      <div
        name="message-header"
        class="flex h-16 w-full justify-between items-center bg-DarkRock rounded-r-full"
      >
        <div name="space-name" class="flex ml-4 items-center">
          <h4 class="ml-2">Terratiger</h4>
          <p class="ml-2">@TerratigerOW</p>
        </div>

        <div name="icon-search" class="flex mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 p-4 hover:bg-Stone rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <input type="text" class="rounded-full my-2" />
        </div>
      </div>
      <div name="message-body"></div>
      <div name="message-input" class="min-w-max bg-Stone rounded-2xl m-2 flex justify-between">
        <div name="start" class="flex">
          <img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
          <input type="text" class="m-4 rounded-full" />
        </div>
        <div name="end" class="flex">
          <img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          /><img
            src="https://via.placeholder.com/60"
            alt=""
            class="rounded-full my-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
