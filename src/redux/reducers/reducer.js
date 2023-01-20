import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthorized: false,
    objId: null
}

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthorized = true;
            state.objId = action.payload;
            localStorage.setItem('isAuth', state.isAuthorized);
            localStorage.setItem('testObjId', action.payload);
        },
        logout: (state) => {
            state.isAuthorized = false;
            state.objId = null;
            localStorage.setItem('isAuth', state.isAuthorized)
            localStorage.removeItem('testObjId')
        },
        checkAuth: (state) => {
            const isAuth = localStorage.getItem('isAuth');
            const objId = localStorage.getItem('testObjId')
            state.isAuthorized = isAuth === 'true' && objId;
            state.objId = objId;
        }
    }
});

export const { login, logout, checkAuth } = authorizationSlice.actions;

export default authorizationSlice.reducer;
