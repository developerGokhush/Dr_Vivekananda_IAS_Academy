
import Layout from '../components/Layout';

import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: 'Foundation Course',
            price: '50000',
            description: 'An affordable plan with essential features to get you started.',
            features: ['Test every month end', 'Online Classes', 'Recorded Sessions', 'Debates', 'One on One sessions']
        },
        {
            name: 'Integrated Course',
            price: '70000',
            description: 'A balanced plan offering advanced features at great value.',
            features: ['Test every month end', 'Online Classes', 'Recorded Sessions', 'Debates', 'One on One sessions'],
            active: true
        },
        {
            name: 'Advanced Course',
            price: '100000',
            description: 'The ultimate plan with all premium features for power users.',
            features: ['Test every month end', 'Online Classes', 'Recorded Sessions', 'Debates', 'One on One sessions']
        }
    ];

    return (
        <Layout>
            <div className="pricing-page">
                <section className="pricing-hero">
                    <div className="container">
                        <h1 className="pricing-title">Some Affordable Pricing <br />Plans for you!</h1>
                        <p className="pricing-subtitle">Explore our budget-friendly pricing plans designed to suit your needs. Enjoy access to premium features, top-notch support, and powerful tools.</p>

                        <div className="pricing-grid">
                            {plans.map((plan, index) => (
                                <div key={index} className={`pricing-card glass-card ${plan.active ? 'active' : ''}`}>
                                    <h3>{plan.name}</h3>
                                    <div className="price">
                                        <span className="currency">₹</span>
                                        <span className="amount">{plan.price}</span>
                                    </div>
                                    <p className="period">per year</p>
                                    <p className="desc">{plan.description}</p>
                                    <ul className="features">
                                        {plan.features.map((f, i) => (
                                            <li key={i}><Check size={16} /> {f}</li>
                                        ))}
                                    </ul>
                                    <button className="btn-get">
                                        Get Now <ArrowRight size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Pricing;
