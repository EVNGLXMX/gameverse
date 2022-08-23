import Gamesgrid from "./gamesgrid";
import Usersgrid from "./usersgrid";

const Datagrid = (props) => {
    const select = props.select
    if (select===0){
        return ( <Usersgrid/> );
    }
    else if(select===1){
        return ( <Gamesgrid/> );
    }
    else if(select===2){
        
    }
    
}
 
export default Datagrid;