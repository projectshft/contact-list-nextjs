'use client';
import '../../globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactAPI } from "@/app/data/contactAPI";

export default function Contact() {
    const { id } = useParams();
    const contact = ContactAPI.get(parseInt(id, 10));

    if (!contact) {
        return <div>Sorry, but that contact was not found</div>;
    }

    return (
        <div className="container">
            <main>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="page-header text-center">
                            <h1>Contact Info</h1>
                            <Link href="/contacts/">Back</Link>
                        </div>

                        <div className="text-center contact-photo">
                            <img src={contact.image}></img>
                        </div>

                        <div className="text-center contact-info">
                            <h5>{contact.email}</h5>
                            <h5>{contact.phone}</h5>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
