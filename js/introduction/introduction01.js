
function initMap() {
    const myLatLng = { lat: 37.547584533691406, lng: 126.9456787109375 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      label: "위치",
      map,
      title: "Hello World!",
    });

  }
  
window.initMap = initMap;

