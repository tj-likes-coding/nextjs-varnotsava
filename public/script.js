// function initMap() {
//     // Specify the location coordinates
//     var myLatLng = {lat: 37.7749, lng: -122.4194}; // Replace with your desired coordinates

//     // Create a map centered at the specified coordinates
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: myLatLng,
//         zoom: 14 // Adjust the zoom level as needed
//     });

//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'Your Location' // Tooltip text when the marker is hovered
//     });
// }

// document.getElementById("map").onload = () => initMap;

document.querySelectorAll("header ul #menu a").forEach(elem => {
    let div = elem.querySelector("div"), interval;

    elem.addEventListener("mouseover", () => {
        interval = setInterval(() => {
            if(div.style.getPropertyValue("width") !== "100%") {
                div.style.width = Number(div.style.width.split("%")[0]) + 5 + "%";
            } else {
                remInterval(interval);
            }
        }, 10);
    });

    elem.addEventListener("mouseout", () => {
        div.style.width = "0%";
        remInterval(interval);
    });
});


function remInterval(interval) {
    clearInterval(interval);
}