import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/Theme';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 5,
    marginTop:1,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
}));  

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
                width: '60ch',
            },
        },
    },
}));

const Navbar = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ color:'#eceff1', backgroundColor: '#212121', borderRadius:1 }}>
                <Toolbar>
                    <Typography
                        variant="gameverse"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        GAMEVERSE
                    </Typography>

                    <Search sx={{marginRight:2}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Quick Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button size="large" variant="text">Browse Games</Button>
                    <Button size="large" variant="text">Log In</Button>
                    <Button size="large" variant="text">Sign Up</Button>
                </Toolbar> 
            </AppBar>
        </Box>
        </ThemeProvider>
        
     );
}
 
export default Navbar;