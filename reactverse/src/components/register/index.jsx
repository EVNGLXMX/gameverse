import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Register = () => {
    const axios = require('axios');
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const handleName =(e)=>{
        setUsername(e.target.value)
    }
    const handlePwd =(e)=>{
        setPwd(e.target.value)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const body = {"username": username, "password": pwd,}
        try{
            const result = await axios.post('auth/register', body);
            // display sucfail
        }catch(err){
            console.log(err);
        }
    }
    return (
        <Box sx={{textAlign:"center", m:'3rem'}}>
            <Typography
                variant="gameverse"
                noWrap
                component="div"
                sx={{ fontSize:'2.2rem',marginBottom:1,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            REGISTER
            </Typography>    
            <form onSubmit={handleSubmit}>
                <TextField sx={{marginBottom:1}} label="Username" name="username" required onChange={handleName}/><br/>
                <TextField sx={{marginBottom:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                <Button variant="contained" type="submit">Register</Button>
            </form>
        </Box>
    )
}
 
export default Register;