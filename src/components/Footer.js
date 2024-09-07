import React from "react";
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ textAlign: "center", p: 2, mt: 5, borderTop: "1px solid #ddd" }}>
      <Typography variant="body2" color="text.secondary">
        © 2024 Simple Blog. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;