import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatBot from "@/components/ChatBot";
import HealthTopics from "@/components/HealthTopics";
import HealthDashboard from "@/components/HealthDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChatBot />
        <HealthTopics />
        <HealthDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
