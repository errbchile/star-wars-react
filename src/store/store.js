import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleIsDarkMode: () =>
        set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme-storage",
    }
  )
);
