import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { appscCourses } from '../data/appscCourses';
import './OptionalClassesListing.css'; // Reusing styles

const AppscListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">APPSC / TSPSC</h1>
                        <p className="section-subtitle-center">Comprehensive coaching for State Public Service Commission exams.</p>

                        <div className="optional-grid">
                            {appscCourses.length > 0 ? (
                                appscCourses.map((course) => (
                                    <div key={course.id} className="optional-card-large">
                                        <div className="optional-img-wrap">
                                            <img src={course.image} alt={course.title} />
                                            <div className="optional-overlay">
                                                {course.duration && <span className="optional-subtitle">{course.duration}</span>}
                                            </div>
                                        </div>
                                        <div className="optional-content">
                                            <h3>{course.title}</h3>
                                            <ul className="optional-usps">
                                                <li>• {course.faculty}</li>
                                                <li>• {course.duration || course.tests}</li>
                                                <li>• {course.date}</li>
                                            </ul>
                                            <div className="optional-footer">
                                                <span className="optional-fee">{course.fee}</span>
                                                <Link to={`/courses/appsc/${course.id}`} className="btn-explore">
                                                    Explore More <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-courses-msg" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 0' }}>
                                    <h2 style={{ opacity: 0.6 }}>Our APPSC/TSPSC courses will be announced soon.</h2>
                                    <p style={{ marginTop: '1rem', opacity: 0.8 }}>Please stay tuned for updates or contact us for more information.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AppscListing;
