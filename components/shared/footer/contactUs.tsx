//Todo: implement the contact us

import { contact } from "@/constants/links";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

// {
/*displays contact information in the website footer. It lists phone, email, and address details, each with an appropriate icon and link type (tel, mailto, or Google Maps) */
const ContactUs = () => {
  // Todo: map contact items to their corresponding icons
  //Returns the corresponding icon component for a given contact type ID.
  const getIcon = (id: number) => {
    switch (id) {
      case 1: // Phone
        return <FaPhone className="text-white-300" />;
      case 2: // Email
        return <FaEnvelope className="text-white-300" />;
      case 3: // Address
        return <FaMapMarkerAlt className="text-white-300 mt-1" />;
      default:
        return null;
    }
  };

  // Todo: generate appropriate link element for each contact type
  // Returns a link element based on the contact item's ID and description.
  const getContactElement = (item: (typeof contact)[number]) => {
    switch (item.id) {
      case 1: // Phone
        return (
          <Link href={`tel:${item.description}`} className="hover:underline">
            {item.description}
          </Link>
        );
      case 2: // Email
        return (
          <Link href={`mailto:${item.description}`} className="hover:underline">
            {item.description}
          </Link>
        );
      case 3: // Address
        return (
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Kawale+2,+Along+Chidzanja+Road,+Lilongwe,+Malawi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.description}
          </Link>
        );
      default:
        return <span>{item.description}</span>;
    }
  };
  return (
    // Todo: added the padding of 10
    <div className="p-10">
      <h3 className="text-2xl font-bold mb-4 italic">Contact Us</h3>
      <ul className="space-y-3 text-gray-300">
        {contact.map((item) => (
          <li
            key={item.id}
            className={`flex ${
              item.id === 3 ? "items-start" : "items-center"
            } gap-2 text-xl`}
          >
            {getIcon(item.id)}
            {getContactElement(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
