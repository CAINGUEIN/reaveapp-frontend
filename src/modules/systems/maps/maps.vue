<template>
  <div id="reaveMaps" class="span9" style="height: 100%">
    <div id="map"></div>
    <div id="rmLayoutTop">
      <!-- Add content for the top section if needed -->
    </div>
    <button id="rmSettings">⚙️</button>
    <div id="rmVenuesBar">
      <button class="venueType">✨ Events</button>
      <button class="venueType">🏟️ Venues</button>
      <button class="venueType">🍔 Cybercafe</button>
      <button class="venueType">🏢 Company HQs</button>
      <button class="venueType">🏪 Stores</button>
    </div>
    <button id="rmPosition" @click="centerMapOnUser">📍</button>
    <div id="rmLayoutLeft">
      <img src="@/assets/kcx.png" id="rmLayoutLeftImg" alt="KCX Image" />
    </div>
    <input id="rmSearch" type="text" placeholder="🔎 Search" />
  </div>
</template>

<script>
  import "@core/assets/leaflet.css";
  import L from 'leaflet';
  import MapsServices from "@axios/services/mapsServices"

  export default {
    data() {
      return {
        map: null,
      };
    },
    methods: {
      initializeMap() {
        this.map = L.map('map').setView([48.839220, 2.377760], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);


      },
      centerMapOnUser() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const latlng = [position.coords.latitude, position.coords.longitude];
            this.map.setView(latlng, 13);
            console.log(JSON.stringify(latlng));
            MapsServices.updatePosition(JSON.stringify(latlng));
            const userMarker = L.marker(latlng, {
              icon: L.icon({
                iconUrl: "https://media.discordapp.net/attachments/696115202185232497/1163095644764905552/loca.png?ex=653e543a&is=652bdf3a&hm=4b86e179bc29064e9efbc1c7ef36ad2801dc94ff3c9a04a9a51cc226c3c4238e&=",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              }),
            }).addTo(this.map);
          });
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      },
    },
    mounted() {
      console.log('Maps mounted');
      this.initializeMap();
    },
  };
</script>

<style lang="scss" scoped>
  @import "@core/assets/leaflet.css";
</style>