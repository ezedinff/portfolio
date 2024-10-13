import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Monitor, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Book a Call",
    description:
      "Schedule a convenient time for expert assistance with your coding challenges.",
    icon: Calendar,
  },
  {
    number: 2,
    title: "Sign NDA",
    description:
      "We prioritize your privacy. Sign our Non-Disclosure Agreement for complete confidentiality.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Secure Screen Share",
    description:
      "Connect with our experts through our encrypted screen sharing platform.",
    icon: Monitor,
  },
  {
    number: 4,
    title: "Problem Solved",
    description:
      "Get your coding issues resolved efficiently by our experienced developers.",
    icon: CheckCircle,
  },
];

const CodeSnippet = () => (
  <motion.div
    className="absolute text-xs text-white opacity-20 font-mono"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
  >
    {`const solveIssue = async (problem) => {
  const expert = await findExpert(problem.type);
  const solution = await expert.analyze(problem);
  return solution;
};`}
  </motion.div>
);

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => (
  <motion.div
    className="bg-white bg-opacity-10 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-opacity-20"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -5 }}
  >
    <div className="text-4xl font-bold text-teal-300 mb-4">{step.number}</div>
    <step.icon className="w-16 h-16 text-teal-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
    <p className="text-gray-300">{step.description}</p>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a237e] to-[#00bcd4] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <CodeSnippet />
      </div>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Link href="/book-session" passHref>
              <Button
                size="lg"
                className="bg-[#ff9800] hover:bg-[#f57c00] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            top: `${20 + i * 25}%`,
            left: `${75 + i * 5}%`,
            width: 40,
            height: 40,
          }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-teal-300 opacity-50"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      ))}
    </section>
  );
}
