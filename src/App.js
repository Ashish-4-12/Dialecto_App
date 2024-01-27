import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      <languageContext.Provider value={{ language, setLanguage }}>
        <themeContext.Provider value={{ theme, setTheme }}>
          <Navbar />
          <Home />
        </themeContext.Provider>
      </languageContext.Provider>
    </div>
  );
}