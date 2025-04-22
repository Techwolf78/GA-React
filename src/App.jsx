import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";

// Components
import Home from "./Components/Home";
import MasterClass3 from "./Components/MasterClass3";
import About from "./Components/About";
import GAX from "./Components/GAX";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Placement from "./Components/Placement";
import Contact from "./Components/Contact";
import Training from "./Components/Training";
import BrandPositioning from "./Components/BrandPositioning";
import CollegeTraining from "./Components/CollegeTraining";
import CorporateTraining from "./Components/CorporateTraining";
import FacultyTraining from "./Components/FacultyTraining";
import WhatsAppWidget from "./Components/WhatsAppWidget";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Post1 from "./Components/BlogPages/Post1";
import Post2 from "./Components/BlogPages/Post2";
import Post3 from "./Components/BlogPages/Post3";
import Post4 from "./Components/BlogPages/Post4";
import Post5 from "./Components/BlogPages/Post5";
import Post6 from "./Components/BlogPages/Post6";
import NotFound from "./Components/NotFound";
import DecEvent from "./Components/DecEvent";
import DecEventGroundZero from "./Components/DecEventGroundZero";
import Loader from "./Components/Loader";
import DecEventAgenda from "./Components/DecEventAgenda";
import Cloud from "./Components/Cloud";

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Remove trailing slash
  useEffect(() => {
    if (location.pathname.endsWith("/") && location.pathname !== "/") {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  // Set page title and GA page view
  useEffect(() => {
    const baseTitle = "Gryphon Academy | Bridging the Gap Between Industry and Academia";
    const pathMap = {
      "/": "Home",
      "/test": "Home",
      "/masterclass3": "Masterclass 3.0",
      "/about-us": "About Us",
      "/gax": "GAX",
      "/blogs": "Blogs",
      "/placement": "Placement",
      "/contact": "Contact Us",
      "/brandPositioning": "Brand Positioning",
      "/training": "Training",
      "/collegeTraining": "College Training",
      "/corporateTraining": "Corporate Training",
      "/facultyTraining": "Faculty Training",
      "/events": "Events",
      "/agenda": "Agenda",
      "/post1": "Blog Post 1",
      "/post2": "Blog Post 2",
      "/post3": "Blog Post 3",
      "/post4": "Blog Post 4",
      "/post5": "Blog Post 5",
      "/post6": "Blog Post 6",
      "/login": "Login",
      "/forget-password": "Forget Password",
      "/cloud": "Cloud Services",
    };

    const pageTitle = pathMap[location.pathname] || "Page Not Found";
    document.title = `${pageTitle} | ${baseTitle}`;

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Scroll button
  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp widget only for brandPositioning
  useEffect(() => {
    if (location.pathname === "/brandPositioning") {
      const handleScroll = () => {
        setShowWhatsAppWidget(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<><Navbar /><Home /></>} />
        <Route path="/masterclass3" element={<MasterClass3 />} />
        <Route path="/about-us" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
        <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
        <Route path="/post1" element={<><Navbar /><Post1 /></>} />
        <Route path="/post2" element={<><Navbar /><Post2 /></>} />
        <Route path="/post3" element={<><Navbar /><Post3 /></>} />
        <Route path="/post4" element={<><Navbar /><Post4 /></>} />
        <Route path="/post5" element={<><Navbar /><Post5 /></>} />
        <Route path="/post6" element={<><Navbar /><Post6 /></>} />
        <Route path="/placement" element={<><Navbar /><Placement /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/brandPositioning" element={<><Navbar /><BrandPositioning /></>} />
        <Route path="/training" element={<><Navbar /><Training /></>} />
        <Route path="/collegeTraining" element={<><Navbar /><CollegeTraining /></>} />
        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
        <Route path="/agenda" element={<><Navbar /><DecEventAgenda /></>} />
        <Route path="/ground-zero" element={<DecEventGroundZero />} />
        <Route path="/cloud" element={<><Navbar /><Cloud /></>} />
        <Route
          path="/events"
          element={
            <>
              <Navbar />
              {!loaderFinished ? (
                <Loader onFinish={() => setLoaderFinished(true)} />
              ) : (
                <DecEvent />
              )}
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showWhatsAppWidget && <WhatsAppWidget />}
      <ScrollToTopButton visible={scrollVisible} />
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
}

export default AppWrapper;
