import styles from "./page.module.css";
import Button from "./../../components/Button";
import PetImage from "./../../components/Image";
import Background from "./../../components/Background";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h2>Gible says be brave</h2>
        </div>
        <Background />
        <PetImage />
        <Button text={"drink"} />
        <Button text={"eat"} />
      </div>

      <div className={styles.center}></div>
    </main>
  );
}
