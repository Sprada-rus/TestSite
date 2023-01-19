import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthorized: false
}

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthorized = true;
            localStorage.setItem('isAuth', state.isAuthorized);
        },
        logout: (state) => {
            state.isAuthorized = false;
            localStorage.setItem('isAuth', state.isAuthorized)
        }
    }
});

export const { login, logout } = authorizationSlice.actions;

export default authorizationSlice.reducer;
