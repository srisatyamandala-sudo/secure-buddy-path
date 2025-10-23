import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tips = [
  "Enable two-factor authentication on all your important accounts for an extra layer of security.",
  "Never share your passwords, even with people you trust. Keep them secure and private.",
  "Always verify email senders before clicking links or downloading attachments.",
  "Keep your software and operating systems updated to protect against known vulnerabilities.",
  "Use a password manager to generate and store unique passwords for each account.",
  "Be cautious of public Wi-Fi networks - avoid accessing sensitive information on them.",
];

const CyberTip = () => {
  // Get a random tip (in real app, this could change daily)
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-accent border-none shadow-glow animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-accent-foreground">
              <div className="p-3 bg-accent-foreground/10 rounded-full">
                <Lightbulb className="h-6 w-6" />
              </div>
              💡 Cyber Tip of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-accent-foreground/90 leading-relaxed">
              {randomTip}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CyberTip;
