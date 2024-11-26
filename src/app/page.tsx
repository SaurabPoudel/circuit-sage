import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggler";
import { BellElectricIcon, Cpu, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Navigation Bar */}
      <nav className="border-b fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            <span className="font-bold text-xl">CircuitSage</span>
          </div>
          <ModeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:pt-24">
        {/* Hero Section */}
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-6 md:py-10 lg:py-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl max-w-[800px]">
            Your AI Assistant for Electronics Engineering
          </h1>
          <p className="max-w-[600px] text-center text-base sm:text-lg text-muted-foreground lg:text-xl">
            Get instant help with circuit design, component recommendations, and real-time troubleshooting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto min-w-[160px]">
              <Link href="/chat">
                <MessageSquare className="h-5 w-5" />
                Start Chat
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 w-full sm:w-auto min-w-[160px]">
              <Link href="/components">
                <Zap className="h-5 w-5" />
                Browse Components
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative rounded-lg border p-6 hover:shadow-md transition-all bg-card"
            >
              <h3 className="font-semibold mb-2 flex items-center gap-2 text-lg">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Circuit Design Assistance",
    description: "Get real-time suggestions and optimizations for your circuit designs with AI-powered analysis.",
    icon: <BellElectricIcon className="h-5 w-5" />,
  },
  {
    title: "Component Recommendations",
    description: "Find the perfect components for your projects with intelligent recommendations based on your requirements.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Smart Troubleshooting",
    description: "Quickly identify and solve circuit issues with our advanced diagnostic capabilities.",
    icon: <Zap className="h-5 w-5" />,
  },
];
