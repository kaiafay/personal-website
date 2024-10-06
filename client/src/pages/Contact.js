import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

export default function Contact() {
  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.9)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.9)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.9)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(0, 0, 0, 0.6)",
      "&.Mui-focused": {
        color: "rgba(0, 0, 0, 0.9)",
      },
    },
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you'd like to get in touch, please fill out the form below.
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          sx={textFieldSx}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
          sx={textFieldSx}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={textFieldSx}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: 2,
            backgroundColor: "black",
            color: "white",
            opacity: 0.9,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
