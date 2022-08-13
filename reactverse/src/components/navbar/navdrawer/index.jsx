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

const drawerWidth = 240;

const drawer = (
    <Box sx={{ textAlign: 'center', color:'primary.main', backgroundColor:'primary.bg' }}>
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

const NavDrawer = (props) => {
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
                {drawer}
        </Drawer>
    </Box>
    </>   
     );
}
 
export default NavDrawer;