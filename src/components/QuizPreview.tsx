import { Brain, CheckCircle, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quizzes = [
  {
    title: "Phishing Basics",
    questions: 10,
    difficulty: "Beginner",
    time: "5 min",
    icon: CheckCircle,
  },
  {
    title: "Password Strength Test",
    questions: 8,
    difficulty: "Intermediate",
    time: "4 min",
    icon: Brain,
  },
  {
    title: "Security Expert Challenge",
    questions: 15,
    difficulty: "Advanced",
    time: "10 min",
    icon: Trophy,
  },
];

const QuizPreview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself with interactive quizzes and track your progress
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {quizzes.map((quiz, index) => (
            <Card 
              key={quiz.title}
              className="group hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <quiz.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{quiz.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <span className="text-sm font-medium">{quiz.questions} questions</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm font-medium">{quiz.time}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  quiz.difficulty === "Beginner" 
                    ? "bg-accent/10 text-accent" 
                    : quiz.difficulty === "Intermediate"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-primary/10 text-primary"
                }`}>
                  {quiz.difficulty}
                </div>
                <Button 
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-md transition-all"
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Quizzes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuizPreview;
