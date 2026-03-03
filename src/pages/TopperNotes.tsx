import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { topperNotes, TopperNote } from '../data/topperNotes';
import './BlogListing.css'; // reuse existing styles
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const TopperNotes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);

    const filteredNotes = topperNotes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const displayedNotes = filteredNotes.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 12);
    };

    const { theme, toggle } = useTheme('blog-theme');

    return (
        <Layout>
            <div className={`blog-listing-page ${theme === 'dark' ? 'dark-mode' : ''}`} data-theme={theme}>
                <SEO
                    title="Topper Notes | Dr Vivekananda’s IAS Academy"
                    description="Download PDF notes from toppers to boost your UPSC preparation."
                />
                <section className="blog-hero">
                    <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <div className="container">
                        <h1 className="section-title-large">Topper Notes</h1>
                        <p className="blog-subtitle">Click on a note to download the PDF</p>

                        <div className="blog-search-container">
                            <input
                                type="text"
                                placeholder="Search by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="blog-search-input"
                            />
                            <div className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="blog-grid-section">
                    <div className="container">
                        {displayedNotes.length > 0 ? (
                            <>
                                <div className="blog-grid">
                                    {displayedNotes.map((note) => (
                                        <a
                                            href={note.fileUrl}
                                            key={note.id}
                                            className="blog-card"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="blog-card-content" style={{ padding: '2rem', textAlign: 'center' }}>
                                                <h2 className="blog-card-title">{note.title}</h2>
                                                <p className="read-more-link" style={{ marginTop: '1rem' }}>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 1v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5 8l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> Download
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {visibleCount < filteredNotes.length && (
                                    <div className="load-more-container">
                                        <button onClick={handleLoadMore} className="btn-load-more">
                                            Load More Notes
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-results">
                                <h3>No notes found matching "{searchQuery}"</h3>
                                <p>Try adjusting your search terms or browse all categories.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default TopperNotes;