import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Gamecard = () => {
    return ( 
        <Card sx={{ width: 300, color:'#fafafa', backgroundColor: '#212121', m:2 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="150"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="contained">Share</Button>
                <Button size="small" variant="contained" sx={{backgroundColor: '#424242'}}>Learn More</Button>
            </CardActions>   
        </Card>
    );
}
 
export default Gamecard;