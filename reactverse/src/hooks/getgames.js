import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { newList } from '../redux/gameSlice';


export const useGames= async()=>{
    const axios = require('axios');
    const [gameResults, setGameResults] = useState([]);
    const dispatch = useDispatch();
        try{
            const response = await axios.get('games/');
            const results = JSON.parse(response.data)
        if(results['error']){
            window.alert(results['error'])
            return;
            }
            setGameResults(results)
            JSON.stringify(gameResults)
            dispatch(newList(gameResults))
        }
        catch(err){
            window.alert(err);
        }
}
