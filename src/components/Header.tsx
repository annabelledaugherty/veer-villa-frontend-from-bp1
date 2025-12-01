import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes('#') && location.pathname === '/') {
      e.preventDefault();
      const sectionId = path.split('#')[1];
      scrollToSection(sectionId);
    } else if (path.includes('#')) {
      const sectionId = path.split('#')[1];
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Location', path: '/location' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Mountain className="w-8 h-8 text-green-700 group-hover:text-green-600 transition-colors" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">The Veer Villa</span>
              <span className="text-xs text-gray-600">Manali, Himachal Pradesh</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-gray-700 hover:text-green-700 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-green-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-green-700 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          <button
            className="lg:hidden text-gray-700 hover:text-green-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-gray-700 hover:text-green-700 transition-colors font-medium py-2 ${
                  location.pathname === item.path ? 'text-green-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-center"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
