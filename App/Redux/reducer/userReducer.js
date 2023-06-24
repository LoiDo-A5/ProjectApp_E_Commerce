import {createSlice} from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  user: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
  },
});

// Export the actions
export const {setUser, clearUser} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
