"use client";
import { useState } from "react";
import { contactsAPI } from "../data/contactsAPI";
import Link from "next/link";
//receive props declare propTypes
export default function ContactListItem({
  id,
  name,
  email,
  image_url,
  phone_number,
}) {
  return <div>Single Contact</div>;
}
