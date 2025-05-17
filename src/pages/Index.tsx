
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GpaCalculator from "@/components/gpa/GpaCalculator";
import { ProfileUpload } from "@/components/profile/ProfileUpload";
import QRCodeSection from "@/components/QRCodeSection";
import AIAssistant from "@/components/assistant/AIAssistant";
import { useEffect } from "react";

const Index = () => {
  // Add scroll animation effects
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, { threshold: 0.1 });

    // Target sections for animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    // Clean up
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-gray-50 transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-50 hover:to-theme-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 relative group">
              My <span className="gradient-text">Profile</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-theme-600 group-hover:w-32 transition-all duration-300 transform -translate-x-1/2"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Update your profile image to personalize your online presence
            </p>
          </div>
          
          <div className="max-w-md mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <ProfileUpload />
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      <Projects />
      <Resume />
      <QRCodeSection />
      
      <section id="gpa-calculator" className="py-20 bg-gray-50 transition-all duration-500 hover:bg-gradient-to-b hover:from-gray-50 hover:to-theme-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 relative group">
              GPA <span className="gradient-text">Calculator</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-theme-600 group-hover:w-48 transition-all duration-300 transform -translate-x-1/2"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your GPA easily with our simple calculator tool
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-xl rounded-lg overflow-hidden">
            <GpaCalculator />
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
