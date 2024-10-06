import React from "react";
import { Typography, Box } from "@mui/material";

export default function Resume() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Resume
      </Typography>
      <Typography variant="body1">
        Here you can find my professional experience, education, and skills.
      </Typography>
      {/* Add sections for experience, skills, and education here */}
    </Box>
  );
}
