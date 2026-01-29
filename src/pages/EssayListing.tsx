import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { essayCourses } from '../data/essayCourses';
import './OptionalClassesListing.css'; // Reusing styles

const EssayListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Essay Writing Module</h1>
                        <p className="section-subtitle-center">Master the art of essay writing with our specialized modules.</p>

                        <div className={`optional-grid ${essayCourses.length === 1 ? 'single-item' : ''}`}>
                            {essayCourses.map((course) => (
                                <Link to={`/courses/general-studies/essay/${course.id}`} key={course.id} className="optional-card-large">
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
                                            <li>• {course.tests}</li>
                                        </ul>
                                        <div className="optional-footer">
                                            <span className="optional-fee">{course.fee}</span>
                                            <Link to={`/courses/general-studies/essay/${course.id}`} className="btn-explore">
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

export default EssayListing;
