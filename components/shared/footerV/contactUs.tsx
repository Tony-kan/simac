// Todo: implement contact us component
const ContactUs = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 italic">Contact Us</h3>
      <ul className="space-y-3 text-sm text-gray-300">
        <li className="flex items-center gap-2">📞 +265882527472</li>
        <li className="flex items-center gap-2">
          📧{" "}
          <a href="mailto:simacmalawi.info@gmail.com" className="underline">
            simacmalawi.info@gmail.com
          </a>
        </li>
        <li className="flex items-start gap-2">
          📍 Kawale 2, Along Chidzanja Road, Lilongwe, Malawi.
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
