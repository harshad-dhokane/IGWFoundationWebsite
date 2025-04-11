import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Classes from "./Classes";
import Notifications from "./Notifications";
import Admissions from "./Admissions";
import Contact from "./Contact";
import { useAnimation } from "@/context/AnimationContext";

const Vishwasatya = () => {
  const { setFirstMount } = useAnimation();

  // Reset animation context when component mounts
  useEffect(() => {
    setFirstMount(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [setFirstMount]);

  return (
    <div className="bg-white">
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

export default Vishwasatya;
