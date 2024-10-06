import React from "react";
import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hi! I'm Kaia, a software engineer specializing in full-stack
        development. I love building creative solutions and learning new
        technologies.
      </Typography>
      {/* Add more details about yourself here */}
    </Box>
  );
}
