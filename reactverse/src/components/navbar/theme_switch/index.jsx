import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { ColorModeContext } from '../../../App';

const ThemeSwitch = () => {
    // const [mode, setMode] = useState();
    const [checked, setChecked] = useState(true);
    const darkMode = useContext(ColorModeContext)
    const handleChange =()=>{
        darkMode()
        setChecked(!checked)
        checked ? (localStorage.setItem('theme','light')) 
        : (localStorage.setItem('theme','dark'))
    }
    useEffect(() => {
        const darkmode = localStorage.getItem('theme')
        if (darkmode==='light'){setChecked(false); darkMode()}
    }, []);

    return ( 
        <Switch onChange={handleChange} checked={checked} sx={{ m: 1 }} size="large" defaultChecked />
     );
  }
   
  export default ThemeSwitch;