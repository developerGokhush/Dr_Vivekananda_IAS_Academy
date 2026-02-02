
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            id: 'optional-classes',
            title: 'Optional Classes',
            duration: '',
            image: '/assets/images/optional.png',
        },
        {
            id: 'optional-mentorship',
            title: 'Optional Mentorship',
            duration: '',
            image: '/assets/images/mentorship.png',
        },
        {
            id: 'general',
            title: 'General Studies',
            duration: '',
            image: '/assets/images/general-studies.png',
        },
        {
            id: 'tgpsc/appsc',
            title: 'TGPSC / APPSC',
            duration: '',
            image: '/assets/images/tgpsc-appsc-category.png',
        }
    ];

    return (
        <Layout>
            <div className="courses-page">
                <SEO
                    title="UPSC Courses | Dr Vivekananda’s IAS Academy"
                    description="Explore our comprehensive UPSC courses in General Studies, Ethics, Anthropology, and Sociology. Affordable and expert-led training."
                />
                <section className="courses-hero">
                    <div className="courses-container container">
                        <h1 className="section-title-large">The latest courses from us.</h1>
                        <div className="courses-grid">
                            {courses.map((course, index) => {
                                let linkPath = `/courses/${course.id}`; // Default
                                if (course.title === 'Optional Classes') linkPath = '/courses/optional-classes';
                                if (course.title === 'Optional Mentorship') linkPath = '/courses/optional-mentorship';
                                if (course.title === 'General Studies') linkPath = '/courses/general-studies';
                                if (course.title === 'TGPSC / APPSC') linkPath = '/courses/tgpsc-appsc';

                                return (
                                    <Link to={linkPath} key={index} className="course-card-alt">
                                        <div className="course-img-wrap">
                                            <img src={course.image} alt={course.title} />
                                        </div>
                                        <div className="course-info-alt">
                                            {course.duration && <span className="course-duration">{course.duration}</span>}
                                            <h3>{course.title}</h3>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        {courses.length > 6 && <div className="load-more-container">
                            <button className="btn-load-more">Load More</button>
                        </div>}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Courses;
