export const ContactsAPI = {
  contacts: [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1024px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
  ],
  all: function () {
    return this.contacts;
  },
  addContact: function ({ name, image_url, email, phone_number }) {
    const id = Math.round(Math.random() * 100000000);
    this.contacts.push({ id, name, image_url, email, phone_number });
  },
  get: function (id) {
    return this.contacts.find((contact) => contact.id === id);
  },
};
