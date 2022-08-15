import {createTheme} from "@mui/material";

export const lightTheme = createTheme({ 
    palette: {
        primary:{
            main: '#FFFFFF',
            bg: 'rgba(0,150,230,0.8)'
        },
        secondary:{
            main: '#000000'
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
            color: '#000000',
            fontSize:"2rem"
        },
    },
});

export default lightTheme;