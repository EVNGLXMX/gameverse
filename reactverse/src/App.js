import Gamecard from "./components/gamecard";
import Navbar from "./components/navbar";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themes/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import Register from "./components/register";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Paper sx={{padding:1, marginTop:1}}>
      {/* <Gamecard/> */}
      <Register/>
      </Paper>
    </ThemeProvider> 
  );
}

export default App;