
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadIcon, DownloadIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      
      setUploadedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded`,
      });
    }
  };
  
  const handleDownload = () => {
    // This would normally download the actual CV
    toast({
      title: "Downloading CV",
      description: "Your download will begin shortly",
    });
  };
  
  const educationHistory = [
    {
      degree: "Bachelor of Business Information Technology",
      institution: "University of Nairobi",
      period: "2019 - 2023",
      description: "Graduated with First Class Honors. Specialized in database management and system analysis.",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Kenya Technical Institute",
      period: "2017 - 2018",
      description: "Foundation in programming concepts and computer systems.",
    }
  ];
  
  const workExperience = [
    {
      position: "IT Intern",
      company: "Safaricom PLC",
      period: "May 2022 - Aug 2022",
      responsibilities: [
        "Assisted in the development and maintenance of internal dashboard applications",
        "Collaborated with the IT team to troubleshoot system issues",
        "Participated in database management and optimization",
      ]
    },
    {
      position: "Junior Web Developer",
      company: "Tech Solutions Ltd",
      period: "Sep 2021 - Dec 2021",
      responsibilities: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Collaborated with design team to implement visual elements",
        "Assisted in setting up and configuring content management systems",
      ]
    }
  ];
  
  const certifications = [
    { name: "Oracle Database SQL Certified Associate", issuer: "Oracle", year: "2022" },
    { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2022" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" },
  ];
  
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
                {educationHistory.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="border-l-4 border-theme-600 p-6">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{item.degree}</h3>
                          <span className="bg-theme-100 text-theme-700 text-sm px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <div className="text-theme-600 font-medium mb-2">{item.institution}</div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="experience" className="space-y-6">
                {workExperience.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="border-l-4 border-theme-600 p-6">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{item.position}</h3>
                          <span className="bg-theme-100 text-theme-700 text-sm px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <div className="text-theme-600 font-medium mb-3">{item.company}</div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="certifications" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {certifications.map((cert, index) => (
                        <li key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{cert.name}</h4>
                              <p className="text-sm text-gray-600">{cert.issuer}</p>
                            </div>
                            <span className="bg-theme-50 text-theme-600 text-sm px-2 py-1 rounded">
                              {cert.year}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <DownloadIcon className="w-5 h-5 mr-2 text-theme-600" />
                  Download CV
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Download my complete CV in PDF format for a comprehensive overview of my skills and experience.
                </p>
                <Button onClick={handleDownload} className="w-full flex items-center justify-center gap-2">
                  <DownloadIcon className="w-4 h-4" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <UploadIcon className="w-5 h-5 mr-2 text-theme-600" />
                  Upload Your Resume
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Upload your resume for AI-powered feedback and optimization suggestions.
                </p>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {uploadedFile ? (
                    <div className="text-center">
                      <svg className="w-10 h-10 mb-2 text-theme-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-theme-600 font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {Math.round(uploadedFile.size / 1024)} KB
                      </p>
                    </div>
                  ) : (
                    <label htmlFor="resume-upload" className="cursor-pointer text-center">
                      <UploadIcon className="w-10 h-10 mb-2 text-gray-400 mx-auto" />
                      <p className="text-sm font-medium text-gray-700">Click to upload your resume</p>
                      <p className="text-xs text-gray-500 mt-1">PDF (MAX. 5MB)</p>
                    </label>
                  )}
                </div>
                
                {uploadedFile && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setUploadedFile(null);
                        document.getElementById('resume-upload') && (document.getElementById('resume-upload') as HTMLInputElement).value = '';
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
