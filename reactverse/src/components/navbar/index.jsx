import { useEffect, useState } from 'react';
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
import theme from '../../themes/ThemeContext';
import { useDispatch } from 'react-redux';
import { setUserName, setLogin } from '../../redux/userSlice';


import ThemeSwitch from './theme_switch';
import Search from './search';
import Register from '../auth/register';
import Login from '../auth/login';
import Logout from '../auth/logout';
import NavDrawer from './navdrawer';

const Navbar = (props) => {
    const userstatus = useSelector((state)=>state.users.userisloggedin);
    const username = useSelector((state)=>state.users.username);
    const user = localStorage.getItem('username');
    const loggedin = localStorage.getItem('userstatus');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    useEffect(() => {
        if (user){dispatch(setUserName(user))};
        if (loggedin){dispatch(setLogin())};
    }, []);

    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ color:'primary.main',backgroundColor:'primary.bg', borderRadius:1 }}>
                    <Toolbar>
                     <NavDrawer/>
                <Typography variant="gameverse" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Button sx={{fontSize:20}} a href="/">GAMEVERSE</Button>
                </Typography>
                <ThemeSwitch/>
                <Search/>
                <Button size="large">Browse Games</Button>
                <Button size="large" onClick={handleClick} ><AccountCircle sx={{mr:1}}/>{username}</Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
                        anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                        transformOrigin={{vertical: 'top',horizontal: 'left',}}
                    >
                        {userstatus === true 
                        ? (
                                <MenuItem><Logout/></MenuItem>  
                        ) : (
                            <div>
                                <MenuItem><Register/></MenuItem>
                                <MenuItem><Login/></MenuItem>
                            </div>
                        ) }                                                   
                    </Menu>     
                </Toolbar> 
            </AppBar>
        </Box>
        </ThemeProvider>
     );
}
 
export default Navbar;