import AllContacts from "./allContacts/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <AllContacts />
      </div>
    </main>
  );
}
