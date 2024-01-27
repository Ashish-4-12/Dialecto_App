import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  const { language, setLanguage } = useContext(languageContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };



  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={toggleTheme}>{theme === "light" ? "Dark Theme" : "Light Theme"}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};