import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[hsl(42,28%,96%)] text-[hsl(32,15%,15%)] py-8 px-6 border-t border-[hsl(40,20%,85%)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} Yeo Likheng. All rights reserved.
        </p>

        <div className="flex gap-6">
          <motion.a
            href="https://github.com/Yeo-Likheng" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[hsl(28,35%,35%)] transition-colors"
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/likheng-yeo-aa3063355/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[hsl(28,35%,35%)] transition-colors"
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="mailto:lykheng727@gmail.com" 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[hsl(28,35%,35%)] transition-colors"
          >
            <FaEnvelope size={28} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
