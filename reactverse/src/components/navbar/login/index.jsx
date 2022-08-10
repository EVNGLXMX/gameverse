import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog';

const Login = () => {
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
        localStorage.clear();
        const body = {"username": username, "password": pwd}
        try{
            const result = await axios.post('auth/login', body);
            const response = JSON.parse(result.data)
            if(response['token']){
                console.log(response['token']);
                localStorage.setItem('accesstoken',response['token'])
                window.location.reload(false);
                return;
            }
            else if(response['error']){
                console.log(response['error']);
                return;
            }
        }catch(err){
            console.log(err);
        }
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <>
        <Button size="large" variant="text" onClick={handleClickOpen}>Log In</Button>
        <Dialog open={open} onClose={handleClose}>
            <Box sx={{textAlign:"center", p:'3rem', border:2, borderColor:'primary.main'}}>
                <Typography
                    variant="gameverse"
                    noWrap
                    component="div"
                    sx={{ fontSize:'2.2rem', marginBottom:3 ,flexGrow: 1 }}
                >
                LOG IN
                </Typography>    
                <form onSubmit={handleSubmit}>
                    <TextField sx={{marginBottom:1}} label="Username" name="username" required onChange={handleName}/><br/>
                    <TextField sx={{marginBottom:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                    <Button variant="contained" type="submit">Log In</Button>
                </form>
            </Box>
        </Dialog>
        </>
    )
}
 
export default Login;