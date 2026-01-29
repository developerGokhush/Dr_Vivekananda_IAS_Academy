import Layout from '../components/Layout';
import { useParams, Navigate } from 'react-router-dom';
import { mentorshipCourses } from '../data/mentorshipCourses';
import { Check, Clock, Calendar, User, CreditCard, BookOpen } from 'lucide-react';
import './OptionalClassesDetails.css'; // Reusing styles

const MentorshipDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = mentorshipCourses.find((c) => c.id === id);

    if (!course) {
        return <Navigate to="/courses/mentorship" replace />;
    }

    return (
        <Layout>
            <div className="optional-details-page">
                <section className="details-hero">
                    <div className="container">
                        <div className="details-hero-content">
                            <h1>{course.title}</h1>
                            <p className="details-subtitle">{course.subtitle}</p>
                            <div className="details-badges">
                                <span className="badge"><User size={16} /> {course.faculty}</span>
                                {course.duration && <span className="badge"><Clock size={16} /> {course.duration}</span>}
                                <span className="badge"><Calendar size={16} /> {course.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details-content">
                    <div className="container details-grid-layout">
                        <div className="details-main">
                            <div className="feature-block glass-card">
                                <h2>Program Features</h2>
                                <ul className="feature-list">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>
                                            <Check size={20} className="feature-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {course.timings && (
                                <div className="feature-block glass-card" style={{ marginTop: '2rem' }}>
                                    <h2>Timings</h2>
                                    <ul className="feature-list">
                                        <li><Clock size={20} className="feature-icon" /> {course.timings}</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="details-sidebar">
                            <div className="sidebar-card glass-card">
                                <h3>Details</h3>
                                <div className="fee-display">
                                    <CreditCard size={24} />
                                    <span className="fee-amount">{course.fee}</span>
                                </div>
                                {/* {course.discount && <p className="discount-text">{course.discount}</p>} */}
                                <div className="sidebar-action">
                                    <button
                                        className="btn-enroll-now"
                                        onClick={() => window.open("https://forms.gle/xhF7LmAe6cCMPfye8", "_blank")}
                                    >
                                        {course.fee !== 'To be announced' ? 'Enroll Now' : 'Enquire Now'}
                                    </button>
                                </div>
                            </div>

                            {course.tests && (
                                <div className="sidebar-card glass-card">
                                    <h3>Number of Tests</h3>
                                    <div className="fee-display">
                                        <BookOpen size={24} />
                                        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{course.tests}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default MentorshipDetails;
