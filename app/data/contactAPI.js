export const ContactAPI = {
  contacts: [
    // Placeholder contacts for easy testing
    {
      id: 70319577,
      name: "Patrick Star",
      imageURL:
        "https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png",
      email: "patrickstar@gmail.com",
      phoneNum: "555-555-5555",
    },
    {
      id: 70219578,
      name: "Spongebob Squarepants",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExEElDVdEs45aOnvpkuLanJ1sRvohztVDz7UGA_oVzIcYOIh1uvTJM3t7nT20FjxSWG0&usqp=CAU",
      email: "sbsq@email.com",
      phoneNum: "888-888-8888",
    },
  ],
  all: function () {
    return this.contacts;
  },
  // Generating a random id, and the do-while loop checks for uniqueness
  generateId: function() {
    let id;
    do {
      id = Math.floor(Math.random() * 1000000);
    } while (this.contacts.find(contact => contact.id === id));
    return id;
  },
  addContact: function ({ name, email, phoneNum, imageURL }) {
    const id = this.generateId();
    this.contacts.push({ id, name, email, phoneNum, imageURL });
  },
  deleteContact: function(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  },
  get: function (id) {
    return this.contacts.find(contact => contact.id === id);
  },
};
