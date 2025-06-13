import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full py-6">
      <p className="text-gray-400 text-2xl mb-4 md:mb-0">
        Copyright &copy; 2025 SIMAC
      </p>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-xl">Stay Connected</span>
        <div className="flex gap-3 text-xl">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-gray-400 hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-gray-400 hover:text-red-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
