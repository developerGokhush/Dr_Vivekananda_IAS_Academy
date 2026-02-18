import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import './BlogListing.css';

const BlogListing = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredPosts = blogPosts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        );
    });

    const displayedPosts = filteredPosts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <Layout>
            <div className="blog-listing-page">
                <SEO
                    title="UPSC Blogs & Insights | Dr Vivekananda’s IAS Academy"
                    description="Expert articles and insights on UPSC preparation, current affairs, ethics, and answer writing strategies."
                />
                <section className="blog-hero">
                    <div className="container">
                        <h1 className="section-title-large">Insights & Articles</h1>
                        <p className="blog-subtitle">Expert guidance and analysis for UPSC aspirants</p>

                        <div className="blog-search-container">
                            <input
                                type="text"
                                placeholder="Search by title or category..."
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
                        {displayedPosts.length > 0 ? (
                            <>
                                <div className="blog-grid">
                                    {displayedPosts.map((post) => (
                                        <Link to={`/blogs/${post.id}`} key={post.id} className="blog-card">
                                            <div className="blog-card-image">
                                                <img src={post.image} alt={post.alt || post.title} />
                                                <span className="blog-category">{post.category}</span>
                                            </div>
                                            <div className="blog-card-content">
                                                <div className="blog-meta">
                                                    <span className="blog-date">{post.date}</span>
                                                    <span className="blog-separator">•</span>
                                                    <span className="blog-read-time">{post.readTime}</span>
                                                </div>
                                                <h2 className="blog-card-title">{post.title}</h2>
                                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                                <div className="blog-author">
                                                    <div className="author-avatar">{post.authorInitial}</div>
                                                    <span className="author-name">{post.author}</span>
                                                    <span className="read-more-link">
                                                        Read More
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {visibleCount < filteredPosts.length && (
                                    <div className="load-more-container">
                                        <button onClick={handleLoadMore} className="btn-load-more">
                                            Load More Articles
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-results">
                                <h3>No articles found matching "{searchQuery}"</h3>
                                <p>Try adjusting your search terms or browse all categories.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default BlogListing;
