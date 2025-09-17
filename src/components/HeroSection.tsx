import { MessageCircle, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Health Assistant",
      description: "Get instant, reliable health information"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "Medically reviewed and trusted content"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with healthcare professionals"
    },
    {
      icon: TrendingUp,
      title: "Health Tracking",
      description: "Monitor symptoms and health trends"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted
              <span className="block text-accent-light">Health Companion</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Get instant access to verified health information, AI-powered symptom guidance, 
              and reliable medical knowledge to make informed health decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Health Chat
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                Browse Topics
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-accent-light mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;