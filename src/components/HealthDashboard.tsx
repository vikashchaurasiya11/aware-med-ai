import { 
  TrendingUp, 
  Users, 
  FileText, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Globe
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import medicalEquipment from "@/assets/medical-equipment.jpg";

const HealthDashboard = () => {
  const stats = [
    {
      title: "Health Articles",
      value: "1,247",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Users Helped",
      value: "45,382",
      change: "+23%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Active Topics",
      value: "156",
      change: "+8%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Health Checks",
      value: "892",
      change: "+15%",
      icon: CheckCircle,
      color: "text-teal-600"
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Understanding Diabetes Management in 2024",
      category: "Endocrinology",
      readTime: "5 min",
      status: "Updated",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Mental Health Awareness: Breaking the Stigma",
      category: "Psychology",
      readTime: "7 min",
      status: "New",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "Cardiovascular Health: Prevention Strategies",
      category: "Cardiology",
      readTime: "6 min",
      status: "Updated",
      date: "2024-01-13"
    },
    {
      id: 4,
      title: "Nutrition Guidelines for Optimal Health",
      category: "Nutrition",
      readTime: "4 min",
      status: "Popular",
      date: "2024-01-12"
    }
  ];

  const healthAlerts = [
    {
      id: 1,
      title: "Flu Season Update",
      message: "Vaccination rates have increased by 15% this season. Book your appointment today.",
      type: "info",
      urgent: false
    },
    {
      id: 2,
      title: "Heat Wave Advisory",
      message: "Stay hydrated and avoid prolonged sun exposure during peak hours.",
      type: "warning",
      urgent: true
    },
    {
      id: 3,
      title: "New Research Published",
      message: "Latest findings on sleep health and cognitive function now available.",
      type: "success",
      urgent: false
    }
  ];

  return (
    <section id="dashboard" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Awareness Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest health statistics, trending topics, and important 
            public health updates from trusted medical sources.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Health Articles
                </CardTitle>
                <CardDescription>
                  Latest medical insights and health guidance from experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div 
                      key={article.id} 
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={article.status === 'New' ? 'default' : 
                                article.status === 'Popular' ? 'secondary' : 'outline'}
                        className="ml-4"
                      >
                        {article.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Alerts and Image */}
          <div className="space-y-6">
            {/* Health Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Health Alerts
                </CardTitle>
                <CardDescription>
                  Important public health updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {healthAlerts.map((alert) => (
                    <div 
                      key={alert.id} 
                      className={`p-3 border-l-4 rounded-r-lg ${
                        alert.type === 'warning' ? 'border-l-warning bg-warning/10' :
                        alert.type === 'success' ? 'border-l-success bg-success/10' :
                        'border-l-primary bg-primary/10'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium text-sm text-foreground mb-1">
                            {alert.title}
                          </h5>
                          <p className="text-xs text-muted-foreground">
                            {alert.message}
                          </p>
                        </div>
                        {alert.urgent && (
                          <Badge variant="destructive" className="text-xs ml-2">
                            Urgent
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medical Equipment Image */}
            <Card className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${medicalEquipment})` }}
              >
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Medical Excellence</h4>
                  <p className="text-sm opacity-90">Professional healthcare solutions</p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">195</div>
                    <div className="text-xs text-muted-foreground">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-xs text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthDashboard;