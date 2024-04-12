import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./main.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    console.log("===test===");
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <div className="App" data-theme={theme}>
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Header />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
