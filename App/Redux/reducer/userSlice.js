import {createSlice} from '@reduxjs/toolkit';
import LocalStorage from '../../class/LocalStorage';
import {LOCAL_STORAGE_KEYS} from '../../Configs/Constant';

const initialState = LocalStorage.getItem(LOCAL_STORAGE_KEYS.USER) || {
  username: '',
  avatarUrl: '',
  fullName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      LocalStorage.setItem(LOCAL_STORAGE_KEYS.USER, action.payload);
      state.username = action.payload.username;
    },
    updateAvatarUrl: (state, action) => {
      LocalStorage.updateValueOfKey(
        LOCAL_STORAGE_KEYS.USER,
        'avatar_url',
        action.payload.avatar_url,
      );
      state.avatar_url = action.payload.avatar_url;
    },
    resetUser: state => {
      state.username = '';
    },
  },
});

export const {updateUser, updateAvatarUrl, resetUser} = userSlice.actions;

export default userSlice.reducer;
