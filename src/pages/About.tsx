
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import './About.css';
import { Play } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <Layout>
            <div className="about-page">
                <SEO
                    title="About Us | Dr Vivekananda’s IAS Academy"
                    description="Learn about our vision to nurture ethical and competent civil servants. Led by Dr. Vivekananda, we offer affordable and structured UPSC guidance."
                />
                <section className="about-hero">
                    <div className="container about-container">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="about-title"
                        >
                            Who We Are
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="about-content"
                        >
                            <p>
                                We are India's most affordable online civil services training platform, led by Dr Vivekananda
                                (UPSC Ranker and Former Deputy Director, Ministry of Defence), dedicated to providing
                                complete and structured guidance for UPSC and State civil services aspirants. Our programmes
                                are designed to cover every stage of the examination through expert-led classes, value
                                addition modules, comprehensive study material, regular test series, personalised mentorship,
                                accountability initiatives, performance tracking templates, consistency boosting tools,
                                mind management techniques.
                            </p>
                            <p>
                                We help students build strong concepts, improve answer writing, and prepare with calmness,
                                clarity and confidence. Our goal is to make preparation accessible, enjoyable, inspiring,
                                thought-provoking, effective, and result-orientated for aspirants across the country.
                                We aim holistic transformation, a notch above regular training.
                            </p>
                        </motion.div>

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
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
