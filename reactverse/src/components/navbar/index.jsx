import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/Theme';
import { useDispatch } from 'react-redux';
import { setUserName, setLogin } from '../../redux/userSlice';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import ThemeSwitch from './theme_switch';
import Search from './search';
import Register from '../auth/register';
import Login from '../auth/login';
import Logout from '../auth/logout';

const drawerWidth = 240;

const Navbar = (props) => {
    const { window } = props;
    const userstatus = useSelector((state)=>state.users.userisloggedin);
    const username = useSelector((state)=>state.users.username);
    const user = localStorage.getItem('username');
    const loggedin = localStorage.getItem('userstatus');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const [drawOpen, setDrawOpen] = useState(false);
    
    const handleDrawerToggle = () => {
        setDrawOpen(!drawOpen);
    }
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

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color:'primary.main', backgroundColor:'primary.bg' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            GAMEVERSE
          </Typography>
          <Divider />
          <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/" sx={{ textAlign: 'center' }}>
                  <ListItemText >Recent Games</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/" sx={{ textAlign: 'center' }}>
                  <ListItemText >Top Rated</ListItemText>
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          {/* if logged in stuff */}
        </Box>
      );
            
      const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ color:'primary.main',backgroundColor:'primary.bg', borderRadius:1 }}>
                    <Toolbar>
                        <IconButton color="primary" onClick={handleDrawerToggle} sx={{ mr: 1}}>
                            <MenuIcon/>
                        </IconButton>
                        <Box component="nav">
                <Drawer
                container={container}
                variant="temporary"
                open={drawOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                    {drawer}
                </Drawer>
            </Box>
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