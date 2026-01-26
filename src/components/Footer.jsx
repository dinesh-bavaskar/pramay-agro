import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-20">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 pb-16">

        {/* Logo + social */}
        <div>
          <img
            src="https://pramayagro.netlify.app/assets/logo.png"
            alt="Pramay Agro"
            className="h-12 mb-4"
          />
          <p className="text-gray-600 mb-4">
            Design, Code and Ship!
          </p>

          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-sky-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">ABOUT</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Company</li>
            <li className="hover:text-black cursor-pointer transition">Careers</li>
            <li className="hover:text-black cursor-pointer transition">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">SUPPORT</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Contact Support</li>
            <li className="hover:text-black cursor-pointer transition">Help Resources</li>
            <li className="hover:text-black cursor-pointer transition">Release Updates</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">PLATFORM</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Terms & Privacy</li>
            <li className="hover:text-black cursor-pointer transition">Pricing</li>
            <li className="hover:text-black cursor-pointer transition">FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">CONTACT</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Send a Message</li>
            <li className="hover:text-black cursor-pointer transition">Request a Quote</li>
            <li className="hover:text-black cursor-pointer transition">+123-456-7890</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-black text-white text-center py-4 text-sm">
        © 2026 Pramay Agro Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
}
