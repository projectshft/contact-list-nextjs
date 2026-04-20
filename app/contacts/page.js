'use client';

import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
// import { useState } from 'react';
import { ContactAPI } from '../data/contactsAPI';

export default function Contact() {
  // const allContacts = ContactAPI.all();
  const [contacts, setContacts] = useState([]);

  return (
    <Container className="contacts-div">
      <Row>
        <Col className="sm">Profile Pic</Col>
        <Col className="sm">Name</Col>
        <Col className="sm">Email</Col>
        <Col className="sm">Phone</Col>
      </Row>
      {/* UPDATE to use Card, pass in a key to help with rendering state changes, Use the id for the key */}
      {/* {allContacts.map((contact) => (
        <Row key={contact.uniqueId}>
          <Col>
            <Image src={contact.image} roundedCircle />
          </Col>
          <Col>
            <Link href={`/contacts/${contact.uniqueId}`}>{contact.name}</Link>
          </Col>
          <Col>{contact.email}</Col>
          <Col>{contact.phoneNumber}</Col>
        </Row>
      ))} */}
      {/* {allContacts.map((c) => (
        <Row className="contacts-list" key={c.uniqueId}>
          <Col className="sm">
            <img src={c.image} alt="" />
          </Col>
          <Col className="sm">
            <Link href={`/contacts/${c.uniqueId}`}>
              <Col className="sm">{c.name}</Col>
            </Link>
          </Col>
          <Col className="sm">{c.email}</Col>
          <Col className="sm">{c.phoneNumber}</Col>
        </Row>
      ))} */}
    </Container>
  );
}
