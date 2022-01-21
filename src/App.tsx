import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import ThemeToggler from "./components/ThemeToggler";
import Sign from "./pages/signup";
import Second from "./pages/second";
import Upload from "./pages/upload";
import Login from "./pages/Login";
import First from "./pages/firstpage";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {/* <ThemeToggler /> */}
        <Router>
          <Routes>
            <Route key="router-first" path="/first" element={<First />} />
            <Route key="router-login" path="/login" element={<Login />} />
            <Route key="router-signup" path="/signup" element={<Sign />} />
            <Route path="/second" element={<Second />} />
            <Route path="/" element={<Upload />} />
          </Routes>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
