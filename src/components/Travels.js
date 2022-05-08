import { useState } from "react";
import Map from "./Map";
import { NavLink } from "react-router-dom";
import "../stylesheets/Travels.scss";
import useWindowDimensions from "../utils/windowResize";

const TravelsPage = () => {
  const [clicked, setClicked] = useState(null);
  const [burgerDown, setBurgerDown] = useState(null);
  const { width } = useWindowDimensions();

  return (
    <div className="tester-container">
      <Map />
      <div className="tester-floater">
        <div className="flex font-bold text-3xl items-center">
          <div>DWU Reviews</div>
        </div>
        <div className="burger-parent w-12 h-9 py-1.5 cursor-pointer rounded-md">
          <div
            onClick={() => setBurgerDown((prevDown) => !prevDown)}
            className="text-center"
          >
            <i className="fa-solid fa-bars fa-2xl"></i>
          </div>
          <div
            className={`burger w-28 bg-white text-lg text-right font-bold border border-gray-900 rounded ${
              burgerDown ? "burger-down" : ""
            } ${burgerDown === false ? "burger-down burger-up" : ""}`}
          >
            <div className="hover:bg-slate-900 hover:text-white px-4 py-2 border-b border-slate-700">
              <NavLink to="/about">About</NavLink>
            </div>
            <div className="hover:bg-slate-900 hover:text-white px-4 py-2">
              <NavLink to="/">Travels</NavLink>
            </div>
          </div>
        </div>
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
