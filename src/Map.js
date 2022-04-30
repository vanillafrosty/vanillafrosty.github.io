import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const markers = {
//   features: [
//     {
//       id: 1,
//       name: "Cantina Mayahuel",
//       description: "Good spot for tacos and mezcal.",
//       geometry: {
//         type: "Point",
//         coordinates: [-75.546518086577947, 45.467134581917357],
//       },
//     },
//     {
//       id: 2,
//       name: "El Pescador Fish Market",
//       description: "Good spot for fish and seafood stuff.",
//       geometry: {
//         type: "Point",
//         coordinates: [32.8398052313514, -117.27631336345621],
//       },
//     },
//   ],
// };

const Map = () => (
  <MapContainer
    className="z-0 h-full"
    center={[32.76301228860241, -117.13063799019834]}
    zoom={12}
    scrollWheelZoom={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>
);

export default Map;
