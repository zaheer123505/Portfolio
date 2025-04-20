import React from "react";
import { motion } from "framer-motion";
import { FaCuttlefish, FaCode, FaNodeJs } from "react-icons/fa";
import {
  DiPython,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGithubBadge,
  DiVisualstudio,
} from "react-icons/di";
import { SiCplusplus, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Technologies
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Programming Languages */}
        <div className="bg-[#1b1e2b] p-6 rounded-2xl shadow-md text-white border border-gray-600">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
            Programming Languages
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center gap-2">
              <FaCuttlefish /> C
            </li>
            <li className="flex items-center gap-2">
              <SiCplusplus /> C++
            </li>
            <li className="flex items-center gap-2">
              <DiPython /> Python
            </li>
            <li className="flex items-center gap-2">
              <FaCode /> C#
            </li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="bg-[#1b1e2b] p-6 rounded-2xl shadow-md text-white border border-gray-600">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
            Web Development
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center gap-2">
              <DiHtml5 /> HTML
            </li>
            <li className="flex items-center gap-2">
              <DiCss3 /> CSS
            </li>
            <li className="flex items-center gap-2">
              <BiLogoJavascript /> JavaScript
            </li>
            <li className="flex items-center gap-2">
              <DiBootstrap /> Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <RiReactjsLine /> ReactJS
            </li>
            <li className="flex items-center gap-2">
              <FaNodeJs /> Node.js
            </li>
            <li className="flex items-center gap-2">
              <SiExpress /> Express.js
            </li>
          </ul>
        </div>

        {/* Databases & Tools */}
        <div className="bg-[#1b1e2b] p-6 rounded-2xl shadow-md text-white border border-gray-600">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
            Databases & Tools
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center gap-2">
              <SiMongodb /> MongoDB
            </li>

            <li className="flex items-center gap-2">
              <FaDatabase  />
              SQL
            </li>
            <li className="flex items-center gap-2">
              <DiGithubBadge /> GitHub
            </li>
            <li className="flex items-center gap-2">
              <DiVisualstudio /> VSCode
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
