import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout/layout";
import { PngProvider } from "@/context/png-context";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PngProvider>
        <Layout />
      </PngProvider>
    </ThemeProvider>
  );
}

export default App;
