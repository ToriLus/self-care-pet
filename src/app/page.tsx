import styles from "./page.module.css";
import Canvas from "./../../components/Convo";
import Button from "../../components/Button";

export default function Home() {
  return (
    <body>
      <main className={styles.main}>
        <div className={styles.description}>
          <Canvas />
        </div>
      </main>
    </body>
  );
}
