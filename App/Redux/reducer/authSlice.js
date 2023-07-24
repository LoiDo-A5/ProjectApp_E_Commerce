import {createSlice} from '@reduxjs/toolkit';
import {LOCAL_STORAGE_KEYS} from '../../Configs/Constant';
import LocalStorage from '../../class/LocalStorage';

const initialState = LocalStorage.getItem(
  LOCAL_STORAGE_KEYS.AUTHENTICATION,
) || {
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
      const newState = {
        ...state,
        accessToken,
        refreshToken,
        isLogin: true,
      };
      LocalStorage.setItem(LOCAL_STORAGE_KEYS.AUTHENTICATION, newState);
      return newState;
    },
    setAccessToken: (state, action) => {
      const accessToken = action.payload;
      const newState = {
        ...state,
        accessToken,
      };
      LocalStorage.updateValueOfKey(
        LOCAL_STORAGE_KEYS.AUTHENTICATION,
        'accessToken',
        accessToken,
      );
      return newState;
    },
    setRefreshToken: (state, action) => {
      const refreshToken = action.payload;
      const newState = {
        ...state,
        refreshToken,
      };
      LocalStorage.updateValueOfKey(
        LOCAL_STORAGE_KEYS.AUTHENTICATION,
        'refreshToken',
        refreshToken,
      );
      return newState;
    },
    handleLogout: state => {
      LocalStorage.clear();
      return {
        ...state,
        accessToken: '',
        refreshToken: '',
        isLogin: false,
      };
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
