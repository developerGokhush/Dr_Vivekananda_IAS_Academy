
import Layout from '../components/Layout';
import { Quote } from 'lucide-react';
import SEO from '../components/SEO';
import './Director.css';

const Director = () => {
    return (
        <Layout>
            <div className="director-page">
                <SEO
                    title="Our Director | Dr Vivekananda’s IAS Academy"
                    description="Meet Dr. Vivekananda Gadiyaram, founder of Dr Vivekananda’s IAS Academy. A former civil servant and dedicated mentor shaping future leaders."
                />
                <section className="director-hero">
                    <div className="container">
                        <h1 className="director-title">Founder’s Profile</h1>
                        <h2 className="director-name">Dr. Vivekananda Gadiyaram</h2>
                        <p className="director-subtitle">"Preparing civil servants who place the nation above self."</p>

                        <div className="director-main-img-container">
                            <img src="/assets/images/director.png" alt="Dr. Vivekananda Gadiyaram" className="director-main-img" />
                        </div>

                        <div className="director-stats-grid">
                            <div className="director-stat">
                                <span className="stat-label">Experience</span>
                                <span className="stat-value">9+ Years</span>
                            </div>
                            <div className="director-stat">
                                <span className="stat-label">UPSC Selections</span>
                                <span className="stat-value">74+</span>
                            </div>
                            <div className="director-stat">
                                <span className="stat-label">State Selections</span>
                                <span className="stat-value">110+</span>
                            </div>
                            <div className="director-stat">
                                <span className="stat-label">Impact</span>
                                <span className="stat-value">1 Lakh+</span>
                            </div>
                        </div>

                        <div className="director-full-content">
                            <div className="bio-block glass-card">
                                <h3>Educator & Public Servant</h3>
                                <p>
                                    Dr. Vivekananda Gadiyaram is an educator by conviction and a public servant by conscience,
                                    committed to shaping principled leaders for India’s future. An MBBS graduate (2011) from
                                    Sri Venkateswara Medical College, Tirupati, he chose a path beyond personal comfort, serving
                                    the nation as a Deputy Director in the Armed Forces Headquarters Civil Services under the
                                    Ministry of Defence—an experience that deeply informed his understanding of governance,
                                    responsibility, and ethical leadership.
                                </p>
                            </div>

                            <div className="bio-block glass-card">
                                <h3>Dedicated Mentor</h3>
                                <p>
                                    For over nine years, Dr. Vivekananda has dedicated himself to mentoring civil services
                                    aspirants in Anthropology and Sociology, with a special focus on UPSC Mains answer writing
                                    and Interview guidance. His mentorship has contributed to the success of 74 candidates in
                                    UPSC Civil Services and 110 candidates in State Civil Services, now serving as officers
                                    across the country.
                                </p>
                            </div>

                            <div className="bio-block glass-card">
                                <h3>Speaker & Author</h3>
                                <p>
                                    A TEDx speaker, author, and public communicator, he has inspired nearly one lakh aspirants
                                    through classrooms, public forums, and media platforms. His enduring belief is simple yet
                                    profound: India needs civil servants who combine intellectual excellence with integrity,
                                    empathy, and an unwavering commitment to public service.
                                </p>
                            </div>
                        </div>

                        <div className="director-quote-large glass-card">
                            <Quote size={40} className="quote-icon" />
                            <p>
                                India needs civil servants who combine intellectual excellence with integrity,
                                empathy, and an unwavering commitment to public service.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Director;
