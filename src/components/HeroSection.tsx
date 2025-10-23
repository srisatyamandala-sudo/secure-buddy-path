import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-light/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
              <Shield className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Protecting Your Digital World
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Learn Cybersecurity,
              <br />
              <span className="text-secondary">Stay Safe Online</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-xl">
              Master essential cybersecurity skills through interactive lessons, quizzes, and expert tips. 
              Let's protect your digital world together!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Learning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all"
              >
                Take a Quiz
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary-foreground">6</div>
                <div className="text-sm text-primary-foreground/80">Core Topics</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/20" />
              <div>
                <div className="text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/80">Interactive Quizzes</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/20" />
              <div>
                <div className="text-3xl font-bold text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/80">Free Access</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in lg:animate-float">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl opacity-20 blur-3xl" />
            <img 
              src={heroImage} 
              alt="Cybersecurity shield with digital security icons" 
              className="relative rounded-3xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
