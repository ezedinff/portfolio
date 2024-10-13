import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  GitBranch,
  Container as Docker,
  Cloud,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const techStack = [
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Laravel",
  "Spring Boot",
  "ASP.NET Core",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Swift",
  "Kotlin",
  "Dart",
  "Flutter",
  "React Native",
  "Xamarin",
  "Unity",
  "Unreal Engine",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Elasticsearch",
  "GraphQL",
  "REST API",
  "WebSockets",
  "gRPC",
  "Kafka",
  "RabbitMQ",
  "Nginx",
  "Apache",
];
const iconMap: { [key: string]: string } = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  Swift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Google Cloud":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
};

const TechLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center md:w-24 md:h-24 w-12 h-12 bg-white bg-opacity-50 rounded-full mb-3">
      {iconMap[name] ? (
        <img src={iconMap[name]} alt={`${name} logo`} className="md:w-16 md:h-16 w-10 h-10" />
      ) : (
        <span className="text-white text-xs font-semibold">{name}</span>
      )}
    </div>
  );
};

const FloatingShape = ({ shape }: { shape: "circle" | "triangle" }) => {
  const variants = {
    circle: "M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    triangle: "M10 0L0 20h20z",
  };

  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="absolute text-white opacity-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <path d={variants[shape]} fill="currentColor" />
    </motion.svg>
  );
};

export default function EnhancedTechSupportHero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a237e] to-[#00bcd4]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50"></div>

      <FloatingShape shape="circle" />
      <FloatingShape shape="triangle" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stuck with a Stubborn Bug?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Get Instant Expert Help from Seasoned Developers
          </p>
          <ul className="text-gray-300 mb-8 space-y-2">
            {[
              "That tricky code snippet?",
              "A complex customer project?",
              "An uncooperative CI/CD pipeline?",
              "A persistent bug that won't quit?",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <Code className="mr-2 text-[#00bcd4]" size={20} />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/book-session" passHref>
            <button className="px-8 py-4 bg-[#ff9800] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff9800] focus:ring-opacity-50">
              Book Your Free Consultation
            </button>
          </Link>
          <div className="mt-8 flex items-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by developers
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="300" rx="10" fill="#2a3f5f" />
              <rect
                x="20"
                y="20"
                width="360"
                height="260"
                rx="5"
                fill="#1e293b"
              />
              <rect
                x="40"
                y="40"
                width="320"
                height="40"
                rx="3"
                fill="#334155"
              />
              <rect
                x="40"
                y="100"
                width="320"
                height="160"
                rx="3"
                fill="#334155"
              />
              <circle cx="60" cy="60" r="10" fill="#ef4444" />
              <circle cx="90" cy="60" r="10" fill="#fbbf24" />
              <circle cx="120" cy="60" r="10" fill="#22c55e" />
              <text
                x="200"
                y="180"
                fontFamily="monospace"
                fontSize="24"
                fill="#e2e8f0"
                textAnchor="middle"
              >
                Error: Unable to resolve
              </text>
              <text
                x="200"
                y="210"
                fontFamily="monospace"
                fontSize="24"
                fill="#e2e8f0"
                textAnchor="middle"
              >
                dependency 'react'
              </text>
            </svg>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-16 h-16 text-[#ff9800]" />
            </motion.div>
            <motion.div
              className="absolute top-0 right-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <GitBranch className="w-12 h-12 text-[#00bcd4]" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Docker className="w-12 h-12 text-[#2496ed]" />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Cloud className="w-12 h-12 text-[#ff9800]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 py-4 bg-black bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4 flex-wrap">
            {Object.keys(iconMap).map((tech, index) => (
              <TechLogo key={index} name={tech} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white bg-opacity-10 text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
