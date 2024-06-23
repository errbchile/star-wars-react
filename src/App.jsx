import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { useThemeStore } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useThemeEffect } from "./effects/useThemeEffect";

function App() {
  const client = new QueryClient();

  const { isDarkMode } = useThemeStore();

  useThemeEffect(isDarkMode);

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
