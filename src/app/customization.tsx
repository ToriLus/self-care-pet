import styles from "./page.module.css";
import Button from "./../../components/Button";
import PetImage from "./../../components/Image";
import Background from "./../../components/Background";
import Stats from "./../../components/Stats/stats";
import Canvas from "./../../components/Convo";

export default function Home() {
  return (
    <body>
      <main className={styles.main}>
        <div className={styles.description}>
          <PetImage />
          <Stats />
          <div className={"random-name"}>
            <Button text={"drink"} actionImage={"water"} />
            <Button text={"eat"} actionImage={"food"} />
            <Button text={"eat"} actionImage={"food"} />
            <Button text={"eat"} actionImage={"food"} />
          </div>
        </div>

        <div className={styles.center}></div>
      </main>
    </body>
  );
}
