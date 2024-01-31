export const ContactsAPI = {
	contacts: [
		{ 
      id: 101, 
      name: 'Albert Einstein', 
      image_url: 'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'aeinstein@example.com',
      phone_number: 15555555555 
    },
		{ 
      id: 102, 
      name: 'Robert Oppenheimer', 
      image_url: 'https://en.wikipedia.org/wiki/J._Robert_Oppenheimer#/media/File:Oppenheimer_(cropped).jpg',
      email: 'roppenheimer@example.com',
      phone_number: 15555555556 
    },
	],
	getAll: function () {
		return this.contacts;
	},
  addContact: function ({ id, name, image_url, email, phone_number }) {
    this.contacts.push ({ id, name, image_url, email, phone_number });
  },
	getID: function (id) {
		const isContact = (p) => p.id === id;
		return this.contacts.find(isContact);
	},
  
};