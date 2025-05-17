
import { Card, CardContent } from "@/components/ui/card";

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

interface CertificationsSectionProps {
  certifications: CertificationItem[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <span className="bg-theme-50 text-theme-600 text-sm px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
