const position = document.getElementById("position");

// Initialize the map
var map = L.map('map').setView([48.839220, 2.377760], 13); // [latitude, longitude], and zoom level
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//accorHotel
var customIcon = L.icon({
    iconUrl: 'venue.png', // Chemin vers votre image personnalisée
    iconSize: [32, 32], // Définissez la taille de l'icône
    iconAnchor: [16, 16], // Définissez l'ancre de l'icône
});
var accorHotelsArenaCoords = [48.839220, 2.377760]; // Latitude et longitude
var marker = L.marker(accorHotelsArenaCoords, {
    icon: customIcon
}).addTo(map);
marker.bindPopup('<img id="imgPopup" src="./kcx.png" /><p id="pPopup"> <b> KCX3 </b><br/> Paris, France </p>');

// Center the map on the user's location when the position button is clicked
position.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latlng = [position.coords.latitude, position.coords.longitude];
        map.setView(latlng, 13);
        L.marker(latlng, {
            icon: L.icon({
                iconUrl: "./loca.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41]
            })
        }).addTo(map);
    });
});