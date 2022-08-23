import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { newList } from '../../../redux/gameSlice';

const Search = () => {
    const axios = require('axios');
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
    }
    const quickSearch= async()=>{
        if (searchTerm.trim().length === 0){
            handlegg()
        } else{
        try{
            const response = await axios.get('games/s/'+searchTerm);
            const results = JSON.parse(response.data)
            if(results['error']){
                window.alert(results['error'])
                return;
            }
            dispatch(newList(results))
        }catch(err){
            window.alert(err);
        }}
    }
    const handlegg =()=>{
        getGames()
      }
    const getGames= async()=>{
        try{
            const response = await axios.get('games/');
            const results = JSON.parse(response.data)
        if(results['error']){
            window.alert(results['error'])
            return;
            }
            dispatch(newList(results))
        }
        catch(err){
            window.alert(err);
        }}

    useEffect(() => {
        quickSearch(); 
    }, [searchTerm]);

    useEffect(() => {
        handlegg(); 
    }, []);

    return ( 
            <>
            <TextField label="Search" variant="outlined"
            onChange={handleChange} sx={{marginRight:2}}/>
            </>
     );
}
 
export default Search;