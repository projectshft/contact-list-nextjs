'use client';
import { ContactAPI } from '../../data/ContactAPI';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPlayer() {
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const router = useRouter();

  const handleSubmitContactClick = () => {
    ContactAPI.addContact({
      name,
      image,
      email,
      phone,
    });
    router.push("/contacts");
  };

  const isFormValid =
    name !== null && image !== null && email !== null && phone !== null;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add New Contact</h2>
        <div className="card-body text-center">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="url"
                className="form-control"
                name="imageUrl"
                placeholder="Enter image url"
                onChange={(event) => setImage(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter phone number"
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmitContactClick}
                disabled={!isFormValid}
              >
                ADD NEW CONTACT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}