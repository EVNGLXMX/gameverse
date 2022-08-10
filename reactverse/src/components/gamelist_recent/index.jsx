import Gamecard from "../gamecard";

const GamelistRecent = (props) => {
    const games = props.games;
    
    return ( 
        games?.length > 0
        ? (
        <div className="cards">
            {games.map((game)=> (
            <Gamecard game={game} />
            ))}
        </div>
        ) : (
            <div className="empty">
                <h1>No Results</h1>
            </div>
        )
     );
}
 
export default GamelistRecent;