"use client";

type ContactFeatures = {
  id: number;
  name: string;
  email: string;
  imgURL: string;
  phone: string;
};
//API to store data, along with methods to access/modify.
export const ContactsAPI = {
  contacts: [],

  all: function () {
    return this.contacts;
  },
  addContact: function ({ id, name, email, imgURL, phone }: ContactFeatures) {
    this.contacts.push({ id, name, email, imgURL, phone });
  },
  get: function (id: number) {
    const isContact = (c) => c.id === id;
    return this.contacts.find(isContact);
  },
  delete: function (c: object) {
    const elementIndeces = this.contacts.indexOf(c);
    this.contacts.splice(elementIndeces, 1);
  },
};
