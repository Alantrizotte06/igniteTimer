import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="sucess" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
