import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import dark from "./styles/themes/dark";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default src;
