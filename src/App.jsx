// src/App.jsx
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import PropTypes from "prop-types";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {isLoading ? (
          <LoadingScreen onLoaded={handleLoadingComplete} />
        ) : (
          <MainContent darkMode={darkMode} />
        )}

        <Contacto darkMode={darkMode} />
      </div>
    </div>
  );
}

App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default App;
