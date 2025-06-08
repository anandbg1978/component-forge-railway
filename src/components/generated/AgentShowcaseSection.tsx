"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingUp, Headset, UserCheck, Wrench, Megaphone, PlusCircle, ArrowRight } from "lucide-react";
interface AgentTemplate {
  icon: React.ElementType;
  title: string;
  useCases: string[];
  isCustom?: boolean;
}
const agentTemplates: AgentTemplate[] = [{
  icon: Bot,
  title: "IT Project Manager",
  useCases: ["Automate task assignments", "Track project milestones", "Generate status reports"]
}, {
  icon: TrendingUp,
  title: "Sales Assistant",
  useCases: ["Qualify leads automatically", "Schedule follow-up meetings", "Draft outreach emails"]
}, {
  icon: Headset,
  title: "Customer Support",
  useCases: ["Answer common questions 24/7", "Route tickets to the right team", "Gather customer feedback"]
}, {
  icon: UserCheck,
  title: "HR Recruiter",
  useCases: ["Screen candidate resumes", "Schedule interviews", "Onboard new hires"]
}, {
  icon: Wrench,
  title: "DevOps Engineer",
  useCases: ["Monitor system health", "Automate deployment pipelines", "Manage incident responses"]
}, {
  icon: Megaphone,
  title: "Marketing Coordinator",
  useCases: ["Schedule social media posts", "Analyze campaign performance", "Generate content ideas"]
}, {
  icon: PlusCircle,
  title: "Build Custom Roles",
  useCases: ["Design agents for any workflow", "Integrate with your existing tools", "Define unique skills and tasks"],
  isCustom: true
}];
export default function AgentShowcaseSection() {
  const sectionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Start with a Pre-Built Template
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Jumpstart your automation with roles designed for common business functions, or create a new one from scratch.
          </p>
        </motion.div>

        <motion.ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-150px"
      }}>
          {agentTemplates.map(template => <motion.li key={template.title} variants={itemVariants}>
              <Card className={cn("h-full flex flex-col bg-card/50 border-border/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1", template.isCustom && "border-primary/50 ring-2 ring-primary/20 bg-primary/5")}>
                <CardHeader className="items-start">
                  <div className={cn("p-3 rounded-full bg-secondary", template.isCustom ? "bg-primary/10" : "bg-secondary")}>
                    <template.icon className={cn("w-7 h-7", template.isCustom ? "text-primary" : "text-foreground")} />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold text-foreground">{template.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-muted-foreground">
                    {template.useCases.map(useCase => <li key={useCase} className="flex items-start">
                        <ArrowRight className="w-4 h-4 mr-2 mt-1 text-primary/70 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>)}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={cn("w-full", template.isCustom && "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    {template.isCustom ? "Build From Scratch" : "Use This Template"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.li>)}
        </motion.ul>
      </div>
    </section>;
}