import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';

const Search = () => {
    
    const axios = require('axios');
    const rdc = useRef(0)
    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);
    const handleChange=(e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
    }
    const quickSearch= async()=>{
        try{
            const results = await axios.get('games/'+searchTerm);
            setGameResults(results.data)
            console.log(gameResults)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        if (rdc.current > 1)
        quickSearch(searchTerm)
    }, [searchTerm]);

    useEffect(() => {
        rdc.current = rdc.current +1
     });
 
    return ( 
            <>
            <TextField label="Search" variant="outlined" 
            onChange={handleChange} sx={{marginRight:2}}/>
            </>
     );
}
 
export default Search;