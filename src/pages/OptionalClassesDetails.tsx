import Layout from '../components/Layout';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { optionalClassesCourses } from '../data/optionalClassesCourses';
import { Check, Clock, Calendar, User, CreditCard, Tag } from 'lucide-react';
import './OptionalClassesDetails.css';

const OptionalClassesDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = optionalClassesCourses.find((c) => c.id === id);

    if (!course) {
        return <Navigate to="/courses/optional-classes" replace />;
    }

    return (
        <Layout>
            <div className="optional-details-page">
                <SEO
                    title={`${course.title} | Optional Course`}
                    description={`Join our comprehensive ${course.title} optional course. ${course.subtitle}. Faculty: ${course.faculty}.`}
                    image={course.image}
                />
                <section className="details-hero">
                    <div className="container">
                        <div className="details-hero-content">
                            <h1>{course.seoTitle || course.title}</h1>
                            <p className="details-subtitle">{course.subtitle}</p>
                            <div className="details-badges">
                                <span className="badge"><User size={16} /> {course.faculty}</span>
                                <span className="badge"><Clock size={16} /> {course.duration}</span>
                                <span className="badge"><Calendar size={16} /> {course.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details-content">
                    <div className="container details-grid-layout">
                        <div className="details-main">
                            {course.seoDescription && (
                                <div className="course-seo-description glass-card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                                    <p>{course.seoDescription}</p>
                                </div>
                            )}
                            <div className="feature-block glass-card">
                                <h2>Features of the Module</h2>
                                <ul className="feature-list">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>
                                            <Check size={20} className="feature-icon" />
                                            <span>{feature}</span>
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
                                {/* <p className="discount-text">{course.discount}</p> */}
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

export default OptionalClassesDetails;
