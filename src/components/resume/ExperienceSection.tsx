
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperienceItem {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceSectionProps {
  workExperience: WorkExperienceItem[];
}

export const ExperienceSection = ({ workExperience }: ExperienceSectionProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};
