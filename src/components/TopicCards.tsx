import { Shield, Key, Bug, Users, Lock, ScrollText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topics = [
  {
    icon: Shield,
    title: "Phishing Awareness",
    description: "Learn to identify and avoid phishing scams that steal your personal information.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Key,
    title: "Password Security",
    description: "Master the art of creating and managing strong, unbreakable passwords.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Bug,
    title: "Malware Protection",
    description: "Understand different types of malware and how to protect your devices.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Social Engineering",
    description: "Recognize manipulation tactics used by cybercriminals to exploit trust.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Protect your personal data and maintain your privacy online.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: ScrollText,
    title: "Cyber Ethics",
    description: "Learn responsible and ethical behavior in the digital world.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const TopicCards = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Explore Cybersecurity Topics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into essential security concepts with our interactive learning modules
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <Card 
              key={topic.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${topic.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <topic.icon className={`h-7 w-7 ${topic.color}`} />
                </div>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
                <CardDescription className="text-base">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicCards;
