import L from "./extendedLeaflet";

const createAwesomeIcon = (options) => {
  const dopeIcon = new L.AwesomeMarkers.Icon(options);

  return dopeIcon;
};

const map = {
  Restaurant: createAwesomeIcon({
    icon: "fa-solid fa-utensils",
    markerColor: "blue",
  }),
  Marketplace: createAwesomeIcon({
    icon: "fa-solid fa-cart-shopping",
    markerColor: "green",
  }),
  Bar: createAwesomeIcon({
    icon: "fa-solid fa-martini-glass",
    markerColor: "red",
  }),
  Cafe: createAwesomeIcon({
    icon: "fa-solid fa-mug-hot",
    markerColor: "orange",
  }),
};

export default map;
