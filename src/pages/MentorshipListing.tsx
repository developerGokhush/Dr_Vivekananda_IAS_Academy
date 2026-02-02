import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { mentorshipCourses } from '../data/mentorshipCourses';
import './OptionalClassesListing.css'; // Reusing styles

const MentorshipListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <SEO
                    title="UPSC Mentorship Programs | Dr Vivekananda’s IAS Academy"
                    description="Personalized mentorship programs for UPSC Civil Services. structured guidance, test series and performance analysis."
                />
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Mentorship & Test Series</h1>
                        <p className="section-subtitle-center">Comprehensive guidance programs for Anthropology and Sociology options.</p>

                        <div className={`optional-grid ${mentorshipCourses.length === 1 ? 'single-item' : ''}`}>
                            {mentorshipCourses.map((course) => (
                                <Link key={course.id} to={`/courses/general-studies/mentorship/${course.id}`} className="optional-card-large">
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
                                            <Link to={`/courses/general-studies/mentorship/${course.id}`} className="btn-explore">
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

export default MentorshipListing;
