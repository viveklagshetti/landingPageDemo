import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Code,
  Database,
  Server,
  Globe,
  Users,
  Award,
  Clock,
  Star,
  Menu,
  X,
  Play,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Laptop,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Map,
  PhoneCall,
  MailIcon,
} from "lucide-react";
import Logo from "../assets/logo.png";
export default function MERNCourseLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern JavaScript (ES6+)",
      description: "Master the latest JavaScript features and best practices",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "React Js",
      description: "Build dynamic, interactive user interfaces with React",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Node Js & Express Js",
      description: "Create powerful backend APIs and server-side applications",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "MongoDB",
      description: "Store and manage data with NoSQL database expertise",
    },
  ];

  const curriculum = [
    {
      week: "Week 1-2",
      title: "JavaScript Fundamentals",
      topics: [
        "ES6+ Features",
        "Async Programming",
        "DOM Manipulation",
        "Modern JS Patterns",
      ],
    },
    {
      week: "Week 3-5",
      title: "React Development",
      topics: [
        "Components & Props",
        "State Management",
        "Hooks & Context",
        "React Router",
      ],
    },
    {
      week: "Week 6-8",
      title: "Backend with Node.js",
      topics: [
        "Express.js Framework",
        "RESTful APIs",
        "Authentication",
        "Middleware",
      ],
    },
    {
      week: "Week 9-10",
      title: "MongoDB & Full Stack",
      topics: [
        "Database Design",
        "CRUD Operations",
        "Integration",
        "Deployment",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at TCS",
      image:
        "https://images.unsplash.com/photos/woman-wearing-eyeglasses-and-black-long-sleeved-shirt-outdoor-Lc79nZ8epA8",
      rating: 5,
      text: "This MERN course transformed my career completely. The hands-on projects and industry-relevant curriculum helped me land my dream job!",
    },
    {
      name: "Rahul Patel",
      role: "Software Engineer at Infosys",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Excellent course structure and amazing instructors. I went from beginner to building full-stack applications in just 3 months.",
    },
    {
      name: "Sneha Reddy",
      role: "Frontend Developer at Wipro",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The practical approach and real-world projects made learning MERN stack so much easier. Highly recommended!",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Hiring Partners" },
    { number: "4.9/5", label: "Course Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-14 h-14" />
              <p className="text-lg font-medium text-green-800 text-center">
                Pratibha Skill Development Center
              </p>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#course"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Course
              </a>
              <a
                href="#curriculum"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Curriculum
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white/95 rounded-lg backdrop-blur-md shadow-lg border border-gray-200">
              <a
                href="#home"
                className="block px-4 py-2 text-gray-700 hover:text-green-600"
              >
                Home
              </a>
              <a
                href="#course"
                className="block px-4 py-2 text-gray-700 hover:text-green-600"
              >
                Course
              </a>
              <a
                href="#curriculum"
                className="block px-4 py-2 text-gray-700 hover:text-green-600"
              >
                Curriculum
              </a>
              <a
                href="#testimonials"
                className="block px-4 py-2 text-gray-700 hover:text-green-600"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:text-green-600"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto mt-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master
              <span className="bg-gradient-to-r from-green-600 via-red-400 to-green-600 bg-clip-text text-transparent">
                {" "}
                Full Stack{" "}
              </span>
              Development
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your career with our comprehensive MERN Stack course.
              Build modern web applications and land high-paying jobs in just 10
              weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-80 transition-all duration-300 shadow-xl">
                Start Learning Now
                <ChevronRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group flex items-center justify-center px-8 py-4 border-2 border-red-300 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Preview
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="course" className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our{" "}
              <span className="text-green-600">MERN Course?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the most in-demand technologies with hands-on projects and
              industry expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-100 flex flex-col items-center"
              >
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-28 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">
              Comprehensive <span className="text-green-600">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning path from basics to advanced full-stack
              development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 m-4">
            {curriculum.map((module, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6 justify-between">
                  <div className="bg-green-600 text-sm sm:text-base text-white px-4 py-2 rounded-full font-semibold mr-4">
                    {module.week}
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {module.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {module.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Student <span className="text-green-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who transformed their careers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-green-100"
                />

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-red-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  <p className="text-lg text-gray-600 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-green-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-6 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <ArrowUp size={20} />
        </button>

        <div className="container mx-auto px-6 py-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12 pt-2 m-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Quick Links
              </h3>
              <div className="space-y-3">
                {["Home", "Course", "Curriculum", "Reviews"].map(
                  (link, index) => (
                    <a
                      key={index}
                      href={`#${link.toLowerCase()}`}
                      className="group flex items-center text-gray-400 hover:text-green-400 transition-all duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Support
              </h3>
              <div className="space-y-3">
                {[
                  "Help Center",
                  "Career Guidance",
                  "Community",
                  "Contact Us",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className=" cursor-pointer group flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium">
                      contact@pratibhaskilldevelopment.com
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer group flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium">+91 9890450080</p>
                  </div>
                </div>
                <div className=" cursor-pointer group flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0 text-center">
                <p>
                  &copy; 2024 Pratibha Skill Development Center. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
