import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { valueCourses } from '../data/valueCourses';
import './OptionalClassesListing.css'; // Reusing styles

const ValueListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Value - Additional Classes</h1>
                        <p className="section-subtitle-center">Specialized modules to enhance your UPSC preparation.</p>

                        <div className="optional-grid">
                            {valueCourses.map((course) => (
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
                                            <Link to={`/courses/value/${course.id}`} className="btn-explore">
                                                Explore More <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ValueListing;
