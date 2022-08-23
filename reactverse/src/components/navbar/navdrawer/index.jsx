import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import { useDispatch } from 'react-redux';
import { newList } from '../../../redux/gameSlice';

const drawerWidth = 240;

const drawer = (
    <Box sx={{ textAlign: 'center', color:'primary.main', backgroundColor:'primary.bg' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GAMEVERSE
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
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

const NavDrawer = (props) => {
    const axios = require('axios');
    const [gameResults, setGameResults] = useState([]);
    const dispatch = useDispatch();
    const handlegg =()=>{
      Games()
    }
    const Games= async()=>{
        try{
            const response = await axios.get('games/');
            const results = JSON.parse(response.data)
        if(results['error']){
            window.alert(results['error'])
            return;
            }
            setGameResults(results)
            JSON.stringify(gameResults)
            dispatch(newList(gameResults))
        }
        catch(err){
            window.alert(err);
        }}
    const { window } = props;
    const [drawOpen, setDrawOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawOpen(!drawOpen);
    }
    const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
    
    <>
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
                <Box sx={{ textAlign: 'center', color:'primary.main', backgroundColor:'primary.bg' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GAMEVERSE
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handlegg} sx={{ textAlign: 'center' }}>
              <ListItemText >All Games</ListItemText>
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
        </Drawer>
    </Box>
    </>   
     );
}
export default NavDrawer;