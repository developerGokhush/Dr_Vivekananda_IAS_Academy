import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.jpeg" alt="Logo" />
          <span>Dr Vivekananda’s IAS Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <div className='nav-link-transition'>
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                <span className='top-nav-name'>  {link.name}</span>
                <span className='bottom-nav-name'>  {link.name}</span>
              </NavLink>
            </div>
          ))}
        </div>

        <Link to="https://cal.com/vivekananda-bniym3/30min" target="_blank" className="btn-touch" onClick={() => setIsOpen(false)}>
          <div className="btn-touch-transition">
            <span className='top-btn-touch'>Get in Touch</span>
            <span className='bottom-btn-touch'>Get in Touch</span>
            <ArrowRight size={18} className='arrow-btn' />
          </div>
        </Link>

        {/* <div className="nav-right">
          Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* </div> */}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="https://cal.com/vivekananda-bniym3/30min" target="_blank" className="btn-touch mobile-btn" onClick={() => setIsOpen(false)}>
            <span>Get in Touch</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
