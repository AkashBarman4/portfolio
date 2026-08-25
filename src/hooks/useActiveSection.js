import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Recent Projects" },
  { id: "contact", label: "Contact" },
];

export function useActiveSection() {
  const [activeLabel, setActiveLabel] = useState("Home");

  useEffect(() => {
    const elements = SECTIONS.map((s) => ({
      ...s,
      el: document.getElementById(s.id),
    })).filter((s) => s.el);

    function handleScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = elements[0];

      for (const section of elements) {
        if (section.el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveLabel(current.label);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeLabel;
}
