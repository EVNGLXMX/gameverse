import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/Theme';
import Register from './register';
import Login from './login';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Search from './search'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ color:'#eceff1', backgroundColor: '#01050a', borderRadius:1 }}>
                    <Toolbar>
                        <Typography variant="gameverse" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{fontSize:20}} a href="/">GAMEVERSE</Button>
                        </Typography>
                        <Search/>
                        <Button size="large" onClick={handleClick} ><AccountCircle/></Button>
                        <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                            >                                
                            <MenuItem><Register/></MenuItem>
                            <MenuItem><Login/></MenuItem>
                            </Menu>
                            
                </Toolbar> 
            </AppBar>
        </Box>
        </ThemeProvider>
     );
}
 
export default Navbar;