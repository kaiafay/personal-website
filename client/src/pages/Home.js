import React from "react";
import { Typography, Box } from "@mui/material";
import myPhoto from "../assets/avatar.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Box
          component="img"
          src={myPhoto}
          alt="photo of Kaia"
          sx={{
            width: 200,
            height: 250,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          Welcome to my personal website
        </Typography>
        <Typography variant="body1">
          This is the home page. Here you can find information about me, my
          work, and how to contact me.
        </Typography>
      </Box>
    </Box>
  );
}
