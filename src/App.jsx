import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/projects";
import ContactPage from "./pages/contact";
import Section from "./components/Layouts/Section";
import Footer from "./components/Layouts/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-white text-black-custom`}>
        <Section>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Section>
      </div>
    </Router>
  );
}

export default App;
