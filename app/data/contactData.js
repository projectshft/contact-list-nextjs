export const contactData = {
  contacts: [
    {
      id: 70219577,
      name: 'Albert Einstein',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
      email: 'aeinstein@example.com',
      number: '1(555)5555555'
    },
    {
      id: 70219111,
      name: 'Nancy Pelosi',
      photo: 'https://pelosi.house.gov/sites/evo-subsites/pelosi-evo.house.gov/files/documents/Portrait%20Photo%20Compressed.jpg',
      email: 'npelosi@example.com',
      number: '1(800)1111111'
    }
  ],

   all: function () {
		return this.contacts;
	},
  addContact: function ({ id, photo, name, email, number }) {
		this.contacts.push({ id, photo, name, email, number });
  },
  get: function (id) {
		const isContact = (c) => c.id === id;
		return this.contacts.find(isContact);
	},
}