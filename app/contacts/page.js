import ContactSearchBar from "../components/ContactSearchBar";
import ContactList from "../components/ContactList";
export default function Contacts() {
  return (
    <div>
      <h1>All Contacts</h1>
      <button>Add Contact</button>
      <ContactSearchBar />
      <ContactList />
    </div>
  );
}
