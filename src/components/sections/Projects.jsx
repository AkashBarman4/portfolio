import { motion } from "framer-motion";
import { projects } from "../../data/content";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border border-border rounded-2xl p-8 bg-surface hover:border-accent/50 transition-colors group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-text-muted font-body text-sm">{project.tagline}</p>
        </div>
      </div>

      <p className="text-text-muted font-body text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-body font-medium text-accent bg-accent/10 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-16"
        >
          Recent Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-muted font-body mb-12 max-w-xl"
        >
          Personal builds focused on real concurrency, real-time sync, and
          systems that hold up under load.
        </motion.p>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
