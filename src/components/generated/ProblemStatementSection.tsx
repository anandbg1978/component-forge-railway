"use client";

import * as React from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, MessageSquareHeart, Users, Clock, DollarSign } from "lucide-react";
interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}
const painPoints: PainPoint[] = [{
  icon: ListChecks,
  title: "Manual Project Tracking",
  description: "Endless hours spent updating spreadsheets and chasing down progress reports, leading to outdated information."
}, {
  icon: MessageSquareHeart,
  title: "Repetitive Status Updates",
  description: "Constant meetings and email chains that disrupt deep work and drain your team's valuable creative energy."
}, {
  icon: Users,
  title: "Inefficient Resource Allocation",
  description: "Struggling to assign the right tasks to the right people, causing project delays and team burnout."
}];

// Animated counter component
function AnimatedCounter({
  value,
  text,
  icon: Icon
}: {
  value: number;
  text: string;
  icon: React.ElementType;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });
  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);
  React.useEffect(() => {
    const unsubscribe = spring.on("change", latest => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest).toLocaleString()}+`;
      }
    });
    return unsubscribe;
  }, [spring]);
  return <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="flex items-center gap-3">
        <Icon className="w-8 h-8 text-primary" />
        <dd className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
          <span ref={ref}>0+</span>
        </dd>
      </div>
      <dt className="mt-2 text-base text-muted-foreground">{text}</dt>
    </div>;
}
export default function ProblemStatementSection() {
  const sectionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
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
            Your Team Is Drowning in Repetitive Tasks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Free up your most valuable assets—your people—to focus on innovation and growth, not administrative overhead.
          </p>
        </motion.div>

        <motion.ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-150px"
      }}>
          {painPoints.map(point => <motion.li key={point.title} variants={itemVariants}>
              <Card className="h-full text-center p-2 bg-background/60 border-border/30 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold text-foreground">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </motion.li>)}
        </motion.ul>

        <aside className="mt-20 md:mt-28">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-secondary/30 px-4 text-sm font-medium text-muted-foreground">The Real Cost</span>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 text-center">
            <AnimatedCounter value={1200} text="Hours lost per year, per team" icon={Clock} />
            <AnimatedCounter value={85000} text="Wasted annually on manual tasks" icon={DollarSign} />
          </dl>
        </aside>
      </div>
    </section>;
}