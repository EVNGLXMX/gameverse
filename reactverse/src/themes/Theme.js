import { createTheme } from "@mui/material";
const theme = createTheme({  
    palette: {
        mode: "dark",
        primary:{
            main: '#4fc3f7',
        },
        background:{
            default: "#01050a",
            paper: "#01050a"
        }
    },
    typography:{
        gameverse:{
            color:'#4fc3f7',
            fontSize:"1.5rem"
        },
    },
});

export default theme;