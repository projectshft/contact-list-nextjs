import React from 'react';


const Contact = ({ contact }) => {
  const {id, name, email, image_url, phone_number } = contact;
  const hiddenIdStyle = {
    display: 'none',
  };


  
return (
  <li>
    <span style = {hiddenIdStyle}> <strong> ID: </strong> {id}</span> 
    <span><strong> Name:</strong>{name} | <strong> Image</strong> {image_url} | <strong> Email </strong>{email} | <strong>Number:</strong>{phone_number}
    </span>
    <br/>
    <img src={image_url} alt={name}/>
  </li>
 );
};

export default Contact;



