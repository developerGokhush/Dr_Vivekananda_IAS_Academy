
import Layout from '../components/Layout';
import { Linkedin, Twitter, Share2 } from 'lucide-react';
import './CourseDetails.css';

const CourseDetails = () => {
    return (
        <Layout>
            <div className="course-details-page">
                <section className="details-header">
                    <div className="container">
                        <h1 className="details-title">Optionals</h1>
                        <p className="details-subtitle">A Deep Dive into How Digital Agencies Strategically Redefine Online Presence Through Innovative Branding, UX-Focused Design, SEO-Centric Content Creation, and Data-Driven Marketing to Help Businesses...</p>

                        <div className="author-meta">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=50" alt="Author" />
                            <span>Stephen King • Jul 8, 2026 • 2 months</span>
                        </div>

                        <div className="details-main-img">
                            <img src="https://images.unsplash.com/photo-1523240715632-6103498a358c?q=80&w=1200" alt="Course" />
                        </div>

                        <div className="details-quote glass-card">
                            <p>Comprehensive programme for beginners covering all aspects of UPSC (Prelims, Mains, and Interview preparation).</p>
                        </div>

                        <div className="details-share">
                            <span>Share Post : </span>
                            <a href="#"><Linkedin size={18} /></a>
                            <a href="#"><Twitter size={18} /></a>
                            <a href="#"><Share2 size={18} /></a>
                        </div>

                        <div className="trending-section">
                            <span className="trending-tag">Latest & Popular Courses</span>
                            <h2 className="trending-title">Trending Courses</h2>
                            <div className="trending-grid">
                                <div className="trend-card">
                                    <img src="https://images.unsplash.com/photo-1523240715632-6103498a358c?q=80&w=500" alt="Optional" />
                                    <span className="trend-duration">4 months</span>
                                    <h4>Optionals</h4>
                                </div>
                                <div className="trend-card">
                                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500" alt="Mentorship" />
                                    <h4>Mentorship / Test series</h4>
                                </div>
                                <div className="trend-card">
                                    <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500" alt="Value" />
                                    <h4>Value - Additional Classes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default CourseDetails;
