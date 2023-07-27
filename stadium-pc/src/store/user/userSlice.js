import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: '',
    userInfo: {},
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
        setUserInfo: (state, payload) => {
            state.userInfo = payload
        },
        logout: (state) => {
            state.token = ''
        }
    }
})

export const { login, logout, setUserInfo, rememberMe } = userSlice.actions

export default userSlice.reducer