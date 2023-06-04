"use client";
import styles from "./page.module.css";
import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
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
          {/* <Link to="/../src/pages/customization.tsx">About</Link> */}
          <BrowserRouter>
            <Routes>
              <Route path="/../src/pages/customization.tsx">somethisdang</Route>
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </body>
  );
}
