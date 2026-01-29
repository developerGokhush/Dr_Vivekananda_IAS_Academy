import Layout from '../components/Layout';
import './Accolades.css'; // Reusing Accolades styles for consistent Coming Soon look

const Testimonials = () => {
    return (
        <Layout>
            <div className="accolades-page">
                <div className="container">
                    <div className="coming-soon-content">
                        <h1 className="accolades-title">Testimonials</h1>
                        <div className="coming-soon-badge">Coming Soon</div>
                        <p className="coming-soon-text">We are verifying success stories from our latest batch. Student testimonials will be updated shortly!</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Testimonials;
