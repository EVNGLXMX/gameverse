import {configureStore} from "@reduxjs/toolkit";
import gamelistReducer from './gamelistSlice';

const store = configureStore({
    reducer: {
        gamelist: gamelistReducer
    }
});
export default store;