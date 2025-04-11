import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Schools from "./Schools";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { useAnimation } from "@/context/AnimationContext";

const Home = () => {
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
      <Schools />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
