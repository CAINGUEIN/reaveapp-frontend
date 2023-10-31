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
    <input id="rmSearch" type="text" placeholder="🔎 Search" />
  </div>
</template>

<script>
  import "@core/assets/leaflet.css";
  import EventServices from "@axios/services/eventServices";
  let map = null;
  let isPositionDefined = false;
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
          var positionMarker = 'src/core/assets/img/loca.png';
          navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            map.setView(latlng, 13);
            if (!isPositionDefined) {
              L.marker(latlng, {
                icon: L.icon({
                  iconUrl: positionMarker,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41]
                })
              }).addTo(map);
              isPositionDefined = true;
            }
          });
        });
      });

      function addVenue(venue) {
        var venueIllustration = 'src/core/assets/img/kcx3.png';
        var venueIcon = 'src/core/assets/img/defaultVenue.png';
        //marker setup
        var customIcon = L.icon({
          iconUrl: venueIcon,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });
        //marker creation
        var coords = [venue.address.coordonates.latitude, venue.address.coordonates.longitude];
        var marker = L.marker(coords, {
          icon: customIcon
        }).addTo(map);
        //popup setup&creation
        marker.bindPopup(`
        <div id="rmPinNeedle"></div>
        <div id="rmPopup">
          <img id="rmImgPopup" src="${venueIllustration}"/>
          <div id="rmPopupText">
            <div id="rmPopupTextTitle">
              ${venue.name}
            </div>
            <div id="rmPopupTextLocation">
              ${venue.address.city}, ${venue.address.country}
            </div>
          </div>
          <div id="rmPopupButtonsAndFriends">
            <div id="rmPopupButtons">
              <button id="rmPopupTicketButton" class="rmPopupButton">🎟️</button>
              <button id="rmPopupAuctionButton" class="rmPopupButton">🔨</button>
            </div>
            <div id="rmPopupFriends">
              <div class="rmPopupFriend"></div>
              <div class="rmPopupFriend"></div>
              <div class="rmPopupFriend"></div>
            </div>
          </div>
        </div>
        `, {
            closeButton: false,
            autoClose: false,
            closeOnClick: false,
            noHide: true,
            offset: [0, 40]
          } //permet de décaler la popup a droite, et de faire en sorte qu'elle ne puisse pas se fermer
        );
        marker.openPopup();
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