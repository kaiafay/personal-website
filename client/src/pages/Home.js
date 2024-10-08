import React from "react";
import { Typography, Box } from "@mui/material";
import myPhoto from "../assets/avatar.jpg";
import { Typewriter } from "react-simple-typewriter";

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
      <Box sx={{ position: "relative", flexShrink: 0 }}>
        <Box
          sx={{
            width: 200,
            height: 250,
            backgroundColor: "black",
            borderRadius: 2,
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(-6deg)",
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={myPhoto}
          alt="photo of Kaia"
          sx={{
            width: 200,
            height: 250,
            objectFit: "cover",
            borderRadius: 2,
            position: "relative",
            zIndex: 2,
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          <Typewriter
            words={["Welcome to My Personal Website"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Typography>
        <Typography variant="body1">
          This is the home page. Here you can find information about me, my
          work, and how to contact me.
        </Typography>
      </Box>
    </Box>
  );
}
