import Home from "./components/home";
import Navbar from "./components/navbar";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themes/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Paper sx={{padding:1, marginTop:1}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </ThemeProvider> 
  );
}

export default App;