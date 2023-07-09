import "../../Utils/Styles/Accueil.css";
import Introduction from "../../Component/Introduction";
import Skills from "../../Component/Skills";
import Education from "../../Component/Education";
import Projet from "../../Component/Projet";
import { createGlobalStyle } from "styled-components";
import Experience from "../../Component/Experience";
import React from "react";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Space Mono", monospace;
  }
`;



function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Introduction />
      <Skills />
      <Education />
      <Projet />
      <Experience />
    </React.StrictMode>
  );
}

export default App;


