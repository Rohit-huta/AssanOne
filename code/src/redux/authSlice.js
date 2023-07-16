import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    msg: "default message",
    user:  "",
    token: "",
    loading: false,
    error: ""
}


export const registerUser = createAsyncThunk('registerUser', async(body) => {
    const res = await fetch("", {
        method: "post",
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    return await res.json()

})


const authSlice = createSlice({
    name: "user",
    initialState,

    reducer : {

    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, {payload: {error, msg}}) => {
            state.loading = false
            if(error) {
                state.error = error
            }else state.msg = msg
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = true;
        },

    }
})


export default authSlice.reducer