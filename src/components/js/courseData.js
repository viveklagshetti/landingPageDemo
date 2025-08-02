// courseData.js - All course related data

export const features = [
  {
    icon: "Code",
    title: "Modern JavaScript (ES6+)",
    description: "Master the latest JavaScript features and best practices",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: "Globe",
    title: "React.js Frontend",
    description: "Build dynamic, interactive user interfaces with React",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: "Server",
    title: "Node.js & Express",
    description: "Create powerful backend APIs and server-side applications",
    color: "from-green-500 to-green-600"
  },
  {
    icon: "Database",
    title: "MongoDB Database",
    description: "Store and manage data with NoSQL database expertise",
    color: "from-emerald-500 to-emerald-600"
  },
];

export const curriculum = [
  {
    week: "Week 1-2",
    title: "JavaScript Fundamentals",
    subtitle: "Build Strong Foundation",
    duration: "40 Hours",
    level: "Beginner",
    icon: "BookOpen",
    color: "from-purple-500 to-purple-600",
    topics: [
      "ES6+ Features & Syntax",
      "Async/Await & Promises",
      "DOM Manipulation",
      "Modern JS Patterns"
    ],
    projects: [
      "Interactive Calculator",
      "Dynamic To-Do App"
    ],
    skills: ["Variables & Functions", "Objects & Arrays", "Event Handling", "API Integration"]
  },
  {
    week: "Week 3-5",
    title: "React Development",
    subtitle: "Frontend Mastery",
    duration: "60 Hours",
    level: "Intermediate",
    icon: "Laptop",
    color: "from-blue-500 to-blue-600",
    topics: [
      "Components & Props",
      "State Management",
      "Hooks & Context API",
      "React Router & Navigation"
    ],
    projects: [
      "E-commerce Product Page",
      "Social Media Dashboard"
    ],
    skills: ["Component Architecture", "State Management", "Routing", "Performance Optimization"]
  },
  {
    week: "Week 6-8",
    title: "Backend with Node.js",
    subtitle: "Server-Side Development",
    duration: "60 Hours",
    level: "Intermediate",
    icon: "Server",
    color: "from-green-500 to-green-600",
    topics: [
      "Express.js Framework",
      "RESTful API Design",
      "JWT Authentication",
      "Middleware & Security"
    ],
    projects: [
      "User Authentication System",
      "Blog API with CRUD"
    ],
    skills: ["API Development", "Authentication", "Database Integration", "Security Best Practices"]
  },
  {
    week: "Week 9-10",
    title: "MongoDB & Full Stack",
    subtitle: "Complete Integration",
    duration: "40 Hours",
    level: "Advanced",
    icon: "TrendingUp",
    color: "from-red-500 to-red-600",
    topics: [
      "Database Design & Modeling",
      "CRUD Operations",
      "Frontend-Backend Integration",
      "Deployment & DevOps"
    ],
    projects: [
      "Full Stack Social Media App",
      "E-commerce Platform"
    ],
    skills: ["Database Design", "Full Stack Integration", "Deployment", "Performance Optimization"]
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at TCS",
    company: "TCS",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "This MERN course transformed my career completely. The hands-on projects and industry-relevant curriculum helped me land my dream job!",
    salary: "₹8 LPA",
    location: "Bangalore"
  },
  {
    name: "Rahul Patel",
    role: "Software Engineer at Infosys",
    company: "Infosys",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Excellent course structure and amazing instructors. I went from beginner to building full-stack applications in just 3 months.",
    salary: "₹7.5 LPA",
    location: "Pune"
  },
  {
    name: "Sneha Reddy",
    role: "Frontend Developer at Wipro",
    company: "Wipro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "The practical approach and real-world projects made learning MERN stack so much easier. Highly recommended!",
    salary: "₹6.8 LPA",
    location: "Hyderabad"
  },
];

export const stats = [
  { number: "500+", label: "Students Placed", icon: "Users" },
  { number: "95%", label: "Success Rate", icon: "TrendingUp" },
  { number: "50+", label: "Hiring Partners", icon: "Award" },
  { number: "4.9/5", label: "Course Rating", icon: "Star" },
];

export const courseHighlights = [
  {
    title: "Live Projects",
    description: "Build 6+ real-world applications",
    icon: "Code"
  },
  {
    title: "Industry Mentorship", 
    description: "Learn from experienced developers",
    icon: "Users"
  },
  {
    title: "Job Assistance",
    description: "100% placement support",
    icon: "Award"
  },
  {
    title: "Flexible Learning",
    description: "Weekend & evening batches",
    icon: "Clock"
  }
];