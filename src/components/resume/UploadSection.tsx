
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
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
  
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Upload className="w-5 h-5 mr-2 text-theme-600" />
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
              <Upload className="w-10 h-10 mb-2 text-gray-400 mx-auto" />
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
      </div>
    </div>
  );
};
