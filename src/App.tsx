import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./main.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Header />
      <Skills />
      <Experience />
<Projects />
      <Contacts />
    </div>
  );
}

export default App;
