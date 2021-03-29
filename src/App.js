import React from "react";
import { ThemeProvider } from "styled-components";
import LargeHero from "./components/LargeHero/LargeHero";
import NavHeader from "./components/NavBar/NavHeader";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <section>
          <NavHeader />
          <LargeHero />
        </section>
      </>
    </ThemeProvider>
  );
};

export default App;
