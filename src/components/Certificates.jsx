import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const certificates = [
  {
    title: "Software Development Engineer Internship at Bosch",
    link: "https://drive.google.com/file/d/1Kj4xGspyengHty0g2tDM4YDvSpeTm_al/view?usp=drive_link"
  },
  {
    title: "AI Tools Workshop – Advanced Productivity with GenAI Tools",
    link: "https://drive.google.com/file/d/1IhQ7TMmr-iu6oXUgPi9AF8l0ekYOk344/view?usp=sharing"
  }
];

const Certificates = () => {
  return (
    <section className="relative py-20 px-6 z-10">
      <motion.h2
        className="text-center text-4xl font-extrabold text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Certificates
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        {certificates.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex-1 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-300">Click to view certificate</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
