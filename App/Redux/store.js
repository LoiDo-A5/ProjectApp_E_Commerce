import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducer/authSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});

export default store;
