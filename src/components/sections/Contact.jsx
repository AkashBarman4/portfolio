import { motion } from "framer-motion";
import { profile } from "../../data/content";

export default function Contact() {
  const mailtoLink = "mailto:" + profile.email;

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-text-muted font-body text-sm tracking-widest uppercase mb-4"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-10"
        >
          Let's build something
          <br />
          that actually holds up.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={mailtoLink}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg font-display font-semibold rounded-full hover:bg-accent-dim transition-colors"
          >
            <img src="/mail-icon.png" alt="" className="w-5 h-5" />
            {profile.email}
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0A66C2] text-white font-display font-semibold rounded-full hover:bg-[#0958a8] transition-colors"
          >
            <img src="/linkedin-icon.png" alt="" className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
