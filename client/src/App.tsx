import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

// Foundation home page components
import Home from "@/pages/home";

// School microsites
import GlobalKids from "@/pages/global-kids";
import GlobalSchool from "@/pages/global-school";
import Vishwasatya from "@/pages/vishwasatya";

function App() {
  const [location] = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/global-kids" component={GlobalKids} />
              <Route path="/global-school" component={GlobalSchool} />
              <Route path="/vishwasatya" component={Vishwasatya} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
