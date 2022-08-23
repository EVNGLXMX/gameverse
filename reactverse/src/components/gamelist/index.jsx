import { useSelector } from "react-redux";
import Gamecard from "../gamecard";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Gamelist = () => {
    const games = useSelector((state) => state.games.list);
    return ( 
            games?.length > 0
                ? (
                <Box sx={{mt:'5rem'}}>
                {/* <Typography variant="gameverse" sx={{fontSize:'1.8rem', m:'5rem'}}>
                    Search Results
                </Typography> */}
                <Box sx ={{justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {games.map((game)=> (
                    <Gamecard game={game} />
                    ))}
                </Box>
                </Box>
                ) : (
                    <Typography variant="gameverse" sx={{fontSize:'1.8rem', justifyContent: 'center', display: 'flex', m:'18rem'}}>
                        No Results Found
                    </Typography>
                )
    );
}
 
export default Gamelist;