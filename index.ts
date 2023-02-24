

let map: google.maps.Map;
function initMap(): void {
  const myLatLng = { lat: 18.5001200, lng: -69.9885700 };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 10,
      center: myLatLng,
    }
  );

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
