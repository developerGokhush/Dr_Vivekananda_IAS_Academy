import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import CourseDetails from './pages/CourseDetails';
import Director from './pages/Director';
import OptionalClassesListing from './pages/OptionalClassesListing';
import OptionalClassesDetails from './pages/OptionalClassesDetails';
import OptionalMentorshipListing from './pages/OptionalMentorshipListing';
import OptionalMentorshipDetails from './pages/OptionalMentorshipDetails';
import EssayListing from './pages/EssayListing';
import EthicsListing from './pages/EthicsListing';
import EssayDetails from './pages/EssayDetails';
import EthicsDetails from './pages/EthicsDetails';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './pages/Gallery';
import GeneralStudiesListing from './pages/GeneralStudiesListing';
import MentorshipDetails from './pages/MentorshipDetails';
import MentorshipListing from './pages/MentorshipListing';
import ValueAdditionDetails from './pages/valueAdditionDetails';
import ValueAdditionListing from './pages/valueAdditionListing';
import TgpscAppscDetails from './pages/TgpscAppscDetails';
import TgpscAppscListing from './pages/TgpscAppscListing';
import BlogListing from './pages/BlogListing';
import BlogDetails from './pages/BlogDetails';
import Accolades from './pages/Accolades';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/courses/optional-classes" element={<OptionalClassesListing />} />
                <Route path="/courses/optional-classes/:id" element={<OptionalClassesDetails />} />
                <Route path="/courses/optional-mentorship" element={<OptionalMentorshipListing />} />
                <Route path="/courses/optional-mentorship/:id" element={<OptionalMentorshipDetails />} />
                <Route path="/courses/general-studies" element={<GeneralStudiesListing />} />
                <Route path="/courses/general-studies/essay" element={<EssayListing />} />
                <Route path="/courses/general-studies/essay/:id" element={<EssayDetails />} />
                <Route path="/courses/general-studies/ethics" element={<EthicsListing />} />
                <Route path="/courses/general-studies/ethics/:id" element={<EthicsDetails />} />
                <Route path="/courses/general-studies/mentorship" element={<MentorshipListing />} />
                <Route path="/courses/general-studies/mentorship/:id" element={<MentorshipDetails />} />
                <Route path="/courses/general-studies/value-addition" element={<ValueAdditionListing />} />
                <Route path="/courses/general-studies/value-addition/:id" element={<ValueAdditionDetails />} />
                <Route path="/courses/tgpsc-appsc" element={<TgpscAppscListing />} />
                <Route path="/courses/tgpsc-appsc/:id" element={<TgpscAppscDetails />} />
                <Route path="/director" element={<Director />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/blogs" element={<BlogListing />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="/accolades" element={<Accolades />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
