import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog';
import Zoom from '@mui/material/Zoom';
import { useSelector, useDispatch } from "react-redux";
import { openReg, closeReg, openLogin } from "../../../redux/miscSlice";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CloseIcon from '@mui/icons-material/Close';
import Stack from "@mui/material/Stack";
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
            console.log(JSON.parse(result.data))
            dispatch(closeReg())
            window.location.reload(true)
            return
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
            <Box sx={{ textAlign:"center", p:'1.7rem', pt:'1rem', pr:'2rem', border:2, borderColor:'primary.main', backgroundColor: 'primary.bg' }}>
            <Stack direction="row" justifyContent="end" sx={{ml:45}}>
                <Button size="large" onClick={handleClose} ><CloseIcon/></Button>
            </Stack>
                <Typography
                    variant="gameverse"
                    noWrap
                    component="div"
                    sx={{ fontSize:'2.2rem',mb:3,flexGrow: 1}}
                >
                REGISTER
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{mb:1}} label="Username" name="username" required onChange={handleName}/><br/>
                    <TextField sx={{mb:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                    <Button variant="contained" type="submit">Register<HowToRegIcon/></Button><br/>
                    <Button variant="text" onClick={logBtn} sx={{mt:1}}>Already registered? &nbsp; <u>Log In.</u></Button>
                </form>
            </Box>
        </Zoom>
        </Dialog>
        
        
        </>
    )
}
 
export default Register;