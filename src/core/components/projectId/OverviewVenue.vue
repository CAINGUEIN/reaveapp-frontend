<template>
  <div name="layout" class="flex justify-between items-center">
    <p class="flex items-center">
      <span class="font-black text-xl text-white flex items-center">
        <SvgTarget target="Overview" :height="20" :width="20" class="mr-2"></SvgTarget>
        OVERVIEW
      </span>
      <!-- <button
        class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10"
        v-if="(yourPerm === 'Owner' || yourPerm === 'Admin') && !data.isPublished
          " @click="(open = true), (modalView = 'publish')">
        <SvgTarget target="Publish" :height="20" :width="20" color1="#000000" class="mr-2"></SvgTarget>
        Publish
      </button> -->

      <button
        class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10"
        v-if="(yourPerm === 'Owner' || yourPerm === 'Admin')
          " @click="publish">
        <SvgTarget target="Publish" :height="20" :width="20" color1="#000000" class="mr-2"></SvgTarget>
        Publish
      </button>

      <button class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base 
            font-black text-white bg-DarkRock rounded-full h-10">
        <SvgTarget target="Overview" :height="20" :width="20" color1="white" class="mr-2"></SvgTarget>
        See Venue Page Preview
      </button>

    </p>
    <XButton36 @click="goBack" class="z-10"></XButton36>
  </div>
  <div class="max-w-7xl w-[95%] mx-auto">
    <div name="eventSection">
      <div name="headerEvent" class="flex items-end justify-between mt-10">
        <p class="text-xl text-LightGrey font-black leading-none">GLOBAL</p>
        
          <button
        class="ml-6 text-left pl-3 pr-4 py-1 my-0.5 flex items-center text-base 
        font-black text-Anthracite bg-white rounded-full h-10" @click="sendAddressDataVenue()">
        Save
      </button>
        
      </div>
      <div name="separateEvent" class="h-0.5 w-full bg-Gravel mt-3"></div>
      <div name="contentEvent" class="flex mt-8">
        <div name="uploadPic" :style="customBg"
          :class="this.imageURL != null ? 'flex  rounded-[12px] flex-col w-[318px] h-[318px]' 
          : 'flex border-dashed border-4 rounded-[12px] border-Silver flex-col w-[318px] h-[318px]'" @click="">

          <!-- Upload primary Pic -->
          <input type="file" name="selectedPic" class="hidden" ref="inputFile" accept=".jpg, .jpeg, .png"
            @input="picUpload" @change="onFileSelected">

          <div class="text-center my-auto cursor-pointer" @click="$refs.inputFile.click()">
            <SvgTarget target="UploadPic" :height="20" :width="20" color1="#808080" class="flex justify-center">
            </SvgTarget>
            <pre class="font-sans" style="text-shadow: 1px 1px 2px black">
Upload Venue
Primary Photo</pre>
          </div>
        </div>
        <div class="ml-6 w-[400px]">

          <div name="inputName2">

            <div class="w-[320px] text-H6">
              <InputModel class="mt-1 py-2" :textClass="'text-H6'" :paddingY="'py-2'" :borderRadius="'rounded-xl'" :data="venueName"
                placeholder:placeholder v-model="venueNameValue" :errors="errors"></InputModel>
              <InputModel class="mt-4" :textClass="'text-H6'" :paddingY="'py-2'" :borderRadius="'rounded-xl'" :data="address" v-model="streetValue"
                :errors="errors"></InputModel>
              <div class="flex gap-2 mt-2">
                <InputModel :data="city" :paddingY="'py-2'" :borderRadius="'rounded-xl'" v-model="cityValue" :errors="errors"></InputModel>
                <InputModel :paddingY="'py-2'" :borderRadius="'rounded-xl'" :data="cp" v-model="pCodeValue" :errors="errors"></InputModel>
                <InputModel :paddingY="'py-2'" :borderRadius="'rounded-xl'" :data="country"  v-model="countryValue" :errors="errors"></InputModel>
              </div>
            </div>
            
          </div>

          <div name="inputDesc">
            <div class="flex">

              <InputModel :paddingY="'py-2'" :borderRadius="'rounded-xl'" :textClass="'text-H6'" class="w-36 mt-4" :data="price" v-model="price.value"
                :errors="errors"></InputModel>

              <Menu as="div" class="flex items-end ml-3" v-slot="{ open }">

                <div>

                  <MenuButton class="flex max-w-xl items-center rounded-full"><button class="text-sm py-[4px] px-3 w-[163px] rounded-xl font-normal items-center flex 
                  justify-between cursor-pointer border-2" :class="!open ? 'border-DarkRock' : 'border-LightRock'">
                      <div class="text-left" >

                        <p class="font-bold text-base text-White" >
                          {{ selectedOption }}
                        </p>
                      </div>
                      <span class="ml-2">
                        <ChevronUpIcon class="h-7" :class="open === false
                          ? 'transition-all ease-in-out rotate-180'
                          : 'transition-all ease-in-out '
                          " />
                      </span>
                    </button>
                  </MenuButton>

                </div>
                <MenuItems class="absolute top-[90px] left-0 z-10  origin-top-right rounded-md bg-LightRock py-1 shadow-lg
                 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in chooseTime" :key="item">
                  <button class="text-White block px-4 py-2 text-left whitespace-nowrap text-sm" @click="selectOption(item)">
                    {{ item }}
                  </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div name="secondaryImagesLabel" class="mt-8">

      <p class="text-base text-White font-black leading-none">SECONDARY IMAGES</p>
      <p class="text-sm text-LightGrey font-black mt-4
        leading-none">Adding photos to the venue’s profile can increase reach up to 30%.</p>

    </div>
    <div name="divForSecondaryImages" class="flex gap-[10px] w-[62rem] flex-wrap mt-4">

      <div v-for="index in 8" class='w-[230px] h-[138px] border-Silver 
        border-dashed border-2 align-middle justify-center items-center flex rounded-lg 
        text-center my-auto cursor-pointer'>

        <SvgTarget target="UploadPic" :height="20" :width="20" color1="#808080" class="flex justify-center">
        </SvgTarget>

      </div>

    </div>
    <div>
      <p class="text-sm text-LightGrey font-black mt-4
        leading-none">These secondary images will appear on :</p>
    </div>

    <div class="flex gap-8 mt-5">
      <div class="flex gap-3">
        <SvgTarget target="Venue" :height="20" :width="20" color1="#808080" class="flex justify-center">
        </SvgTarget>
        <div class="flex flex-col">
          <pre class="leading-5 text-base font-sans text-LightGrey font-medium ">
The venue's page
accessible by anyone.</pre>
          <p class="text-xs mt-2 text-Blue underline font-book cursor-pointer">Show preview</p>
        </div>

      </div>
      <div class="flex gap-3">
        <SvgTarget target="Operator" :height="20" :width="20" color1="#808080" class="flex justify-center">
        </SvgTarget>
        <div class="flex flex-col">
          <pre class="leading-5 text-base font-sans text-LightGrey font-medium">
The venue’s page reserved
for Event Organiser
in their operator.</pre>
          <p class="text-xs mt-2 text-Blue underline font-book cursor-pointer">Show preview</p>
        </div>
      </div>

    </div>

<div class="flex mt-6">
  <div class="flex-[0.7] flex flex-col gap-2">
    <p class="text-White font-black text-base">PLACES TO EXPLORE</p>
    <p class="text-LightGrey font-medium text-base">Play a role in tourism, by inviting event attendees help the local places around.</p>

  </div>
  <div class="flex-[0.3] justify-end flex items-end">
      <button
        class="text-left pl-6 pr-6 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10">
       
        Add Places
      </button>
    </div>
</div>

<div name="separateEvent" class="h-[2px] w-full bg-LightRock mt-4"></div>

<div class="flex font-sans font-medium text-xl text-white mt-4 gap-16">
<div class="flex items-center gap-4">
  <SvgTarget target='mcdoLogo'></SvgTarget>
  <div class="font-medium">McDonalds</div>
</div>

<div class="flex items-center gap-4">
  <img class="w-[72px] h-[72px] rounded-2xl" src='../../../core/assets/img/MuseeFabre.png'>
  <div class="font-medium">Musée Fabre</div>
</div>

<div class="flex items-center gap-4">
  <SvgTarget target='PAMLogo'></SvgTarget>
  <div class="font-medium">Prêt à Manger</div>
</div>
</div>

    <div name="headerEvent" class="flex items-end justify-between mt-18">
      <p class="text-xl text-LightGrey font-black leading-none">FEATURES</p>
    </div>
    <div class="h-0.5 w-full bg-Gravel mt-3"></div>

    <div class="flex mt-6">
  <div class="flex-[0.7] flex flex-col gap-2">
    <p class="text-White font-black text-base">PUBLIC</p>
    <pre class="text-LightGrey font-medium text-base font-sans">
These features will be seen by any user when visiting your venue’s profile, on Reave Maps for example.
They will of course also be seen by potential organisers.</pre>

  </div>
  <div class="flex-[0.3] justify-end flex items-end">
      <button @click="addPrivateFeature"
        class="text-left pl-6 pr-6 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10">
       
        Add Public Feature
      </button>
    </div>
</div>

<div name="separateEvent" class="h-[2px] w-full bg-LightRock mt-4"></div>

<div class="flex gap-[60px]">
<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="TotalCapacity" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Total Capacity</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
The adidas Arena can host
up to 40k spectators.</pre>
    <div class="flex gap-[6px] font-medium ">
      <SvgTarget target="Seats" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
Up to 30k seats.
    </div>
    <div class="flex gap-[6px] font-medium">
      <SvgTarget target="Standing" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
Up to 10k seats.
    </div>
    <div class="flex gap-[6px] font-medium">
      <SvgTarget target="DisabledPlaces" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
Up to 240 seats.
    </div>

  </div>
</div>

<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="Parking" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Parking</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
We offer underground
& outdoors parking.</pre>
    <div class="flex gap-[6px] font-medium ">
      <SvgTarget target="Car" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
8000 car slots.
    </div>
    <div class="flex gap-[6px] font-medium">
      <SvgTarget target="Motorbikes" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
500 motorbikes slots.
    </div>
    <div class="flex gap-[6px] font-medium">
      <SvgTarget target="Bicycle" :height="20" :width="20" 
      color1="#808080" class="flex justify-center"></SvgTarget>
80 bicycle slots.
    </div>

  </div>
</div>
</div>

<div class="flex mt-11">
  <div class="flex-[0.7] flex flex-col gap-2">
    <p class="text-White font-black text-base">PRIVATE</p>
    <p class="text-LightGrey font-medium text-base">These features will only be seen by potential organisers in their operator when searching for venues for their events.</p>

  </div>
  <div class="flex-[0.3] justify-end flex items-end">
      <button @click="addPrivateFeature"
        class="text-left pl-6 pr-6 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10">
       
        Add Private Feature
      </button>
    </div>
</div>

<div name="separateEvent" class="h-[2px] w-full bg-LightRock mt-4"></div>

<div class="flex gap-[60px]">
<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="Backstage" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Backstage</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
4 Bathrooms.
12 Makeup rooms.</pre>
  </div>
</div>

<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="Press" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Press</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
We have a 80m²
press room available.</pre>
   

  </div>
</div>
</div>



    <div name="headerEvent" class="flex items-end justify-between mt-10">
      <p class="text-xl text-LightGrey font-black leading-none">CAPABILITIES</p>
      <button @click="addPrivateFeature"
        class="text-left pl-6 pr-6 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10">
        
        Add Capability
      </button>
    </div>
    
    <div class="h-0.5 w-full bg-Gravel mt-3"></div>

    <pre class="text-LightGrey font-medium text-base mt-4 font-sans">
Add the services you can offer in addition to the venue’s features. (example: security)
Capabilities are only seen by potential organisers in their operator when searching for venues for their events.</pre>


<div class="flex gap-[60px]">
<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="Security" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Security</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
Staff place indoors &
outdoors and camera system.</pre>
  </div>
</div>
</div>



    <div name="headerEvent" class="flex items-end justify-between mt-10">
      <p class="text-xl text-LightGrey font-black leading-none">CONDITIONS</p>
      <button @click="addPrivateFeature"
        class="text-left pl-6 pr-6 py-1 my-0.5 flex items-center text-base font-black text-Anthracite bg-white rounded-full h-10">
        
        Add Condition
      </button>
    </div>
    <div class="h-0.5 w-full bg-Gravel mt-3"></div>

    <pre class="text-LightGrey font-medium text-base mt-4 font-sans">
Add the conditions on which only you sign contracts with Organisers to host their events.
Conditions are only seen by potential organisers in their operator when searching for venues for their events.</pre>


<div class="flex gap-[60px]">
<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="StageEngineering" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Stage Engineering</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
We build the stage for you
based on a negotiated
stage design plan.</pre>
  </div>
</div>

<div class="flex font-sans text-Gravel flex-col mt-6 ml-5">
  <div class="flex gap-2">
    <SvgTarget target="SoundEngineering" :height="20" :width="20" color1="white" class="flex justify-center items-center"></SvgTarget>
    <div class="text-white text-H4 font-medium">Sound Engineering</div>
  </div>
  <div class="flex flex-col mt-3 gap-3  text-base font-sans">
    <pre class=" font-medium text-base font-sans">
You use our sound engineers,
equipment & systems.</pre>
   

  </div>
</div>
</div>

<ModalClear :open="openAdd" @action="close()">
  
  <XButton36
    @click.prevent="closeModal()"
    class="absolute right-0 top-2 rounded-full cursor-pointer px-3 z-[9999]">
  </XButton36>

  <img class="cursor-pointer" src="@assets/img/AddVenueFeature.png">
  
  
  </ModalClear>


    <ModalClear :open="open" @action="close()">
      <Published v-if="modalView === 'publish'" :data="data" @action="close"></Published>
      <CropperEvent v-if="selectedPic !== null" :data="data" :src="selectedPic" :venueId=this.$route.params.id @callFromCrop="getBackendImage"
        @closeAction="closeCropper" />
    </ModalClear>
  </div>
</template>
  
<script>
//components
import XButton36 from "@components/buttons/XButton36.vue";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import SvgTarget from "../SvgTarget.vue";
import InputModel from "@components/inputs/InputModel.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import { PencilIcon } from "@heroicons/vue/outline";

import ModalClear from "@components/modal/ModalClear.vue";
import Published from "@components/modal/projectId/Published.vue";

import VenueServices from "@axios/services/venueServices";
import UploadServices from "@axios/services/uploadServices";
import CropperEvent from "../cropper/CropperEvent.vue";
import ImgFormated from "../img/ImgFormated.vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MenuButton,
    Menu,
    MenuItems,
    MenuItem,
    XButton36,
    Button40Slot,
    SvgTarget,
    InputModel,
    PencilIcon,
    ModalClear,
    Published,
    CropperEvent,
    ImgFormated,
    ChevronUpIcon
  },
  props: ["data", "yourPerm"],
  data() {
    return {
      venueNameValue : this.data.name,
      streetValue : this.data.address.street,
      cityValue : this.data.address.city,
      pCodeValue : this.data.address.pcode,
      countryValue : this.data.address.country,

      imageURL: null,
      selectedOption: "Per Hour",
      isMenuOpen: false,
      open: false,
      openAdd : false,
      edit: false,
      editLocation: false,
      selectedPic: null,
      modalView: "",
      picUpload: null,
      img: "",
      errors: [],
      chooseTime: ['Per Hour', 'Per Day', 'Per Event', 'Revenue Commission'],
      name: {
        label: "NAME",
        name: "name",
        type: "text",
        value: "",
      },
      price: {
        label: "PRICE",
        placeholder: 'Price',
        name: "label",
        type: "textarea",
        value: "",
      },
      description: {
        label: "VENUE DESCRIPTION",
        name: "description",
        type: "textarea",
        value: "",
      },
      venueName: {
        label: "VENUE NAME",
        placeholder: 'Venue name',
        name: "venueName",
        type: "text",
        value: "",
      },
      address: {
        label: "VENUE ADDRESS",
        placeholder: 'Street',
        name: "address",
        type: "text",
        value: "",
      },
      city: {
        placeholder: "City",
        name: "city",
        type: "text",
        value: "",
      },
      cp: {
        placeholder: "PCode",
        name: "cp",
        type: "text",
        value: "",
      },
      country: {
        placeholder: "Country",
        name: "country",
        type: "text",
        value: "",
      },
    };
  },
  computed: {
  customBg() {
    return {
      'background-image': `url('${this.imageURL}')`,
      'background-size': 'contain',
      'background-repeat': 'no-repeat',
    };
    
  },
},
  methods: {
    publish() {
      let body = { _id: this.$route.params.id };
      VenueServices.publishVenue(body);
      this.open = true;
      this.modalView = 'publish';

    },

    addPrivateFeature() {
      this.openAdd = true;

    },

    async sendAddressDataVenue() {
      const venueId = this.$route.params.id;
      const venueName = this.venueNameValue;
      const street = this.streetValue;
      const city = this.cityValue;
      const pCode = this.pCodeValue;
      const country = this.countryValue;
      await VenueServices.sendAddressData(venueId, venueName, street, city, pCode, country);
      location.reload();

    },
    selectOption(option) {
      this.selectedOption = option;
    },

    onFileSelected(event) {
      this.picUpload = event.target.files[0];
      const venueId = this.$route.params.venueId;
      this.selectedPic = URL.createObjectURL(this.picUpload);
      console.log('selectedPic after onFile : ', this.selectedPic);
      this.open = true;
      // Reset input to select a picture again
      this.$refs.inputFile.value = null;
    },
    async getBackendImage() {
      const imageURL2 = this.data.primaryPic;
      if (imageURL2 != ""){
      let result = await UploadServices.getImageFromBackend(imageURL2, 'venue');
      this.imageURL = result;
    }},

    goBack() {
      this.$router.back();
    },
    close() {
      this.selectedPic = null;
      this.open = false;
      this.picUpload = null;
      this.modalView = "";
    },
    closeModal() {
      this.openAdd = false;
    },

    closeCropper() {
      this.selectedPic = null;
      this.open = false;
      console.log('selected pic : ', this.selectedPic);
      this.picUpload = null;
      // this.modalView = "";
    }
  },
  mounted() {
    // this.name.value = this.data.name;
    // this.data.venueName ? (this.venueName.value = this.data.venueName) : "";
    // this.data.address ? (this.address.value = this.data.address) : "";
    // this.data.city ? (this.city.value = this.data.city) : "";
    // this.data.cp ? (this.cp.value = this.data.cp) : "";
    // this.data.country ? (this.country.value = this.data.country) : "";
    this.getBackendImage();
  },
};
</script>
  