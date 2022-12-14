import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"users",
    initialState:{
        username:"account",
        userisloggedin:false,
    },
    reducers:{
        setUserName: (state, action) => {
            state.username = action.payload
        },
        setLogin: (state) => {
            state.userisloggedin = true;
        },
        setLogout: (state) => {
            state.userisloggedin = false;
        }
    }
});

export const {setUserName,setLogin,setLogout} = userSlice.actions;
export default userSlice.reducer;