import React from 'react';
import {
  ThemeProvider,
} from '@mui/material';

import {getDesignTokens, getThemedComponents} from "../theme";
import Dashboard from "./ContractTable";
import {createTheme} from "@mui/material";
import {deepmerge} from "@mui/utils";

function App() {
  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens("light");
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    console.log(newTheme)
    return newTheme;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
