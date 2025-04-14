import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import DevOpsTimeline from "@/pages/DevOpsTimeline";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Switch>
        {/* Add pages below */}
        <Route path="/" component={DevOpsTimeline} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="timeline-tracker-theme">
      <div className="min-h-screen bg-background">
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toaster />
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
