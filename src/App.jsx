// src/App.jsx
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Contacto from "./pages/contacto";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          {isLoading ? (
            <LoadingScreen onLoaded={handleLoadingComplete} />
          ) : (
            <Routes>
              <Route path="/" element={<MainContent darkMode={darkMode} />} />
              <Route path="/contacto" element={<Contacto />} />{" "}
              {/* Añade la ruta para Contacto */}
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default App;
