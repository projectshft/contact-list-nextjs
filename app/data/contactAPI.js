export const ContactsAPI = {
  contacts: [
    {
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmRZp2IJ0xl2Yyc_0WyceSsn5C3J1WDoILA&s",
      name: "Kathryn Fabbroni",
      number: "14122166666",
      email: "kathrynfabbroni@gmail.com",
    },
    {
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OHjeDNKJK6Y9Sqk4aWO2VmvMWDT2Z8VlRQ&s",
      name: "Ryan Reynolds",
      number: "23456789011",
      email: "ryanlovesblake@ryan.com",
    },
    {
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEmdMzCJ30NZ-OlakyUgTEYg-6y6Xy46dEQ&s",
      name: "Elle Fanning",
      number: "34567890122",
      email: "elle@elle.com",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    return this.contacts.find((contact) => contact.number === id.toString());
  },
  addContact: function ({ picture, name, number, email }) {
    this.contacts.push({ picture, name, number, email });
  },
};
