// src/App.jsx
import { Routes, Route } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} outlined />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="*"
            element={
              <div className="p-8 text-center">Página no encontrada</div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
