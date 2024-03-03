import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import buttonClickTimeSliceReducer from './buttonClickTimeSlice'
import userReducer from './fetchUserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clickTime : buttonClickTimeSliceReducer,
    user : userReducer
  },
})