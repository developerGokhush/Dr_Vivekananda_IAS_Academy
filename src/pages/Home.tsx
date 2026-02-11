
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className="home-page">
                <SEO
                    title="Dr Vivekananda’s IAS Academy | Best UPSC Coaching in Hyderabad"
                    description="Join Dr Vivekananda’s IAS Academy in Hyderabad for top-tier UPSC coaching. Expert guidance in Ethics, Anthropology, Sociology, and personalized mentorship."
                />
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-grid-bg"></div>
                    <div className="container hero-container">
                        <div className="hero-content">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="hero-title-wrapper"
                            >
                                <motion.h1
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="hero-title"
                                >
                                    India’s Most <br />
                                    Affordable IAS <br />
                                    Training Academy
                                </motion.h1>
                                <div className="hero-circular-badge">
                                    <svg viewBox="0 0 100 100" width="120" height="120">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " />
                                        </defs>
                                        <g className="badge-text-rotate">
                                            <text fontSize="8.5" fontWeight="600" fill="currentColor">
                                                <textPath href="#circlePath">
                                                    CONSISTENCY • EQUANIMITY • DISCIPLINE • DEDICATION •
                                                </textPath>
                                            </text>
                                        </g>

                                        <image
                                            href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/256px-Emblem_of_India.svg.png"
                                            x="25" y="25" width="50" height="50"
                                        />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hero-subtitle-container"
                            >
                                <p className="hero-subtitle">
                                    For those who dream to becoming an IAS or IPS officers and serve the
                                    nation with integrity and courage, we offer a serious path forward.
                                </p>
                                <p className="hero-subtitle">
                                    Our Vision is to nurture committed aspirants, so that in the next five years,
                                    100 IAS and 100 IPS officers take shape as a leader marked by competence,
                                    ethics, cultural sensitivity, patriotism and dedication towards public service
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="hero-actions"
                            >
                                <Link to="https://cal.com/vivekananda-bniym3/30min" target="_blank" className="btn-hero-pill">
                                    Talk to Us <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-image-wrapper"
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/vivekananda-gadiyaram-990227ab', '_blank');
                            }}
                        >
                            <div className="hero-image-mask">
                                <img src="/assets/images/director1.jpeg" alt="IAS Academy Architecture" className="hero-image-main" />
                            </div>
                            <div className="hero-director-info glass-card-small">
                                <h3 className='hero-director-name'>Dr. Vivekananda Gadiyaram</h3>
                                <p className="hero-director-role">Founder, Dr. Vivekananda’s IAS Academy</p>
                                <p className="hero-director-creds">"India needs civil servants who combine intellectual excellence with integrity,
                                    empathy, and an unwavering commitment to public service."</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Preparation Strip */}
                <div className="prep-strip">
                    <div className="prep-track">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="prep-content">
                                {['Consistency', 'Equanimity', 'Grit', 'Discipline', 'Unwavering focus', 'Dedication'].map((item) => (
                                    <div key={item} className="prep-item">
                                        <span>{item}</span>
                                        <span className="prep-item-divider">✦</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="about-image-main"
                >
                    <img src="/assets/images/seminar-hall.png" alt="Classroom Session" />
                    <div className="message-badge">
                        {/* <img src="" alt="Dr Vivekananda" /> */}
                        <div className="playButton">
                            <Play size={20} className="icon" />
                        </div>
                        <div>
                            <h4>Message from Dr. Vivekananda</h4>
                            <p>Founder of Dr. Vivekananda’s IAS Academy</p>
                        </div>
                    </div>
                </motion.div>

                {/* Live Classes Section */}
                <section className="live-classes">
                    <div className="container dark-card">
                        <div className="live-header">
                            <h2>Our Gallery</h2>
                        </div>
                        <div className="live-list">
                            {[
                                { id: '01', imgSrc: "/assets/images/lbsnaa-gate.png", link: "/gallery", state: { filter: 'Toppers' }, title: 'Our Toppers', desc: 'Celebrating the triumph of determination—meet our students who conquered the Civil Services with flying colors.' },
                                { id: '02', imgSrc: "/assets/images/ips-training.png", link: "/gallery", state: { filter: 'Public Events' }, title: 'Public Events', desc: 'Witness our engagement with the Civil Services community and experts, fostering a spirit of service and awareness.' },
                                { id: '03', imgSrc: "/assets/images/podcast-studio.png", link: "/gallery", state: { filter: 'Podcasts' }, title: 'Podcasts', desc: 'Insightful discussions on preparation strategy, current affairs, and the journey of civil service aspirants.' },
                                { id: '04', imgSrc: "/assets/images/seminar-hall.png", link: "/gallery", state: { filter: 'Seminars' }, title: 'Seminars', desc: 'Intensive sessions and workshops designed to deepen understanding and enhance analytical skills.' }
                            ].map(item => (
                                <NavLink key={item.id} to={item.link} state={item.state} className="live-item">
                                    <img src={item.imgSrc} alt={item.title} className='gallery-image' />
                                    <div className='flex'>
                                        <h4 className="item-content-title">{item.title}</h4>
                                        <p className="item-content-desc">{item.desc}</p>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </section>

                {/* More about us / more-about-us List */}
                <section className="more-about-us-section">
                    <div className="more-about-us-container container">
                        <div className="section-header-left">
                            <h2 className="section-title-simple">More about us</h2>
                        </div>

                        <div className="more-about-us-grid-large">
                            {[
                                { id: '01', imgSrc: "/assets/images/director2.jpeg", link: "/director", title: 'Our Director', desc: 'Guided by Dr. Vivekananda’s vision to mold aspirants into competent, ethical, and patriotic leaders for the nation.' },
                                { id: '02', imgSrc: "/assets/images/courses-collage.png", link: "/courses", title: 'Our Courses', desc: 'Holistic preparation strategies including affordable coaching, personal mentorship, and rigorous testing modules.' },
                                { id: '03', imgSrc: "/assets/images/lbsnaa-gate.png", link: "/gallery", state: { filter: "Testimonials" }, title: 'Our Testimonials', desc: 'Discover how our focused approach and disciplined environment have helped students achieve their IAS/IPS dreams.' },
                                { id: '04', imgSrc: "/assets/images/academy-hero.png", link: "/gallery", state: { filter: "Accolades" }, title: 'Our Accolades', desc: 'Celebrating our legacy of excellence and the consistent success of our students in the Civil Services Examination.' }
                            ].map(item => (
                                <NavLink key={item.id} to={item.link} state={item?.state} className="more-about-us-card-large">
                                    {/* <span className="item-id">{item.id}</span> */}
                                    <img src={item.imgSrc} alt="Director" />
                                    <div className="more-about-us-content">
                                        <h4 className='more-about-us-title'>{item.title}</h4>
                                        <p className="more-about-us-label">{item.desc}</p>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work Together Marquee */}
                <div className="work-together-strip">
                    <div className="work-track">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="work-content">
                                <span className="work-text">Let's Work Together </span>
                                <span className="work-divider">✦</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
