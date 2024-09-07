import { Container, createTheme, ThemeProvider, CssBaseline  } from "@mui/material";
import React from "react";
import Header from "./components/Header";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
         <Header/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
