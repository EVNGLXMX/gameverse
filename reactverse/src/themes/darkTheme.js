import {createTheme} from "@mui/material";
import {lightBlue} from '@mui/material/colors';

export const darkTheme = createTheme({ 
    palette: {
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
        },
        cardColor:{
            bg:'#01050a'
        }
    },
    typography:{
        gameverse:{
            color: lightBlue[300],
            fontSize:"2rem"
        },
    },
});

export default darkTheme;