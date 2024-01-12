export const contactsAPI = {
  contacts: [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
    {
      id: 90210325,
      name: "Isaac Newton",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
      email: "inewton@example.com",
      phone_number: "16666666666",
    },
    {
      id: 80230445,
      name: "Marie Curie",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
      email: "mcurie@example.com",
      phone_number: "17777777777",
    },
    {
      id: 60890123,
      name: "Nikola Tesla",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
      email: "ntesla@example.com",
      phone_number: "18888888888",
    },
  ],
  getAll: function () {
    return this.contacts;
  },
  addContact: function ({ id, name, email, image_url, phone_number }) {
    this.contacts.push({
      id,
      name,
      image_url,
      email,
      phone_number,
    });
  },
};
