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
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-background" data-magicpath-id="0" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
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
      }} data-magicpath-id="2" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="3" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            Trusted by High-Growth Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-magicpath-id="4" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            See how innovative teams are leveraging AI agents to drive efficiency and scale their operations.
          </p>
        </motion.div>
        <div className="mt-16" data-magicpath-id="5" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full" data-magicpath-id="6" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            <CarouselContent data-magicpath-id="7" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
              {stories.map((story, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3" data-magicpath-id="8" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                  <div className="p-1" data-magicpath-id="9" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                    <Card className="h-full flex flex-col justify-between p-6 bg-card/50 border-border/30 shadow-sm hover:shadow-lg transition-shadow duration-300" data-magicpath-id="10" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                      <div data-magicpath-id="11" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                        <div className="flex items-center justify-between" data-magicpath-id="12" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                           <img src={story.logo} alt={`${story.company} logo`} className="h-8 w-auto" data-magicpath-id="13" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
                           <div className="text-right" data-magicpath-id="14" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                               <p className="text-2xl font-bold text-primary" data-magicpath-id="15" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{story.metric.value}</p>
                               <p className="text-sm text-muted-foreground" data-magicpath-id="16" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{story.metric.label}</p>
                           </div>
                        </div>
                        <blockquote className="mt-6 text-foreground" data-magicpath-id="17" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                          "{story.testimonial}"
                        </blockquote>
                      </div>
                      <div className="mt-6 flex items-center gap-4" data-magicpath-id="18" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                        <Avatar data-magicpath-id="19" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                          <AvatarImage src={story.user.avatar} alt={story.user.name} data-magicpath-id="20" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
                          <AvatarFallback data-magicpath-id="21" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{story.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div data-magicpath-id="22" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                          <p className="font-semibold" data-magicpath-id="23" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{story.user.name}</p>
                          <p className="text-sm text-muted-foreground" data-magicpath-id="24" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{story.user.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" data-magicpath-id="25" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
            <CarouselNext className="hidden md:flex" data-magicpath-id="26" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
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
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30" data-magicpath-id="27" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="28" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
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
      }} data-magicpath-id="29" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="30" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            An Unfair Advantage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-magicpath-id="31" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            Our platform is designed from the ground up to be powerful, flexible, and remarkably easy to use.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="32" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
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
        }} data-magicpath-id="33" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
              <Card className="h-full text-center p-6 bg-background/60 border-border/30 shadow-md hover:shadow-xl transition-shadow duration-300" data-magicpath-id="34" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                <div className="inline-block p-4 bg-primary/10 rounded-full" data-magicpath-id="35" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                  <advantage.icon className="w-8 h-8 text-primary" data-magicpath-id="36" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground" data-magicpath-id="37" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{advantage.title}</h3>
                <p className="mt-2 text-muted-foreground" data-magicpath-id="38" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{advantage.description}</p>
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
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-background" data-magicpath-id="39" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
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
      }} data-magicpath-id="41" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="42" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            Deploy Your First Agent in 10 Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-magicpath-id="43" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            Follow three simple steps to build and launch your custom AI workforce.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative" data-magicpath-id="44" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 hidden md:block" aria-hidden="true" data-magicpath-id="45" data-magicpath-path="AIAgentsPlatformLandingPage.tsx"></div>
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
        }} data-magicpath-id="46" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                <div className="relative bg-background inline-block" data-magicpath-id="47" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20" data-magicpath-id="48" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
                        <step.icon className="w-8 h-8 text-primary" data-magicpath-id="49" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
                    </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground" data-magicpath-id="50" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{step.title}</h3>
                <p className="mt-2 text-muted-foreground" data-magicpath-id="51" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">{step.description}</p>
             </motion.div>)}
        </div>
        <div className="mt-16 text-center" data-magicpath-id="52" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20" data-magicpath-id="53" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" data-magicpath-id="54" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
          </Button>
        </div>
      </div>
    </section>;
};

// Rowboat Integration Banner
const RowboatIntegrationBanner = () => {
  return <section className="w-full py-12 bg-secondary/30" data-magicpath-id="55" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="56" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
        <div className="bg-background/60 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-border/30" data-magicpath-id="57" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
          <div className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            <div className="p-3 bg-primary/10 rounded-lg" data-magicpath-id="59" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
              <Bot className="w-6 h-6 text-primary" data-magicpath-id="60" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
            </div>
            <div data-magicpath-id="61" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
              <h3 className="text-xl font-semibold text-foreground" data-magicpath-id="62" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">See Our Platform in Action</h3>
              <p className="text-muted-foreground" data-magicpath-id="63" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">Explore a live demo with our Rowboat integration.</p>
            </div>
          </div>
          <Button variant="outline" asChild data-magicpath-id="64" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
            <a href="/rowboat">
              View Demo
              <ArrowRight className="ml-2 h-4 w-4" data-magicpath-id="65" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default function AIAgentsPlatformLandingPage() {
  return <div className="flex flex-col bg-background" data-magicpath-id="66" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
      <main className="flex-grow" data-magicpath-id="67" data-magicpath-path="AIAgentsPlatformLandingPage.tsx">
        <HeroSection data-magicpath-id="68" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <ProblemStatementSection data-magicpath-id="69" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <AgentShowcaseSection data-magicpath-id="70" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <ROICalculatorSection data-magicpath-id="71" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <SuccessStoriesSection data-magicpath-id="72" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <PlatformAdvantagesSection data-magicpath-id="73" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <GettingStartedSection data-magicpath-id="74" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
        <RowboatIntegrationBanner data-magicpath-id="75" data-magicpath-path="AIAgentsPlatformLandingPage.tsx" />
      </main>
    </div>;
}