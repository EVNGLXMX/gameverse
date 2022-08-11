import {configureStore} from "@reduxjs/toolkit";
import gamelistReducer from './gamelistSlice';
import miscReducer from './miscSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        gamelist: gamelistReducer,
        openauthmodal: miscReducer,
    }
});
export default store;