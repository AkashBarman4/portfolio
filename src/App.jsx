import { useEffect } from "react";
import Background3D from "./components/three/Background3D";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeLabel = useActiveSection();

  useEffect(() => {
    document.title = `Akash Barman - ${activeLabel}`;
  }, [activeLabel]);

  return (
    <div id="top" className="relative min-h-screen text-text">
      <Background3D />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Timeline />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
