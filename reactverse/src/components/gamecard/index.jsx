import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Gamecard = ({game}) => {

    return ( 
            <Card sx={{ width: 280, height:400, backgroundColor: '#0b131a', m:2, border:2, borderColor:'primary.main', textAlign:"center"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="200"
                    image="./posters/dota2.jpg"
                    alt={game.game_name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.game_name}
                        </Typography>
                        <Typography variant="body1">
                            {game.platform}
                        </Typography>
                        Genres: {game.genres}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="large" variant="contained">Share</Button> */}
                    <Button size="small" variant="contained" sx={{backgroundColor: '#424242'}}>More Like This</Button>
                </CardActions>   
            </Card>
    );
}
 
export default Gamecard;