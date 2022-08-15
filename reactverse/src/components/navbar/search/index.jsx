import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { newList } from '../../../redux/gameSlice';

const Search = () => {
    const axios = require('axios');
    const rdc = useRef(0)
    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
    }
    const quickSearch= async()=>{
        try{
            const response = await axios.get('games/s/'+searchTerm);
            const results = JSON.parse(response.data)
            if(results['error']){
                window.alert(results['error'])
                return;
            }
            setGameResults(results)
            JSON.stringify(gameResults)
            dispatch(newList(gameResults))
        }catch(err){
            window.alert(err);
        }
    }
    useEffect(() => {
        if (rdc.current > 1)
        quickSearch(searchTerm); 
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