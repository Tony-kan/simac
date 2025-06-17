
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "@/constants/links";

const BottomBar = () => {
  // Todo: map icon names to actual components
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "facebook":
        return <FaFacebookF size={24} />;
      case "twitter":
        return <FaTwitter size={24} />;
      case "youtube":
        return <FaYoutube size={24} />;
      case "instagram":
        return <FaInstagram size={24} />;
      default:
        return null;
    }
  };

  return (
    // Todo: added the padding of 10
    <div className="p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 md:mb-0">
          Copyright @ 2025 SIMAC
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xl font-bold">Stay Connected</span>
          <div className="flex gap-4">
            {/* Todo: this is the function that maps each icon */}
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={link.icon}
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;