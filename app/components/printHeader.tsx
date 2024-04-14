import Link from "next/link";
import React from "react";

export default function PrintHeader(): JSX.Element {
  return (
    <main>
      <div className="text-center">
        <h1>Contacts</h1>

        <Link href="./add-new">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
      </div>
    </main>
  );
}
