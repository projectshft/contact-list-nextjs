import Link from "next/link";

const AddContactButton = () => (
  <Link href="/contacts/new">
    <button className="bg-blue-500 text-white p-2 rounded text-sm">
      Add New Contact
    </button>
  </Link>
);

export default AddContactButton;
