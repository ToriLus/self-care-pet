"use client";
import styles from "./../app/page.module.css";
import "./../app/globals.css";

import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import useLocalStorage from "react-use-localstorage";
import HandleButton from "../../hooks/handleButton";
import { useEffect } from "react";

export default function Home() {
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
          element.style,
          "dfs"
        );
      });
    });
  });

  return (
    <>
      <div className="generalContainer">
        <ImageCustom />
        <Stats />
        <div className={"random-name"}>
          <Button text={"drink"} actionImage={"water"} />
          <Button text={"eat"} actionImage={"food"} />
        </div>
      </div>
      <Link href="/">
        <button>Customize your panda</button>
      </Link>
    </>
  );
}
