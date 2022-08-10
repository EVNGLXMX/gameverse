import { createSlice } from "@reduxjs/toolkit";

export const gamelistSlice = createSlice({
    name:"games",
    initialState:{
        list:""
    },
    reducers:{
        newList: (state, action) => {
            state.list = action.payload
        }
    }
});

export const {newList} = gamelistSlice.actions;
export default gamelistSlice.reducer;