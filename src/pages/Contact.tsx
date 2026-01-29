
import Layout from '../components/Layout';

import './Contact.css';

const Contact = () => {
    return (
        <Layout>
            <div className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <div className="contact-header">
                            <span className="contact-tag">Contact with Us</span>
                            <h1 className="contact-title">Let's Start the Conversation</h1>
                        </div>

                        <div className="contact-form-container glass-card">
                            <form className="contact-form">
                                <div className="form-grid">
                                    <div className="input-group">
                                        <label>Full name</label>
                                        <input type="text" placeholder="name" />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="email@gmail.com" />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone number</label>
                                        <input type="tel" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="input-group">
                                        <label>How did you hear about us?</label>
                                        <select>
                                            <option>Google Search</option>
                                            <option>Social Media</option>
                                            <option>Referral</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-group full-width">
                                    <label>Type your message</label>
                                    <textarea placeholder="Tell us about your queries"></textarea>
                                </div>
                                <button type="submit" className="btn-send">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
