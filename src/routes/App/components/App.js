import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themes } from "../styles/globalStyle";
import Home from "./Home";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? changeTheme("dark") : changeTheme("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("dark");
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Home theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
