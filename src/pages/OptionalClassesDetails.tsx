import Layout from '../components/Layout';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { optionalClassesCourses } from '../data/optionalClassesCourses';
import { testimonials } from '../data/testimonialsData';
import { Clock, Calendar, User, Play, FileText, Award, MonitorPlay, ChevronLeft, ChevronRight, X, ChevronUp, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './OptionalClassesDetails.css';
import { AnimatePresence, motion } from 'framer-motion';

const OptionalClassesDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = optionalClassesCourses.find((c) => c.id === id);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // We duplicate the testimonials array to fake an infinite scroll
    const EXTENDED_TESTIMONIALS = [...testimonials, ...testimonials, ...testimonials];
    const ORIGINAL_LENGTH = testimonials.length;

    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Start at the first element of the middle set
    const [activeIndex, setActiveIndex] = useState(ORIGINAL_LENGTH);
    const isHovered = useRef(false);
    const isScrolling = useRef(false);

    // Track array of independently open modules (default first open)
    const [openModules, setOpenModules] = useState<number[]>([0]);

    const toggleModule = (index: number) => {
        setOpenModules(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    // Track independently open subtopics using a combination key 'moduleIndex-topicIndex'
    const [openSubtopics, setOpenSubtopics] = useState<string[]>([]);

    const toggleSubtopic = (moduleIndex: number, topicIndex: number) => {
        const key = `${moduleIndex}-${topicIndex}`;
        setOpenSubtopics(prev =>
            prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
        );
    };

    // Passive scroll helper avoiding page-level scrollIntoview disruption
    const scrollToCard = (index: number, behavior: ScrollBehavior = 'smooth') => {
        if (!carouselRef.current || !cardRefs.current[index]) return;
        const container = carouselRef.current;
        const card = cardRefs.current[index];

        // Calculate the perfectly centered horizontal scroll position locally
        const scrollPosition = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
        container.scrollTo({
            left: scrollPosition,
            behavior
        });
    };

    // Initial center on mount
    useEffect(() => {
        // small timeout ensures layout is painted before checking offsets
        setTimeout(() => {
            scrollToCard(ORIGINAL_LENGTH, 'auto');
        }, 100);
    }, [ORIGINAL_LENGTH]);

    // Intersection observer to track active index
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: carouselRef.current,
                threshold: 0.6,
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [EXTENDED_TESTIMONIALS.length]);

    // Handle seamless infinite loop jump logic
    useEffect(() => {
        const handleScrollEnd = () => {
            if (!carouselRef.current || isScrolling.current) return;

            // If we've reached the duplicated items on the far left
            if (activeIndex < ORIGINAL_LENGTH) {
                isScrolling.current = true;
                const targetIndex = activeIndex + ORIGINAL_LENGTH;

                // Briefly disable scroll behavior to snap instantly
                carouselRef.current.style.scrollBehavior = 'auto';
                scrollToCard(targetIndex, 'auto');
                setActiveIndex(targetIndex);

                // Restore smooth scrolling on the next frame
                requestAnimationFrame(() => {
                    if (carouselRef.current) {
                        carouselRef.current.style.scrollBehavior = 'smooth';
                        isScrolling.current = false;
                    }
                });
            }
            // If we've reached the duplicated items on the far right
            else if (activeIndex >= ORIGINAL_LENGTH * 2) {
                isScrolling.current = true;
                const targetIndex = activeIndex - ORIGINAL_LENGTH;

                carouselRef.current.style.scrollBehavior = 'auto';
                scrollToCard(targetIndex, 'auto');
                setActiveIndex(targetIndex);

                requestAnimationFrame(() => {
                    if (carouselRef.current) {
                        carouselRef.current.style.scrollBehavior = 'smooth';
                        isScrolling.current = false;
                    }
                });
            }
        };

        // Delay checking end of scroll to allow smooth transition to finish natively
        const timeout = setTimeout(handleScrollEnd, 600);
        return () => clearTimeout(timeout);
    }, [activeIndex, ORIGINAL_LENGTH]);

    // Auto scroll interval
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered.current && carouselRef.current && !isScrolling.current) {
                const nextIndex = activeIndex + 1;
                if (cardRefs.current[nextIndex]) {
                    scrollToCard(nextIndex, 'smooth');
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (isScrolling.current) return;

        const nextIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
        scrollToCard(nextIndex, 'smooth');
    };

    if (!course) {
        return <Navigate to="/courses/optional-classes" replace />;
    }

    return (
        <Layout>
            <div className="optional-details-page">
                <SEO
                    title={`${course.title} | Optional Course`}
                    description={`Join our comprehensive ${course.title} optional course. ${course.subtitle}. Faculty: ${course.faculty}.`}
                    image={course.image}
                />

                {/* Hero Section */}
                <section className="details-hero">
                    <div className="container">
                        <div className="hero-content-wrapper">
                            <div className="details-hero-text">
                                {/* <div className="breadcrumb">
                                    <Link to="/">Home</Link> &gt; <Link to="/courses">Courses</Link> &gt; <span>{course.title}</span>
                                </div> */}
                                <h1>{course.seoTitle || course.title}</h1>

                                <div className="rating-wrap">
                                    <span className="stars">★★★★★</span>
                                    <span className="reviews-count">4.8 (1.2k reviews)</span>
                                </div>

                                <p className="details-subtitle">{course.subtitle}</p>

                                <div className="hero-actions">
                                    <button
                                        className="btn-primary"
                                        onClick={() => window.open("https://forms.gle/xhF7LmAe6cCMPfye8", "_blank")}
                                    >
                                        Enroll Now
                                    </button>
                                    <button
                                        className="btn-secondary"
                                        onClick={() => window.open("https://forms.gle/xhF7LmAe6cCMPfye8", "_blank")}
                                    >
                                        Enquire Now
                                    </button>
                                </div>

                                <div className="details-badges">
                                    <span className="badge"><User size={16} /> {course.faculty}</span>
                                    <span className="badge"><Clock size={16} /> {course.duration}</span>
                                    <span className="badge"><Calendar size={16} /> {course.date}</span>
                                </div>
                            </div>

                            <div className="details-hero-image">
                                <img src={course.image} alt={course.alt || course.title} />
                                <div className="floating-card user-card">
                                    <div className="user-avatars">
                                        <div className="avatar ui">UI</div>
                                        <div className="avatar fe">FE</div>
                                    </div>
                                    <span>More than 1k+ students enrolled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details-main-content">
                    <div className="container">
                        {/* What's Included */}
                        <div className="whats-included">
                            <h2>What's included</h2>
                            <div className="included-grid">
                                <div className="included-item">
                                    <div className="included-icon"><MonitorPlay size={24} color="#f59e0b" /></div>
                                    <span>{course.duration} on-demand video</span>
                                </div>
                                <div className="included-item">
                                    <div className="included-icon"><FileText size={24} color="#3b82f6" /></div>
                                    <span>Downloadable resources</span>
                                </div>
                                <div className="included-item">
                                    <div className="included-icon"><Clock size={24} color="#10b981" /></div>
                                    <span>Full lifetime access</span>
                                </div>
                                <div className="included-item">
                                    <div className="included-icon"><Award size={24} color="#f97316" /></div>
                                    <span>Certificate of completion</span>
                                </div>
                            </div>
                        </div>

                        {/* Course Description */}
                        <div className="course-description-section">
                            <h2>Course description</h2>
                            <p className="description-text">
                                {course.seoDescription || "This comprehensive module is designed to cover the complete syllabus with an emphasis on conceptual clarity, exact demands of UPSC, and answer writing. Get personalized mentorship and doubt resolution to ensure you are fully prepared for your Mains examination."}
                            </p>
                        </div>

                        {/* Course Features - Restored to original design */}
                        <div className="features-section">
                            <h2>Features</h2>
                            <div className="features-list">
                                {course.features.map((feature, index) => (
                                    <div className="feature-item" key={index}>
                                        <div className="feature-icon"><Award size={20} /></div>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Courses in This Program (Lessons) */}
                        {course.lessons && course.lessons.length > 0 && (
                            <div className="program-features-section">
                                <div className="section-header-flex">
                                    <h2>Courses Content</h2>
                                </div>
                                <div className="features-list-styled">
                                    {course.lessons.map((lesson, index) => {
                                        const colors = ['yellow', 'blue', 'green', 'purple'];
                                        const iconColor = colors[index % colors.length];

                                        const isOpen = openModules.includes(index);

                                        return (
                                            <div className="program-course-card" key={index}>
                                                <div
                                                    className="program-card-header"
                                                    onClick={() => toggleModule(index)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div className="lesson-header">
                                                        <div className="lesson-head-item">
                                                            <div className={`program-icon-box ${iconColor}`}>
                                                                <FileText size={20} />
                                                            </div>
                                                            <span className="lesson-badge">Month {index + 1}</span>
                                                        </div>
                                                        <h3>{lesson.title}</h3>
                                                    </div>
                                                    <div className="collapsible-icon">
                                                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                    </div>
                                                </div>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            style={{ overflow: 'hidden' }}
                                                        >
                                                            <div className="program-card-body">
                                                                <ul className="lesson-topics-list">
                                                                    {lesson.topics.map((topic, i) => {
                                                                        // const topicKey = `${index}-${i}`;
                                                                        // const isTopicOpen = openSubtopics.includes(topicKey);

                                                                        return (
                                                                            <div className="program-lesson-card" key={i}>
                                                                                <div
                                                                                    className="topic-header"
                                                                                    onClick={() => toggleSubtopic(index, i)}
                                                                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                                                                                >
                                                                                    <span className="topic-name">{topic.name}</span>
                                                                                    {/* {topic.description && (
                                                                                        <div className="subtopic-collapsible-icon">
                                                                                            {isTopicOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                                                        </div>
                                                                                    )} */}
                                                                                </div>
                                                                                <p className="topic-description">{topic.description}</p>

                                                                                {/* <AnimatePresence>
                                                                                    {topic.description && isTopicOpen && (
                                                                                        <motion.div
                                                                                            initial={{ height: 0, opacity: 0 }}
                                                                                            animate={{ height: 'auto', opacity: 1 }}
                                                                                            exit={{ height: 0, opacity: 0 }}
                                                                                            transition={{ duration: 0.2 }}
                                                                                            style={{ overflow: 'hidden' }}
                                                                                        >
                                                                                            <p className="topic-description">{topic.description}</p>
                                                                                        </motion.div>
                                                                                    )}
                                                                                </AnimatePresence> */}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Taught By The Best */}
                        <div className="instructors-section">
                            <h2>Taught By The Best</h2>
                            <div className="instructor-card">
                                <div className="instructor-avatar">
                                    <img src="/assets/images/director3.jpeg" alt={course.faculty} />
                                </div>
                                <div className="instructor-info">
                                    <h3>{course.faculty}</h3>
                                    <p>Director & Lead Faculty</p>
                                    <button className="btn-view-profile">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div> {/* End of main content container */}

                    {/* Testimonials Carousel - Full Bleed */}
                    <div className="testimonials-section">
                        <div className="container">
                            <h2>Testimonials</h2>
                        </div>
                        <div
                            className="carousel-wrapper"
                            onMouseEnter={() => isHovered.current = true}
                            onMouseLeave={() => isHovered.current = false}
                        >
                            <button className="carousel-btn prev-btn" onClick={() => scrollCarousel('left')}>
                                <ChevronLeft size={24} />
                            </button>

                            <div className="testimonials-carousel" ref={carouselRef}>
                                {EXTENDED_TESTIMONIALS.map((testimonial, index) => {
                                    // By matching the modulo, the clone and original have the EXACT 
                                    // same CSS state during the instant snap, preventing transition flickers.
                                    const isActive = (index % ORIGINAL_LENGTH) === (activeIndex % ORIGINAL_LENGTH);
                                    // A unique key is crucial since we repeat IDs.
                                    const unqKey = `${testimonial.id}-${index}`;

                                    return (
                                        <div
                                            className={`testimonial-card gallery-style-card ${isActive ? 'active' : ''}`}
                                            key={unqKey}
                                            data-index={index}
                                            ref={(el) => (cardRefs.current[index] = el)}
                                        >
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                                key={testimonial.id}
                                                className="gallery-item-card"
                                                onClick={() => testimonial.videoUrl && setSelectedVideo(testimonial.videoUrl)}
                                            >
                                                <div className="gallery-card-image testimonial-image-wrapper">
                                                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                                                    {testimonial.videoUrl && (
                                                        <div className="video-icon-overlay">
                                                            <Play size={40} fill="white" stroke="white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="gallery-card-content testimonial-content">
                                                    <span className="gallery-tag">{testimonial.role}</span>
                                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                                    <p className="gallery-desc testimonial-quote">"{testimonial.quote}"</p>
                                                    <button className="dummy-read-more-btn">Read full story</button>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button className="carousel-btn next-btn" onClick={() => scrollCarousel('right')}>
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Related Courses Section */}
                <section className="related-courses-section">
                    <div className="container">
                        <h2>Related Optional Classes</h2>
                        <div className="related-grid">
                            {optionalClassesCourses
                                .filter(c => c.id !== course.id)
                                .slice(0, 3)
                                .map(related => (
                                    <div className="related-course-card" key={related.id}>
                                        <div className="related-image">
                                            <img src={related.image} alt={related.title} />
                                        </div>
                                        <div className="related-content">
                                            <h3>{related.title}</h3>
                                            <div className="related-meta">
                                                <span><User size={14} /> {related.faculty}</span>
                                                <span><Clock size={14} /> {related.duration}</span>
                                            </div>
                                            <div className="related-footer">
                                                <Link to={`/courses/optional-classes/${related.id}`} className="view-details-link">
                                                    View Details &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* Dummy Card if only 1 related course exists */}
                            {optionalClassesCourses.filter(c => c.id !== course.id).length < 2 && (
                                <div className="related-course-card dummy-card-related">
                                    <div className="related-image placeholder-grad"></div>
                                    <div className="related-content">
                                        <h3>More courses coming soon</h3>
                                        <p>Stay tuned for upcoming optional modules.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="video-modal-overlay"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="video-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>
                                <X size={32} />
                            </button>
                            <iframe
                                src={`${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default OptionalClassesDetails;
