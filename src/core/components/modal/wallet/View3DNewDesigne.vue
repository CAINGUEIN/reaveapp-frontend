<template>
  <div :id="'viewModal' + data" class=""></div>
</template>

<script>
import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export default {
  props: ["data", "color"],
  props: {
    data: {},
    color: {},
    w: {
      type: Number,
      default: 450,
    },
    h: {
      type: Number,
      default: 450 * 1.15,
    },
  },
  data() {
    return {};
  },
  methods: {
    async init() {
      // Initialisation de la scène, de la caméra et du rendu
      var scene = new THREE.Scene();
      scene.background = new THREE.Color("#111111");
      let camera = new THREE.PerspectiveCamera(65, 1, 1, 2000);
      // Déplacement de la caméra pour voir la scène
      camera.position.z = 2;
      2;
      scene.add(camera);

      let colorRender = new THREE.Color("#"+this.color);
      let light = new THREE.AmbientLight(colorRender, 1);
      light.position.set(0, 0, 5);
      scene.add(light);

      let lightBack = new THREE.SpotLight(colorRender, 5, 10);
      lightBack.position.set(0, 0, -5);
      scene.add(lightBack);

      let lightFront = new THREE.SpotLight(colorRender, 10, 10);
      lightFront.position.set(0, 0, 5);
      scene.add(lightFront);

      let renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(parseFloat(this.w), parseFloat(this.h));
      document
        .querySelector("#viewModal" + this.data)
        .appendChild(renderer.domElement);

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", animate);

      // Chargement du fichier MTL
      var gltfLoader = new GLTFLoader();
      gltfLoader.load("/DiamondTicket1.gltf", function (gltf) {
        gltf.scene.position.z = -5;
        gltf.scene.rotateX(Math.PI / 2);
        scene.add(gltf.scene);
        scene.scale.set(1, 1, 1, 1);
      });

      // Boucle de rendu
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    },
  },
  async mounted() {
    await this.init();
  },
};
</script>
