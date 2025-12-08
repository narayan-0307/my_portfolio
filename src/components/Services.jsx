import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaMobile,
} from "react-icons/fa";
import { useInView } from "../hooks/useInView";
import { services, skills } from "../data/skills";

const iconMap = {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaMobile,
};

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-10 bg-gray-50 dark:bg-dark-light"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Services & Skills</h2>
          <p className="section-subtitle">
            What I offer and the technologies I work with
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8 group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technical Expertise
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                className="card p-8"
              >
                <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {skillCategory.category}
                </h4>

                <div className="space-y-5">
                  {skillCategory.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary-500">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-gray-200 dark:bg-dark-lighter rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 1 + categoryIndex * 0.2 + index * 0.1,
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
