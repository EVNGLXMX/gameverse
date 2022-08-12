import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog';
import Zoom from '@mui/material/Zoom'
import { openLogin, closeLogin, openReg } from "../../../redux/miscSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setLogin} from "../../../redux/userSlice";

const Login = () => {
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
        localStorage.clear();
        const body = {"username": username, "password": pwd}
        try{
            const result = await axios.post('auth/login', body);
            const response = JSON.parse(result.data)
            if(response['token']){
                console.log(response['token']);
                localStorage.setItem('accesstoken',response['token']);
                localStorage.setItem('username',username);
                localStorage.setItem('userstatus','loggedin');
                dispatch(setUserName(username));
                dispatch(setLogin());
                dispatch(closeLogin())
                window.location.reload(true)
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
    const open = useSelector ((state)=>state.openauthmodal.openLoginModal)

    const handleClickOpen = () => {
        dispatch(openLogin())
      };
    
      const handleClose = () => {
        dispatch(closeLogin())
      };

      const regBtn =()=>{
        dispatch(closeLogin())
        dispatch(openReg())
      };

    return(
        <>
        <Button size="large" variant="text" onClick={handleClickOpen}>Log In</Button>
        <Dialog open={open} onClose={handleClose}>
        <Zoom in={open}>
            <Box sx={{textAlign:"center", p:'3rem', border:2, borderColor:'primary.main', backgroundColor: '#01050a'}}>
                <Typography
                    variant="gameverse"
                    noWrap
                    component="div"
                    sx={{ fontSize:'2.2rem', marginBottom:3 ,flexGrow: 1, textAlign:'left' }}
                >
                LOG IN
                </Typography>    
                <form onSubmit={handleSubmit}>
                    <TextField sx={{mb:1}} label="Username" name="username" required onChange={handleName}/><br/>
                    <TextField sx={{mb:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                    <Button variant="contained" type="submit">Log In</Button><br/>
                    <Button variant="text" onClick={regBtn} sx={{mt:1}}>Need an account? Register.</Button>
                </form>
            </Box>
        </Zoom>
        </Dialog>
        </>
    )
}
 
export default Login;