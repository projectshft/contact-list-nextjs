import React from "react";
import Link from "next/link";

export default function AllContactsHeader() {

  return (
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-3 text-center'>
          <div className='page-header'>
            <h1>All Contacts</h1>
          </div>

          <Link href='/contacts/new'>
            <button
              type='button'
              className='btn btn-primary add-contact'
            >
              Add Contact
            </button>
          </Link>
        </div>
    </div>
  );
}