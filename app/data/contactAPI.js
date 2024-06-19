export const ContactAPI = {
    contacts: [
        {name: "John Sargent", email: "test@gmail.com", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/John_Singer_Sargent_1903.jpg", phone: "111-111-1111", id: 70219577}
    ],
    all: function () {
        return this.contacts;
    },
    get: function ( id ) {
        console.log(this.contacts.find((element) => element.id === id));
        return this.contacts.find((element) => element.id === id);
    },
    addContact: function ({ name, email, image, phone, id }) {
        this.contacts.push({ name, email, image, phone, id })
    }
};
