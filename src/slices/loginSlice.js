import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';
const initState = {
    email: '',
};

const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log('login..');
            const data = action.payload;
            return { email: data.email };
        },
        logout: (state, action) => {
            console.log('logout..');
        },
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
