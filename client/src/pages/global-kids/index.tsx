import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Classes from "./Classes";
import Notifications from "./Notifications";
import Admissions from "./Admissions";
import Contact from "./Contact";
import { useAnimation } from "@/context/AnimationContext";

const GlobalKids = () => {
  const { setFirstMount } = useAnimation();

  // Reset animation context when component mounts
  useEffect(() => {
    setFirstMount(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [setFirstMount]);

  return (
    <div className="bg-white mesh-gradient-pink animated-gradient pattern-kids bg-animate relative">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-300/30 rounded-full floating blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-300/30 rounded-full floating-reverse blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200/30 rounded-full floating-slow blur-xl"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-200 rounded-full sparkle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-200 rounded-full sparkle animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-200 rounded-full sparkle animation-delay-4000"></div>
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

export default GlobalKids;
