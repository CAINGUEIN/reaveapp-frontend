<template>
  <div class="span9" style="height: 100%">
    <div id="map"></div>
    <button id="settings">⚙️</button>
    <div id="venuesBar">
      <button class="venueType">✨ Events</button>
      <button class="venueType">🏟️ Venues</button>
      <button class="venueType">🍔 Cybercafe</button>
      <button class="venueType">🏢 Company HQs</button>
      <button class="venueType">🏪 Stores</button>
    </div>
    <button id="position">📍</button>
    <div id="layoutTop"></div>
    <div id="layoutLeft">
      <img src="./img/kcx.png" id="layoutLeftImg" />

    </div>
    <input id="search" type="text" placeholder="🔎 Search" />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Maps mounted');
      const position = document.getElementById("position");
      import('leaflet').then((L) => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //accorHotel
        var customIcon = L.icon({
          iconUrl: 'https://media.discordapp.net/attachments/696115202185232497/1163095405815402526/venue.png?ex=653e5402&is=652bdf02&hm=ded1a3ec732d1f2c141df05491927c5e5ff55949ac4bf2f08340154e19904384&=', // Chemin vers votre image personnalisée
          iconSize: [32, 32], // Définissez la taille de l'icône
          iconAnchor: [16, 16], // Définissez l'ancre de l'icône
        });
        var accorHotelsArenaCoords = [48.839220, 2.377760]; // Latitude et longitude
        var marker = L.marker(accorHotelsArenaCoords, {
          icon: customIcon
        }).addTo(map);
        marker.bindPopup(
          '<img id="imgPopup" src="https://media.discordapp.net/attachments/696115202185232497/1163095612414238811/kcx.png?ex=653e5433&is=652bdf33&hm=6421b0e3e0b5a0369322440cab52ab9f5bcb91483c023c22d0268cf9261f9b29&=" /><p id="pPopup"> <b> KCX3 </b><br/> Paris, France </p>');

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

<style lang="scss" scoped></style>