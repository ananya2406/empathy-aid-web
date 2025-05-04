
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-relief-blue">Disaster<span className="text-relief-teal">Relief</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-relief-blue transition-colors">Home</Link>
          <Link to="/camps" className="text-gray-700 hover:text-relief-blue transition-colors">Camps</Link>
          <Link to="/report" className="text-gray-700 hover:text-relief-blue transition-colors">Report Missing</Link>
          <Link to="/donate" className="text-gray-700 hover:text-relief-blue transition-colors">Donate</Link>
          <Link to="/volunteer" className="text-gray-700 hover:text-relief-blue transition-colors">Volunteer</Link>
          <Link to="/login">
            <Button variant="outline" className="border-relief-blue text-relief-blue hover:bg-relief-blue hover:text-white">
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-relief-blue py-2 transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/camps" className="text-gray-700 hover:text-relief-blue py-2 transition-colors" onClick={toggleMobileMenu}>Camps</Link>
            <Link to="/report" className="text-gray-700 hover:text-relief-blue py-2 transition-colors" onClick={toggleMobileMenu}>Report Missing</Link>
            <Link to="/donate" className="text-gray-700 hover:text-relief-blue py-2 transition-colors" onClick={toggleMobileMenu}>Donate</Link>
            <Link to="/volunteer" className="text-gray-700 hover:text-relief-blue py-2 transition-colors" onClick={toggleMobileMenu}>Volunteer</Link>
            <Link to="/login" className="py-2" onClick={toggleMobileMenu}>
              <Button variant="outline" className="w-full border-relief-blue text-relief-blue hover:bg-relief-blue hover:text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
