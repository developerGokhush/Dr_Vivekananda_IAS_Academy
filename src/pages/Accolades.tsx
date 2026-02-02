import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './Accolades.css';

const Accolades = () => {
  return (
    <Layout>
      <div className="accolades-page">
        <SEO
          title="Accolades & Achievements | Dr Vivekananda’s IAS Academy"
          description="Awards and recognitions received by Dr Vivekananda’s IAS Academy for excellence in Civil Services coaching."
        />
        <div className="container">
          <div className="coming-soon-content">
            <h1 className="accolades-title">Accolades</h1>
            <div className="coming-soon-badge">Coming Soon</div>
            <p className="coming-soon-text">We are compiling our list of achievements and recognitions. Stay tuned!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accolades;
