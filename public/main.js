/* PALLETES from front to base
Good - green
rgba(14, 185, 128, 0.5);
rgba(16, 236, 163, 1);
rgba(47, 221, 163, 0.7);
rgba(127, 255, 212, 0.8);

Moderate - yellow
rgba(185, 182, 14, 0.5);
rgba(236, 196, 16, 1);
rgba(221, 218, 47, 0.7);
rgba(255, 253, 127, 0.8);

Unhealthy for sensetive groups - orange
rgba(185, 111, 14, 0.5);
rgba(236, 141, 16, 1);
rgba(221, 160, 47, 0.7);
rgba(255, 195, 127, 0.8);

Unhealthy - red
rgba(185, 14, 14, 0.5);
rgba(236, 16, 16, 1);
rgba(221, 47, 47, 0.7);
rgba(255, 127, 127, 0.8);

Very unhealthy - violet
rgba(122, 6, 107, 0.5);
rgb(187, 6, 133);
rgba(215, 47, 221, 0.7);
rgba(251, 127, 255, 0.8);

Hazardous - dark violet
rgba(70, 5, 61, 0.5);
rgba(98, 4, 70, 1);
rgba(79, 17, 82, 0.7);
rgba(87, 42, 88, 0.8);
*/

fetch('http://localhost:3000/api/v1/southSanFranciscoRecord').
  then(res => res.json()).
  then(res => renderPage(res)
);
  
function renderPage(dataObj) {
  console.log(dataObj)

}