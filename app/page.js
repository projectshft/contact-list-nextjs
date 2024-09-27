import "./globals.css";
import ContactList from "./components/ContactList";

export default function Home() {
  
  return (
    <main className="p-3 flex items-center flex-col space-y-4 min-h-screen">
      <div className="text-3xl font-bold p-4">
        <h1>Here are all your contacts</h1>
      </div>
      <ContactList />
    </main>
  );
}
