interface SocialMediaLinks {
  github: string;
  linkedin: string;
  gmail: string;
  phone: string;
}

interface Greeting {
  title: string;
  subTitle: string;
  resumeLink: string;
}

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

interface Education {
  school: string;
  degree: string;
  minor?: string;
  date: string;
  location: string;
  gpa: string;
  coursework: string[];
}

interface EducationSection {
  schools: Education[];
}

interface Project {
  title: string;
  organization: string;
  date: string;
  description: string[];
}

const greeting: Greeting = {
  title: "Hi, I'm Rickpoul Ghosh",
  subTitle: "Software Developer specialized in JAVA, Machine Learning and Web Development",
  resumeLink: ""
};

const socialMediaLinks: SocialMediaLinks = {
  github: " https://github.com/rickyghosh24",
  linkedin: "https://www.linkedin.com/in/rickpoul",
  gmail: "rickpoul24@gmail.com",
  phone: "9204491682"
};

const experienceSection: {
  title: string;
  experiences: Array<{
    role: string;
    company: string;
    date: string;
    description: string[];
  }>;
} = {
  title: "Experience",
  experiences: [
    {
      role: " Supply Chain Intern",
      company: "Ramakrishna Forgings Limited",
      date: "May 2024 - July 2024",
      description: [
        "Digitized Workflows: Java algorithms automate supply chain processes, reducing manual tasks and optimizing inventory management.",
        "Blockchain Security: Immutable ledger technology ensures data integrity and enables transparent tracking across all supply chain stages.",
        "Real-Time Visibility: IoT sensors and digital platforms provide instant insights into product location, condition, and delivery status.",
        "Smart Contract Automation: Self-executing blockchain contracts streamline transactions, enforce compliance, and eliminate paperwork delays.",
      ]
    },
    {
      role: "Research Assistant",
      company: "BITS Pilani Hyderabad Campus",
      date: "January 2024 - Present",
      description: [
        "Cell Balancing: Equalizes charge levels between cells to prevent premature failure and extend battery lifespan.",
        "Active Cooling: Uses liquid or air circulation systems to dissipate heat and maintain optimal operating temperatures.",
        "Thermal Materials: Incorporates phase change materials and heat-conductive components to improve temperature distribution.",
        "Temperature Regulation: Monitors and controls battery temperature to prevent overheating and ensure consistent performance."
      ]
    }
  ]
};

const educationSection: EducationSection = {
  schools: [
   
    {
      school: "Birla Institute of Technology and Science, Pilani",
      degree: "Bachelor of Engineering in Electronis and Communication Engineering",
      minor: "Minor in Computing and Intelligence",
      date: "2022 - 2026",
      location: "Hyderabad, India",
      gpa: "",
      coursework: [
        "Machine Learning",
        "Artificial Intelligence",
        "Data Structures and Algorithms",
        "DataBase Management Systems",
        "Operating Systems",
      ]
    },
    {
      school: "Little Flower School",
      degree: "Class 12th",
      date: "2020 - 2022",
      location: " Jamshedpur, Jharkhand",
      gpa: "96%",
      coursework: [
        "Java",
        "Python",
      ]
    }
  ]
};

const skillsSection = {
  categories: {
    Programming: [
      "Java",
      "C++",
      "HTML",
      "CSS",
      "SQL",
      "Git"
    ],
    Domain_Skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures and Algorithms",
      "DataBase Management Systems",
      "Operating Systems",
      "Object Oriented Programming",
        ],
  }
};

const projectsSection: {
  projects: Array<{
    title: string;
    organization: string;
    date: string;
    description: string[];
  }>;
} = {
  projects: [
    {
      title: " Social Media Database Design & Implementation",
      organization: "BITS Pilani Hyderabad,DBMS Project",
      date: "Novemeber 2024",
      description: [
        "Modeled social media database: Designed the database schema for user content & interactions.",
        "Ensured data integrity: Implemented weak entities & role-based access.",
        "Optimized query performance: Enhanced data retrieval ef ciency."
      ]
    },
    {
      title: "MedChat LLM",
      organization: "BITS Pilani Hyderabad, Machine Learning Project",
      date: "October, 2024",
      description: [
        "Multimodal Chatbot: It has multimodal capabilities designed for medical consultations.",
        "Technology Integration: It integrates the Llama 2 model and the ChatGPT Vision API with RAG Framework."
      ]
    },
    {
      title: " BITSBids",
      organization: "BITS Pilani Hyderabad",
      date: "September, 2024",
      description: [
        "Full-Stack Development: Led BITSBids platform development, showcasing versatility.",
        "Backend Architecture: Engineered scalable Spring Boot and MySQL backend.",
        "Frontend Implementation: Contributed to ReactJS frontend integration.",
        "OOP Principles: Applied OOP for enhanced functionality."
      ]
    }
  ]
};

export {
    educationSection, experienceSection, greeting, projectsSection, skillsSection, socialMediaLinks
};
export type { Education, EducationSection };

