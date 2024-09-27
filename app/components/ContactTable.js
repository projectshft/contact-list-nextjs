import PropTypes from 'prop-types';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-gray-600 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-900 border-b">
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone Number</th>
            <th className="p-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNum: PropTypes.string.isRequired,
      imageURL: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactTable;
