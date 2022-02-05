import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        value: 'hello, world'
    },
    reducers: {
        printState: (state) => {
            console.log(state.value);
        }
    }
})

export const {printState} = reduxSlice.actions
export default reduxSlice.reducer;