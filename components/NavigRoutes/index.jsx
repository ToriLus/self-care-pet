"use client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeTwo from "@/pages/customization";
import Home from "@/app/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customization" element={<HomeTwo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
