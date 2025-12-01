import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Mountain, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-white">The Veer Villa</h3>
                <p className="text-sm text-gray-400">Your Cozy Retreat</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Experience Manali's charm and convenience at The Veer Villa, nestled just steps away from Mall Road with breathtaking mountain views.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/rooms" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Rooms</Link></li>
              <li><Link to="/amenities" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Amenities</Link></li>
              <li><Link to="/location" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Location</Link></li>
              <li><Link to="/gallery" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Gallery</Link></li>
              <li><Link to="/about" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} className="hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Gompa Road, Opposite Hotel Jamuna Complex, Near Mall Road, Siyal, Manali, HP 175131
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+919816323999" className="text-sm hover:text-green-500 transition-colors">
                  +91-98163 23999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:booking@veervilla.com" className="text-sm hover:text-green-500 transition-colors">
                  booking@veervilla.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Guest Information</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Check-in:</strong> 12:00 PM</li>
              <li><strong>Check-out:</strong> 11:00 AM</li>
              <li className="pt-2">
                <strong>Connect With Us:</strong>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} The Veer Villa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-500 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-green-500 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
