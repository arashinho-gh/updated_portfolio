import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./main.scss";
import GroupProjects from "./components/GroupProjects";

function App() {
  const [theme, setTheme] = useState("dark");

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
      <GroupProjects />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
