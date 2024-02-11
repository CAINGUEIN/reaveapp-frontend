<template>
  <div id="reaveMaps" class="span9 h-full">
    <div id="map"></div>
    <div id="rmLayoutTop">
    </div>
      <button id="rmFilters"><Filters :width="24" :height="24"/></button>
    <div id="rmVenuesBar">
      <button class="venueType"><Events :width="24" :height="24" class="rmVenueTypeIcon"/>Events</button>
      <button class="venueType"><Quests :width="24" :height="24" class="rmVenueTypeIcon"/>Quests</button>
      <button class="venueType"><Venue :width="24" :height="24" class="rmVenueTypeIcon"/>Venues</button>
      <button class="venueType"><Cybercafes :width="24" :height="24" class="rmVenueTypeIcon"/>Cybercafés</button>
      <button class="venueType"><HQs :width="24" :height="24" class="rmVenueTypeIcon"/>HQs</button>
      <button class="venueType"><Stores :width="24" :height="24" class="rmVenueTypeIcon"/>Stores</button>
    </div>
    <div id="topRightMenu">
      <button class="topRightButton"><Friends :width="24" :height="24"/></button>
      <button class="topRightButton"><Save :width="24" :height="24"/></button>
    </div>
    <button id="rmPosition"><Position :width="24" :height="24"/></button>
    <div id="rmSearch">
      <img id="rmSearchIcon" src="@core\components\modal\Search.vue">
      <input id="rmSearchBar" type="text" placeholder="Search">
    </div>
  </div>
</template>
<script>
  //import of leaflet css
  import "@core/assets/leaflet.css";
  //import of the services
  import EventServices from "@axios/services/eventServices";
  import VenueServices from "@axios/services/venueServices";
  //import of the icons
  import Filters from "@assets/icons/Filters.vue";
  import Events from "@assets/icons/Events.vue";
  import Quests from "@assets/icons/Quests.vue";
  import Venue from "@assets/icons/Operator/Venue.vue";
  import Cybercafes from "@assets/icons/Cybercafes.vue";
  import HQs from "@assets/icons/HQs.vue";
  import Stores from "@assets/icons/Stores.vue";
  import Friends from "@assets/icons/Friends.vue";
  import Save from "@assets/icons/Save.vue";
  import Position from "@assets/icons/Position.vue";
  import Search from "@assets/icons/Search.vue";
  //global variables declaration
  let map = null;
  let isPositionDefined = false;

  //export of the icons
  export default {
    components: {
      Filters,
      Events,
      Quests,
      Venue,
      Cybercafes,
      HQs,
      Stores,
      Friends,
      Save,
      Position,
      Search,
    },
    mounted() {
      //map setup
      console.log('Maps mounted');
      const position = document.getElementById("rmPosition");
      import('leaflet').then((L) => {
        map = L.map('map').setView([48.839220, 2.377760], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Add all operator venues to the map
        putVenuesOnMap();

        // Center the map on the user's location when the position button is clicked
        position.addEventListener('click', function () {
          var positionMarker = 'src/core/assets/img/loca.png';
          navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            map.setView(latlng, 13);
            // Add a marker on the user's position if it's not already placed
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

      // Add a venue to the map
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
              <div id="rmPopupTicketButton" class="rmPopupButton"><img src="src/core/assets/icons/vanillaSVGs/Ticket.svg"></div>
              <div id="rmPopupAuctionButton" class="rmPopupButton"><img src="src/core/assets/icons/vanillaSVGs/Auctions.svg"></div>
            </div>
            <div id="rmPopupFriends">
              <div class="rmPopupFriend"><img src="src/core/assets/img/1.png" class="rmPopupFriend"/></div>
              <div class="rmPopupFriend"><img src="src/core/assets/img/2.png" class="rmPopupFriend"/></div>
              <div class="rmPopupFriend"><img src="src/core/assets/img/3.png" class="rmPopupFriend"/></div>
            </div>
          </div>
        </div>
        `, {
            //permet de décaler la popup a droite, et de faire en sorte qu'elle ne puisse pas se fermer
            closeButton: false,
            autoClose: false,
            closeOnClick: false,
            noHide: true,
            offset: [0, 40]
          }
        );
        //popup opening when created
        marker.openPopup();
      }

      // Add all operator venues to the map
      async function putVenuesOnMap() {
        let result = await VenueServices.searchPersonalVenueOperator();
        if (result.data.success) {
          let venues = result.data.data;
          for (let i = 0; i < venues.length; i++) {
            //adding the venue to the map
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