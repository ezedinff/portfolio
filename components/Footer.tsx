import { Link, Linkedin, Twitter, X } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-gray-400">
              Copyright © 2024 TechPro. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://x.com/ezedinff"
              className="hover:text-bright-teal transition-colors"
            >
              <X className="w-6 h-6" />
            </a>
            <a
              href="https://linkedIn.com/in/ezedinff"
              className="hover:text-bright-teal transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
