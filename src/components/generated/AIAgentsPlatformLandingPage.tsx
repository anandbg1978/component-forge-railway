"use client";

import * as React from "react";
import HeroSection from "./HeroSection";
import ProblemStatementSection from "./ProblemStatementSection";
import AgentShowcaseSection from "./AgentShowcaseSection";
import ROICalculatorSection from "./ROICalculatorSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, ShieldCheck, Users, BarChart, ArrowRight, Rocket, Bot } from "lucide-react";
import { motion } from "framer-motion";

// Success Stories Section
const SuccessStoriesSection = () => {
  const stories = [{
    logo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe",
    testimonial: "Automating our DevOps monitoring saved us over 20 hours a week, allowing our team to focus on feature development.",
    user: {
      name: "Devon Lane",
      title: "Lead DevOps Engineer",
      avatar: "https://source.unsplash.com/random/100x100/?woman,person"
    },
    metric: {
      value: "98%",
      label: "Uptime"
    }
  }, {
    logo: "https://logo.clearbit.com/notion.so",
    company: "Notion",
    testimonial: "The AI sales assistant is a game-changer. Our lead response time is down by 80%, and qualification is more accurate than ever.",
    user: {
      name: "Alex Rivera",
      title: "Sales Director",
      avatar: "https://source.unsplash.com/random/100x100/?man,person"
    },
    metric: {
      value: "4x",
      label: "Faster Response"
    }
  }, {
    logo: "https://logo.clearbit.com/intercom.com",
    company: "Intercom",
    testimonial: "We've deflected over 60% of common support queries, freeing up our agents to handle complex issues. Customer satisfaction is at an all-time high.",
    user: {
      name: "Casey Jordan",
      title: "Head of Support",
      avatar: "https://source.unsplash.com/random/100x100/?person,tech"
    },
    metric: {
      value: "+15%",
      label: "CSAT Score"
    }
  }, {
    logo: "https://logo.clearbit.com/loom.com",
    company: "Loom",
    testimonial: "Our HR agents now handle initial candidate screening and scheduling, reducing our time-to-hire by 30%.",
    user: {
      name: "Jordan Smith",
      title: "Recruiting Lead",
      avatar: "https://source.unsplash.com/random/100x100/?woman,professional"
    },
    metric: {
      value: "-30%",
      label: "Time to Hire"
    }
  }];
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
            Trusted by High-Growth Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how innovative teams are leveraging AI agents to drive efficiency and scale their operations.
          </p>
        </motion.div>
        <div className="mt-16">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {stories.map((story, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between p-6 bg-card/50 border-border/30 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div>
                        <div className="flex items-center justify-between">
                           <img src={story.logo} alt={`${story.company} logo`} className="h-8 w-auto" />
                           <div className="text-right">
                               <p className="text-2xl font-bold text-primary">{story.metric.value}</p>
                               <p className="text-sm text-muted-foreground">{story.metric.label}</p>
                           </div>
                        </div>
                        <blockquote className="mt-6 text-foreground">
                          "{story.testimonial}"
                        </blockquote>
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={story.user.avatar} alt={story.user.name} />
                          <AvatarFallback>{story.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{story.user.name}</p>
                          <p className="text-sm text-muted-foreground">{story.user.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>;
};

// Platform Advantages Section
const PlatformAdvantagesSection = () => {
  const advantages = [{
    icon: Zap,
    title: "No-Code Builder",
    description: "Create and deploy powerful AI agents with an intuitive drag-and-drop interface. No coding skills required."
  }, {
    icon: Bot,
    title: "Pre-Trained Roles",
    description: "Start instantly with a library of agent templates for common roles like sales, support, and HR."
  }, {
    icon: Users,
    title: "Seamless Integrations",
    description: "Connect your agents to hundreds of popular apps and services to automate workflows across your entire stack."
  }, {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with industry-leading security protocols, ensuring compliance and peace of mind."
  }];
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30">
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
            An Unfair Advantage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is designed from the ground up to be powerful, flexible, and remarkably easy to use.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => <motion.div key={advantage.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="h-full text-center p-6 bg-background/60 border-border/30 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{advantage.title}</h3>
                <p className="mt-2 text-muted-foreground">{advantage.description}</p>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

// Getting Started Section
const GettingStartedSection = () => {
  const steps = [{
    icon: CheckCircle,
    title: "Choose a Template",
    description: "Select a pre-built agent role or start from a blank canvas."
  }, {
    icon: BarChart,
    title: "Configure Skills",
    description: "Define the agent's tasks, knowledge base, and integrations with our no-code editor."
  }, {
    icon: Rocket,
    title: "Deploy & Monitor",
    description: "Launch your agent and watch it automate tasks and deliver results in real-time."
  }];
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
            Deploy Your First Agent in 10 Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow three simple steps to build and launch your custom AI workforce.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
           {steps.map((step, index) => <motion.div key={step.title} className="relative text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5,
          delay: index * 0.15
        }}>
                <div className="relative bg-background inline-block">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                        <step.icon className="w-8 h-8 text-primary" />
                    </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
             </motion.div>)}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};

// Rowboat Integration Banner
const RowboatIntegrationBanner = () => {
  return <section className="w-full py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background/60 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-border/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">See Our Platform in Action</h3>
              <p className="text-muted-foreground">Explore a live demo with our Rowboat integration.</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="/rowboat">
              View Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default function AIAgentsPlatformLandingPage() {
  return <div className="flex flex-col bg-background">
      <main className="flex-grow">
        <HeroSection />
        <ProblemStatementSection />
        <AgentShowcaseSection />
        <ROICalculatorSection />
        <SuccessStoriesSection />
        <PlatformAdvantagesSection />
        <GettingStartedSection />
        <RowboatIntegrationBanner />
      </main>
    </div>;
}