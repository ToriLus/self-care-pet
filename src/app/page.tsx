import Image from "next/image";
import styles from "./page.module.css";
import Button from "./../../components/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h2>THIS IS A HEADER I THINK</h2>
        </div>
        <Button />
      </div>

      <div className={styles.center}></div>
    </main>
  );
}
