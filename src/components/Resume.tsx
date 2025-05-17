
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationSection } from "./resume/EducationSection";
import { ExperienceSection } from "./resume/ExperienceSection";
import { CertificationsSection } from "./resume/CertificationsSection";
import { DownloadSection } from "./resume/DownloadSection";
import { UploadSection } from "./resume/UploadSection";
import { educationHistory, workExperience, certifications } from "./resume/ResumeData";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View my professional journey, education, work experience, and certifications. 
            You can also download my full CV or upload your resume for a personalized review.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="education">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="education" className="space-y-6">
                <EducationSection educationHistory={educationHistory} />
              </TabsContent>
              
              <TabsContent value="experience" className="space-y-6">
                <ExperienceSection workExperience={workExperience} />
              </TabsContent>
              
              <TabsContent value="certifications" className="space-y-6">
                <CertificationsSection certifications={certifications} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <DownloadSection />
            <UploadSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
