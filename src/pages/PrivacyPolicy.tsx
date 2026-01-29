
import Layout from '../components/Layout';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className="privacy-page">
                <section className="privacy-section">
                    <div className="container">
                        <h1 className="privacy-title">Privacy Policy</h1>
                        <p className="privacy-desc">How we collect, use, and protect your information to provide a safe, transparent,<br />and personalized experience across all our services.</p>

                        <div className="privacy-content glass-card">
                            <p className="last-updated">Last Updated: Sunday, June 12, 2025</p>

                            <div className="policy-block">
                                <h3>1. Information We Collect</h3>
                                <p>We collect personal data that you voluntarily provide when you:</p>
                                <ul>
                                    <li>Sign up or create an account</li>
                                    <li>Contact us through email or forms</li>
                                    <li>Use our product features and tools</li>
                                </ul>
                                <p>This may include:</p>
                                <ul>
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Company name</li>
                                    <li>Billing and payment information</li>
                                    <li>Usage data (e.g., page visits, clicks)</li>
                                </ul>
                            </div>

                            <div className="policy-block">
                                <h3>2. How We Use Your Information</h3>
                                <p>Your information is used to:</p>
                                <ul>
                                    <li>Deliver and maintain our services</li>
                                    <li>Personalize and improve your user experience</li>
                                    <li>Handle transactions and billing</li>
                                    <li>Communicate with you (e.g., support, product updates)</li>
                                    <li>Enhance performance and stability</li>
                                    <li>Monitor security and prevent fraud</li>
                                </ul>
                            </div>

                            <div className="policy-block">
                                <h3>3. Sharing & Disclosure</h3>
                                <p>We <strong>do not</strong> sell your personal data.</p>
                                <p>We may share information with trusted third-party partners (e.g., hosting providers, analytics services, payment processors) to help us operate our platform. These providers follow strict confidentiality and data protection standards.</p>
                            </div>

                            <div className="policy-block">
                                <h3>4. Data Retention</h3>
                                <p>We retain your data only for as long as needed to fulfill the purposes outlined in this policy or as legally required. You can request deletion of your personal information at any time.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
