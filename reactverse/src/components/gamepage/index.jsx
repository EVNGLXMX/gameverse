import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fade from '@mui/material/Fade';

const GamePage = () => {
    const axios = require("axios");
    const [game, setGame] = useState([]);
    const [fade, setFade] = useState(false);
    const {title} = useParams();

    useEffect(() => {
        setFade(true)
        getGame()
    },[]);

    const getGame = async () => {
        try{
            const response = await axios.get('games/'+title);
            const results = JSON.parse(response.data)
            if(results['error']){
                window.alert(results['error'])
                return;
            }
            JSON.stringify(results)
            setGame(results)
            console.log(game)
        }
        catch(err){window.alert(err)}
    }

    return ( 
        <Box sx={{backgroundColor:'primary.bg'}}>
            <Fade in={fade}{...(fade ? { timeout: 2000 } : {})}><Box sx={{ backgroundImage:'url('+game.poster+')', backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'100%',width:'100%', position: 'absolute', backgroundAttachment:'fixed'}} /></Fade>
            <Box sx={{ backgroundColor:'primary.bg', width:'100%', m:'auto', mt:'32rem', zIndex:2,position: 'absolute', textAlign:'center'}}>
                <Typography variant="h2">{game.title}</Typography>
                <Typography variant="h5">{game.genres}</Typography>
                <Typography variant="body1">{game.about}</Typography>        
            </Box>
            <Box>
                {/* <Rating/>
                <Reviews/> */}
            </Box>
        </Box>
     );
}
 
export default GamePage;