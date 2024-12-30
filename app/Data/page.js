const Data = {
  contacts: [
    {
      "id": 1,
      "name": "John Doe",
      "image_url": "/media/JohnDoe.jpg",
      "email": "john.doe@example.com",
      "phone_number": "+1-555-123-4567"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "image_url": "/media/JaneSmith.jpg",
      "email": "jane.smith@example.com",
      "phone_number": "+1-555-234-5678"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "image_url": "/media/MichaelJohnson.jpg",
      "email": "michael.johnson@example.com",
      "phone_number": "+1-555-345-6789"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "image_url": "/media/EmilyDavis.jpg",
      "email": "emily.davis@example.com",
      "phone_number": "+1-555-456-7890"
    },
    {
      "id": 5,
      "name": "Chris Lee",
      "image_url": "/media/ChrisLee.jpg",
      "email": "chris.lee@example.com",
      "phone_number": "+1-555-567-8901"
    }
  ],
  addContact: function (id, name, image_url, email, phone_number) {
    this.contacts.push({id, name, image_url, email, phone_number })
  },
  get: function (id) {
    const isContact = (c) => c.id === id
    return this.contacts.find(isContact) 
  }
}


export default Data;
