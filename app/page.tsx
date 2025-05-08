import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AllContactsList from "../components/AllContactsList";
import SearchBar from "@components/SearchBar";
import { contacts } from "@SeedData/contacts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-40">
        <AllContactsList />
      </div>
      <Footer />
    </>
  );
}
