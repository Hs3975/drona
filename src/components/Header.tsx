import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="bg-primary px-4 py-2 text-2xl md:text-3xl font-bold tracking-tight text-white rounded-md">
              DRONA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-300 hover:text-primary',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-white'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-500',
            isMobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block text-lg font-medium transition-colors duration-300 hover:text-primary',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
