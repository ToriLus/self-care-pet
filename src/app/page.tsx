import styles from "./page.module.css";
import Button from "./../../components/Button";
import PetImage from "./../../components/Image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h2>Gible says be brave</h2>
        </div>
        <PetImage />
        <Button />
      </div>

      <div className={styles.center}></div>
    </main>
  );
}
