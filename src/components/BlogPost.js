import React from "react";
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
function BlogPost({ title, content, imageUrl }) {
  console.log("Image URL:", imageUrl);
  return (
    <Box mb={4}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default BlogPost;