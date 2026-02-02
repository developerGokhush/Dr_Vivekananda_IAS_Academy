import Layout from '../components/Layout';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { essayCourses } from '../data/essayCourses';
import { Check, Calendar, User, CreditCard, Star } from 'lucide-react';
import './OptionalClassesDetails.css'; // Reusing styles

const EssayDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = essayCourses.find((c) => c.id === id);

    if (!course) {
        return <Navigate to="/courses/essay" replace />;
    }

    return (
        <Layout>
            <div className="optional-details-page">
                <SEO
                    title={`${course.title} | Essay Module`}
                    description={`Elevate your essay writing skills with ${course.title}. ${course.subtitle}. Guidance by ${course.faculty}.`}
                    image={course.image}
                />
                <section className="details-hero">
                    <div className="container">
                        <div className="details-hero-content">
                            <h1>{course.title}</h1>
                            <p className="details-subtitle">{course.subtitle}</p>
                            <div className="details-badges">
                                <span className="badge"><User size={16} /> {course.faculty}</span>
                                <span className="badge"><Calendar size={16} /> {course.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details-content">
                    <div className="container details-grid-layout">
                        <div className="details-main">
                            <div className="feature-block glass-card">
                                <h2>Details of the Module</h2>
                                <ul className="feature-list">
                                    {course.details.map((detail, index) => (
                                        <li key={index}>
                                            <Check size={20} className="feature-icon" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="details-sidebar">
                            <div className="sidebar-card glass-card">
                                <h3>Course Fee</h3>
                                <div className="fee-display">
                                    <CreditCard size={24} />
                                    <span className="fee-amount">{course.fee}</span>
                                </div>
                                <div className="sidebar-action">
                                    <button
                                        className="btn-enroll-now"
                                        onClick={() => window.open("https://forms.gle/xhF7LmAe6cCMPfye8", "_blank")}
                                    >
                                        {course.fee !== 'To be announced' ? 'Enroll Now' : 'Enquire Now'}
                                    </button>
                                </div>
                            </div>

                            <div className="sidebar-card glass-card">
                                <h3>Our USP</h3>
                                <ul className="usp-list-sidebar">
                                    {course.usps.map((usp, idx) => (
                                        <li key={idx}>
                                            {idx + 1}. {usp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default EssayDetails;
