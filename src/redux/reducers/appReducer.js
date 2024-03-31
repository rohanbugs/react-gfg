import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice=createSlice({
    name:"counter",
    initialState:{
        counter:30
    },
    reducers:{
        increment:(state)=>{
            state.counter+=1;
        },
        decrement:(state)=>{
            state.counter-=1;
        }
    }
})
export default CounterSlice.reducer
export const {increment,decrement}=CounterSlice.actions