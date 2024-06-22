import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDarkMode: false,
  toggleIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
