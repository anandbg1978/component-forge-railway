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
  }} className="absolute w-full h-full">
      <Card className="w-full h-full bg-card/80 backdrop-blur-sm border-border/20 shadow-xl">
        <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
          <div className="p-2 bg-primary/10 rounded-md">
            <step.icon className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-base font-medium text-foreground">{step.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
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
    content: <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-transparent transition-colors">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Sales Assistant</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border-primary/50 ring-2 ring-primary/30 transition-colors">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">IT Project Manager</span>
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
        }} className="w-4 h-4 rounded-full bg-primary" />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-transparent transition-colors">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">DevOps Engineer</span>
            </div>
          </div>
        </div>
  }, {
    title: "2. Configure Skills",
    icon: Wrench,
    content: <div className="space-y-3 pt-2">
          <p className="text-sm text-muted-foreground px-1 pb-1">Adding relevant skills...</p>
          <div className="flex flex-wrap gap-2">
            {["Risk Analysis", "Budgeting", "Agile Methodologies", "Resource Allocation", "Reporting"].map((skill, i) => <motion.div key={skill} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: i * 0.1 + 0.2
        }}>
                <Badge variant="secondary" className="font-normal">{skill}</Badge>
              </motion.div>)}
          </div>
        </div>
  }, {
    title: "3. Agent Ready",
    icon: ClipboardCheck,
    content: <div className="flex flex-col items-center text-center pt-4">
          <motion.div initial={{
        scale: 0.5,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 0.2,
        type: "spring"
      }}>
            <Avatar className="w-16 h-16 mb-3 border-4 border-background">
              <AvatarImage src="https://source.unsplash.com/random/100x100/?robot" alt="IT Project Manager Agent" />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
          </motion.div>
          <h3 className="font-semibold text-foreground">IT Project Manager</h3>
          <p className="text-sm text-muted-foreground">Ready to deploy</p>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <Badge variant="outline">Risk Analysis</Badge>
            <Badge variant="outline">Budgeting</Badge>
            <Badge variant="outline">Reporting</Badge>
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
  return <header className="relative w-full bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent to-70% opacity-70"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center md:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-tight">
                Build Custom AI Agents for Any Role in Minutes
              </h1>
              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
                Automate workflows, streamline operations, and empower your team with intelligent agents tailored to your exact needs. No code required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20">
                  Start Building Your Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="text-base px-8 py-6 rounded-full">
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
        }} className="relative h-96 w-full max-w-md mx-auto">
            <AnimatePresence initial={false} custom={direction}>
              <AgentPreviewCard step={demoSteps[page]} direction={direction} />
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
              {demoSteps.map((_, i) => <button key={i} onClick={() => setPage([i, i > page ? 1 : -1])} className={cn("w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors", page === i && "bg-primary")} aria-label={`Go to step ${i + 1}`} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </header>;
}