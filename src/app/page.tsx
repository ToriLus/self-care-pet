import styles from "./page.module.css";
import Button from "./../../components/Button";
import PetImage from "./../../components/Image";
import Background from "./../../components/Background";
import Stats from "./../../components/Stats/stats";
import Canvas from "./../../components/Convo";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h2>Gible says be brave</h2>
        </div>

        <PetImage />
        <Stats />
        <div></div>
        <Button text={"drink"} actionImage={"water"} />
        <Button text={"eat"} actionImage={"food"} />
      </div>

      <div className={styles.center}></div>
    </main>
  );
}
