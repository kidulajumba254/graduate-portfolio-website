
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const educationDetails = {
    degree: "Bachelor of Business Information Technology",
    university: "University of Nairobi",
    period: "2019 - 2023",
    description: "Comprehensive education focusing on business processes and information systems, integrating technical skills with business knowledge."
  };

  const personalInfo = [
    { label: "Name", value: "John Doe" },
    { label: "Email", value: "john.doe@example.com" },
    { label: "Phone", value: "+254 712 345 678" },
    { label: "Location", value: "Nairobi, Kenya" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and career aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a recent graduate with a Bachelor's degree in Business 
              Information Technology from the University of Nairobi. My education
              has equipped me with a unique blend of business acumen and technical
              expertise, allowing me to bridge the gap between technology and 
              business needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Throughout my academic journey, I've developed a passion for creating
              innovative solutions that address real-world business challenges. 
              I believe in the power of technology to transform businesses and improve
              operational efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm particularly interested in data analytics, system design, and 
              project management, with a focus on implementing solutions that
              deliver tangible business value.
            </p>

            <div className="pt-4">
              <Button asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="bg-theme-50 p-6">
                  <h4 className="text-xl font-semibold mb-1">Education</h4>
                  <div className="text-theme-700 font-medium">
                    {educationDetails.degree}
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>{educationDetails.university}</span>
                    <span className="text-gray-500">{educationDetails.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    {educationDetails.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Personal Information</h4>
                <div className="space-y-3">
                  {personalInfo.map((item, index) => (
                    <div key={index} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{item.label}:</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
