import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api/fetchFromApi';



const authState = {
    isAuthenticated: false,
    token: '',
    userid: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {


            return {
                ...state,
                isAuthenticated: !state.isAuthenticated,
                ...action.payload
            };
        }
        )

    },


});

export { authSlice as default, loginUser };