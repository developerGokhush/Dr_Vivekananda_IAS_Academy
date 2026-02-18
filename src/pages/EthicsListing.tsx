import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { ethicsCourses } from '../data/ethicsCourses';
import './OptionalClassesListing.css'; // Reusing styles

const EthicsListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <SEO
                    title="Ethics & Essay Modules | Dr Vivekananda’s IAS Academy"
                    description="Master General Studies Paper IV (Ethics) and Essay writing with Dr. Vivekananda's expert modules and test series."
                />
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Essay Writing Module</h1>
                        <p className="section-subtitle-center">Master the art of essay writing with our specialized modules.</p>

                        <div className={`optional-grid ${ethicsCourses.length === 1 ? 'single-item' : ''}`}>
                            {ethicsCourses.map((course) => (
                                <Link to={`/courses/general-studies/ethics/${course.id}`} key={course.id} className="optional-card-large">
                                    <div className="optional-img-wrap">
                                        <img src={course.image} alt={course.alt || course.title} />
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
                                            <Link to={`/courses/general-studies/ethics/${course.id}`} className="btn-explore">
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

export default EthicsListing;
