import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { setLogout, setUserName } from "../../../redux/userSlice";
import { closeLogin } from "../../../redux/miscSlice";

const Logout = () => {

    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(setLogout())
        dispatch(setUserName("account"))
        dispatch(closeLogin())
        localStorage.removeItem('accesstoken')
        localStorage.removeItem('username')
        localStorage.removeItem('userstatus')
        window.location.reload(true)
    }
    return ( 
        <Button size="large" variant="text" onClick={handleClick}>Logout</Button>
     );
}
 
export default Logout;