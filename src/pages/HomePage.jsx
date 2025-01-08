import React from 'react'
import { Typography, Container } from '@mui/material'

function HomePage() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your New Web Project
      </Typography>
      <Typography>
        This is a modern template powered by React, Vite, and Material-UI.
      </Typography>
    </Container>
  )
}

export default HomePage;

