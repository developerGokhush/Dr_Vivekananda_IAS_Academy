import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './CopyrightsPolicy.css';

const CopyrightsPolicy = () => {
    return (
        <Layout>
            <div className="copyright-page">
                <SEO
                    title="Copyright & Terms | Dr Vivekananda's IAS Academy"
                    description="Our copyright notice and intellectual property rights information for Dr Vivekananda's IAS Academy content and materials."
                />
                <section className="copyright-section">
                    <div className="container">
                        <h1 className="copyright-title">Copyright & Intellectual Property</h1>
                        <p className="copyright-desc">Learn about our content ownership, usage rights, and intellectual<br />property policies.</p>

                        <div className="copyright-content glass-card">
                            <p className="last-updated">Last Updated: Sunday, June 12, 2025</p>

                            <div className="policy-block">
                                <h3>1. Copyright Notice</h3>
                                <p>&copy; 2024-2026 Dr Vivekananda's IAS Academy. All rights reserved.</p>
                                <p>All content on this website, including but not limited to text, graphics, logos, images, audio clips, and video clips, is the exclusive property of Dr Vivekananda's IAS Academy or its content suppliers and is protected by international copyright laws.</p>
                            </div>

                            <div className="policy-block">
                                <h3>2. Intellectual Property Rights</h3>
                                <p>The following materials are protected intellectual property:</p>
                                <ul>
                                    <li>Course materials and educational content</li>
                                    <li>Video lectures and recordings</li>
                                    <li>Study notes and guides</li>
                                    <li>Question banks and practice materials</li>
                                    <li>Brand identity (logos, trademarks, colors)</li>
                                    <li>Unique methodologies and teaching approaches</li>
                                    <li>Website design and layout</li>
                                </ul>
                            </div>

                            <div className="policy-block">
                                <h3>3. Permitted Use</h3>
                                <p>You may:</p>
                                <ul>
                                    <li>View and download content for personal, non-commercial educational use</li>
                                    <li>Print content for personal study purposes</li>
                                    <li>Access course materials you have purchased or enrolled in</li>
                                </ul>
                            </div>

                            <div className="policy-block">
                                <h3>4. Prohibited Use</h3>
                                <p>You may NOT:</p>
                                <ul>
                                    <li>Reproduce, duplicate, or copy content for commercial purposes</li>
                                    <li>Distribute, sell, or resell our materials without permission</li>
                                    <li>Modify or create derivative works from our content</li>
                                    <li>Remove or obscure any copyright notices</li>
                                    <li>Use content on other websites or applications</li>
                                    <li>Share login credentials or course access with unauthorized users</li>
                                    <li>Frame or mirror our website content</li>
                                </ul>
                            </div>

                            <div className="policy-block">
                                <h3>5. Attribution</h3>
                                <p>If you are permitted to use our materials, appropriate attribution must be given to Dr Vivekananda's IAS Academy. Please contact us for the correct attribution format.</p>
                            </div>

                            <div className="policy-block">
                                <h3>6. Trademarks</h3>
                                <p>All trademarks, service marks, and logos used on this website are the property of Dr Vivekananda's IAS Academy or their respective owners. Unauthorized use of these marks is strictly prohibited.</p>
                            </div>

                            <div className="policy-block">
                                <h3>7. License Grant</h3>
                                <p>By purchasing or enrolling in our courses, you are granted a limited, non-exclusive, non-transferable license to access and use the course materials solely for your personal educational use. This license may be revoked at any time for violations of these terms.</p>
                            </div>

                            <div className="policy-block">
                                <h3>8. Infringement & Enforcement</h3>
                                <p>We actively protect our intellectual property rights. If you believe your work has violated our copyrights or if you discover unauthorized use of our materials, please contact us immediately at:</p>
                                <p><strong>Email:</strong> legal@drvivekanandaias.com</p>
                                <p>We will take appropriate legal action against copyright infringement, which may include seeking damages and injunctive relief.</p>
                            </div>

                            <div className="policy-block">
                                <h3>9. Third-Party Content</h3>
                                <p>Some materials on our website may include content from third parties. We respect the intellectual property rights of others and ensure that all third-party content is used with proper authorization. If you believe any materials infringe your rights, please notify us.</p>
                            </div>

                            <div className="policy-block">
                                <h3>10. Questions & Permissions</h3>
                                <p>If you require permission to use our materials for purposes not covered by this policy, such as academic research, podcasts, or educational distribution, please contact us directly at legal@drvivekanandaias.com with your specific request.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default CopyrightsPolicy;
