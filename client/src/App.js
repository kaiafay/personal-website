import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export default function App() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", opacity: 0.9, height: 80 }}
      >
        <Toolbar sx={{ minHeight: 80, height: "100%", alignItems: "center" }}>
          <Typography
            variant="button"
            sx={{
              flexGrow: 1,
              color: "white",
              fontSize: "1.8rem",
              textTransform: "uppercase",
            }}
          >
            Kaia Fay
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/resume">
            Resume
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}
