import {configureStore} from "@reduxjs/toolkit";
import gameReducer from './gameSlice';
import miscReducer from './miscSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        games: gameReducer,
        openauthmodal: miscReducer,
    }
});
export default store;