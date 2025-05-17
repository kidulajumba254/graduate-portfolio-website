
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [animateTechnical, setAnimateTechnical] = useState(false);
  const [animateSoft, setAnimateSoft] = useState(false);
  const [activeTab, setActiveTab] = useState("technical");
  
  // Mock AI assessment result
  const aiAssessment = "Based on project repositories and code samples, demonstrates strong proficiency in database design and implementation, with excellent SQL knowledge. Front-end development shows good understanding of React principles. Areas for potential growth include cloud services integration and advanced API development techniques.";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (activeTab === "technical") {
            setAnimateTechnical(true);
          } else {
            setAnimateSoft(true);
          }
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector("#skills");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [activeTab]);
  
  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === "technical" && !animateTechnical) {
      setAnimateTechnical(true);
    } else if (value === "soft" && !animateSoft) {
      setAnimateSoft(true);
    }
  };
  
  const technicalSkills = [
    { name: "Database Management", proficiency: 92 },
    { name: "SQL", proficiency: 90 },
    { name: "JavaScript/TypeScript", proficiency: 85 },
    { name: "React", proficiency: 78 },
    { name: "Python", proficiency: 75 },
    { name: "Node.js", proficiency: 70 },
    { name: "Java", proficiency: 65 },
    { name: "AWS/Cloud Services", proficiency: 60 }
  ];
  
  const softSkills = [
    { name: "Problem Solving", proficiency: 95 },
    { name: "Team Collaboration", proficiency: 90 },
    { name: "Communication", proficiency: 88 },
    { name: "Project Management", proficiency: 85 },
    { name: "Time Management", proficiency: 82 },
    { name: "Adaptability", proficiency: 87 }
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills that make me a valuable asset to any team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="technical" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-theme-600">{animateTechnical ? `${skill.proficiency}%` : "0%"}</span>
                    </div>
                    <Progress 
                      value={animateTechnical ? skill.proficiency : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    />
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="soft" className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-theme-600">{animateSoft ? `${skill.proficiency}%` : "0%"}</span>
                    </div>
                    <Progress 
                      value={animateSoft ? skill.proficiency : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    />
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="h-full shadow-lg border-t-4 border-t-theme-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-theme-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">AI Skill Assessment</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{aiAssessment}"
                </p>
                
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-3">Key Strengths:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-theme-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Database Design & Management
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-theme-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      SQL Proficiency
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-theme-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      React Development
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
