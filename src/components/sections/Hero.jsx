import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/content";

function RotatingRoles({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-8 overflow-hidden relative">
      <motion.div
        key={index}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -24, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-accent font-display font-medium text-lg md:text-xl absolute"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const mailtoLink = "mailto:" + profile.email;

  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 md:pt-0 relative">
      <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-20 items-center w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-4/5 rounded-2xl overflow-hidden border border-border bg-surface relative">
            <img
              src="/photo.png"
              alt="Akash Barman"
              className="w-full h-full object-cover grayscale contrast-110"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent"></div>
          </div>

          <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 rounded-2xl -z-10"></div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted font-body text-sm tracking-widest uppercase mb-3"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <RotatingRoles roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-text-muted font-body text-base md:text-lg leading-relaxed mt-6 max-w-xl"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-display font-semibold rounded-full hover:bg-[#0958a8] transition-colors"
            >
              <img
                src="/linkedin-icon.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
              LinkedIn
            </a>

            <a
              href={mailtoLink}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-bg font-display font-semibold rounded-full hover:bg-accent-dim transition-colors"
            >
              <img src="/mail-icon.png" alt="" className="w-[18px] h-[18px]" />
              Email Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="text-accent/70"
        >
          <circle
            cx="14"
            cy="14"
            r="13"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M9 12l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
