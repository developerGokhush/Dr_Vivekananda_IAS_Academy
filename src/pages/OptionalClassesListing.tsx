import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { optionalClassesCourses } from '../data/optionalClassesCourses';
import './OptionalClassesListing.css';

const OptionalClassesListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <SEO
                    title="Optional Classes - Anthropology & Sociology | Dr Vivekananda’s IAS Academy"
                    description="Specialized optional foundation courses for Anthropology and Sociology. Expert faculty and comprehensive study material."
                />
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Optional Courses</h1>
                        <p className="section-subtitle-center">Specialized foundation courses for UPSC Civil Services Examination.</p>

                        <div className={`optional-grid ${optionalClassesCourses.length === 1 ? 'single-item' : ''}`}>
                            {optionalClassesCourses.map((course) => (
                                <Link key={course.id} to={`/courses/optional-classes/${course.id}`} className="optional-card-large">
                                    <div className="optional-img-wrap">
                                        <img src={course.image} alt={course.alt || course.title} />
                                    </div>
                                    <div className="optional-content">
                                        <h3>{course.title}</h3>
                                        <div className="optional-overlay">
                                            <span className="optional-subtitle">{course.subtitle}</span>
                                        </div>
                                        <ul className="optional-usps">
                                            {course.usps.map((usp, idx) => (
                                                <li key={idx}>• {usp}</li>
                                            ))}
                                        </ul>
                                        <div className="optional-footer">
                                            <span className="optional-fee">{course.fee}</span>
                                            <Link to={`/courses/optional-classes/${course.id}`} className="btn-explore">
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

export default OptionalClassesListing;
