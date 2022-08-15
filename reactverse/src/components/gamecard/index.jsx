import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide';

const Gamecard = ({game}) => {

    const slide=true;
    const url="/games/"+game.title
    return ( 
        <Slide direction="up" in={slide}>
            <Box sx={{m:2}}>
            <CardActionArea href={url}>
            <Card sx={{':hover': {scale:'1.05'}, width: 280, height:370, backgroundColor: '#cardColor.bg', 
            border:2, borderColor:'primary.main', textAlign:"center"}}>
                
                    <CardMedia
                    component="img"
                    height="200"
                    image={game.poster}
                    alt={game.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.title}
                        </Typography>
                        {game.platform}
                        <Typography variant="body1">
                        Genres: {game.genres}
                        </Typography>
                        
                    </CardContent>
                
                <CardActions>
                    {/* <Button size="large" variant="contained">Share</Button> */}
                    {/* <Button size="small" variant="contained" sx={{backgroundColor: '#424242'}}>More Like This</Button> */}
                </CardActions>   
            </Card>
            </CardActionArea>
            </Box>
        </Slide>
    );
}
 
export default Gamecard;