
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <Layout>
            <div className="notfound-page">
                <div className="container">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-text">Oops...</h2>
                    <div className="error-badge">
                        <p>The page you're looking for doesn't exist, may have <br />been moved, or is no longer available.</p>
                    </div>
                    <Link to="/" className="btn-back">
                        Back to Home <ArrowLeft size={18} />
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;
