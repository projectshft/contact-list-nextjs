// API for storing Contacts data
export const ContactAPI = {
	contacts: [],
	all: function () {
		return this.contacts;
	},
	addContact: function ({ id, name, email, number, imageUrl }) {
		this.contacts.push({ id, name, email, number, imageUrl });
	},
	get: function (id) {
		const isContact = (c) => c.id === id;
		return this.contacts.find(isContact);
	},
};

