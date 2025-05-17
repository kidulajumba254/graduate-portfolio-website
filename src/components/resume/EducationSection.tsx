
import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface EducationSectionProps {
  educationHistory: EducationItem[];
}

export const EducationSection = ({ educationHistory }: EducationSectionProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};
