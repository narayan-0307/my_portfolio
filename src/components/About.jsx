import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { personalInfo } from "../data/personalInfo";
import { skills } from "../data/skills";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="mt-10 mb-10 bg-white dark:bg-dark"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML += `<div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center"><span class="text-white text-6xl font-bold">${personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}</span></div>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-light rounded-xl shadow-xl p-6 max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text">3</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Done
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text">2</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              I'm a {personalInfo.title}
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8 text-justify">
              <p>{personalInfo.bio}</p>
              <p>
                I have worked on multiple internships where I strengthened my
                skills in Python, automation, API development, security testing,
                Linux environments, and basic cloud technologies. Currently, I
                am pursuing my MSc in Information Technology from Mumbai
                University and continuously learning advanced cybersecurity
                concepts and DevOps tools.
              </p>

              <p>
                I’m passionate about exploring new technologies, solving
                real-world problems, and contributing to impactful projects. My
                goal is to become a highly skilled full-stack developer with
                deep expertise in security and system optimization.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-500">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Email
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-500">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-500">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Location
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-500">💼</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Status
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Available for Work
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h4>
              {skills.slice().map((skillCategory) => (
                <div key={skillCategory.id}>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {skillCategory.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.slice().map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
