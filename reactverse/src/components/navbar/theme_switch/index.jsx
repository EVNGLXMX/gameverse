import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const ThemeSwitch = () => {

    const [mode, setMode] = useState();
    const [checked, setChecked] = useState();
    const handleChange =()=>{
        setMode(!mode)
    }

    return ( 
        <Switch onChange={handleChange} checked={checked} sx={{ m: 1}} size="large" defaultChecked />
     );
  }
   
  export default ThemeSwitch;