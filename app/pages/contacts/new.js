import React from 'react';
import ContactForm from '../../components/ContactForm'; // Ensure the correct path

const NewContactPage = () => {
  // You may want to handle form submission logic here

  const handleFormSubmit = (formData) => {
    // Handle the form submission (e.g., add the new contact to your data)
    console.log('Form submitted with data:', formData);
    // You may want to redirect the user to the contacts list or show a success message
  };

  return (
    <div>
      <h1>Add New Contact</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default NewContactPage;
