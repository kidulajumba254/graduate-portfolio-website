
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface WorkExperienceItem {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Business Information Technology",
    institution: "University of Nairobi",
    period: "2019 - 2023",
    description: "Graduated with First Class Honors. Specialized in database management and system analysis.",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Kenya Technical Institute",
    period: "2017 - 2018",
    description: "Foundation in programming concepts and computer systems.",
  }
];

export const workExperience: WorkExperienceItem[] = [
  {
    position: "IT Intern",
    company: "Safaricom PLC",
    period: "May 2022 - Aug 2022",
    responsibilities: [
      "Assisted in the development and maintenance of internal dashboard applications",
      "Collaborated with the IT team to troubleshoot system issues",
      "Participated in database management and optimization",
    ]
  },
  {
    position: "Junior Web Developer",
    company: "Tech Solutions Ltd",
    period: "Sep 2021 - Dec 2021",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Collaborated with design team to implement visual elements",
      "Assisted in setting up and configuring content management systems",
    ]
  }
];

export const certifications: CertificationItem[] = [
  { name: "Oracle Database SQL Certified Associate", issuer: "Oracle", year: "2022" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2022" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" },
];
