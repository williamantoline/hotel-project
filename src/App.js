import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import Register from "pages/Register";
import Detail from "pages/Detail";
import AboutUs from "pages/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="hotels/:id" element={<Detail />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
