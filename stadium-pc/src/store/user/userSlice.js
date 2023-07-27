import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: '',
    userInfo: {},
    menus: [],
    roles: [],
    loginParam: {
        username: '',
        password: ''
    }
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, payload) => {
            state.token = payload
        },
        rememberMe: (state, payload) => {
            state.loginParam = payload
        },
        updateUserInfo: (state, payload) => {
            state.userInfo = payload
        },
        logout: (state) => {
            state.token = ''
        }
    }
})

export const { login, logout, updateUserInfo, rememberMe } = userSlice.actions

export default userSlice.reducer