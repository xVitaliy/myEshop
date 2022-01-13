import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MyHome from "../../pages/MyHome/MyHome";

export default function Router() {
  return (
    <Routes>
      <Route path="/myhome" element={<Home />} />
      <Route path="/" element={<MyHome />} />
      <Route path="news" element={<div>News</div>} />
      <Route path="catalog" element={<div>Catalog</div>} />
    </Routes>
  );
}
