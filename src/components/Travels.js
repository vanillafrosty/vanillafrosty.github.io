import { useState } from "react";
import Map from "./Map";
import "../stylesheets/Travels.scss";
import useWindowDimensions from "../utils/windowResize";
import Burger from "./helper/Burger";

const TravelsPage = () => {
  const [clicked, setClicked] = useState(null);
  const { width } = useWindowDimensions();

  return (
    <div className="map-container">
      <Map />
      <div className="map-floater bg-zinc-50 border border-solid border-slate-900 rounded-md py-1 pr-1 pl-2.5">
        <div className="flex font-bold text-3xl items-center">
          <div className="mr-1">DWU Reviews</div>
        </div>
        <Burger />
      </div>
      <div
        className={`${clicked ? "overlay-max overflow-scroll" : "overlay-min"}`}
        style={
          clicked
            ? {}
            : {
                marginLeft: (width - 50) / 2,
                marginRight: (width - 50) / 2,
              }
        }
      >
        <div
          onClick={() => setClicked((prevClicked) => !prevClicked)}
          className="extender"
        >
          button clicker
        </div>
        <div className={clicked ? "" : "hidden"}>
          HELLO WORLDHELLO WORLD HELLO WORLDHELLO WORLD HELLO WORLDHELLO WORLD
          HELLO WORLDHELLO WORLD
        </div>
      </div>
    </div>
  );
};

export default TravelsPage;
