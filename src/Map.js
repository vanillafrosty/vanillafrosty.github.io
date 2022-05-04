import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "./ExtendedLeaflet";

const Map = () => {
  const [markers, setMarkers] = useState([]);

  const loadData = async () => {
    const { markers } = await import("./data/markers.json");
    setMarkers(markers);
  };

  const createAwesomeIcon = () => {
    const dopeIcon = new L.AwesomeMarkers.Icon({
      icon: "fa-solid fa-wine-glass",
      markerColor: "pink",
    });

    return dopeIcon;
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
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
      {markers.map((el) => (
        <Marker
          key={el.id}
          position={el.geometry.coordinates}
          icon={createAwesomeIcon()}
        >
          <Popup>{el.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
