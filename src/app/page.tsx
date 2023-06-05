"use client";
import styles from "./page.module.css";
import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SaveButton from "../../components/SaveButton";
import Home from "@/app/page";

export default function HomeTwo() {
  return (
    <body>
      <main>
        <Canvas />
        <SaveButton />
      </main>
    </body>
  );
}
