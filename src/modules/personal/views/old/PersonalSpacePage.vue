<template>
  <div>
    
    <div name="contain" class="">
      <ul
        role="list"
        class="m-4 grid gap-5 grid-cols-4 xl:grid-cols-8 grid-rows-dashboard"
      >
        <li
          v-for="person in people"
          :key="person.email"
          :class="person.grid"
          class="bg-DarkRock rounded-lg shadow"
        >
          <div class="w-full flex items-center p-6">
            <img
              class="w-12 h-12 bg-gray-300 rounded-full "
              :src="person.imageUrl"
              alt=""
            />
            <div class="">
              <div class="">
                <h5 class="">
                  {{ person.name }}
                </h5>
                <p class="">
                  {{ person.title }}
                </p>
              </div>
            </div>
          </div>
          <p class="px-2 py-0.5 text-White">
            {{ person.txt }}
          </p>
          <div v-if="person.true">
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="w-0 flex-1 flex">
                <a
                  :href="`mailto:${person.email}`"
                  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">Email</span>
                </a>
              </div>
              <div class="-ml-px w-0 flex-1 flex">
                <a
                  :href="`tel:${person.telephone}`"
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/solid";

const people = [
  {
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },
  {
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },{
    name: "Ceadus",
    title: "Main Support",
    txt: "Play your first match with Reave to start missions",
    grid: "col-span-1",
    action: false,
    imageUrl: "http://via.placeholder.com/50",
  },
  // More people...
];
export default {
  components: {
    MailIcon,
    PhoneIcon,
  },
  data() {
    return {
      people: people,
    };
  },
};
</script>
