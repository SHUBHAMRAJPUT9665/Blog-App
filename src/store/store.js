import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import PostSlice from './PostSlice'

const store = configureStore({
    reducer: {
        auth : authSlice,
        post: PostSlice
        //TODO: add more slices here for posts
    }
});


export default store;