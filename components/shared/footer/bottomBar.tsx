import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const BottomBar = () => {
  return (
      <div className="pt-8 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            Copyright @ 2025 SIMAC
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xl font-bold">Stay Connected</span>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BottomBar;