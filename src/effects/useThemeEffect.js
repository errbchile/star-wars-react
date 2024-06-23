import { useEffect } from "react";

export const useThemeEffect = (isDarkMode) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
};
