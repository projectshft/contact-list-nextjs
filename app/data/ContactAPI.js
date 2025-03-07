export const ContactAPI = {
	contacts: [
		{ id: 1, name: 'Albert Einstein', image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Albert_Einstein_1947.jpg', email: 'aeinstein@example.com', phone: '15555555555' },

	],
	
  all: function () {
		return this.contacts;
	},

  addContact: function ({ name, image, email, phone }) {
    const id = Math.round(Math.random() * 100000000);
		this.contacts.push({ id, name, image, email, phone });
	},

	get: function (id) {
		const isContact = (c) => c.id === id;
		return this.contacts.find(isContact);
	},
};