import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimationProvider } from "./context/AnimationContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </QueryClientProvider>
);
