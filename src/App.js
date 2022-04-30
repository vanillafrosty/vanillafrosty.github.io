import "./App.css";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Travels";
import About from "./About";

const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname);

  useEffect(() => {
    setPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="h-screen grid grid-cols-2">
        <div className="col-span-2 max-h-20 z-10 flex justify-between p-4 bg-red-50">
          <div className="flex font-bold text-3xl items-center">
            <div>DWU Reviews</div>
          </div>
          <div className="flex text-lg items-center">
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
