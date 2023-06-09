"use client";
import styles from "./page.module.css";
import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import Link from "next/link";
import SaveButton from "../../components/SaveButton";
import Home from "@/app/page";
import { useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import useLocalStorageState from "use-local-storage-state";
import HandleButton from "../../hooks/handleButton";

export default function HomeTwo() {
  useEffect(() => {
    const jsonPandaColors = JSON.parse(localStorage.getItem("panda-colors"));
    Object.keys(jsonPandaColors).forEach((key) => {
      const savedElements = document.querySelectorAll(`.${key}`);
      savedElements.forEach((element) => {
        element.style.fill = jsonPandaColors[key];
        console.log(
          "this is key",
          jsonPandaColors[key],
          "oh my god:",
          element.style
        );
      });
    });
  });

  return (
    <body>
      <main>
        <Canvas />

        <Link href="/page2" onClick={HandleButton}>
          <button>Save look!</button>
        </Link>
      </main>
    </body>
  );
}
