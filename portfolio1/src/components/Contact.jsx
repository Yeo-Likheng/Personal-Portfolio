import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef(null);
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          serviceId,   
          templateId,  
          form.current,
          publicKey    
        )
        .then(
          () => {
            alert("Message sent successfully.");
            form.current?.reset();
          },
          (error) => {
            console.error(error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[hsl(42,28%,96%)] flex flex-col items-center justify-center py-16 px-6"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[hsl(32,15%,15%)] mb-20 text-center">
        Let's Work Together
      </h2>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold text-[hsl(32,15%,15%)] mb-13 mt-1">
            Send Me a Message
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(28,35%,35%)]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(28,35%,35%)]"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(28,35%,35%)]"
            ></textarea>
            <button
              type="submit"
              className="bg-[hsl(28,35%,35%)] text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-[hsl(35,40%,70%)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h3 className="text-2xl font-semibold text-[hsl(32,15%,15%)] mb-6">
            Connect With Me
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <FaGithub size={40} className="text-[hsl(32,15%,15%)]" />
            <div>
              <h4 className="font-semibold text-[hsl(32,15%,15%)] text-lg">GitHub</h4>
              <p className="text-gray-600 mb-2">Check out my projects and contributions</p>
              <a
                href="https://github.com/Yeo-Likheng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(28,35%,35%)] hover:underline font-medium"
              >
                https://github.com/Yeo-Likheng
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <FaLinkedin size={40} className="text-[hsl(32,15%,15%)]" />
            <div>
              <h4 className="font-semibold text-[hsl(32,15%,15%)] text-lg">LinkedIn</h4>
              <p className="text-gray-600 mb-2">Let's connect professionally</p>
              <a
                href="https://www.linkedin.com/in/likheng-yeo-aa3063355/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(28,35%,35%)] hover:underline font-medium"
              >
                https://www.linkedin.com/in/likheng-yeo-aa3063355/
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <FaEnvelope size={40} className="text-[hsl(32,15%,15%)]" />
            <div>
              <h4 className="font-semibold text-[hsl(32,15%,15%)] text-lg">Email</h4>
              <p className="text-gray-600 mb-2">Reach out directly for collaborations</p>
              <a
                href="mailto:lykheng727@gmail.com"
                className="text-[hsl(28,35%,35%)] hover:underline font-medium"
              >
                lykheng727@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;