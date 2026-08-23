
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import FeaturedTreatments from "./components/Services/FeaturedTreatments";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Gallery from "./components/Gallery/Gallery";
import WhyEterna from "./components/WhyEterna/WhyEterna";
import Testimonials from "./components/Testimonials/Testimonials";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dental from "./components/Dental/Dental";
import Aesthetic from "./components/Aesthetic/Aesthetic";
import SkinCare from "./components/SkinCare/SkinCare";
import Videos from "./components/Videos/Videos"; 

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Dental />
        <Aesthetic />
        <SkinCare />
        <FeaturedTreatments />
        <Videos />
        <BeforeAfter />
        <Gallery />
        <WhyEterna />
        <Testimonials />
        <Appointment />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

