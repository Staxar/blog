import { useEffect, useState } from "react";

export function useThemeSwitch(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  const toggleTheme = (theme: string): void => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = (): string => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref) {
        return userPref;
      }
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
    }
    return "light"; // Default to 'light' for server-side rendering
  };

  // Initialize the state based on user preference or default to system preference
  const [mode, setMode] = useState<string>(getUserPreference());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const handleChange = (): void => {
        const newMode = getUserPreference();
        setMode(newMode);
        toggleTheme(newMode);
      };

      handleChange();

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
