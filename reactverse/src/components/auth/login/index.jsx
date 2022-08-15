import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Zoom from '@mui/material/Zoom';
import { openLogin, closeLogin, openReg } from "../../../redux/miscSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setLogin} from "../../../redux/userSlice";
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const Login = () => {
    const axios = require('axios');
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMsg, setErrorMsg] = useState(null)
    
    const handleName =(e)=>{
        setUsername(e.target.value)
    }
    const handlePwd =(e)=>{
        setPwd(e.target.value)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        localStorage.clear();
        const body = {"username": username, "password": pwd};
        try{
            const response = await axios.post('auth/login', body);
            const result = JSON.parse(response.data);
            if(result['token']){
                setErrorMsg(null);
                console.log(result['token']);
                localStorage.setItem('accesstoken',result['token']);
                localStorage.setItem('username',username);
                localStorage.setItem('isAuthenticated','True');
                dispatch(setUserName(username));
                dispatch(setLogin());
                dispatch(closeLogin());
                window.location.reload(true);
                return;
            }
            else if(result['error']){
                setErrorMsg(result['error']);               
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
        <Button size="large" variant="text" onClick={handleClickOpen} sx={{color:"secondary.main"}}>Log In</Button>
        <Dialog open={open} onClose={handleClose}>
        <Zoom in={open}>
        <Box sx={{ textAlign:"center", p:'1.7rem', pt:'1rem', pr:'2rem', border:2, borderColor:'primary.main', backgroundColor: 'primary.bg' }}>
            <Stack direction="row" justifyContent="end" sx={{ml:45}}>
                <Button size="large" onClick={handleClose} ><CloseIcon/></Button>
            </Stack>
                <Typography
                    variant="gameverse"
                    noWrap
                    component="div"
                    sx={{ fontSize:'2.2rem',flexGrow: 1 }}
                >
                LOG IN
                </Typography>    
                <form onSubmit={handleSubmit}>
                    {errorMsg ? (
                        <Alert severity="warning" sx={{justifyContent:'center' ,backgroundColor:"primary.bg"}}>{errorMsg}</Alert>
                        ):(<br/>)}
                    <TextField sx={{mb:1}} label="Username" name="username" required onChange={handleName}/><br/>
                    <TextField sx={{mb:1}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePwd} required/><br/>
                    <Button variant="contained" type="submit">Log In <LoginIcon/></Button><br/>
                    <Button variant="text" onClick={regBtn} sx={{mt:1}}>Need an account? &nbsp; <u>Register.</u></Button>
                </form>
            </Box>
        </Zoom>
        </Dialog>
        </>
    )
}
 
export default Login;