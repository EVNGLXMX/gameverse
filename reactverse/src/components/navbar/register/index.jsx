import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog';
import Zoom from '@mui/material/Zoom';
import { useSelector, useDispatch } from "react-redux";
import { openReg, closeReg, openLogin } from "../../../redux/miscSlice";

const Register = () => {
    const axios = require('axios');
    const dispatch = useDispatch();

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
            console.log(result.data)
        }catch(err){
            console.log(err);
        }
    }
    const handleClickOpen = () => {
        dispatch(openReg())
      };
    
    const handleClose = () => {
        dispatch(closeReg())
      };
    const open = useSelector((state) => state.openauthmodal.openRegModal);
    const logBtn =()=>{
        dispatch(closeReg())
        dispatch(openLogin())
      }
    return(
        <>
        <Button size="large" variant="text" onClick={handleClickOpen}>Register</Button>
        
        <Dialog open={open} onClose={handleClose} >
        <Zoom in={open}>
            <Box sx={{ textAlign:"center", p:'3rem', border:2, borderColor:'primary.main', backgroundColor: '#01050a' }}>
                <Typography
                    variant="gameverse"
                    noWrap
                    component="div"
                    sx={{ fontSize:'2.2rem',mb:3,flexGrow: 1, textAlign:'left'}}
                >
                REGISTER
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{mb:1}} label="Username" name="username" required onChange={handleName}/><br/>
                    <TextField sx={{mb:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                    <Button variant="contained" type="submit">Register</Button><br/>
                    <Button variant="text" onClick={logBtn} sx={{mt:1}}>Already registered? Log In.</Button>
                </form>
            </Box>
        </Zoom>
        </Dialog>
        
        
        </>
    )
}
 
export default Register;