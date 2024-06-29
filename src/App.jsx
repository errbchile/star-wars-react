import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useThemeStore } from "./store/themeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useThemeEffect } from "./effects/useThemeEffect";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

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
