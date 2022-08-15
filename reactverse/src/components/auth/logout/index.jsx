import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { setLogout, setUserName } from "../../../redux/userSlice";
import { closeLogin } from "../../../redux/miscSlice";

const Logout = () => {
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(setLogout());
        dispatch(setUserName("account"));
        dispatch(closeLogin());
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('username');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('theme');
        window.reload();
    }
    return ( 
        <Button size="large" variant="text" onClick={handleClick} sx={{color:"secondary.main"}}>Logout</Button>
     );
}
 
export default Logout;