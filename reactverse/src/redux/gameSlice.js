import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name:"games",
    initialState:{
        list:null,
        game:null
    },
    reducers:{
        newList: (state, action) => {
            state.list = action.payload;
        },
        newGame: (state, action) => {
            state.game = action.payload;
        },
    }
});

export const {newList, newGame} = gameSlice.actions;
export default gameSlice.reducer;