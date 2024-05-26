export const ContactListAPI = {
  contacts: [{
    id: "70219577",
    name: "Bryce Harper",
    imageURL: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30951.png",
    email: "bharper@phillies.com",
    phone: "18564487298"
  },
  {
    id: "70219578",
    name: "Trea Turner",
    imageURL: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33710.png",
    email: "tturner@phillies.com",
    phone: "12153841169"
  },
  {
    id: "70219579",
    name: "Kyle Schwarber",
    imageURL: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33712.png",
    email: "kschwarber@phillies.com",
    phone: "12157740306"
  },
  {
    id: "70219580",
    name: "Zack Wheeler",
    imageURL: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31267.png",
    email: "zwheeler@phillies.com",
    phone: "16094882395"
  }],

  addContact: function (newContact) {
    ContactListAPI.contacts.push(newContact)
  },

  getContact: function (same) {
    const isContact = (c) => c.id === same;
    return (ContactListAPI.contacts.find(isContact));
  },

  deleteContact: (id) => {
    ContactListAPI.contacts.filter((c) => c.id !== id);
  },

  editContact: function () {},
}


