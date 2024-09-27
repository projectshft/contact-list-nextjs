"use client";
import { ContactAPI } from "../data/ContactAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [imageURL, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();


  // Form validation logic
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name cannot be blank";
    }
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!phoneNum || !/^\d{10,15}$/.test(phoneNum)) {
      newErrors.phoneNum = "Please enter a valid phone number (10-15 digits)";
    }

    return newErrors;
  };

// function to submit form, check if there are validation errors, and routes to contacts page after submit
// setErrors({}) clears the errors state if no errors are found
  const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        ContactAPI.addContact({
          name,
          email,
          phoneNum,
          imageURL
        });
        router.push("/contacts");
        alert("The contact has been added successfully!");
    }
  };

  return (
    <>
      <form className="max-w-lg mx-auto p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-white mb-4">New Contact Form</h2>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Full Name
          </label>
          <input
            type="text"
            className={`w-full p-1 border border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={"Enter name"}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Email
          </label>
          <input
            type="text"
            className={`w-full p-1 border border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={"name@email.com"}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Phone Number
          </label>
          <input
            type="text"
            className={`w-full p-1 border border-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={phoneNum}
            onChange={(event) => setPhoneNum(parseInt(event.target.value))}
            placeholder={"(888)888-8888"}
          />
          {errors.phoneNum && <p className="text-red-500 text-sm mt-1">{errors.phoneNum}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-white mb-2 text-xl">
            Image URL
          </label>
          <input
            type="text"
            className="w-full p-1 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={imageURL}
            onChange={(event) => setImage(event.target.value)}
            placeholder={"Enter image URL"}
          />
        </div>

        <button type="submit" className=" w-20 font-semibold bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300 ">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddContactForm;
