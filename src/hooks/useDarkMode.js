// src/hooks/useDarkMode.js

import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setDarkMode(currentTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
