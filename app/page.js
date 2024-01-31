import Head from 'next/head';
import SearchContacts from './components/SearchContacts';
import styles from './page.module.css';
import ContactList from "./contacts/page";
import Contacts from "./contacts/page";

export default function Home() {
  return <ContactList />;
}