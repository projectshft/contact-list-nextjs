import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <h1>Contact info</h1>
      <Link className="btn btn-secondary mb-2" href="/contacts">
        Back
      </Link>
      <h2></h2>
    </div>
  );
}
