
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRCodeSection = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // In a real implementation, this would generate and download the QR code
    toast({
      title: "QR Code Downloaded",
      description: "QR Code has been downloaded successfully",
    });
  };
  
  const handleShare = () => {
    // In a real implementation, this would share the QR code
    navigator.clipboard.writeText("https://johndoe-portfolio.example.com");
    toast({
      title: "Portfolio Link Copied",
      description: "Link copied to clipboard for sharing",
    });
  };
  
  return (
    <section id="qr-code" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Connect <span className="gradient-text">Instantly</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scan my QR code to save my contact information or quickly visit my portfolio
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 lg:w-2/5 flex justify-center">
            <div 
              className="relative hover:scale-105 transition-transform duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.classList.add('animate-pulse');
                setTimeout(() => e.currentTarget.classList.remove('animate-pulse'), 1000);
              }}
            >
              <Card className="shadow-xl border-2 border-theme-100 overflow-hidden w-64 h-64 mx-auto">
                <CardContent className="p-4 flex items-center justify-center h-full">
                  <div className="relative w-full h-full">
                    <QrCode className="w-full h-full text-gray-800 p-2" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                          alt="John Doe" 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -bottom-2 -right-2">
                <div className="bg-theme-600 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                  Portfolio
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Scan & Connect</h3>
            <p className="text-gray-700 mb-6">
              Use your smartphone to scan this QR code and instantly save my contact information, 
              visit my portfolio website, or connect with me on professional networks. Make networking 
              effortless and keep my details handy for future opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleDownload} className="flex items-center gap-2">
                <Download className="w-4 h-4" /> 
                Download QR Code
              </Button>
              <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
                <Share2 className="w-4 h-4" /> 
                Share Portfolio Link
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-theme-50 rounded-lg border border-theme-100">
              <h4 className="font-medium mb-2">Why use my QR code?</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                <li>Instant access to my professional portfolio</li>
                <li>Save my contact details with one scan</li>
                <li>Connect with me on LinkedIn</li>
                <li>View my latest projects and achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
