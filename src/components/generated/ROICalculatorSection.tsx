"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

// Animated number component
const AnimatedNumber = ({
  value,
  prefix = "",
  suffix = ""
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  React.useEffect(() => {
    // @ts-expect-error: animate signature may differ in framer-motion versions
    const controls = motion.animate(displayValue, value, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (latest: number) => setDisplayValue(latest)
    }) as unknown as {
      stop: () => void;
    };
    return () => controls.stop();
  }, [value]);
  return <span className="font-bold text-primary">
      {prefix}{Math.round(displayValue).toLocaleString()}{suffix}
    </span>;
};
export default function ROICalculatorSection() {
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [tasksAutomated, setTasksAutomated] = useState(5);
  const [savings, setSavings] = useState({
    time: 0,
    cost: 0
  });
  const [isCalculated, setIsCalculated] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming each automated task saves 2 hours per week
    const hoursSavedPerWeek = tasksAutomated * 2 * teamSize;
    const annualHoursSaved = hoursSavedPerWeek * 52;
    const annualCostSaved = annualHoursSaved * hourlyRate;
    setSavings({
      time: annualHoursSaved,
      cost: annualCostSaved
    });
    setIsCalculated(true);
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0
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
            Calculate Your Potential ROI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how much time and money you can save by automating repetitive tasks with AI agents. Adjust the sliders to match your team's profile.
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-background/60 border-border/30 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border/30">
                <form onSubmit={handleSubmit}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle>Estimate Your Savings</CardTitle>
                    <CardDescription>Adjust the sliders to calculate.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="teamSize">Team Size</Label>
                        <span className="font-semibold text-foreground">{teamSize} employees</span>
                      </div>
                      <Slider id="teamSize" min={1} max={100} step={1} value={[teamSize]} onValueChange={value => setTeamSize(value[0])} aria-label="Team Size" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="hourlyRate">Avg. Hourly Rate</Label>
                        <span className="font-semibold text-foreground">${hourlyRate}</span>
                      </div>
                      <Slider id="hourlyRate" min={20} max={200} step={5} value={[hourlyRate]} onValueChange={value => setHourlyRate(value[0])} aria-label="Average Hourly Rate" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="tasksAutomated">Tasks Automated / Week</Label>
                        <span className="font-semibold text-foreground">{tasksAutomated} tasks</span>
                      </div>
                      <Slider id="tasksAutomated" min={1} max={20} step={1} value={[tasksAutomated]} onValueChange={value => setTasksAutomated(value[0])} aria-label="Tasks Automated per Week" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 mt-8">
                    <Button type="submit" size="lg" className="w-full">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      See Your Savings
                    </Button>
                  </CardFooter>
                </form>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
                <AnimatePresence>
                  {isCalculated ? <motion.div key="results" variants={containerVariants} initial="hidden" animate="visible" exit={{
                  opacity: 0
                }} className="w-full">
                      <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-foreground">Annual Savings</motion.h3>
                      <div className="mt-6 space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                          <Clock className="w-8 h-8 text-primary" />
                          <p className="text-xl text-muted-foreground">
                            <AnimatedNumber value={savings.time} suffix=" hours" /> saved
                          </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                          <DollarSign className="w-8 h-8 text-primary" />
                          <p className="text-xl text-muted-foreground">
                            <AnimatedNumber value={savings.cost} prefix="$" /> saved
                          </p>
                        </motion.div>
                      </div>
                      <motion.div variants={itemVariants} className="mt-8 w-full">
                        <p className="text-sm text-muted-foreground mb-2">Productivity Gain</p>
                        <div className="w-full bg-muted rounded-full h-4">
                          <motion.div className="bg-primary h-4 rounded-full" initial={{
                        width: 0
                      }} animate={{
                        width: `${Math.min(100, savings.time / (teamSize * 2080) * 100 * 5)}%`
                      }} // Example visualization logic
                      transition={{
                        duration: 1,
                        ease: "easeOut"
                      }} />
                        </div>
                      </motion.div>
                    </motion.div> : <motion.div key="placeholder" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} className="text-center">
                      <TrendingUp className="w-12 h-12 text-muted-foreground/50 mx-auto" />
                      <p className="mt-4 text-muted-foreground">Your potential savings will be displayed here.</p>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
}