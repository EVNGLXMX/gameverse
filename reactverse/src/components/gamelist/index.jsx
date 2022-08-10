import { useSelector } from "react-redux";
import Gamecard from "../gamecard";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Gamelist = () => {
    const games = useSelector((state) => state.gamelist.list);
    return ( 
            games?.length > 0
                ? (
                <>
                <Typography variant="gameverse" sx={{fontSize:'1.8rem', m:10}}>
                    Search Results
                </Typography>
                <Box sx ={{justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {games.map((game)=> (
                    <Gamecard game={game} />
                    ))}
                </Box>
                </>
                ) : (
                    <Typography variant="gameverse" sx={{fontSize:'1.8rem', justifyContent: 'center', display: 'flex', m:'5rem'}}>
                        No Results Found
                    </Typography>
                )
        
    );
}
 
export default Gamelist;