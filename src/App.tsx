import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

// import Layout from "./components/Layout";
import dark from "./styles/themes/dark";

import Routes from "./routes";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {/* <Layout> */}
        <Routes/>
      {/* </Layout> */}
    </ThemeProvider>
  );
};

export default src;
