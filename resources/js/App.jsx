import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomeSection from './components/HomeSection';
// import PrimaryLayout from './components/PrimaryLayout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <HomeSection />
  </ThemeProvider>
}