<template>
  <div>
    <button
      v-if="etape > 1"
      class="absolute left-0 bg-DarkRock h-9 w-9 hover:bg-LightRock rounded-full px-3 z-10"
      @click.prevent="etape = etape - 1"
    >
      <SvgTarget :target="'Arrow'" class="rotate-180" />
    </button>
    <div class="pt-3 flex flex-col" v-if="etape === 1">
      <h4 class="text-center font-black">Name</h4>
      <InputModel
        class="mt-6 uppercase"
        :data="category"
        v-model="category.value"
        :errors="errors[category.name]"
      >
      </InputModel>
      <button
        :class="
          category.value.length >= 3
            ? 'bg-white'
            : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full px-5 py-1.5 mx-auto mt-6"
        @click.prevent="category.value !== '' ? etape++ : ''"
      >
        <p class="text-black font-black">Continue</p>
      </button>
    </div>
    <div class="pt-3 flex flex-col" v-if="etape === 2">
      <h4 class="text-center font-black">Price</h4>
      <PriceInputModel
        class="mt-6 uppercase"
        :type="'currency'"
        :data="price"
        v-model="price.value"
        :errors="errors[price.name]"
      >
      </PriceInputModel>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full px-5 py-1.5 mx-auto mt-6"
        @click.prevent="price.value !== '' ? etape++ : ''"
      >
        <p class="text-black font-black">Continue</p>
      </button>
    </div>
    <div class="pt-3 flex flex-col" v-if="etape === 3">
      <h4 class="text-center mb-8 font-black">Design</h4>
      <label
        class="flex text-H4 text-White font-black leading-none my-4"
        for=""
        v-if="!model"
      >
        MODEL
      </label>
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        "
        v-if="model"
      >
        <video
          id="videoI"
          src="/img/diamondticket.mp4"
          autoplay
          loop
          style="width: 70%; height: auto; object-fit: cover"
        ></video>
        <!-- <canvas id="videoT" width="400" height="300"></canvas> -->
      </div>
      <div class="flex self-start gap-3 items-center">
        <SvgTarget
          :width="24"
          :height="24"
          color1="#BEBEBE"
          class="m-auto"
          target="Conceptor"
        >
        </SvgTarget>
        <label
          class="underline cursor-pointer font-medium"
          for="modelFileInput"
          v-if="!model"
          >Upload 3D File</label
        >
        <label
          class="underline cursor-pointer font-medium"
          for="modelFileInput"
          v-if="model"
          >Change File</label
        >
        <input
          class="hidden"
          type="file"
          @change="uploadModel($event)"
          id="modelFileInput"
        />
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
              :key="item"
              class="h-6 w-6 rounded cursor-pointer"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            >
              <svg
                class="mt-1 mx-auto"
                v-if="item === color"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.71429L3.73888 11.4395C4.13271 12.1189 5.12012 12.1001 5.48773 11.4061L11 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div class="flex space-x-2">
            <div
              v-for="item in colorArrayBis"
              :key="item"
              class="h-6 w-6 rounded cursor-pointer"
              :style="'background: #' + item"
              :class="item === color ? 'border-2 border-White' : ''"
              @click.prevent="color = item"
            >
              <svg
                v-if="item === color"
                class="mt-1 mx-auto"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.71429L3.73888 11.4395C4.13271 12.1189 5.12012 12.1001 5.48773 11.4061L11 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        :class="color !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'"
        class="text-black rounded-full px-5 py-1.5 mx-auto mt-6"
        @click.prevent="color !== '' ? etape++ : ''"
      >
        <p class="text-black font-black">Continue</p>
      </button>
    </div>
    <div class="flex pt-3 flex-col" v-if="etape === 4">
      <h4 class="text-center font-black text-White">Quantity</h4>
      <div class="flex justify-between items-center">
        <div class="flex w-1/2 space-x-2 mt-8">
          <InputModel
            :paddingY="'h-12'"
            :fontBold="'font-bold'"
            :data="column"
            v-model="column.value"
            :errors="errors[column.name]"
          >
          </InputModel>
          <InputModel
            :paddingY="'h-12'"
            :fontBold="'font-bold'"
            :data="row"
            v-model="row.value"
            :errors="errors[row.name]"
          >
          </InputModel>
        </div>
        <div class="mt-12 mr-4">
          <p class="">Number of Seats</p>
          <p class="text-White text-left font-bold">
            {{ column.value * row.value }}
          </p>
        </div>
      </div>
      <button
        :class="
          price.value !== '' ? 'bg-white' : 'bg-Gravel cursor-not-allowed'
        "
        class="text-black rounded-full px-5 py-1.5 mx-auto mt-6"
        @click.prevent="submit()"
      >
        <p class="text-black font-black">Continue</p>
      </button>
    </div>
  </div>
</template>

<script>
//components
import InputModel from "@components/inputs/InputModel.vue";
import PriceInputModel from "@components/inputs/PriceInputModel.vue";
import EventServices from "@axios/services/eventServices";
import SvgTarget from "../../../SvgTarget.vue";
import StandingVue from "../../../../assets/icons/Standing.vue";
import BootcampsVue from "../../../../assets/icons/Bootcamps.vue";

export default {
  components: {
    InputModel,
    PriceInputModel,
    SvgTarget,
    StandingVue,
    BootcampsVue,
  },
  props: ["data", "yourPerm", "action"],
  data() {
    return {
      etape: 1,
      category: {
        label: "Ticket name",
        placeholder: "Name",
        name: " category",
        type: "text",
        value: "",
      },
      price: {
        label: "Ticket Price",
        placeholder: "120",
        name: "price",
        type: "number",
        value: "",
        class: "text-center",
      },
      colorArray: [
        "1ABC9C",
        "5BFFA1",
        "71C6FF",
        "9B59B6",
        "E91E63",
        "FFB800",
        "E74C3C",
        "BEBEBE",
      ],
      colorArrayBis: [
        "005B14",
        "00AE40",
        "0066FF",
        "CD6DFB",
        "7500BD",
        "FF7A30",
        "F82E2E",
        "505050",
      ],
      color: "",
      type: "",
      model: false,
      column: {
        label: "COLUMNS",
        placeholder: "0",
        name: "column",
        type: "number",
        value: "",
      },
      row: {
        label: "ROWS",
        placeholder: "0",
        name: "row",
        type: "number",
        value: "",
      },
      quantities: {
        label: "QUANTITIES",
        placeholder: "0",
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
      console.log(event);
      this.model = true;
      // nextTick(() => {
      //   this.draw()
      // })
    },
    draw() {
      const videoUrl = "/img/ticketLogo.mp4"; // Remplacez par le lien direct vers votre vidéo
      const canvas = document.getElementById("videoT");
      console.log(canvas);
      const ctx = canvas.getContext("2d");
      const video = document.createElement("video");
      video.src = videoUrl;

      video.addEventListener("loadedmetadata", () => {
        console.log("lodaded video");
        video.play();

        this.processFrames(video, ctx);
      });

      video.addEventListener("ended", () => {
        video.pause();
      });

      video.addEventListener("play", () => {
        this.updateCanvas(video, ctx);
      });

      video.load();
    },
    processFrames(video, ctx) {
      // if (video.paused || video.ended) {
      //   return;
      // }

      ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);

      const imageData = ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
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
        category: this.category.value,
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
  filter: url(#fff);
}

span.selected {
  text-decoration: underline;
}
</style>
