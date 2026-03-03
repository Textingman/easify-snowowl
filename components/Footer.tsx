import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.brandName}</h3>
            <p className="text-gray-300 text-sm mb-4">
              Strategic Investment Advisory & Portfolio Management
            </p>
            <p className="text-gray-400 text-sm">
              {siteConfig.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <a 
                  href={`tel:${siteConfig.supportPhone}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {siteConfig.supportPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SnowOwl Investments LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
