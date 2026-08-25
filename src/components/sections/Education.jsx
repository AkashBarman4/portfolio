import { motion } from "framer-motion";
import { education } from "../../data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-border rounded-2xl p-8 bg-surface flex items-stretch gap-5"
        >
          <img
            src="/nit-agartala-logo.png"
            alt="NIT Agartala"
            className="w-28 h-full object-cover rounded-2xl flex-shrink-0"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div>
            <p className="text-text-muted font-body text-sm mb-2">
              {education.period}
            </p>
            <h3 className="font-display font-semibold text-xl md:text-2xl mb-2">
              {education.school}
            </h3>
            <p className="text-accent font-body mb-1">{education.degree}</p>
            <p className="text-text-muted font-body text-sm">
              {education.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
