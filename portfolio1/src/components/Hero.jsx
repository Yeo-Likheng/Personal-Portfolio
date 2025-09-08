import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Home"
      className="bg-[#f9f6f1] min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-10"
    >
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#26221f] leading-tight">
          Hi, I&apos;m <span className="text-[#654b35]">Yeo Likheng</span>
          <br />
          <span className="text-[#d4b98c]">Web Developer</span>
        </h1>

        <motion.p
          className="mt-6 text-lg text-[#26221f] opacity-80 max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I create modern, responsive, and user-friendly websites with a touch of clean design.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.a
            href="#projects"
            className="bg-[#654b35] text-[#f9f6f1] px-6 py-3 rounded-lg font-medium hover:bg-[#d4b98c] hover:text-[#26221f] transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            View My Works
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-[#d4b98c] text-[#26221f] px-6 py-3 rounded-lg font-medium hover:bg-[#654b35] hover:text-[#f9f6f1] transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
      >
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-[#d4b98c] via-[#654b35] to-[#e6dfd4]">
          <img
            src="/hero-img.png" 
            alt="Yeo Likheng"
            className="w-64 md:w-96 h-auto object-contain rounded-full border-4 border-[#f9f6f1] shadow-xl"
          />
          <span className="absolute inset-0 rounded-full ring-4 ring-[#d4b98c] blur-lg opacity-60"></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
