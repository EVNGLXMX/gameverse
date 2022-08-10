import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { newList } from '../../../redux/gamelistSlice';

const Search = () => {
    const list = useSelector((state) => state.gamelist.list);
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
            const results = await axios.get('games/'+searchTerm);
            setGameResults(results.data)
            JSON.stringify(gameResults)
            dispatch(newList(gameResults))
            // console.log(list)
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