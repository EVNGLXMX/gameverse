import {createTheme} from "@mui/material";

export const lightTheme = createTheme({ 
    palette: {
        primary:{
            main: '#0a1128',
            bg: '#6096BA'
        },
        secondary:{
            main: '#0F4C75'
        },
        bg:{
            main:'#6096BA'
        },
        cardColor:{
            bg:'#8B8C89'
        }
    },
    typography:{
        gameverse:{
            color: '#0a1128',
            fontSize:"2rem"
        },
    },
});

export default lightTheme;