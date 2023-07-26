import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userInfo: 0,
    token: '',
    menus: []
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.value += 1
        },
        logout: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = userSlice.actions

export default userSlice.reducer