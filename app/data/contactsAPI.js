const contacts = [
  {
    name: 'Luke AFB',
    image:
      'https://yt3.googleusercontent.com/wkjDtbEI_eJhDeom6GHa0lj1o5Z9kaHk1jZw7Yo7SxhkPlvMnaA-tXFkTWtzfKiNoD8u0x8ksg=s900-c-k-c0x00ffffff-no-rj',
    email: 'lockheedmartin@email.com',
    phoneNumber: '123-555-7890',
    uniqueId: 1,
  },
  {
    name: 'Jack Sparrow',
    image:
      'https://m.media-amazon.com/images/I/71A5ZQWNk3L._AC_UF894,1000_QL80_.jpg',
    email: 'rumisgone@email.com',
    phoneNumber: '192-555-5761',
    uniqueId: 2,
  },
  {
    name: 'Cardinal Copia',
    image:
      'https://www.rollingstone.com/wp-content/uploads/2023/02/GettyImages-1240094644-2.jpg?w=1581&h=1054&crop=1',
    email: 'mrghost@email.com',
    phoneNumber: '623-555-1900',
    uniqueId: 3,
  },
  {
    name: 'Doc Holliday',
    image:
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/09/val-kilmer-as-doc-holiday-in-tombstone.jpg?w=1200&h=675&fit=crop',
    email: 'saywhen@email.com',
    phoneNumber: '190-555-6230',
    uniqueId: 4,
  },
  {
    name: 'Mickey Mouse',
    image:
      'https://www.parents.com/thmb/5FsaDp5FRCnDRXixCSPPlEXYKWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-Mickey-Mouse-Clubhouse-Mickey-Mouse-0c6a0705cec8454aa6407229ab9f45a8.jpg',
    email: 'hiyapal@email.com',
    phoneNumber: '728-555-1340',
    uniqueId: 5,
  },
  {
    name: 'Donald Duck',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c05a495632491.5e9c342fe25c5.jpg',
    email: 'phooey@email.com',
    phoneNumber: '983-555-3456',
    uniqueId: 6,
  },
];

export const ContactAPI = {
  async all() {
    return contacts;
  },
  async addContact(contact) {
    contacts.push(contact);
  },
  // addContact({ name, image, email, phoneNumber, uniqueId }) {
  //   contacts.push({ name, image, email, phoneNumber, uniqueId });
  // },
  async get(id) {
    const isContact = (contact) => contact.uniqueId === id;
    return contacts.find(isContact);
  },
};
