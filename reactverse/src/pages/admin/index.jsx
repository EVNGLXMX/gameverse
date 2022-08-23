import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Datagrid from './datagrids';

const AdminPage = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

    return ( 
        <>
            <Box sx={{mt:'5rem'}}>
                <Tabs
                    sx ={{backgroundColor:"primary.bg", borderRadius:"5px"}}
                    onChange={handleChange}
                    value={value}
                    selectionFollowsFocus
                >
                    <Tab label="USERS" />
                    <Tab label="GAMES" />
                    <Tab label="REVIEWS" />
                </Tabs>
            </Box>
            <Datagrid select={value}/>
        </>
     );
}
 
export default AdminPage;