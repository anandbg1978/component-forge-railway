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
  return <span className="font-bold text-primary" data-magicpath-id="0" data-magicpath-path="ROICalculatorSection.tsx">
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
  return <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30" data-magicpath-id="1" data-magicpath-path="ROICalculatorSection.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="ROICalculatorSection.tsx">
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
      }} data-magicpath-id="3" data-magicpath-path="ROICalculatorSection.tsx">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground" data-magicpath-id="4" data-magicpath-path="ROICalculatorSection.tsx">
            Calculate Your Potential ROI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-magicpath-id="5" data-magicpath-path="ROICalculatorSection.tsx">
            See how much time and money you can save by automating repetitive tasks with AI agents. Adjust the sliders to match your team's profile.
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto" data-magicpath-id="6" data-magicpath-path="ROICalculatorSection.tsx">
          <Card className="bg-background/60 border-border/30 shadow-xl overflow-hidden" data-magicpath-id="7" data-magicpath-path="ROICalculatorSection.tsx">
            <div className="grid md:grid-cols-2" data-magicpath-id="8" data-magicpath-path="ROICalculatorSection.tsx">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border/30" data-magicpath-id="9" data-magicpath-path="ROICalculatorSection.tsx">
                <form onSubmit={handleSubmit} data-magicpath-id="10" data-magicpath-path="ROICalculatorSection.tsx">
                  <CardHeader className="p-0 mb-6" data-magicpath-id="11" data-magicpath-path="ROICalculatorSection.tsx">
                    <CardTitle data-magicpath-id="12" data-magicpath-path="ROICalculatorSection.tsx">Estimate Your Savings</CardTitle>
                    <CardDescription data-magicpath-id="13" data-magicpath-path="ROICalculatorSection.tsx">Adjust the sliders to calculate.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-8" data-magicpath-id="14" data-magicpath-path="ROICalculatorSection.tsx">
                    <div className="space-y-3" data-magicpath-id="15" data-magicpath-path="ROICalculatorSection.tsx">
                      <div className="flex justify-between items-center" data-magicpath-id="16" data-magicpath-path="ROICalculatorSection.tsx">
                        <Label htmlFor="teamSize" data-magicpath-id="17" data-magicpath-path="ROICalculatorSection.tsx">Team Size</Label>
                        <span className="font-semibold text-foreground" data-magicpath-id="18" data-magicpath-path="ROICalculatorSection.tsx">{teamSize} employees</span>
                      </div>
                      <Slider id="teamSize" min={1} max={100} step={1} value={[teamSize]} onValueChange={value => setTeamSize(value[0])} aria-label="Team Size" data-magicpath-id="19" data-magicpath-path="ROICalculatorSection.tsx" />
                    </div>
                    <div className="space-y-3" data-magicpath-id="20" data-magicpath-path="ROICalculatorSection.tsx">
                      <div className="flex justify-between items-center" data-magicpath-id="21" data-magicpath-path="ROICalculatorSection.tsx">
                        <Label htmlFor="hourlyRate" data-magicpath-id="22" data-magicpath-path="ROICalculatorSection.tsx">Avg. Hourly Rate</Label>
                        <span className="font-semibold text-foreground" data-magicpath-id="23" data-magicpath-path="ROICalculatorSection.tsx">${hourlyRate}</span>
                      </div>
                      <Slider id="hourlyRate" min={20} max={200} step={5} value={[hourlyRate]} onValueChange={value => setHourlyRate(value[0])} aria-label="Average Hourly Rate" data-magicpath-id="24" data-magicpath-path="ROICalculatorSection.tsx" />
                    </div>
                    <div className="space-y-3" data-magicpath-id="25" data-magicpath-path="ROICalculatorSection.tsx">
                      <div className="flex justify-between items-center" data-magicpath-id="26" data-magicpath-path="ROICalculatorSection.tsx">
                        <Label htmlFor="tasksAutomated" data-magicpath-id="27" data-magicpath-path="ROICalculatorSection.tsx">Tasks Automated / Week</Label>
                        <span className="font-semibold text-foreground" data-magicpath-id="28" data-magicpath-path="ROICalculatorSection.tsx">{tasksAutomated} tasks</span>
                      </div>
                      <Slider id="tasksAutomated" min={1} max={20} step={1} value={[tasksAutomated]} onValueChange={value => setTasksAutomated(value[0])} aria-label="Tasks Automated per Week" data-magicpath-id="29" data-magicpath-path="ROICalculatorSection.tsx" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 mt-8" data-magicpath-id="30" data-magicpath-path="ROICalculatorSection.tsx">
                    <Button type="submit" size="lg" className="w-full" data-magicpath-id="31" data-magicpath-path="ROICalculatorSection.tsx">
                      <TrendingUp className="mr-2 h-5 w-5" data-magicpath-id="32" data-magicpath-path="ROICalculatorSection.tsx" />
                      See Your Savings
                    </Button>
                  </CardFooter>
                </form>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center" data-magicpath-id="33" data-magicpath-path="ROICalculatorSection.tsx">
                <AnimatePresence data-magicpath-id="34" data-magicpath-path="ROICalculatorSection.tsx">
                  {isCalculated ? <motion.div key="results" variants={containerVariants} initial="hidden" animate="visible" exit={{
                  opacity: 0
                }} className="w-full" data-magicpath-id="35" data-magicpath-path="ROICalculatorSection.tsx">
                      <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-foreground" data-magicpath-id="36" data-magicpath-path="ROICalculatorSection.tsx">Annual Savings</motion.h3>
                      <div className="mt-6 space-y-6" data-magicpath-id="37" data-magicpath-path="ROICalculatorSection.tsx">
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4" data-magicpath-id="38" data-magicpath-path="ROICalculatorSection.tsx">
                          <Clock className="w-8 h-8 text-primary" data-magicpath-id="39" data-magicpath-path="ROICalculatorSection.tsx" />
                          <p className="text-xl text-muted-foreground" data-magicpath-id="40" data-magicpath-path="ROICalculatorSection.tsx">
                            <AnimatedNumber value={savings.time} suffix=" hours" data-magicpath-id="41" data-magicpath-path="ROICalculatorSection.tsx" /> saved
                          </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4" data-magicpath-id="42" data-magicpath-path="ROICalculatorSection.tsx">
                          <DollarSign className="w-8 h-8 text-primary" data-magicpath-id="43" data-magicpath-path="ROICalculatorSection.tsx" />
                          <p className="text-xl text-muted-foreground" data-magicpath-id="44" data-magicpath-path="ROICalculatorSection.tsx">
                            <AnimatedNumber value={savings.cost} prefix="$" data-magicpath-id="45" data-magicpath-path="ROICalculatorSection.tsx" /> saved
                          </p>
                        </motion.div>
                      </div>
                      <motion.div variants={itemVariants} className="mt-8 w-full" data-magicpath-id="46" data-magicpath-path="ROICalculatorSection.tsx">
                        <p className="text-sm text-muted-foreground mb-2" data-magicpath-id="47" data-magicpath-path="ROICalculatorSection.tsx">Productivity Gain</p>
                        <div className="w-full bg-muted rounded-full h-4" data-magicpath-id="48" data-magicpath-path="ROICalculatorSection.tsx">
                          <motion.div className="bg-primary h-4 rounded-full" initial={{
                        width: 0
                      }} animate={{
                        width: `${Math.min(100, savings.time / (teamSize * 2080) * 100 * 5)}%`
                      }} // Example visualization logic
                      transition={{
                        duration: 1,
                        ease: "easeOut"
                      }} data-magicpath-id="49" data-magicpath-path="ROICalculatorSection.tsx" />
                        </div>
                      </motion.div>
                    </motion.div> : <motion.div key="placeholder" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} className="text-center" data-magicpath-id="50" data-magicpath-path="ROICalculatorSection.tsx">
                      <TrendingUp className="w-12 h-12 text-muted-foreground/50 mx-auto" data-magicpath-id="51" data-magicpath-path="ROICalculatorSection.tsx" />
                      <p className="mt-4 text-muted-foreground" data-magicpath-id="52" data-magicpath-path="ROICalculatorSection.tsx">Your potential savings will be displayed here.</p>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
}