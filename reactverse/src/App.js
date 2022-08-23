import Home from "./pages/home";
import Navbar from "./components/navbar";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter, Routes, Route, useParams,
} from "react-router-dom";
import { createContext, useState } from "react";
import VideoPlayer from "react-background-video-player";
import { useEffect } from "react";
import GamePage from "./pages/game";
import AdminPage from "./pages/admin";

export const ColorModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleDarkMode =()=>{
    setDarkMode(!darkMode);
  }
  const title = useParams();
  useEffect(() => {
    if(localStorage.getItem('isAuthenticated')){
      setIsAuthenticated(true)}
    else{
      setIsAuthenticated(false)}
  }, []);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <ColorModeContext.Provider value={toggleDarkMode}>
        <Navbar/>
      </ColorModeContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/games/:title" element={<GamePage/>} />
            <Route path="/admin" element = {<AdminPage/>} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider> 
  );
}

export default App;