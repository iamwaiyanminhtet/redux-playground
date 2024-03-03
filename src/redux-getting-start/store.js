import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import buttonClickTimeSliceReducer from './buttonClickTimeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clickTime : buttonClickTimeSliceReducer
  },
})