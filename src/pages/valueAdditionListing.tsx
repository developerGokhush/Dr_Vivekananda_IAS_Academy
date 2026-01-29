import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { valueAdditionCourses } from '../data/valueAdditionCourses';
import './OptionalClassesListing.css'; // Reusing styles

const ValueAdditionListing = () => {
  return (
    <Layout>
      <div className="optional-page">
        <section className="optional-hero">
          <div className="container">
            <h1 className="section-title-large">Value - Additional Classes</h1>
            <p className="section-subtitle-center">Specialized modules to enhance your UPSC preparation.</p>

            <div className={`optional-grid ${valueAdditionCourses.length === 1 ? 'single-item' : ''}`}>
              {valueAdditionCourses.map((course) => (
                <Link to={`/courses/general-studies/value-addition/${course.id}`} key={course.id} className="optional-card-large">
                  <div className="optional-img-wrap">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="optional-content">
                    <h3>{course.title}</h3>
                    <div className="optional-overlay">
                      {course.subtitle && <span className="optional-subtitle">{course.subtitle}</span>}
                    </div>
                    <ul className="optional-usps">
                      <li>• {course.faculty}</li>
                      <li>• {course.duration || course.tests}</li>
                      <li>• {course.date}</li>
                    </ul>
                    <div className="optional-footer">
                      <span className="optional-fee">{course.fee}</span>
                      <Link to={`/courses/general-studies/value-addition/${course.id}`} className="btn-explore">
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

export default ValueAdditionListing;