import { createSlice } from "@reduxjs/toolkit";
let initialState = {counter:0}

let counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase: (state, action) => {
            state.counter += action.payload
            // console.log(action)
            // console.log(action.payload)
          }
    }
})

export let counterReducer =counterSlice.reducer

export let {increase} =counterSlice.actions