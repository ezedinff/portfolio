import React from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Code, Terminal, Bug } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex M.",
    jobTitle: "Full Stack Developer",
    company: "TechCorp",
    quote: "TechPro Support saved me hours of frustration. Their expert quickly identified the bug in my React component that was causing performance issues. Highly recommended!",
    avatar: "",
  },
  {
    name: "Priya S.",
    jobTitle: "DevOps Engineer",
    company: "CloudSys",
    quote: "I was stuck with a tricky Docker configuration. The TechPro team not only solved my immediate issue but also optimized my entire containerization setup. Game changer!",
    avatar: "",
  },
  {
    name: "Chris L.",
    jobTitle: "Backend Developer",
    company: "DataFlow",
    quote: "When our API was throwing unexpected errors, TechPro's support was invaluable. They guided us through the debugging process and helped implement a robust error handling system.",
    avatar: "",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.jobTitle}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4 flex-grow">{`"${testimonial.quote}"`}</p>
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  </motion.div>
)

const CodeSnippet = () => (
  <motion.div
    className="absolute text-xs text-white opacity-10 font-mono"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  >
    {`function optimizePerformance(component) {
  // TechPro magic happens here
  return enhancedComponent;
}`}
  </motion.div>
)

export default function DeveloperSuccessStories() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#1a237e] to-[#00bcd4] overflow-hidden">
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
          Developer Success Stories
        </motion.h2>
        
        <div className="relative">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            <div className="flex justify-center mt-4 space-x-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-xl mb-8">Join 1000+ happy developers</p>
          <Button
            size="lg"
            className="bg-[#ff9800] hover:bg-[#f57c00] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Book Your Session
          </Button>
        </div>
      </div>

      {[Code, Terminal, Bug].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block text-white opacity-20"
          style={{
            top: `${20 + index * 30}%`,
            left: `${80 + index * 5}%`,
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
            delay: index * 0.5,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </section>
  )
}