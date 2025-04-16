import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SectionCard = ({ title, items, delay }) => (
  <motion.div
    className="flex-1 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-white"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">{title}</h3>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-200 leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const BioData = () => {
  const education = [
      "SSC – NEW VISION School, Khammam ,Telangana – 97% (9.7 GPA)",
      "HSC – Narayana Junior College, Hyderabad ,Telangana – 905/1000",
      "B.Tech in CSE, National Institute of Technology, Silchar (pursuing).",
  ];

  const skills = [
    "Languages: C, C++, Python, C#",
    "Web Dev: HTML, CSS, JavaScript, Bootstrap, ReactJS, Node.js",
    "Database Knowledge: SQL",
    "Strong in DSA, DBMS, OS, SDLC",
    "Proactive learner & creative thinker",
    "Team player, adaptable & open-minded"
  ];

  const extracurricular = [
    "Runner-up in Bosch Inter Throw-Ball Tournament",
    "Played Quater-Final in ALL India Inter NIT Hand-Ball Tournament",
    "Playing Kabaddi and Handball",
    "Sketching Anime Characters",
    "Gold Medalist in District-Level Sketching and Colouring - 2016",
    "Playing Guitar"
  ];

  return (
    <section className="relative py-24 px-6 z-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Bio Data
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <SectionCard title="Education" items={education} delay={0.1} />
        <SectionCard title="What Else I Possess" items={skills} delay={0.3} />
        <SectionCard title="Extra Curricular" items={extracurricular} delay={0.5} />
      </div>
    </section>
  );
};

export default BioData;
