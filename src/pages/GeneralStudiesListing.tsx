
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            id: 'mentorship',
            title: 'Mentorship / Test series',
            duration: '',
            image: '/assets/images/mentorship.png',
        },
        {
            id: 'ethics',
            title: 'Ethics',
            duration: '',
            image: '/assets/images/ethics-integrity.png',
        },
        {
            id: 'essay',
            title: 'Essay',
            duration: '',
            image: '/assets/images/essay-coaching.png',
        },
        {
            id: 'value-addition',
            title: 'Value Addition',
            duration: '',
            image: '/assets/images/value-addition.png',
        }
    ];

    return (
        <Layout>
            <div className="courses-page">
                <section className="courses-hero">
                    <div className="courses-container container">
                        <h1 className="section-title-large">The latest courses in General Studies.</h1>
                        <div className={`courses-grid ${courses.length === 1 ? 'single-item' : ''}`}>
                            {courses.map((course, index) => {
                                let linkPath = `/courses/${course.id}`; // Default
                                if (course.title === 'Mentorship / Test series') linkPath = '/courses/general-studies/mentorship';
                                if (course.title === 'Essay') linkPath = '/courses/general-studies/essay';
                                if (course.title === 'Ethics') linkPath = '/courses/general-studies/ethics';
                                if (course.title === 'Value Addition') linkPath = '/courses/general-studies/value-addition';

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
