import { motion } from "framer-motion";
import { experience } from "../../data/content";
import { getPeriodLabel, getDurationLabel } from "../../utils/duration";

export default function Timeline() {
  const totalDuration = getDurationLabel(experience.startDate);

  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="border border-border rounded-2xl p-8 bg-surface"
        >
          <div className="flex items-center gap-4 mb-8">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 h-12 rounded-lg object-contain flex-shrink-0"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div>
              <h3 className="font-display font-bold text-xl">
                {experience.company}
              </h3>
              <p className="text-text-muted font-body text-sm">
                {totalDuration}
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l border-border space-y-10">
            {experience.positions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent"></div>

                <p className="text-text-muted font-body text-xs mb-1">
                  {getPeriodLabel(pos.start, pos.end)}
                </p>
                <h4 className="font-display font-semibold text-lg mb-3">
                  {pos.role}
                </h4>

                <ul className="space-y-2">
                  {pos.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-text-muted font-body text-sm leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-text-muted"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
