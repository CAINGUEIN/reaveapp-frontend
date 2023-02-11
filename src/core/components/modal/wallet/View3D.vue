<template>
  <div :id="'viewModal' + data" class=""></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export default {
  props: ["data", "color"],
  props: {
    data: {},
    color: {},
    w: {
      type: Number,
      default: 450
    },
    h: {
      type: Number,
      default: 450*1.15
    },
  },
  data() {
    return {};
  },
  methods: {
    async init() {
      let scene = new THREE.Scene();
      scene.background = new THREE.Color("#111111");
      let camera = new THREE.PerspectiveCamera(65, 1, 1, 2000);
      camera.position.set(0, 0, 100);
      scene.add(camera);

      let colorRender = new THREE.Color("#"+this.color);

      let light = new THREE.SpotLight(colorRender, 10, 35);
      light.position.set(0, 0, 20);
      /*light.castShadow = true;
      light.shadow.mapSize.width = 5120; // default
      light.shadow.mapSize.height = 5120; // default
      light.shadow.camera.near = 1; // default
      light.shadow.camera.far = 5000; // default */
      scene.add(light);

      let light2 = new THREE.SpotLight(colorRender, 1);
      light2.position.set(0, 0, 80);
      scene.add(light2);

      let light3 = new THREE.SpotLight(0xaa1010, 20, 130);
      light3.position.set(-60, 100, 0);
      scene.add(light3);

      let light5 = new THREE.SpotLight(0x110000, 30, 200);
      light5.position.set(60, -100, 0);
      scene.add(light5);

      let light4 = new THREE.SpotLight(colorRender, 3);
      light4.position.set(0, 0, -60);
      scene.add(light4);

      /*
     pour voir de ou vienne les source lumineuse
     let lightHelper = new THREE.DirectionalLightHelper(light, 1);
     scene.add(lightHelper);
     let lightHelper2 = new THREE.DirectionalLightHelper(light2, 1);
     scene.add(lightHelper2);
     let lightHelper3 = new THREE.DirectionalLightHelper(light3, 1);
     scene.add(lightHelper3);
     let lightHelper4 = new THREE.DirectionalLightHelper(light4, 1);
     scene.add(lightHelper4);
     let lightHelper5 = new THREE.DirectionalLightHelper(light5, 1);
     scene.add(lightHelper5);*/

      let renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(parseFloat(this.w) , parseFloat(this.h));
      document
        .querySelector("#viewModal" + this.data)
        .appendChild(renderer.domElement);

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", animate);

      let item = "";
      const loader = new GLTFLoader();
      loader.load(
        "../NFT_Card_v1.glb",
        (glb) => {
          item = glb.scene;
          item.scale.set(0.35, 0.35, 0.35, 0.35);
          item.position.set(0, 0, 0);
          scene.add(item);
          animate();
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened", error);
        }
      );
      function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
    },
  },
  async mounted() {
    await this.init();
  },
};
</script>
