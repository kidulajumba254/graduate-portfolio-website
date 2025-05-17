
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const DownloadSection = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // This would normally download the actual CV
    toast({
      title: "Downloading CV",
      description: "Your download will begin shortly",
    });
  };
  
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Download className="w-5 h-5 mr-2 text-theme-600" />
          Download CV
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Download my complete CV in PDF format for a comprehensive overview of my skills and experience.
        </p>
        <Button onClick={handleDownload} className="w-full flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </CardContent>
    </Card>
  );
};
