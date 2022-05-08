import "../../stylesheets/App.scss";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import Home from "../Travels";
import About from "../About";

const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname);

  const [burgerDown, setBurgerDown] = useState(null);

  useEffect(() => {
    setPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="font-sans h-screen grid grid-cols-2 content-start text-black">
        <div className="col-span-2 max-h-20 z-10 flex sticky top-0 justify-between p-4 bg-red-50">
          <div className="flex font-bold text-3xl items-center">
            <div>DWU Reviews</div>
          </div>
          <div className="burger-parent w-12 tiny:hidden h-9 py-1.5 cursor-pointer rounded-md">
            <div
              onClick={() => setBurgerDown((prevDown) => !prevDown)}
              className="text-center"
            >
              <i class="fa-solid fa-bars fa-2xl"></i>
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
          <div className="hidden tiny:flex text-lg font-bold items-center">
            <NavLink
              to="/about"
              className={
                page === "/about"
                  ? "shadow-lower mr-4"
                  : "mr-4 hover:shadow-lower"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/"
              className={
                page === "/" ? "shadow-lower mr-4" : "mr-4 hover:shadow-lower"
              }
            >
              Travels
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
