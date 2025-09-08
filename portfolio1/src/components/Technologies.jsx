import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { fadeIn } from '../utils/motion.js';

const Technologies = () => {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className="text-[#e34c26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#68a063]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776ab]" /> },
  ];

  return (
    <section id="tech" className="bg-[#f9f6f1] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#26221f] mb-12">
          Technology <span className="text-[#654b35]">Stack</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 place-items-center">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.8)} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                boxShadow: "0px 0px 20px 5px rgba(212,185,140,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-6xl cursor-pointer"
            >
              {tech.icon}
              <p className="text-sm mt-2 text-[#26221f] opacity-80">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
