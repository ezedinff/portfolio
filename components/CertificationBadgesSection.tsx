import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Network,
  ChevronRight,
  Database,
  Code,
  Server,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface CertificationBadge {
  name: string;
  imageUrl: string;
  alt: string;
  category: string;
  description: string;
}

const certifications: CertificationBadge[] = [
  {
    name: "AWS Certified Solutions Architect",
    imageUrl:
      "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    alt: "AWS Certified Solutions Architect Badge",
    category: "Cloud",
    description:
      "Expert in designing distributed systems and enterprise-scale applications on AWS",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    imageUrl:
      "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    alt: "Microsoft Certified: Azure Developer Associate Badge",
    category: "Cloud",
    description: "Proficient in developing solutions for Microsoft Azure",
  },
  {
    name: "Google Cloud Certified - Professional Cloud Architect",
    imageUrl:
      "https://images.credly.com/size/680x680/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png",
    alt: "Google Cloud Certified - Professional Cloud Architect Badge",
    category: "Cloud",
    description:
      "Expert in designing, developing, and managing robust Google Cloud solutions",
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    imageUrl:
      "https://images.credly.com/images/6eeb0a98-33cb-4f72-bfc3-f89d65a3286c/image.png",
    alt: "CISSP Badge",
    category: "Security",
    description:
      "Comprehensive knowledge in information security management and operations",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    imageUrl:
      "https://images.credly.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    alt: "Certified Kubernetes Administrator Badge",
    category: "Cloud",
    description:
      "Mastery in deploying, managing, and troubleshooting Kubernetes clusters",
  },
  {
    name: "Cisco Certified Network Professional (CCNP)",
    imageUrl:
      "https://images.credly.com/images/07f70c56-f067-458e-bbe5-736f055f0cce/CCNP_Enterprise_large.png",
    alt: "Cisco Certified Network Professional Badge",
    category: "Networking",
    description:
      "Advanced skills in planning, implementing, and troubleshooting enterprise networking solutions",
  },
  {
    name: "CompTIA Security+",
    imageUrl:
      "https://images.credly.com/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png",
    alt: "CompTIA Security+ Badge",
    category: "Security",
    description:
      "Foundational knowledge of cybersecurity principles and best practices",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    imageUrl:
      "https://images.credly.com/images/57c50d69-67ee-4cdd-bf56-ee3ca29498d6/image.png",
    alt: "Certified Ethical Hacker Badge",
    category: "Security",
    description:
      "Skilled in identifying vulnerabilities and improving system security",
  },
  {
    name: "Oracle Certified Professional, Java SE 11 Developer",
    imageUrl:
      "https://images.credly.com/images/6f2a9ef8-4da2-4e67-bd52-84fbaa1af776/02_Java-SE-11-Developer_Professional__1_.png",
    alt: "Oracle Certified Professional, Java SE 11 Developer Badge",
    category: "Development",
    description: "Expert in developing modern Java applications",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    imageUrl:
      "https://images.credly.com/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    alt: "Microsoft Certified: Azure Administrator Associate Badge",
    category: "Cloud",
    description:
      "Proficient in implementing, monitoring, and maintaining Microsoft Azure solutions",
  },
  {
    name: "Red Hat Certified Engineer (RHCE)",
    imageUrl:
      "https://images.credly.com/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png",
    alt: "Red Hat Certified Engineer Badge",
    category: "System Administration",
    description:
      "Expert in automating and integrating Red Hat Enterprise Linux systems",
  },
  {
    name: "Certified Information Systems Auditor (CISA)",
    imageUrl:
      "https://images.credly.com/images/115fe6b3-67d7-468c-a664-5afe7a1e96da/cde63b128a8f4a898d824b58b687804d.PNG.png",
    alt: "Certified Information Systems Auditor Badge",
    category: "Security",
    description: "Proficient in IT systems auditing, control, and security",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    imageUrl:
      "https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000",
    alt: "Salesforce Certified Platform Developer I Badge",
    category: "Development",
    description:
      "Skilled in developing custom applications on the Salesforce platform",
  },
  {
    name: "MongoDB Certified Developer Associate",
    imageUrl:
      "https://images.credly.com/size/680x680/images/5c8048d0-0554-472c-af49-d912f9aca0f7/image.png",
    alt: "MongoDB Certified Developer Associate Badge",
    category: "Database",
    description: "Proficient in building applications using MongoDB",
  },
  {
    name: "Certified Scrum Master (CSM)",
    imageUrl:
      "https://images.credly.com/images/50e12374-9e10-4c1b-b6f9-7c3bba8a9ee9/image.png",
    alt: "Certified Scrum Master Badge",
    category: "Project Management",
    description: "Expert in facilitating Scrum practices and principles",
  },
  {
    name: "PMI Agile Certified Practitioner (PMI-ACP)",
    imageUrl:
      "https://images.credly.com/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png",
    alt: "PMI Agile Certified Practitioner Badge",
    category: "Project Management",
    description: "Skilled in various Agile methodologies and practices",
  },
  {
    name: "Certified Information Security Manager (CISM)",
    imageUrl:
      "https://images.credly.com/images/074d3794-e656-4f98-acd7-8fdbbd32b584/3be9d1484fae4ba0ae857d3d76eb02c5.PNG.png",
    alt: "Certified Information Security Manager Badge",
    category: "Security",
    description:
      "Expert in managing and developing information security systems",
  },
  {
    name: "Terraform Associate",
    imageUrl:
      "https://images.credly.com/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    alt: "Terraform Associate Badge",
    category: "DevOps",
    description: "Proficient in using Terraform for infrastructure as code",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    imageUrl:
      "https://images.credly.com/size/680x680/images/cc8adc83-1dc6-4d57-8e20-22171247e052/blob",
    alt: "Certified Kubernetes Application Developer Badge",
    category: "DevOps",
    description:
      "Skilled in designing and building cloud-native applications for Kubernetes",
  },
  {
    name: "CompTIA Network+",
    imageUrl:
      "https://images.credly.com/images/e1fc05b2-959b-45a4-8d20-124b1df121fe/CompTIA_Network_2Bce.png",
    alt: "CompTIA Network+ Badge",
    category: "Networking",
    description:
      "Foundational knowledge of networking concepts and best practices",
  },
];

const categoryIcons = {
  Cloud: Cloud,
  Security: Shield,
  Networking: Network,
  Development: Code,
  "System Administration": Server,
  Database: Database,
  "Project Management": ChevronRight,
  DevOps: Cpu,
};

const HexagonShape = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-48 h-52">
    <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full ">
      <path
        d="M50 0 L100 28.75 L100 86.25 L50 115 L0 86.25 L0 28.75 Z"
        fill="#fff"
        opacity={0.1}
        className="drop-shadow-lg"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center p-4">
      {children}
    </div>
  </div>
);

const CertificationHexagon = ({
  certification,
}: {
  certification: CertificationBadge;
}) => {
  const Icon =
    categoryIcons[certification.category as keyof typeof categoryIcons] ||
    ChevronRight;

  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HexagonShape>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative mb-2">
                  <img
                    src={certification.imageUrl}
                    alt={certification.alt}
                    className="w-16 h-16 object-contain"
                  />
                  {/* <Badge className={`absolute -top-10 -right-10 bg-primary text-primary-foreground text-xs w-fit text-nowrap`}>
                    <Icon className="w-3 h-3 mr-1" />
                    {certification.category}
                  </Badge> */}
                </div>
                <h3 className="text-xs font-semibold leading-tight text-gray-300">
                  {certification.name}
                </h3>
              </div>
            </HexagonShape>
          </TooltipTrigger>
          <TooltipContent>
            <p>{certification.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

const CodePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern
      id="code-pattern"
      x="0"
      y="0"
      width="100"
      height="100"
      patternUnits="userSpaceOnUse"
    >
      <text x="0" y="50" className="text-gray-200 opacity-10 font-mono text-xs">
        {`{code}`}
      </text>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#code-pattern)" />
  </svg>
);

export default function CertifiedExpertise() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredCertifications = filter
    ? certifications.filter((cert) => cert.category === filter)
    : certifications;

  const categories = Array.from(
    new Set(certifications.map((cert) => cert.category))
  );

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#1a237e] to-[#00bcd4] overflow-hidden">
      <CodePattern />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certified Expertise at Your Fingertips
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Our team's extensive certifications ensure you're getting
            world-class support for your toughest tech challenges.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <Button
            variant={filter === null ? "secondary" : "outline"}
            onClick={() => setFilter(null)}
            className="text-slate-900"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "secondary" : "outline"}
              onClick={() => setFilter(category)}
              className="text-slate-900"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredCertifications.map((certification, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <CertificationHexagon certification={certification} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-white text-2xl font-bold mb-8">
            Total Certifications: {certifications.length}
            <sup>+</sup>
          </p>
          <Link href="/book-session" passHref>
            <Button
              size="lg"
              className="bg-[#ff9800]   hover:bg-[#f57c00] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Leverage Our Expertise
            </Button>
          </Link>
          <div className="mt-4">
            {/* <Button variant="link" className="text-white">
              View Full List of Certifications
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>

        {/* <div className="mt-16 bg-white bg-opacity-10 rounded-lg p-6 text-center">
          <p className="text-2xl text-white font-bold mb-4">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Amazon', 'Microsoft', 'Google', 'Cisco', 'Oracle', 'Red Hat', 'Salesforce', 'MongoDB'].map((company) => (
              <div key={company} className="bg-white rounded-full p-2">
                <img
                  src={`/placeholder.svg?height=40&width=100&text=${company}`}
                  alt={`${company} logo`}
                  className="h-10"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
