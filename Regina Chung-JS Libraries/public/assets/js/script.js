/*
 * 1. Glide.js - Hero slider
 * 2. Lightbox2 - Gallery viewer
 * 3. Leaflet - Interactive map
 * 4. AOS - Scroll animations
 */

document.addEventListener("DOMContentLoaded", function () {
  // Library 1: Glide.js - Hero Slider
  new Glide(".glide", {
    type: "carousel",
    autoplay: 3000,
    hoverpause: true,
  }).mount();

  // Library 2: Lightbox2 - Gallery Viewer
  lightbox.option({
    wrapAround: true,
  });

  // Library 3: Leaflet - Interactive Map
  var map = L.map("travel-map").setView([45.0, 10.0], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  var destinations = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Swiss Alps", coords: [46.8182, 8.2275] },
    { name: "Maldives", coords: [3.2028, 73.2207] },
    { name: "Tokyo", coords: [35.6762, 139.6503] },
  ];

  destinations.forEach(function (dest) {
    L.marker(dest.coords)
      .addTo(map)
      .bindPopup("<b>" + dest.name + "</b>");
  });

  // Library 4: AOS - Scroll Animations
  AOS.init({
    duration: 1000,
    once: true,
  });
});
