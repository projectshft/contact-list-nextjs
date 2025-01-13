import styles from "./page.module.css";
import Contacts from "./components/contactList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-center">Contact List</h1>
        <a className="text-center" href="/new">
          <button className="btn-secondary btn" onClick="/new">Add New Contact</button>
        </a>
        <div className="row">
          <input
            type="text"
            className="form-control"
            placeholder="Search Contacts"
          />
        </div>
        <Contacts />
      </main>
    </div>
  );
}
