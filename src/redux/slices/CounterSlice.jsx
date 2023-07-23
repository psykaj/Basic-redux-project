import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value : 0,
}

// We have to give name , initialState and reducers
export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1;
        },

        decrement : (state) => {
            state.value -= 1;
        }
    }
});

// Actions creators are generated for each case reducer functions
export const {increment , decrement} = CounterSlice.actions;
export default CounterSlice.reducer;