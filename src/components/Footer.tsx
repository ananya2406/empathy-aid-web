
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-relief-gray pt-12 pb-8 mt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-relief-primary mb-4">DisasterRelief</h3>
            <p className="text-gray-300 mb-4">
              Working together to provide essential support and resources to those affected by disasters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-relief-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-relief-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-relief-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/camps" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Relief Camps
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Report Missing
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Make a Donation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">How to Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Volunteer Registration
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Donate Supplies
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-relief-primary transition-colors">
                  Financial Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-relief-primary transition-colors">
                  About Our Mission
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="text-relief-primary mr-3" />
                <span className="text-gray-300">support@disasterrelief.org</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-relief-primary mr-3" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DisasterRelief System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
