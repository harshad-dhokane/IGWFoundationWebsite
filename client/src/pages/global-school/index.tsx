import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Classes from "./Classes";
import Notifications from "./Notifications";
import Admissions from "./Admissions";
import Contact from "./Contact";
import { useAnimation } from "@/context/AnimationContext";

const GlobalSchool = () => {
  const { setFirstMount } = useAnimation();

  // Reset animation context when component mounts
  useEffect(() => {
    setFirstMount(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [setFirstMount]);

  return (
    <div className="bg-white mesh-gradient-indigo animated-gradient pattern-school bg-animate relative">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-300/30 rounded-full floating blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/30 rounded-full floating-reverse blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-200/30 rounded-full floating-slow blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-lg floating" style={{ transform: "rotate(45deg)" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-lg floating-reverse" style={{ transform: "rotate(-45deg)" }}></div>
      </div>
      <Hero />
      <About />
      <Gallery />
      <Classes />
      <Notifications />
      <Admissions />
      <Contact />
    </div>
  );
};

export default GlobalSchool;
