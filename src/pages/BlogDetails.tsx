import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getBlogById, blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import './BlogDetails.css';
import parse from "html-react-parser";


const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const post = id ? getBlogById(id) : undefined;

    if (!post) {
        return (
            <Layout>
                <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                    <h1>Blog post not found</h1>
                    <Link to="/blogs" className="back-link">← Back to Blogs</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="blog-details-page">
                <div className="blog-header">
                    <div className='blog-return-header'>
                        <Link to="/blogs" className="back-to-blog">
                            <ArrowLeft size={20} />
                            Back to Blog Feed
                        </Link>
                        <span className="blog-category-badge">{post.category}</span>
                    </div>
                    <div className="container">
                        <h1 className="blog-title">{post.title}</h1>
                        <div className="blog-meta-info">
                            <span>By {post.author}</span>
                            <span className="meta-separator">•</span>
                            <span>{post.date}</span>
                            <span className="meta-separator">•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="blog-featured-image">
                    <img src={post.image} alt={post.title} />
                </div>

                <div className="blog-content-wrapper">
                    <div className="container">
                        {/* <div className="blog-content">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div> */}

                        <div className="blog-content">
                            {parse(post.content)}
                        </div>

                    </div>
                </div>

                {/* Related Posts Section */}
                {(() => {
                    const relatedPosts = blogPosts.filter(p => {
                        if (p.id === post.id) return false;

                        // 1. Same Category
                        if (p.category === post.category) return true;

                        // 2. Title similarity (simple word match)
                        const currentTitleWords = post.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
                        const otherTitleWords = p.title.toLowerCase().split(/\s+/);

                        return currentTitleWords.some(w =>
                            otherTitleWords.some(ow => ow.includes(w.substring(0, 4)))
                        );
                    }).slice(0, 3);

                    if (relatedPosts.length === 0) return null;

                    return (
                        <div className="related-posts-section">
                            <div className="container">
                                <h2 className="related-posts-title">Related Articles</h2>
                                <div className="related-posts-grid">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link to={`/blogs/${relatedPost.id}`} key={relatedPost.id} className="related-post-card">
                                            <div className="related-post-image">
                                                <img src={relatedPost.image} alt={relatedPost.title} />
                                                <span className="related-post-category">{relatedPost.category}</span>
                                            </div>
                                            <div className="related-post-content">
                                                <span className="related-post-date">{relatedPost.date}</span>
                                                <h3 className="related-post-title">{relatedPost.title}</h3>
                                                <span className="read-more-link">
                                                    Read More
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </div>
        </Layout>
    );
};

export default BlogDetails;
