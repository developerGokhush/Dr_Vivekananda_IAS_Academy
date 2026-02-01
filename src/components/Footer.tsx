
import { Link } from 'react-router-dom';
import { Linkedin, X, Dribbble, ArrowUpRight, Twitter, Youtube, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer shadow-top">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="brand-title">Dr Vivekananda’s IAS Academy</h3>
                        <div className='footer-brand-content'>
                            <p className="cta-text">Do you like what you see?</p>
                            <p className="sub-cta">Let's build the future IAS.</p>
                            <Link to="https://cal.com/vivekananda-bniym3/30min" target="_blank" className="footer-link-btn">
                                Get in Touch with Dr. Vivekananda <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className='footer-links-social-set'>
                        <div className='footer-links-set'>
                            <div className="footer-links">
                                <h4>Useful Links</h4>
                                <Link to="/courses">Our Courses</Link>
                                <Link to="/about">About Our Academy</Link>
                                <Link to="/gallery">Our Gallery</Link>
                                <Link to="/blogs">Read Our Blogs</Link>
                            </div>

                            <div className="footer-links">
                                <h4>Information</h4>
                                <Link to="/director">Our Director</Link>
                                <Link to="/contact">Contact Us</Link>
                                <Link to="/letstalk">Talk to Dr. Vivekananda</Link>
                            </div>
                        </div>

                        <div className="footer-social">
                            <h4>Get In Touch</h4>
                            <p>Connect with us via our socials</p>
                            <div className="social-icons">
                                <a href="#" className="social-icon"><Linkedin size={20} /></a>
                                <a href="#" className="social-icon"><Instagram size={20} /></a>
                                <a href="#" className="social-icon"><Twitter size={20} /></a>
                                <a href="#" className="social-icon"><Youtube size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <h1 className="bg-text">IAS ACADEMY</h1>
                    <p className="copyright">© All Right Reserved by Dr. Vivekananda’s IAS Academy - 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
