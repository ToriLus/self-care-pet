"use client";
import styles from "./page.module.css";
import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeTwo from "../pages/customization";
import SaveButton from "../../components/SaveButton";

export default function Home() {
  return (
    <BrowserRouter>
      <body>
        <main>
          <div className="generalContainer">
            <ImageCustom />
            <Stats />
            <div className={"random-name"}>
              <Button text={"drink"} actionImage={"water"} />
              <Button text={"eat"} actionImage={"food"} />
              <Button text={"eat"} actionImage={"food"} />
              <Button text={"eat"} actionImage={"food"} />
            </div>
            <Link to="/customization">Go to Customization</Link>
          </div>
        </main>
        <Routes>
          <Route path="/customization" element={<HomeTwo />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}
