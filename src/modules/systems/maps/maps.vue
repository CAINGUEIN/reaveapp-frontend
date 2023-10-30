<template>
  <div id="reaveMaps" class="span9" style="height: 100%">
    <div id="map"></div>
    <div id="rmLayoutTop">
    </div>
    <button id="rmSettings">⚙️</button>
    <div id="rmVenuesBar">
      <button class="venueType">✨ Events</button>
      <button class="venueType">🏟️ Venues</button>
      <button class="venueType">🍔 Cybercafe</button>
      <button class="venueType">🏢 Company HQs</button>
      <button class="venueType">🏪 Stores</button>
    </div>
    <button id="rmPosition">📍</button>
    <div id="rmLayoutLeft">
      <img src="./img/kcx.png" id="rmLayoutLeftImg" />

    </div>
    <input id="rmSearch" type="text" placeholder="🔎 Search" />
  </div>
</template>

<script>
  import "@core/assets/leaflet.css";
  export default {
    mounted() {
      console.log('Maps mounted');
      const position = document.getElementById("rmPosition");
      import('leaflet').then((L) => {
        const map = L.map('map').setView([48.839220, 2.377760], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //accorHotel
        var customIcon = L.icon({
          iconUrl: 'https://cdn.discordapp.com/attachments/1036316227179647086/1168295909281513523/Accor_Arena.png?ex=65513f5a&is=653eca5a&hm=b0fd41c720f6b2c6fb8e68151ee27736c61bd7b9d0eb050a0ba0fac98451fa06&',
          iconSize: [200, 50], // Définissez la taille de l'icône
          iconAnchor: [50, 12], // Définissez l'ancre de l'icône
        });
        var accorHotelsArenaCoords = [48.839220, 2.377760]; // Latitude et longitude
        var marker = L.marker(accorHotelsArenaCoords, {
          icon: customIcon
        }).addTo(map);
        marker.bindPopup(
          '<img id="rmImgPopup" src="https://media.discordapp.net/attachments/696115202185232497/1163095612414238811/kcx.png?ex=653e5433&is=652bdf33&hm=6421b0e3e0b5a0369322440cab52ab9f5bcb91483c023c22d0268cf9261f9b29&=" /><p id="rmPopup"> <b> KCX3 </b><br/> Paris, France </p>'
          );

        // Center the map on the user's location when the position button is clicked
        position.addEventListener('click', function () {
          navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            map.setView(latlng, 13);
            L.marker(latlng, {
              icon: L.icon({
                iconUrl: "https://media.discordapp.net/attachments/696115202185232497/1163095644764905552/loca.png?ex=653e543a&is=652bdf3a&hm=4b86e179bc29064e9efbc1c7ef36ad2801dc94ff3c9a04a9a51cc226c3c4238e&=",
                iconSize: [25, 41],
                iconAnchor: [12, 41]
              })
            }).addTo(map);
          });
        });
      });
    },
  };
</script>

<style lang="scss" scoped>
  @import "@core/assets/leaflet.css";
</style>