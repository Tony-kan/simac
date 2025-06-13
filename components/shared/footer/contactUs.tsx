import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 italic">Contact Us</h3>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-center gap-2 text-xl">
          <FaPhone className="text-white-300" /> +265882527472
        </li>
        <li className="flex items-center gap-2 text-xl">
          <FaEnvelope className="text-white-300" />
          <a
            href="mailto:simacmalawi.info@gmail.com"
            className="hover:underline"
          >
            simacmalawi.info@gmail.com
          </a>
        </li>
        <li className="flex items-start gap-2 text-xl">
          <FaMapMarkerAlt className="text-white-300 mt-1" />
          Kawale 2, Along Chidzanja Road, Lilongwe, Malawi.
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
