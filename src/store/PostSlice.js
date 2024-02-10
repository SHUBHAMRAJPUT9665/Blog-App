import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authSlice";

const initialState = {
    status : false,
    userData: null
}

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        post :(state,action) =>{
            post.status = null,
            post.action = action.payload.Post;
        }
    }
})


export const {post}  = PostSlice.actions;
export default PostSlice.reducer;