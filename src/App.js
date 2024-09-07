import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <BlogList />
      <Footer />
    </Container>
  );
}

export default App;