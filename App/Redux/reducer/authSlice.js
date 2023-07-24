import {createSlice} from '@reduxjs/toolkit';
import {LOCAL_STORAGE_KEYS} from '../../Configs/Constant';
import LocalStorage from '../../class/LocalStorage';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isLogin: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAuthentication: (state, action) => {
      const {accessToken, refreshToken} = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLogin = true;
      LocalStorage.setItem(LOCAL_STORAGE_KEYS.AUTHENTICATION, {
        accessToken,
        refreshToken,
        isLogin: true,
      });
    },
    setAccessToken: (state, action) => {
      const accessToken = action.payload;
      state.accessToken = accessToken;
      LocalStorage.updateValueOfKey(
        LOCAL_STORAGE_KEYS.AUTHENTICATION,
        'accessToken',
        accessToken,
      );
    },
    setRefreshToken: (state, action) => {
      const refreshToken = action.payload;
      state.refreshToken = refreshToken;
      LocalStorage.updateValueOfKey(
        LOCAL_STORAGE_KEYS.AUTHENTICATION,
        'refreshToken',
        refreshToken,
      );
    },
    handleLogout: state => {
      LocalStorage.clear();
      state.accessToken = '';
      state.refreshToken = '';
      state.isLogin = false;
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  handleLogout,
  updateAuthentication,
} = authSlice.actions;

export default authSlice.reducer;
