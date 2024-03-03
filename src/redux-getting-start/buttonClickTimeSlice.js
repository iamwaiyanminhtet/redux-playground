import { createSlice } from '@reduxjs/toolkit'
import { increment, decrement, incrementByAmount } from './counterSlice'

const initialState = {
  time: 0,
}

export const buttonClickTimeSlice = createSlice({
  name: 'buttonClickTime',
  initialState,
  reducers: {
    incrementClick: (state) => {
      state.time += 1
    },
  },
  extraReducers : (builder) => {
    builder.addCase(increment, (state) => {
      state.time += 1;
    });
    builder.addCase(decrement, (state) => {
        state.time += 1;
      });
    builder.addCase(incrementByAmount, (state) => {
        state.time += 1;
      });
  }
})

export const { incrementClick } = buttonClickTimeSlice.actions

export default buttonClickTimeSlice.reducer