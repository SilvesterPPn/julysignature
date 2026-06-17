import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 rounded-lg">
            <Image
              src="/images/logo.jpeg"
              alt="July Signature"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-stone-400 mb-6 max-w-md">
              Discover timeless elegance and luxury fashion. Curated pieces for the discerning individual.
            </p>
           <div className="flex items-center gap-4">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/julysignaturecollection_1?igsh=dXUwOXltam0xZHU5"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white transition-all duration-300"
  >
    <FaInstagram size={16} />
  </a>

  {/* Facebook */}
  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="group w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white transition-all duration-300"
  >
    <FaFacebookF size={15} />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@julycollection_1?_r=1&_t=ZS-96xROMYF3Em"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="group w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white transition-all duration-300"
  >
    <FaTiktok size={16} />
  </a>

</div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Store', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-stone-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400">
              <li>No.16 Opebi Road Ikeka</li>
              <li>Lagos State. Nigeria</li>
              <li>yemitin@yahoo.com</li>
              <li>07077989241</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500">
          <p>&copy; 2026 July Signature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
