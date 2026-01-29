import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { optionalMentorshipCourses } from '../data/optionalMentorshipCourses';
import './OptionalClassesListing.css'; // Reusing styles

const OptionalMentorshipListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Mentorship & Test Series</h1>
                        <p className="section-subtitle-center">Comprehensive guidance programs for Anthropology and Sociology options.</p>

                        <div className="optional-grid">
                            {optionalMentorshipCourses.map((course) => (
                                <Link key={course.id} to={`/courses/optional-mentorship/${course.id}`} className="optional-card-large">
                                    <div className="optional-img-wrap">
                                        <img src={course.image} alt={course.title} />
                                    </div>
                                    <div className="optional-content">
                                        <h3>{course.title}</h3>
                                        <div className="optional-overlay">
                                            <span className="optional-subtitle">{course.subtitle}</span>
                                        </div>
                                        <ul className="optional-usps">
                                            <li>• {course.faculty}</li>
                                            <li>• {course.duration || course.tests}</li>
                                            <li>• {course.date}</li>
                                        </ul>
                                        <div className="optional-footer">
                                            <span className="optional-fee">{course.fee}</span>
                                            <Link to={`/courses/optional-mentorship/${course.id}`} className="btn-explore">
                                                Explore More <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default OptionalMentorshipListing;
