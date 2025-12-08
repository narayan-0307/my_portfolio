export const projects = [
  {
    id: 1,
    title: "TACCI Website",
    description:
      "Built a responsive and modern website for the Trans Asian Chamber of Commerce & Industry using Flask and MySQL. Designed a clean UI with Tailwind CSS and optimized performance, security, and accessibility.",
    image: "/projects/tacci.jpg",
    category: "Web Application",
    technologies: ["Flask", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://transasianchamber.org/home",
    githubUrl: null,
    featured: true,
  },

  {
    id: 2,
    title: "Madhuban Eco-Retreat",
    description:
      "Developed an informative website with a WhatsApp automation system. User form submissions send instant confirmations, and details are automatically forwarded to the admin. Built with ReactJS and Django.",
    image: "/projects/madhuban.jpg",
    category: "Web Application",
    technologies: ["React", "Django", "API Integration", "Automation"],
    liveUrl: "https://www.madhubanecoretreat.com/",
    githubUrl: null,
    featured: true,
  },

  {
    id: 3,
    title: "Social Activities Website",
    description:
      "Built a dynamic website where admins can add and manage Events and Projects. Created a secure Admin Dashboard, optimized backend routing with Flask, and deployed on Hostinger.",
    image: "/projects/social.jpg",
    category: "Web Application",
    technologies: ["Flask", "MySQL", "Tailwind CSS", "Backend Development"],
    liveUrl: "https://saingo.org/public/",
    githubUrl: null,
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "Web Application",
  // "Dashboard",
  // "Mobile App",
  // "UI/UX Design",
];
