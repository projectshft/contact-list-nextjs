"use client";
import { contactsAPI } from "@/app/data/contactsAPI";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next";

export default function AddContactForm() {
  // contact form
  //state for all form items that make up contact
  // function to add states to object and push to api (handled in contactApi )
  // on change set state for form items

  return (
    <section className="container mt-4">
      <form className="contact-form text-center">
        <div className="form-group">
          <h1>Add New Contact</h1>
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Image Url</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Url"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          ADD NEW CONTACT
        </button>
        <hr />
      </form>
    </section>
  );
}
