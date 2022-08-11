import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
    name:"etc",
    initialState:{
        openLoginModal:false,
        openRegModal:false
    },
    reducers:{
        openLogin: (state) => {
            state.openLoginModal = true
        },
        closeLogin: (state) => {
            state.openLoginModal = false
        },
        openReg: (state) => {
            state.openRegModal = true
        },
        closeReg: (state) => {
            state.openRegModal = false
        },
    }
});

export const {openLogin,closeLogin,openReg,closeReg} = miscSlice.actions;
export default miscSlice.reducer;