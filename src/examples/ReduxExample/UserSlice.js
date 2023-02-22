import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUsers = createAsyncThunk('user/fetch', async () => {
//     console.log("Fetch User")
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//     return response.data;
// })

export const fetchSingleUser = createAsyncThunk('user/fetch', async () => {
    console.log("Fetch User")
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    return response.data;
})

const userSlice = createSlice({
    name: "user",
    initialState: { usersList: [],user:{}, status: 'idle', error: null },
    reducers: {
    },
    extraReducers: {
        // [fetchUsers.pending]: (state) => {
        //     state.status = 'loading'
        // },
        // [fetchUsers.fulfilled]: (state, action) => {
        //     state.status = 'success'
        //     state.usersList = action.payload
        // },
        // [fetchUsers.rejected]: (state,action) => {
        //     state.status = 'failed'
        //     state.error = action.error.message
        // },
        [fetchSingleUser.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchSingleUser.fulfilled]: (state, action) => {
            state.status = 'success'
            console.log(action.payload)
            state.user = action.payload
        },
        [fetchSingleUser.rejected]: (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchUsers.pending, (state)=>{
    //         state.status = 'loading'
    //     }).addCase(fetchUsers.fulfilled, (state,action)=>{
    //         state.status = 'success'
    //         state.usersList = action.payload
    //     }).addCase(fetchUsers.rejected, (state,action)=>{
    //         state.status = 'failed'
    //         state.error = action.error.message
    //     })
    // }
});

// export const selectUserStatus = (state) => state.user.status
// export const selectUserList = (state) => state.user.usersList
// export const selectUserError = (state) => state.user.error

export const selectUserStatus = (state) => state.user.status
export const selectUserList = (state) => state.user.user
export const selectUserError = (state) => state.user.error
export default userSlice.reducer;