import Home from "./components/home";
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
import GamePage from "./components/gamepage";

export const ColorModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode =()=>{
    setDarkMode(!darkMode);
  }
  const title = useParams();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <ColorModeContext.Provider value={toggleDarkMode}>
        <Navbar/>
      </ColorModeContext.Provider>
      <Paper sx={{p:1, mt:1}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/games/:title" element={<GamePage/>} />
          </Routes>
        </BrowserRouter>
        {/* <footer>created by Myo Bandar @ Frontiir 2022</footer> */}
      </Paper>
    </ThemeProvider> 
  );
}

export default App;