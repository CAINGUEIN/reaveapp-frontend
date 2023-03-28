<template>
  <div :id="'viewModal' + data" class=""></div>
</template>

<script>
import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
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
      camera.position.z = 3;
      scene.add(camera)

      let light = new THREE.AmbientLight("#FFFFFF", 0.8);
      scene.add(light);

      let renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(parseFloat(this.w) , parseFloat(this.h));
      document
        .querySelector("#viewModal" + this.data)
        .appendChild(renderer.domElement);

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", animate);


      // Chargement du fichier MTL
      var mtlLoader = new MTLLoader();
      mtlLoader.load("/Diamond_Ticket.mtl", function (materials) {
        // Chargement du fichier OBJ
        var objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load("/Diamond_Ticket.obj", function (object) {
          // Ajout de l'objet à la scène principale
          object.position.z = -5
          object.rotateX(Math.PI / 2)
          scene.add(object);
          scene.scale.set(1, 1, 1, 1);
        });
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
