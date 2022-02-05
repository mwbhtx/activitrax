import { configureStore } from '@reduxjs/toolkit'

// default export is reducer object
import reduxReducer from './reduxTest'

export default configureStore({
    reducer: {
        redux: reduxReducer,
    },
})