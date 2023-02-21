import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    console.log("Fetch User")
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
})

const userSlice = createSlice({
    name: "user",
    initialState: { usersList: [], status: 'idle', error: null },
    reducers: {
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state) => {
            state.status = 'success'
        },
        [fetchUsers.rejected]: (state) => {
            state.status = 'failed'
        },
    }
});

export const selectUserStatus = (state) => state.user.status
export default userSlice.reducer;