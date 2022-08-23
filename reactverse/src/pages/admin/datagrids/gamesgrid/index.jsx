import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Gamesgrid = () => {
    const axios = require('axios');
    const [rows, setRows] = useState([]);
    const get_games = async()=>{
        try{
            const response = await axios.get('games/admin');
            const results = JSON.parse(response.data)
            if(results['error']){
                window.alert(results['error'])
                return;
            }
            if (results.length > 0){
                const ary= []
                for(let game in results){
                    const id = parseInt(game)
                    ary.push(
                        {
                            "id":id+1,
                            "game_id":results[game].game_id,
                            "title":results[game].title,
                            "release_date":results[game].release_date,
                            "genres":results[game].genres,
                            "developer":results[game].developer,
                            "platform":results[game].platform,
                        })
                }
                setRows(ary)
                console.log(ary)
            }

        }catch(err){
            window.alert(err);
        }
    }

    const columns= [
        { field: 'id', headerName: 'No.', width: 80 },
        { field: 'game_id', headerName: 'GAME ID', minWidth: 150 },
        { field: 'title', headerName: 'TITLE', minWidth: 200 },
        { field: 'release_date', headerName: 'RELEASE DATE', minWidth: 150 },
        { field: 'genres', headerName: 'GENRES', minWidth: 400 },
        { field: 'developer', headerName: 'DEVELOPER', minWidth: 150 },
        { field: 'platform', headerName: 'PLATFORM', minWidth: 300 },
    ];

    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        get_games()
    }, []);
    
    return ( 
        <Box sx={{ mt:'2rem',height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} 
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}/>
        </Box>
     );
}
 
export default Gamesgrid;