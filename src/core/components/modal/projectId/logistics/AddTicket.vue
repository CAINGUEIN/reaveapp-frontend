<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <h2 class="text-white">&lsaquo;</h2>
    </button>
    <XButton36
      class="absolute right-0 z-10"
      @click.prevent="closeModal()"
    ></XButton36>
    <div class="pt-12 flex flex-col" v-if="etape === 1">
      <h4 class="text-center">What’s the name of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <InputModel
        class="mt-6"
        :data="cathegory"
        v-model="cathegory.value"
        :errors="errors[cathegory.name]"
      >
      </InputModel>
      <button
        :class="
          cathegory.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="cathegory.value !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 2">
      <h4 class="text-center">What’s the price of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <PriceInputModel
        class="mt-6"
        :data="price"
        v-model="price.value"
        :errors="errors[price.name]"
      >
      </PriceInputModel>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="price.value !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 3">
      <h4 class="text-center">What’s the colour of</h4>
      <h4 class="text-center">this Ticket Category?</h4>
      <label
        class="flex text-H4 text-White font-black leading-none my-4"
        for=""
      >
        MODEL
      </label>
      <div style="display: flex; justify-content: center; align-items: center; width: 100%;" v-if="model">
        <video id="videoI" src="/img/diamondticket.mp4" autoplay loop style="width: 70%; height: auto; object-fit: cover;"></video>
        <!-- <canvas id="videoT" width="400" height="300"></canvas> -->
      </div>
      <div class="flex items-start self-start gap-3 items-center">
        <SvgTarget color1="#BEBEBE" class="m-auto" target="Conceptor">
        </SvgTarget>
        <label class="underline cursor-pointer" for="modelFileInput">Upload 3d File</label>
        <input class="hidden" type="file" @change="uploadModel($event)" id="modelFileInput">
      </div>
      <label
        class="flex text-H4 text-White font-black leading-none my-4 mt-8"
        for=""
      >
        COLOUR
      </label>
      <div class="flex justify-between items-center">
        <div class="flex gap-2 flex-col">
          <div class="flex space-x-2">
            <div
              v-for="item in colorArray"
              class="h-6 w-6 rounded"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            ></div>
          </div>
          <div class="flex space-x-2">
            <div
              v-for="item in colorArrayBis"
              class="h-6 w-6 rounded"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            ></div>
          </div>
        <div class="flex items-start my-2 self-start gap-3 items-center">
          <SvgTarget color1="#BEBEBE" class="m-auto" :height="32" :width="32" target="Colour">
          </SvgTarget>
          <label class="underline cursor-pointer">Pick a custom color</label>
        </div>

        </div>
      </div>

      <button
        :class="color !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="color !== '' ? etape++ : ''"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
    <div class="pt-12 flex flex-col" v-if="etape === 4">
      <h4 class="text-center">How many tickets do you</h4>
      <h4 class="text-center">want sell from this category?</h4>
      <label
        class="flex text-H4 text-White font-black leading-none mt-6"
        for=""
      >
        TYPE
      </label>
      <p class="mt-1">Standing or Sitting?</p>

      <div class="switchParent">
        <input type="checkbox" v-model="enabled" class="switch" id="stand">
        <div class="switch_1_ON" v-if="!enabled">
          <BootcampsVue color1="#111111" width="24" height="24" />
        </div>
        <div class="switch_1_OFF" v-else >
          <BootcampsVue color1="#404040" width="24" height="24" />
        </div>
        <div class="switch_2_ON" v-if="enabled">
          <StandingVue color1="#111111" width="24" height="24"  />
        </div>
        <div class="switch_2_OFF" v-else>
          <StandingVue :color1="'#404040'" width="24" height="24"/>
        </div>
      </div>
      <div v-if="!enabled" class="flex justify-between items-center">
        <div class="flex w-1/2 space-x-2">
          <InputModel
            class="mt-6"
            :data="column"
            v-model="column.value"
            :errors="errors[column.name]"
          >
          </InputModel>
          <InputModel
            class="mt-6"
            :data="row"
            v-model="row.value"
            :errors="errors[row.name]"
          >
          </InputModel>
        </div>
        <div class="mt-12 mr-4">
          <p class="">Number of Seats</p>
          <p class="text-White font-bold">{{ column.value * row.value }}</p>
        </div>
      </div>
      <div v-else>
        <InputModel
          class="mt-6"
          :data="quantities"
          v-model="quantities.value"
          :errors="errors[quantities.name]"
        >
        </InputModel>
      </div>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full h-16 px-10 mx-auto mt-6"
        @click.prevent="submit()"
      >
        <h4 class="text-black">Continue</h4>
      </button>
    </div>
  </div>
</template>

<script>
//components
import InputModel from "@components/inputs/InputModel.vue";
import PriceInputModel from "@components/inputs/PriceInputModel.vue";
import XButton36 from "@components/buttons/XButton36.vue";
import EventServices from "@axios/services/eventServices";
import Button40Slot from "@components/buttons/Button40Slot.vue";
import { RefreshIcon } from "@heroicons/vue/outline";
import { Switch } from "@headlessui/vue";
import SvgTarget from "../../../SvgTarget.vue";
import { nextTick } from 'vue';
import StandingVue from '../../../../assets/icons/Standing.vue';
import BootcampsVue from '../../../../assets/icons/Bootcamps.vue';


export default {
  components: {
    XButton36,
    InputModel,
    PriceInputModel,
    Button40Slot,
    RefreshIcon,
    Switch,
    SvgTarget,
    StandingVue,
    BootcampsVue
  },
  props: ["data", "yourPerm", "action"],
  data() {
    return {
      etape: 1,
      cathegory: {
        label: "Category name",
        placeholder: "Name",
        name: "cathegory",
        type: "text",
        value: "",
      },
      price: {
        label: "PRICE",
        placeholder: "0,00",
        name: "price",
        type: "number",
        value: "",
        class: "text-center",
      },
      colorArray: [
        '1ABC9C',
        '5BFFA1',
        '71C6FF',
        '9B59B6',
        'E91E63',
        'FFB800',
        'E74C3C',
        'BEBEBE'
      ],
      colorArrayBis: [
        '005B14',
        '00AE40',
        '0066FF',
        'CD6DFB',
        '7500BD',
        'FF7A30',
        'F82E2E',
        '505050',
      ],
      color: "",
      type: "",
      model: false,
      column: {
        label: "COLUMNS",
        placeholder: "12",
        name: "column",
        type: "number",
        value: "",
      },
      row: {
        label: "ROWS",
        placeholder: "12",
        name: "row",
        type: "number",
        value: "",
      },
      quantities: {
        label: "QUANTITIES",
        placeholder: "12",
        name: "quantities",
        type: "number",
        value: "",
      },
      errors: {},
      enabled: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("action");
    },
    generateColor() {
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      return randomColor;
    },
    refreshColor() {
      this.colorArray = [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ];
      this.colorArrayBis = [
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
        this.generateColor(),
      ];
    },
    uploadModel(event) {
      console.log(event)
      this.model = true
      // nextTick(() => {
      //   this.draw()
      // })
    },
    draw() {
      const videoUrl = "/img/ticketLogo.mp4"; // Remplacez par le lien direct vers votre vidéo
      const canvas = document.getElementById('videoT');
      console.log(canvas)
      const ctx = canvas.getContext('2d');
      const video = document.createElement('video');
      video.src = videoUrl;

      video.addEventListener('loadedmetadata', () => {
        console.log("lodaded video")
        video.play()

        this.processFrames(video, ctx);
      });

      video.addEventListener('ended', () => {
        video.pause();
      }); 

      video.addEventListener('play', () => {
        this.updateCanvas(video, ctx);
      });

      video.load();
    },
    processFrames(video, ctx) {
      // if (video.paused || video.ended) {
      //   return;
      // }

      ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);

      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;


      for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];


        if (red === 1 && green === 1 && blue === 1) {
          data[i + 3] = 0; // Définir la transparence à 0 pour rendre le pixel transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);

      requestAnimationFrame(() => {
        this.processFrames(video, ctx);
      });
    },
    updateCanvas(video, ctx) {
      if (video.paused || video.ended) {
        return;
      }

      ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);

      requestAnimationFrame(() => {
        this.updateCanvas(video, ctx);
      });
    },
    async submit() {
      console.log(this.data._id);

      let body = {
        project_id: this.data._id,
        quantities: this.quantities.value,
        cathegory: this.cathegory.value,
        price: this.price.value,
        color: this.color,
        type: this.type,
        column: this.column.value,
        row: this.row.value,
      };
      if (body.quantities === "") {
        body.quantities = body.row * body.column;
      }
      if (this.enabled === false) {
        body.type = "Sitting";
      } else {
        body.type = "Standing";
      }
      let result = await EventServices.createTicketForEvent(body);
      if (result.data.success) {
        this.$emit("action", "update");
      }
    },
  },
};
</script>

<style scoped>

video {
  filter: url(#fff)
}

/* svg {
  display: initial;
} */


/* #stand {
    display: none;
} */

/* #stand:not(:checked)~label.checkbox_true {
    display: none;
}

#stand:not(:checked)~label.checkbox_false {
    display: inline;
}

#stand:checked~label.checkbox_true {
    display: inline;
}

#stand:checked~label.checkbox_false {
    display: none;
} */

span.selected {
    text-decoration: underline;
}



:root{
    --switch-height: 50px;
    --switch-width: 100px;
    --switch-knob-diameter: 45px;
}


.switch{
    display: block;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 95px;
    height: 50px;
    background-color: #1A1A1A !important;
    background-image: none !important;
    border-radius: calc(50px / 2);
    position: relative;
    border: none;
}




.switchParent {
    margin: 4px 0;
    width: 95px;
    height: 50px;
    position: relative;
}

.switch_1_ON, .switch_1_OFF, .switch_2_ON, .switch_2_OFF {
  width: 38px;
  top: 6px;
  height: 38px;
  position: absolute;
  border-radius: 19px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switchParent > *:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.switch_1_ON, .switch_1_OFF {
  left: 6px;
}

.switch_1_ON, .switch_2_ON {
  background-color: white;
}

.switch_2_ON, .switch_2_OFF {
  right: 6px;
}



</style>


