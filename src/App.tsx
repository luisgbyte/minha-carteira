import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { useTheme } from "./hooks/theme";

import Routes from "./routes";
import dark from "./styles/themes/dark";

const src: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default src;
