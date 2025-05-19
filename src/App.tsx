// import React from "react";
// import { ThemeProvider } from "styled-components";
// import { BrowserRouter } from "react-router-dom";
// import { Router } from "./pages/Router";

import { Home } from "./Home";

// import { defaultTheme } from "./styles/themes/default";
// import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Home />
    // <ThemeProvider theme={defaultTheme}>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    //   <GlobalStyle />
    // </ThemeProvider>
  );
}
