
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileUpload = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file format",
          description: "Please upload a JPG or PNG image",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Image size should be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        toast({
          title: "Profile image uploaded",
          description: "Your profile image has been updated successfully",
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <Card className="shadow-md p-6">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Upload className="w-5 h-5 mr-2 text-theme-600" />
          Profile Photo
        </h3>
        
        <div className="relative mb-6">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            {profileImage ? (
              <AvatarImage src={profileImage} alt="Profile" />
            ) : (
              <AvatarFallback className="bg-theme-100 text-theme-600 text-xl">
                JD
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="absolute -bottom-2 -right-2">
            <label 
              htmlFor="profile-upload"
              className="bg-theme-600 hover:bg-theme-700 text-white p-2 rounded-full cursor-pointer flex items-center justify-center w-10 h-10 shadow-md"
            >
              <Upload className="w-5 h-5" />
              <input
                type="file"
                id="profile-upload"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 text-center max-w-xs">
          Upload a professional profile photo to make your portfolio more personal.
        </p>
        
        {profileImage && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setProfileImage(null);
              const uploadInput = document.getElementById('profile-upload') as HTMLInputElement;
              if (uploadInput) uploadInput.value = '';
              toast({
                title: "Profile image removed",
                description: "Your profile image has been removed"
              });
            }}
          >
            Remove Photo
          </Button>
        )}
      </div>
    </Card>
  );
};
