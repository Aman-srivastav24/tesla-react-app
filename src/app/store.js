import { configureStore } from '@reduxjs/toolkit'
import carReducer from "../features/Car/carSlice"

export default configureStore({
  reducer: {
    car : carReducer
  },
});

