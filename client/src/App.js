import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export default function App() {
  const buttonStyle = {
    transition: "transform 0.2s",
    backgroundColor: "transparent",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "transparent",
    },
    "&:active": {
      transform: "scale(1)",
      backgroundColor: "transparent",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", opacity: 0.9, height: 80 }}
      >
        <Toolbar sx={{ minHeight: 80, height: "100%", alignItems: "center" }}>
          <Typography
            variant="button"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: "white",
              fontSize: "1.8rem",
              textTransform: "uppercase",
              textDecoration: "none",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Kaia Fay
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={buttonStyle}
            disableRipple
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resume"
            sx={buttonStyle}
            disableRipple
          >
            Resume
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={buttonStyle}
            disableRipple
          >
            About Me
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={buttonStyle}
            disableRipple
          >
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
