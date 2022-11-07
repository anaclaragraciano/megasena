import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/theme';
import {AuthProvider} from './pages/Principal';


  export default function App() {
    return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
  }