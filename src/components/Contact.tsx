
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  PhoneIcon,
  MailIcon,
  HomeIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+254 712 345 678",
      link: "tel:+254712345678"
    },
    {
      icon: MailIcon,
      label: "Email",
      value: "john.doe@example.com",
      link: "mailto:john.doe@example.com"
    },
    {
      icon: HomeIcon,
      label: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya"
    }
  ];
  
  const socialLinks = [
    { icon: LinkedinIcon, link: "#", ariaLabel: "LinkedIn" },
    { icon: GithubIcon, link: "#", ariaLabel: "GitHub" },
    { icon: TwitterIcon, link: "#", ariaLabel: "Twitter" }
  ];
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have questions? Feel free to contact me and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium text-gray-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium text-gray-700">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      className="flex items-start hover:text-theme-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-theme-50 p-3 rounded-full mr-4">
                        <item.icon className="h-5 w-5 text-theme-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="bg-theme-50 p-3 rounded-full text-theme-600 hover:bg-theme-100 transition-colors"
                        aria-label={item.ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg bg-theme-50 border border-theme-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-theme-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Available for Work</h3>
                </div>
                <p className="text-gray-700">
                  I'm currently available for full-time positions, freelance projects, or internship opportunities in IT and software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
