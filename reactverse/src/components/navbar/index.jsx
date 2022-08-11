import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/Theme';

import Search from './search';
import Register from './register';
import Login from './login';

const Navbar = () => {
    const userstatus = useSelector((state)=>state.users.userisloggedin)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const username = useSelector((state)=>state.users.username);
    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ color:'#eceff1', backgroundColor: '#01050a', borderRadius:1 }}>
                    <Toolbar>
                        <Typography variant="gameverse" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{fontSize:20}} a href="/">GAMEVERSE</Button>
                        </Typography>
                        <Search/>
                        <Button size="large">Browse Games</Button>
                        <Button size="large" onClick={handleClick} ><AccountCircle sx={{mr:1}}/>{username}</Button>
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
                            {userstatus === true 
                            ? (<>
                                    <MenuItem><Register/></MenuItem>
                                    <MenuItem><Login/></MenuItem>
                                </>   
                            ) : (
                                <>
                                    <MenuItem><Register/></MenuItem>
                                    <MenuItem><Login/></MenuItem>
                                </>
                            ) }                          
                            
                            </Menu>     
                </Toolbar> 
            </AppBar>
        </Box>
        </ThemeProvider>
     );
}
 
export default Navbar;