"use client";
import styles from "./page.module.css";
import Button from "../../components/Button";
import PetImage from "../../components/Image";
import Background from "../../components/Background";
import Stats from "../../components/Stats/stats";
import Canvas from "../../components/Convo";
import ImageCustom from "../../components/ImageCustom";
import Link from "next/link";

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
        </div>
        <Link href="/customization">
          <button>go to custom</button>
        </Link>
      </main>
    </body>
  );
}
