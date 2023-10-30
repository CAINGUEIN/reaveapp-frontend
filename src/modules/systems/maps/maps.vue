<template>
  <div id="reaveMaps" class="span9 h-full">
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

    <!-- LEFT SIDE CARD (DEPRECATED)
    <div id="rmLayoutLeft">
      <img src="" id="rmLayoutLeftImg" />
    </div>
    -->

    <input id="rmSearch" type="text" placeholder="🔎 Search" />
  </div>
</template>

<script>
  import "@core/assets/leaflet.css";
  import EventServices from "@axios/services/eventServices";
  let map = null;
  export default {
    mounted() {
      console.log('Maps mounted');
      const position = document.getElementById("rmPosition");
      import('leaflet').then((L) => {
        map = L.map('map').setView([48.839220, 2.377760], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        putVenuesOnMap();

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

      function addVenue(venue) {
        //marker setup
        var customIcon = L.icon({
          iconUrl: 'https://media.discordapp.net/attachments/1036309161140572160/1168296298508718211/Accor_Arena.png?ex=65513fb7&is=653ecab7&hm=746de807dfb2bba52485cca85eb3fdaf8a584ba93a4bac174961272cc8b1be83&=&width=1440&height=406',
          imageUrl: 'https://media.discordapp.net/attachments/696115202185232497/1163095612414238811/kcx.png?ex=653e5433&is=652bdf33&hm=6421b0e3e0b5a0369322440cab52ab9f5bcb91483c023c22d0268cf9261f9b29&=',
          iconSize: [150, 37], // taille de l'icône
          iconAnchor: [75, 18], // ancre de l'icône
        });

        //marker creation
        var coords = [venue.address.coordonates.latitude, venue.address.coordonates.longitude]; // Latitude et longitude
        var marker = L.marker(coords, {
          icon: customIcon
        }).addTo(map);

        //popup setup&creation
        var venueIllustration = 'URL_FOR_YOUR_IMAGE'; // Assign your image URL to this variable
        marker.bindPopup(
          `<img id="rmImgPopup" src="${venueIllustration}" /><p id="rmPopup"> <b> KCX3 </b><br/> Paris, France </p>`
        );
      }


      async function putVenuesOnMap() {
        let result = await EventServices.searchPersonalVenueOperator();
        if (result.data.success) {
          let venues = result.data.data;
          for (let i = 0; i < venues.length; i++) {
            console.log(venues[i].address.coordonates.latitude, venues[i].address.coordonates.longitude);
            addVenue(venues[i]);
          }
        }
      }

    },
  };
</script>

<style lang="scss" scoped>
  @import "@core/assets/leaflet.css";
</style>