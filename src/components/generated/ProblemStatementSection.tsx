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
  return <div className="flex flex-col items-center text-center md:items-start md:text-left" data-magicpath-id="0" data-magicpath-path="ProblemStatementSection.tsx">
      <div className="flex items-center gap-3" data-magicpath-id="1" data-magicpath-path="ProblemStatementSection.tsx">
        <Icon className="w-8 h-8 text-primary" data-magicpath-id="2" data-magicpath-path="ProblemStatementSection.tsx" />
        <dd className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="3" data-magicpath-path="ProblemStatementSection.tsx">
          <span ref={ref} data-magicpath-id="4" data-magicpath-path="ProblemStatementSection.tsx">0+</span>
        </dd>
      </div>
      <dt className="mt-2 text-base text-muted-foreground" data-magicpath-id="5" data-magicpath-path="ProblemStatementSection.tsx">{text}</dt>
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
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30" data-magicpath-id="6" data-magicpath-path="ProblemStatementSection.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="7" data-magicpath-path="ProblemStatementSection.tsx">
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
      }} data-magicpath-id="8" data-magicpath-path="ProblemStatementSection.tsx">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="9" data-magicpath-path="ProblemStatementSection.tsx">
            Your Team Is Drowning in Repetitive Tasks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-magicpath-id="10" data-magicpath-path="ProblemStatementSection.tsx">
            Free up your most valuable assets—your people—to focus on innovation and growth, not administrative overhead.
          </p>
        </motion.div>

        <motion.ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-150px"
      }} data-magicpath-id="11" data-magicpath-path="ProblemStatementSection.tsx">
          {painPoints.map(point => <motion.li key={point.title} variants={itemVariants} data-magicpath-id="12" data-magicpath-path="ProblemStatementSection.tsx">
              <Card className="h-full text-center p-2 bg-background/60 border-border/30 shadow-md hover:shadow-xl transition-shadow duration-300" data-magicpath-id="13" data-magicpath-path="ProblemStatementSection.tsx">
                <CardHeader className="items-center" data-magicpath-id="14" data-magicpath-path="ProblemStatementSection.tsx">
                  <div className="p-4 bg-primary/10 rounded-full" data-magicpath-id="15" data-magicpath-path="ProblemStatementSection.tsx">
                    <point.icon className="w-8 h-8 text-primary" data-magicpath-id="16" data-magicpath-path="ProblemStatementSection.tsx" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold text-foreground" data-magicpath-id="17" data-magicpath-path="ProblemStatementSection.tsx">{point.title}</CardTitle>
                </CardHeader>
                <CardContent data-magicpath-id="18" data-magicpath-path="ProblemStatementSection.tsx">
                  <p className="text-muted-foreground" data-magicpath-id="19" data-magicpath-path="ProblemStatementSection.tsx">{point.description}</p>
                </CardContent>
              </Card>
            </motion.li>)}
        </motion.ul>

        <aside className="mt-20 md:mt-28" data-magicpath-id="20" data-magicpath-path="ProblemStatementSection.tsx">
          <div className="relative" data-magicpath-id="21" data-magicpath-path="ProblemStatementSection.tsx">
            <div className="absolute inset-0 flex items-center" aria-hidden="true" data-magicpath-id="22" data-magicpath-path="ProblemStatementSection.tsx">
              <div className="w-full border-t border-border/50" data-magicpath-id="23" data-magicpath-path="ProblemStatementSection.tsx" />
            </div>
            <div className="relative flex justify-center" data-magicpath-id="24" data-magicpath-path="ProblemStatementSection.tsx">
              <span className="bg-secondary/30 px-4 text-sm font-medium text-muted-foreground" data-magicpath-id="25" data-magicpath-path="ProblemStatementSection.tsx">The Real Cost</span>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 text-center" data-magicpath-id="26" data-magicpath-path="ProblemStatementSection.tsx">
            <AnimatedCounter value={1200} text="Hours lost per year, per team" icon={Clock} data-magicpath-id="27" data-magicpath-path="ProblemStatementSection.tsx" />
            <AnimatedCounter value={85000} text="Wasted annually on manual tasks" icon={DollarSign} data-magicpath-id="28" data-magicpath-path="ProblemStatementSection.tsx" />
          </dl>
        </aside>
      </div>
    </section>;
}