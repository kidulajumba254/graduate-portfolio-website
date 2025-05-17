
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      description: "Developed a comprehensive analytics dashboard for an e-commerce platform that visualizes sales data, customer behavior, and inventory management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "data",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "Built a comprehensive system for managing patient records, appointments, and billing for a local clinic.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "management",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      link: "#"
    },
    {
      id: 3,
      title: "Supply Chain Tracking App",
      description: "Created a mobile-responsive web application that tracks products through the entire supply chain process from manufacturing to delivery.",
      image: "https://images.unsplash.com/photo-1566686721080-b9eb8dcd6894?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "web",
      technologies: ["React", "Firebase", "Node.js", "Express"],
      link: "#",
      featured: true
    },
    {
      id: 4,
      title: "Financial Report Generator",
      description: "Automated system for generating customized financial reports from various data sources with visualization capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "data",
      technologies: ["Python", "Pandas", "SQL", "Matplotlib"],
      link: "#"
    },
    {
      id: 5,
      title: "Educational Resource Platform",
      description: "Web platform connecting students with educational resources, featuring content management and user authentication.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "web",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      link: "#"
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "Comprehensive system for tracking stock levels, orders, sales, and deliveries for a retail business.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "management",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      link: "#",
      featured: true
    }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "data", label: "Data Analytics" },
    { value: "management", label: "Management Systems" }
  ];
  
  const getFeaturedProject = () => {
    return projects.find(project => project.featured) || projects[0];
  };
  
  const featuredProject = getFeaturedProject();
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects that demonstrate my technical abilities and problem-solving skills.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-gradient-to-r from-theme-50 to-theme-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="mb-4 self-start">Featured Project</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>
                <p className="text-gray-700 mb-6">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Button asChild className="self-start">
                  <a href={featuredProject.link}>View Project</a>
                </Button>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map(category => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Card key={project.id} className="overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.link}>View Details</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
