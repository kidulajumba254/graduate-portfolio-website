
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="gradient-text">Profile</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Update your profile image to personalize your online presence
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <ProfileUpload />
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      <Projects />
      <Resume />
      
      <section id="gpa-calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              GPA <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your GPA easily with our simple calculator tool
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <GpaCalculator />
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
