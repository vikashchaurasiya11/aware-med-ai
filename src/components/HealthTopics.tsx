import { 
  Heart, 
  Brain, 
  Thermometer, 
  Stethoscope, 
  Shield, 
  Activity,
  Eye,
  Bone,
  Pill,
  UserCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HealthTopics = () => {
  const topics = [
    {
      id: 1,
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Heart disease, blood pressure, cholesterol management and prevention strategies.",
      color: "text-red-500",
      bgColor: "bg-red-50",
      articles: 24
    },
    {
      id: 2,
      icon: Brain,
      title: "Mental Health",
      description: "Depression, anxiety, stress management and mental wellness resources.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      articles: 31
    },
    {
      id: 3,
      icon: Thermometer,
      title: "Infectious Diseases",
      description: "Common infections, prevention methods, symptoms and treatment options.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      articles: 18
    },
    {
      id: 4,
      icon: Activity,
      title: "Fitness & Exercise",
      description: "Workout routines, physical activity guidelines and injury prevention.",
      color: "text-green-500",
      bgColor: "bg-green-50",
      articles: 27
    },
    {
      id: 5,
      icon: Pill,
      title: "Nutrition & Diet",
      description: "Healthy eating habits, dietary guidelines and nutritional information.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      articles: 22
    },
    {
      id: 6,
      icon: Eye,
      title: "Vision & Eye Health",
      description: "Eye care, vision problems, eye diseases and prevention tips.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      articles: 15
    },
    {
      id: 7,
      icon: Bone,
      title: "Bone & Joint Health",
      description: "Arthritis, osteoporosis, joint pain and musculoskeletal conditions.",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      articles: 19
    },
    {
      id: 8,
      icon: UserCheck,
      title: "Preventive Care",
      description: "Regular check-ups, screenings, vaccinations and health maintenance.",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      articles: 26
    }
  ];

  return (
    <section id="topics" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Topics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive health information across various medical specialties. 
            Get evidence-based insights and practical guidance for better health management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${topic.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className={`h-6 w-6 ${topic.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {topic.articles} articles
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Health Topics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthTopics;