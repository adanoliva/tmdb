import { configureStore } from '@reduxjs/toolkit'
import listReducer   from '../reducers/listSlice'

export default configureStore({
  reducer: {
      list: listReducer,
  },
})