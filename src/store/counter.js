import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: state => {
            state.counter += 1;
        },
        decrement: state => {
            state.counter -= 1;
        },
        incrementBy: (state, action) => {
            state.counter += action.payload;
        },
        toggle: state => {
            state.showCounter = !state.showCounter;
        }
    }
});


// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             };
//         case 'INCRESE_BY':
//             return {
//                 counter: state.counter + action.value,
//                 showCounter: state.showCounter
//             };
//         case 'DECREMENT':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             };
//         case 'TOGGLE':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             };
//         default:
//             return state;
//     }
// };


export const { increment, decrement, incrementBy, toggle } = counterSlice.actions;
export default counterSlice.reducer;