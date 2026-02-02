import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { galleryData } from '../data/galleryData';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SEO from '../components/SEO';
import './Gallery.css';

interface GalleryProps {
    defaultFilter?: string;
}

const Gallery = ({ defaultFilter = 'All' }: GalleryProps) => {
    const location = useLocation();
    const [filter, setFilter] = useState(defaultFilter);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const filters = ['All',
        'Toppers',
        'Public Events',
        'Podcasts',
        'Seminars',
        'Testimonials',
        'Accolades',
    ];

    useEffect(() => {
        if (location.state && location.state.filter) {
            setFilter(location.state.filter);
        }
    }, [location]);

    const filteredData = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.tag === filter);

    return (
        <Layout>
            <div className="gallery-page">
                <SEO
                    title="Gallery | Dr Vivekananda’s IAS Academy"
                    description="View our gallery of toppers, seminars, public events, and academy moments. See the vibrant community at Dr Vivekananda’s IAS Academy."
                />
                <div className="container">
                    <div className="header-content">
                        <h1 className="gallery-title">Our Gallery</h1>
                    </div>
                </div>

                <div className="container content-container">
                    <div className="filter-container-tabs">
                        {filters.map(f => (
                            <button
                                key={f}
                                className={`filter-tab ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="gallery-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        key={item.id}
                                        className="gallery-item-card"
                                        onClick={() => item.videoUrl && setSelectedVideo(item.videoUrl)}
                                    >
                                        <div className="gallery-card-image">
                                            <img src={item.image} alt={item.desc} loading="lazy" />
                                            {item.videoUrl && (
                                                <div className="video-icon-overlay">
                                                    <Play size={48} fill="white" stroke="white" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="gallery-card-content">
                                            <span className="gallery-tag">{item.tag}</span>
                                            <p className="gallery-desc">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="gallery-empty-state"
                                >
                                    <p>{filter} Content is being curated for this category.</p>
                                    <span>Please check back soon!</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
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
        </Layout >
    );
};

export default Gallery;
