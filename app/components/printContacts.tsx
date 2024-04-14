import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React from "react";

/**
 * Takes list of allContacts and displays each contact to the screen.
 * @param {*} allContacts A list of every contact object
 * @returns react component to display all data
 */
const PrintContacts = ({ allContacts }) => {
  return (
    <div>
      <div className="row justify-content-center border">
        <div className="col-3 text-center">Profile Pic</div>
        <div className="col-3 text-center">Name</div>
        <div className="col-3 text-center">Email</div>
        <div className="col-3 text-center">Phone</div>
      </div>
      {allContacts.map((c) => (
        <div className="row justify-content-center contacts" key={c.id}>
          <div className="col-3 text-center">
            <img
              className="contactImg"
              src={c.imgURL}
              alt="Profile Picture"
            ></img>
          </div>
          <div className="col-3 text-center">
            <Link href={`/contact-info/${c.id}`}>{c.name}</Link>
          </div>
          <div className="col-3 text-center">{c.email}</div>
          <div className="col-3 text-center">{c.phone}</div>
        </div>
      ))}
    </div>
  );
};

PrintContacts.propTypes = {
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgURL: PropTypes.string,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
};

export default PrintContacts;
