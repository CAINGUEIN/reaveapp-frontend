<script setup>
import { ref, computed, onMounted, onBeforeMount, compile, reactive, nextTick } from 'vue';
import VenueServices from '@axios/services/venueServices';
import UploadServices from "@axios/services/uploadServices";
import SvgTarget from "../../SvgTarget.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import XButton36 from "@components/buttons/XButton36.vue";
import { useRouter } from "vue-router";
import {
  AdjustmentsIcon,
  SearchIcon,
  ChevronDownIcon,
  ViewListIcon,
  ViewGridIcon,
  ViewBoardsIcon,
} from "@heroicons/vue/solid";

const data = ref('');
const router = useRouter();
const venuePP = [];
const venuePPObject = {};
const divOpen = ref(0);

const getVenueProfilePic = async () => {
  //console.log('llm3', venuePP);
  const promiseArray = venuePP.map(async (data) => {
    //console.log('llm4', datak);
    if (data !== '') {
      console.log('llm4.5');
      let result = await UploadServices.getImageFromBackend(data);
      console.log('llm5', result);
      venuePPObject[data] = result;
    }

  });
  await Promise.all(promiseArray);
  //console.log('llm6', venuePPObject);
  divOpen.value = 1;
};
const getImageBlob = (imageName) => {
  //console.log('llm8', imageName);
  return {
    'background-image': `url("${venuePPObject[imageName] ? venuePPObject[imageName] : '/img/VenuesDefault.png'}")`,
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
  };
}

const goBack = () => {
  router.go(-1);
};


const findPublishedVenuesMethod = async () => {
  // Retrieve published venues
  let result = await VenueServices.findPublishedVenues();
  if (result.data.success) {
    data.value = result.data.data;
    // venuePP.push = result.data.data;
    for (let i = 0; i < result.data.data.length; i++) {
      // console.log('llm',result.data.data[i].primaryPic);
      venuePP.push(result.data.data[i].primaryPic);
    }
    //console.log('llm2',venuePP );
  }
}

const goTo = () => {
  // router.push({
  //         name: "EventPage",
  //         //params: { id: target, target: "projects" },
  //       });

  // Go to Venue page
}

onBeforeMount(async () => {
  await findPublishedVenuesMethod();
  await getVenueProfilePic();
  //console.log('llm7');
})

</script>

<template>
  <div class="w-full flex justify-end">
    <XButton36 @click="goBack" class="z-10"></XButton36>
  </div>

  <div name="topContent" class="mt-8 mb-10 flex justify-between">
    <div class="w-1/3 flex">
      <label for="search" class="sr-only">Search</label>
      <div class="relative text-white border-White flex justify-between h-10 w-2/3 ml-3">
        <div class="flex bg-DarkRock rounded-full">
          <SearchIcon class="h-10 w-10 p-2 z-10 my-auto ml-3 text-Gravel rounded-full" aria-hidden="true" />
          <input id="search"
            class="bg-DarkRock block h-10 border-transparent focus:ring-0 border-0 rounded-full text-White placeholder-Gravel text-base font-medium"
            placeholder="Search" type="search" name="search" />
        </div>
        <Button40Slot class="flex bg-LightRock rounded-full ml-3">
          <SvgTarget target="Filters" :height="24" :width="24" class="mx-auto my-auto"></SvgTarget>
        </Button40Slot>
      </div>
    </div>
    <div class="flex">
      <div class="rounded-lg bg-DarkRock h-10 flex">
        <button class="w-12 h-10 rounded-lg flex" :class="show === 'list' ? 'bg-LightRock text-White' : 'bg-DarkRock'"
          @click="show = 'list'">
          <SvgTarget target="Ligns" :height="24" :width="24" class="mx-auto my-auto"></SvgTarget>
        </button>
        <button class="w-12 h-10 rounded-lg flex" :class="show === 'board' ? 'bg-LightRock text-White' : 'bg-DarkRock'
          " @click="show = 'board'">
          <SvgTarget target="smsq" :height="24" :width="24" class="mx-auto my-auto"></SvgTarget>
        </button>
        <button class="w-12 h-10 rounded-lg flex" :class="show === 'grid' ? 'bg-LightRock text-White' : 'bg-DarkRock'"
          @click="show = 'grid'">
          <SvgTarget target="lgsq" :height="24" :width="24" class="mx-auto my-auto"></SvgTarget>
        </button>
      </div>
      <Menu as="div" class="relative inline-block text-left ml-3">
        <div class="">
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 h-10 bg-DarkRock text-white font-medium items-baseline">
            <span class="text-LightGrey text-base font-medium">Order by</span>
            Most Recent
            <SvgTarget target="Chevron" :height="24" :width="24" class="mx-auto my-auto"></SvgTarget>
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-DarkRock shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm',
              ]">Exemple</a></MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm',
              ]">Exemple</a></MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm',
              ]">Exemple</a></MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#" :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                'block px-4 py-2 text-sm',
              ]">Exemple</a></MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>

  <div class="flex ml-8 text-[16px] text-LightGrey">
    <div class="basis-1/4 font-black">NAME</div>
    <div class="basis-1/4 font-black">LOCATION</div>
    <div class="basis-1/4 font-black">CAPACITY</div>
    <div class="basis-1/4 font-black">OWNER</div>
  </div>

  <div name="separate" class="h-0.5 w-full bg-Gravel mt-4 ml-4"></div>
  <div class="flex flex-col text-[16px] w-full h-full gap-2 mt-3 ml-4">

    <div v-if="divOpen === 1" v-for="item in data" :key="item._id" @click="goTo()"
      class="cursor-pointer text-[16px] flex items-center hover:bg-DarkRock">
      <div class="flex w-full p-4 ">
        <div class="flex gap-4 items-center basis-1/4 h-full ">
          <div class="w-16 h-16 rounded-xl" :style="getImageBlob(item.primaryPic)"></div>
          <div class="font-bold text-white">{{ item.name }}</div>
        </div>
        <div class="flex basis-1/4 items-center">
          <SvgTarget target="Maps" :height="16" :width="16" class="mx-2"></SvgTarget>
          <pre class="leading-5 text-[16px] font-sans text-LightGrey font-medium">
{{ item.address.country != "" ? 
`${item.address.country}, ${item.address.pcode} ${item.address.city},
${item.address.street}`
: "No Address Added"
  }}
</pre>
        </div>
        <div class="flex basis-1/4 font-medium items-center">
          <SvgTarget target="Maps" :height="16" :width="16" class="mx-2"></SvgTarget>
          <div class="font-medium">X Capacity</div>
        </div>
        <div class="flex basis-1/4 text-white items-center">
          <div class="font-medium">Paris Entertainment</div>
        </div>
      </div>
    </div>
  </div>
</template>
