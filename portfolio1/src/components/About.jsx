import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion.js"; 

const About = () => {
  return (
    <section id="about" className="bg-[#f9f6f1] py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative rounded-full p-1 bg-gradient-to-tr from-[#d4b98c] via-[#654b35] to-[#e6dfd4]">
            <img
              src="./about-image.webp" 
              alt="Yeo Likheng"
              className="w-72 md:w-[40rem] h-auto object-cover rounded-full border-4 border-[#f9f6f1] shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.4, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#26221f] mb-6">
            About <span className="text-[#654b35]">Me</span>
          </h2>

          <p className="text-lg text-[#26221f] opacity-80 leading-relaxed mb-6">
            I’m <span className="font-semibold text-[#654b35]">Yeo Likheng</span>, 
            a passionate <span className="text-[#958465] font-medium">Web Developer </span> 
            who loves building modern, responsive, and user-friendly websites.  
            My focus is on crafting clean designs and smooth user experiences 
            that make an impact.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="flex items-center gap-2 text-[#26221f]">
              <span className="w-3 h-3 bg-[#d4b98c] rounded-full"></span>
              Responsive Web Design
            </li>
            <li className="flex items-center gap-2 text-[#26221f]">
              <span className="w-3 h-3 bg-[#654b35] rounded-full"></span>
              Frontend Development
            </li>
            <li className="flex items-center gap-2 text-[#26221f]">
              <span className="w-3 h-3 bg-[#e6dfd4] rounded-full"></span>
              Backend Development
            </li>
            <li className="flex items-center gap-2 text-[#26221f]">
              <span className="w-3 h-3 bg-[#d4b98c] rounded-full"></span>
              Modern JavaScript Frameworks
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
