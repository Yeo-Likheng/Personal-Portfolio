import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Skill Snap Resume",
    description:
      "A resume analysis platform that detects missing skills from job descriptions, recommends Coursera courses via Puppeteer scraping, and generates AI-assisted cover letters.",
    image: "./skill-snap.png",
    technologies: ["React", "TailwindCSS", "Node Js", "MongoDB", "Express Js", "Puppeteer", "OpenAI"],
    github: "https://github.com/Yeo-Likheng/Skill-Snap-App.git",
    live: "https://skill-snap-app.onrender.com",
  },
  {
    title: "Taste Burst Fast Food",
    description:
      "Created a fast-food ordering platform with Stripe payments, category-based browsing, and an admin dashboard for real-time order management.",
    image: "./taste-burst.png",
    technologies: ["Node Js", "MongoDB", "Express Js", "React", "TailwindCSS", "Stripe"],
    github: "https://github.com/Yeo-Likheng/taste-burst-app.git",
    live: "https://taste-burst-app.onrender.com",
  },
  {
    title: "Finis Financial Analyzer",
    description:
      "A full-stack AI-powered tool that ingests financial reports (Excel/CSV), analyzes strengths and weaknesses, and delivers tailored recommendations with interactive chat sessions.",
    image: "./finis.png",
    technologies: ["React", "TailwindCSS", "Node Js", "Express Js", "MongoDB", "Typescript", "OpenAI"],
    github: "https://github.com/Yeo-Likheng/Finis-Financial-Analyzer.git",
    live: "https://finis-financial-analyzer.onrender.com",
  },
  {
    title: "Owl Chat App",
    description:
      "Built a real-time chat application with WebSocket integration, media sharing, and customizable themes powered by DaisyUI.",
    image: "./chat-app.png",
    technologies: ["React", "TailwindCSS", "Node Js", "Express Js", "MongoDB", "Web Socket"],
    github: "https://github.com/Yeo-Likheng/chat-app-mern.git",
    live: "https://chat-app-mern-pwyd.onrender.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f9f6f1] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#26221f] text-center mb-12">
          My <span className="text-[#654b35]">Projects</span>
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? 100 : -100 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-[#26221f]">
                    {project.title}
                  </h3>
                  <p className="text-[#26221f] mt-4 opacity-90">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#e6dfd4] text-[#26221f] text-sm px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#26221f] hover:text-[#654b35] text-4xl"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4b98c] text-[#26221f] px-4 py-2 rounded-lg shadow-md hover:bg-[#654b35] hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
