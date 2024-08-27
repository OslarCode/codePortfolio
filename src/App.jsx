// src/App.jsx
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <div className={`dark:bg-gray-800 ${darkMode ? "dark" : ""}`}></div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {isLoading ? (
        <LoadingScreen onLoaded={handleLoadingComplete} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;

/*import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const handleSkipIntro = () => {
    setIsIntroVisible(false);
  };

  return (
    <div>
      {isIntroVisible && <IntroScreen onSkip={handleSkipIntro} />}
      {!isIntroVisible && <MainContent />}
    </div>
  );
}

export default App;*/
