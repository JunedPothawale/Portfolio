import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserLayout from "../components/layout/UserLayout";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Credentials from "../pages/Credentials";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/credentials" element={<Credentials />} />
          </Route>
          <Route path="/admin" element=""></Route>
          <Route
            path="*"
            element={
              <div>
                404 Page not found <NavLink to="/">Home</NavLink>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
