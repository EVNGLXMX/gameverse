import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Usersgrid = () => {
    const axios = require('axios');
    const [rows, setRows] = useState([]);
    const get_users = async()=>{
        try{
            const response = await axios.get('users/admin');
            const results = JSON.parse(response.data)
            if(results['error']){
                window.alert(results['error'])
                return;
            }
            if (results.length > 0){
                const ary= []
                for(let users in results){
                    const id = parseInt(users)
                    ary.push(
                        {
                            "id":id+1,
                            "username":results[users].username,
                            "date_created":results[users].date_created,
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
        { field: 'username', headerName: 'GAME ID', minWidth: 150 },
        { field: 'date_created', headerName: 'TITLE', minWidth: 200 },
    ];

    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        get_users()
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
 
export default Usersgrid;