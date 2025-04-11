import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of our context
type AnimationContextType = {
  isFirstMount: boolean;
  setFirstMount: (value: boolean) => void;
};

// Create context with a default value that matches our type
const AnimationContext = createContext<AnimationContextType>({
  isFirstMount: true,
  setFirstMount: () => {},
});

// Provider component
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    // Set isFirstMount to false after first render
    if (isFirstMount) {
      const timer = setTimeout(() => {
        setIsFirstMount(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstMount]);

  const setFirstMount = (value: boolean) => {
    setIsFirstMount(value);
  };

  const value = {
    isFirstMount,
    setFirstMount
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

// Custom hook to use the context
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  
  return context;
};
