
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Course = {
  id: string;
  name: string;
  credits: string;
  grade: string;
};

const gradePoints: Record<string, number> = {
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1.0,
  "F": 0.0,
};

const GpaCalculator = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", credits: "", grade: "" }
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAddCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now().toString(), name: "", credits: "", grade: "" }
    ]);
  };

  const handleRemoveCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleCourseChange = (id: string, field: keyof Course, value: string) => {
    setCourses(
      courses.map(course =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const calculateGpa = () => {
    // Validate inputs
    const isValid = courses.every(course => 
      course.name && 
      course.credits && 
      !isNaN(Number(course.credits)) && 
      course.grade && 
      gradePoints[course.grade] !== undefined
    );

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields with valid values",
        variant: "destructive"
      });
      return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const credits = Number(course.credits);
      const gradePoint = gradePoints[course.grade];
      
      totalPoints += credits * gradePoint;
      totalCredits += credits;
    });

    const calculatedGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(calculatedGpa);
    
    toast({
      title: "GPA Calculated",
      description: `Your GPA is ${calculatedGpa.toFixed(2)}`,
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-theme-600" />
          GPA Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-4 sm:col-span-5">
                <Input
                  placeholder="Course Name"
                  value={course.name}
                  onChange={(e) => handleCourseChange(course.id, "name", e.target.value)}
                />
              </div>
              <div className="col-span-3 sm:col-span-2">
                <Input
                  placeholder="Credits"
                  type="number"
                  min="1"
                  max="6"
                  value={course.credits}
                  onChange={(e) => handleCourseChange(course.id, "credits", e.target.value)}
                />
              </div>
              <div className="col-span-3 sm:col-span-3">
                <Select
                  value={course.grade}
                  onValueChange={(value) => handleCourseChange(course.id, "grade", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(gradePoints).map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => handleRemoveCourse(course.id)}
                  disabled={courses.length === 1}
                >
                  ✕
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <Button variant="outline" onClick={handleAddCourse}>
              Add Course
            </Button>
            <Button onClick={calculateGpa}>
              Calculate GPA
            </Button>
          </div>

          {gpa !== null && (
            <div className="mt-6 p-4 bg-theme-50 rounded-lg">
              <p className="text-center">
                <span className="block text-lg font-semibold">Your GPA</span>
                <span className="block text-3xl font-bold text-theme-600">
                  {gpa.toFixed(2)}
                </span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GpaCalculator;
