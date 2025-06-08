"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Briefcase, Wrench, ClipboardCheck, Cpu, Bot } from "lucide-react";

// Define the structure for each step in the interactive demo
interface DemoStep {
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// Component for the animated agent preview card
const AgentPreviewCard = ({
  step,
  direction
}: {
  step: DemoStep;
  direction: number;
}) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };
  return <motion.div key={step.title} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
    x: {
      type: "spring",
      stiffness: 300,
      damping: 30
    },
    opacity: {
      duration: 0.2
    }
  }} className="absolute w-full h-full" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      <Card className="w-full h-full bg-card/80 backdrop-blur-sm border-border/20 shadow-xl" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <div className="p-2 bg-primary/10 rounded-md" data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            <step.icon className="w-5 h-5 text-primary" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx" />
          </div>
          <CardTitle className="text-base font-medium text-foreground" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">{step.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-2" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
          {step.content}
        </CardContent>
      </Card>
    </motion.div>;
};
export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const demoSteps: DemoStep[] = [{
    title: "1. Select a Role",
    icon: Briefcase,
    content: <div className="space-y-3 pt-2" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-transparent transition-colors" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
            <div className="flex items-center gap-3" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
              <Cpu className="w-5 h-5 text-muted-foreground" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx" />
              <span className="font-medium" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">Sales Assistant</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border-primary/50 ring-2 ring-primary/30 transition-colors" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
            <div className="flex items-center gap-3" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
              <Bot className="w-5 h-5 text-primary" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx" />
              <span className="font-semibold text-primary" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">IT Project Manager</span>
            </div>
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200
        }} className="w-4 h-4 rounded-full bg-primary" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx" />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-transparent transition-colors" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">
            <div className="flex items-center gap-3" data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
              <Wrench className="w-5 h-5 text-muted-foreground" data-magicpath-id="19" data-magicpath-path="HeroSection.tsx" />
              <span className="font-medium" data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">DevOps Engineer</span>
            </div>
          </div>
        </div>
  }, {
    title: "2. Configure Skills",
    icon: Wrench,
    content: <div className="space-y-3 pt-2" data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">
          <p className="text-sm text-muted-foreground px-1 pb-1" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">Adding relevant skills...</p>
          <div className="flex flex-wrap gap-2" data-magicpath-id="23" data-magicpath-path="HeroSection.tsx">
            {["Risk Analysis", "Budgeting", "Agile Methodologies", "Resource Allocation", "Reporting"].map((skill, i) => <motion.div key={skill} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * 0.1 + 0.2
        }} data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">
                <Badge variant="secondary" className="font-normal" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx">{skill}</Badge>
              </motion.div>)}
          </div>
        </div>
  }, {
    title: "3. Agent Ready",
    icon: ClipboardCheck,
    content: <div className="flex flex-col items-center text-center pt-4" data-magicpath-id="26" data-magicpath-path="HeroSection.tsx">
          <motion.div initial={{
        scale: 0.5,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 0.2,
        type: "spring"
      }} data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
            <Avatar className="w-16 h-16 mb-3 border-4 border-background" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
              <AvatarImage src="https://source.unsplash.com/random/100x100/?robot" alt="IT Project Manager Agent" data-magicpath-id="29" data-magicpath-path="HeroSection.tsx" />
              <AvatarFallback data-magicpath-id="30" data-magicpath-path="HeroSection.tsx">PM</AvatarFallback>
            </Avatar>
          </motion.div>
          <h3 className="font-semibold text-foreground" data-magicpath-id="31" data-magicpath-path="HeroSection.tsx">IT Project Manager</h3>
          <p className="text-sm text-muted-foreground" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx">Ready to deploy</p>
          <div className="flex flex-wrap gap-2 justify-center mt-3" data-magicpath-id="33" data-magicpath-path="HeroSection.tsx">
            <Badge variant="outline" data-magicpath-id="34" data-magicpath-path="HeroSection.tsx">Risk Analysis</Badge>
            <Badge variant="outline" data-magicpath-id="35" data-magicpath-path="HeroSection.tsx">Budgeting</Badge>
            <Badge variant="outline" data-magicpath-id="36" data-magicpath-path="HeroSection.tsx">Reporting</Badge>
          </div>
        </div>
  }];
  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + demoSteps.length) % demoSteps.length, newDirection]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3500);
    return () => clearInterval(interval);
  }, [page]);
  return <header className="relative w-full bg-background overflow-hidden" data-magicpath-id="37" data-magicpath-path="HeroSection.tsx">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent to-70% opacity-70" data-magicpath-id="38" data-magicpath-path="HeroSection.tsx"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32" data-magicpath-id="39" data-magicpath-path="HeroSection.tsx">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" data-magicpath-id="40" data-magicpath-path="HeroSection.tsx">
          <div className="text-center md:text-left" data-magicpath-id="41" data-magicpath-path="HeroSection.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-magicpath-id="42" data-magicpath-path="HeroSection.tsx">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-tight" data-magicpath-id="43" data-magicpath-path="HeroSection.tsx">
                Build Custom AI Agents for Any Role in Minutes
              </h1>
              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground" data-magicpath-id="44" data-magicpath-path="HeroSection.tsx">
                Automate workflows, streamline operations, and empower your team with intelligent agents tailored to your exact needs. No code required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-magicpath-id="45" data-magicpath-path="HeroSection.tsx">
                <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20" data-magicpath-id="46" data-magicpath-path="HeroSection.tsx">
                  Start Building Your Agent
                  <ArrowRight className="ml-2 h-5 w-5" data-magicpath-id="47" data-magicpath-path="HeroSection.tsx" />
                </Button>
                <Button size="lg" variant="ghost" className="text-base px-8 py-6 rounded-full" data-magicpath-id="48" data-magicpath-path="HeroSection.tsx">
                  How it Works
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="relative h-96 w-full max-w-md mx-auto" data-magicpath-id="49" data-magicpath-path="HeroSection.tsx">
            <AnimatePresence initial={false} custom={direction} data-magicpath-id="50" data-magicpath-path="HeroSection.tsx">
              <AgentPreviewCard step={demoSteps[page]} direction={direction} data-magicpath-id="51" data-magicpath-path="HeroSection.tsx" />
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2" data-magicpath-id="52" data-magicpath-path="HeroSection.tsx">
              {demoSteps.map((_, i) => <button key={i} onClick={() => setPage([i, i > page ? 1 : -1])} className={cn("w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors", page === i && "bg-primary")} aria-label={`Go to step ${i + 1}`} data-magicpath-id="53" data-magicpath-path="HeroSection.tsx" />)}
            </div>
          </motion.div>
        </div>
      </div>
    </header>;
}