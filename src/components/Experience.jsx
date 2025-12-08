import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiX,
} from "react-icons/fi";
import { useInView } from "../hooks/useInView";
import { experiences, education, certifications } from "../data/experience";

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      className="py-10 bg-gray-50 dark:bg-dark-light"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <FiBriefcase className="text-primary-500" />
                Work Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="card relative pl-8 border-l-4 border-primary-500"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-500 rounded-full border-4 border-gray-50 dark:border-dark-light"></div>

                    <div className="mb-4 mt-4">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <span className="px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-semibold rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-lg font-semibold text-primary-500 mb-2">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-primary-500 mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <FiAward className="text-primary-500" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="card py-2 px-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-500 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {edu.description}
                    </p>
                    {edu.achievements && (
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-primary-500">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <FiAward className="text-primary-500" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="card card py-2 px-3 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-primary-500 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Issued: {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-sm text-primary-500 font-semibold mt-2 hover:underline cursor-pointer"
                    >
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full bg-white dark:bg-dark-light rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-900/50 hover:bg-gray-900/70 text-white rounded-full transition-all duration-300"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedCert.name}</h3>
              <p className="text-white/90">Issued by {selectedCert.issuer}</p>
              <p className="text-sm text-white/80 mt-1">
                Date: {selectedCert.date}
              </p>
            </div>

            {/* Certificate Image */}
            <div className="p-6 bg-gray-50 dark:bg-dark">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML +=
                    '<div class="w-full h-64 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center rounded-lg"><p class="text-white text-xl font-semibold">Certificate Image Not Available</p></div>';
                }}
              />
            </div>

            {/* Download Button */}
            <div className="p-6 bg-white dark:bg-dark-light border-t border-gray-200 dark:border-gray-700">
              <a
                href={selectedCert.image}
                download={`${selectedCert.name}.jpg`}
                className="btn-primary w-full text-center"
              >
                Download Certificate
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Experience;
