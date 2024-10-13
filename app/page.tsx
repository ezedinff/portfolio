"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Lock, CreditCard, MessageCircle, Code } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificationBadgesSection from "@/components/CertificationBadgesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openGmailCompose = () => {
    const email = "techloveeeee@gmail.com";
    const subject = encodeURIComponent("TechPro Support Inquiry");
    const body = encodeURIComponent(`Hello TechPro Support,

I'm reaching out regarding:
[Please describe your tech issue or question here]

My tech environment:
- Operating System:
- Relevant Software/Hardware:

Preferred contact method: [Email/Phone]
Best time to reach me: [Your preferred time]

Thank you for your assistance!

Best regards,
[Your Name]`);
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`mailto:${email}`, "_blank");
      return;
    }
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <HowItWorksSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We offer these plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Hourly Plan", price: "Negotiable" },
              { title: "Monthly Plan", price: "Negotiable" },
            ].map((plan, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-deep-blue mb-6">
                    {plan.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      {/* <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by Tech Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=60&width=120`}
                alt={`Tech Company ${i}`}
                className="h-12 grayscale opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section> */}
      <CertificationBadgesSection />

      {/* Floating Chat Button */}
      <button
        onClick={() => openGmailCompose()}
        className="fixed bottom-4 right-4 bg-warm-orange text-white p-4 rounded-full shadow-lg hover:bg-warm-orange/90 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
