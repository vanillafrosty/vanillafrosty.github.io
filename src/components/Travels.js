import { useState } from "react";
import Map from "./Map";
import "../stylesheets/Travels.scss";
import useWindowDimensions from "../utils/windowResize";
import Burger from "./helper/Burger";

const TravelsPage = () => {
  const [clicked, setClicked] = useState(null);
  const { width } = useWindowDimensions();

  return (
    <div className="tester-container">
      <Map />
      <div className="tester-floater">
        <div className="flex font-bold text-3xl items-center">
          <div>DWU Reviews</div>
        </div>
        <Burger />
      </div>
      <div
        className={`${clicked ? "tester overflow-scroll" : "tester-gone"}`}
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
          className="button-clicker"
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
