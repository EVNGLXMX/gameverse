import {createTheme} from "@mui/material";
import {lightBlue} from '@mui/material/colors';
import { createContext} from "react";

// #F7FBFC | #D6E6F2 | #B9D7EA | #769FCD
// #1B262C | #0F4C75 | #3282B8 | #BBE1FA
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const toggleColorMode =()=>{
    
}

export const theme = createTheme({ 
     
    palette: {
        //mode? "light" : "dark"
        mode: "dark",
        primary:{
            main: lightBlue[300],
            bg: '#01050a'
        },
        secondary:{
            main: '#0F4C75'
        },
        bg:{
            main:'#01050a'
        },
        background:{
            default: "#01050a",
            paper: "#01050a"
        }
    },
    typography:{
        gameverse:{
            color: lightBlue[300],
            fontSize:"2rem"
        },
    },
});

export default theme;