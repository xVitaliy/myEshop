import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MyHome from "../../pages/MyHome/MyHome";
import AllBooks from "../../pages/AllBooks/AllBooks";

export default function Router() {
  return (
    <Routes>
      <Route path="/myhome" element={<Home />} />
      <Route path="/" element={<MyHome />} />
      <Route path="/all-books" element={<AllBooks />} />
      <Route path="news" element={<div>News</div>} />
      <Route path="catalog" element={<div>Catalog</div>} />
    </Routes>
  );
}
