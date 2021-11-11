import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="news" element={<div>News</div>} />
      <Route path="catalog" element={<div>Catalog</div>} />
    </Routes>
  );
}
