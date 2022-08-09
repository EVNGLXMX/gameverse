import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const Search = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: 5,
        marginTop:1,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
    }));  
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                    width: '60ch',
                },
            },
        },
    }));

    const axios = require('axios');
    const [searchTerm, setSearchTerm] = useState("");
    const [gameResults, setGameResults] = useState([]);
    const handleChange=(e)=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
    }
    const quickSearch= async(term)=>{
        try{
            const results = await axios.get('games/');
            setGameResults(results.data)
            console.log(gameResults)
        }catch(err){
            console.log(err);
        }
    }
    // useEffect(() => {
    //    quickSearch(searchTerm) 
    // }, [searchTerm]);

    return ( 
        <Search sx={{marginRight:2}}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={handleChange}
            placeholder="Quick Search"/>
        </Search>
     );
}
 
export default Search;